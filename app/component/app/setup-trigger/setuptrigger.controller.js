App.controller('setUpTriggerController', function($scope, ApiService, $http, ngDialog, $rootScope,
    SessionStorage, $state,
    MY_CONSTANT, $q, $timeout, $log, editWorkFlow, cursorPosition) {
    //  $scope.editDisable = editWorkFlow.get();
    $scope.triggerTypeInAccount = SessionStorage.get('triggerType');
    //   $scope.field = {};
    $scope.currentAppAuthId = SessionStorage.get('currentAppAuthId');
    $scope.triggerData = SessionStorage.get('currentApp');
    $scope.triggerId = $scope.triggerData.triggerData.trigger_id;
    $scope.editDisable = editWorkFlow.get();
    if ($scope.taskid) {
        $scope.taskid = SessionStorage.get('taskIdWorkflow');
    } else {
        $scope.taskid = SessionStorage.get('pollingTaskId');
    }
    //Generate Polling
    $scope.generatePolling = function() {
        if ($scope.currentAppAuthId) {
            var sendData = $.param({
                "trigger_id": $scope.triggerId,
                "trigger_app_auth_id": $scope.currentAppAuthId
            });
        } else {
            sendData = $.param({
                "trigger_id": $scope.triggerId,
                "trigger_app_auth_id": ""
            });
        }
        ApiService.apiCall('/generatePollingTask', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.task_id = parseInt(response.task_id);
                SessionStorage.set('pollingTaskId', $scope.task_id);
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    if ($scope.editDisable) {
    } else {
        $scope.generatePolling();
    }
    //View Triggers(To get dynamic fields)
    $scope.getTriggers = function() {
        $scope.immutableArrayData = [];
        var sendData = $.param({
            "app_id": $scope.triggerData.app_id,
            "trigger_id": $scope.triggerId
        });
        ApiService.apiCall('/viewTrigger', 'POST', 1, sendData)
            .then(function(response) {
                response = response.data;
                var data = response.data[0];
                data.request_params = JSON.parse(data.request_params);
                $scope.requestedParamsList = data.request_params;
                for (var i = 0; i < $scope.requestedParamsList.length; i++) {
                    $scope.requestedParamsList[i].model = '';
                    $scope.requestedParamsList[i].dropDownModel = '';
                    if ($scope.requestedParamsList[i].immutable == 0 || $scope.requestedParamsList[
                            i].immutable == 1) {
                        $scope.immutableArrayData.push($scope.requestedParamsList[i]);
                    }
                }
                if ($scope.checkAutoFill && $scope.checkAutoFill != "undefined") {
                    getPrefilled().then(function(preFillTask) {
                        if (preFillTask) {
                            angular.forEach(preFillTask, function(col) {
                                for (var i = 0; i < $scope.requestedParamsList
                                    .length; i++) {
                                    if ($scope.requestedParamsList[i].name ==
                                        col.name) {
                                        $scope.requestedParamsList[i].model =
                                            col.value;
                                        var apiData = $scope.requestedParamsList[
                                            i].model.split(' ');
                                    }
                                }
                            });
                        }
                    });
                }
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    $scope.getTriggers();
    //Go to test
    $scope.goToSampleData = function() {
        var action_field_array1 = [];
        var data1 = {};
        for (var i = 0; i < $scope.requestedParamsList.length; i++) {
            if ($scope.requestedParamsList[i].model != '') {
                var model = $scope.requestedParamsList[i].model;
                var s = 0,
                    e = 0;
                for (var j = 0; j < model.length; j++) {
                    if (model[j] == '[') {
                        s = j;
                    } else if (model[j] == ']') {
                        e = j;
                    }
                    if (s < e) {
                        var key = model.substring(s + 1, e);
                        var val = $scope.triggerResponseObj[key];
                        if (val != null) {
                            model = model.substring(0, s - 1) + ' ' + val + ' ' + model.substring(
                                e + 1);
                            j = s;
                        } else {
                            model = model.substring(0, s - 1) + ' ' + model.substring(e + 1);
                            j = s;
                        }
                        s = -1;
                        e = -1;
                    }
                }
                data1 = {
                    'task_id': $scope.task_id,
                    'name': $scope.requestedParamsList[i].name,
                    "value": model
                };
                action_field_array1.push(data1);
            }
        }
        for (var k = 0; k < $scope.immutableArrayData.length; k++) {
            var value = {
                'task_id': $scope.task_id,
                'name': $scope.immutableArrayData[k].name,
                'value': $scope.immutableArrayData[k].immutable
            };
            action_field_array1.push(value);
        }
        var sendData = $.param({
            "trigger_field_array": action_field_array1
        });
        ApiService.apiCall('/insertTriggerField', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.insertTriggerFieldd = parseInt(response.triggerField_id);
                // var checked = SessionStorage.get('ActionFieldId');
                var data = SessionStorage.get('currentApp');
                SessionStorage.set('currentApp', data);
                SessionStorage.set('curentStep', 6);
                $rootScope.$broadcast('changeStatus');
                SessionStorage.set('TriggerFieldId', $scope.insertTriggerFieldd);
                $state.go('app.sampleTrigger');
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    if (SessionStorage.get('TriggerFieldIdWorkflow')) {
        $scope.checkAutoFill = SessionStorage.get('TriggerFieldIdWorkflow');
    }
    //View Task Log(To get the prefilled details)
    function getPrefilled() {
        var defer = $q.defer();
        var sendData = $.param({
            // "task_id": $scope.task_id
            "task_id": $scope.taskid
        });
        ApiService.apiCall('/viewTriggerField', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.sampleData = response.data;
                defer.resolve(response.data);
            })
            .catch(function(response) {
                response = response.data;
                $scope.message = response.message;
                defer.reject(null);
            });
        return defer.promise;
    }
});