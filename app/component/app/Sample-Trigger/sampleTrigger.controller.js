App.controller('sampleTriggerController', function($scope, ApiService, $http, ngDialog, $rootScope,
    SessionStorage, $state, MY_CONSTANT, editWorkFlow) {
    $scope.field = {};
    $scope.arrayData = [];
    $scope.sampleDataa = SessionStorage.get('currentApp');
    $scope.triggerType = SessionStorage.get('triggerType');
    $scope.editDisable = editWorkFlow.get();
    $scope.currentActionAppAuthId = SessionStorage.get('currentActionAppAuthId');
    $scope.taskid = SessionStorage.get('pollingTaskId');
    if ($scope.taskid) {
        $scope.taskid = SessionStorage.get('pollingTaskId');
    } else {
        $scope.taskid = SessionStorage.get('taskIdWorkflow');
    }
    $scope.actionid = SessionStorage.get('chooseActionId');
    $scope.webhookname = SessionStorage.get('webhook_name');
    // View Action Field
    actionFieldData();

    function actionFieldData() {
        var sendData = $.param({
            "task_id": $scope.taskid
        });
        ApiService.apiCall('/viewTriggerField', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                viewTaskLog(response.data);
            })
            .catch(function(response) {
                response = response.data;
            });
    }
    //Polling
    // View Action Field
    $scope.testPolling = function() {
        var sendData = $.param({
            "task_id": $scope.taskid
        });
        ApiService.apiCall('/polling', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                if (response.flag == '202' || response.flag == '200') {
                    $state.go('app.testPolling');
                } else if (response.flag == '420') {
                    $scope.showError = true;
                    $scope.WorkFlowErr = response.message;
                }
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    //View Task Log
    function viewTaskLog(sampleData) {
        var sendData = $.param({
            //"task_id": 221
            "task_id": $scope.taskid
        });
        ApiService.apiCall('/viewTaskLog', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                try {
                    var triggerData = JSON.parse(response.data[0].trigger_response);
                    var triggerKey = Object.keys(triggerData);
                } catch (e) {
                }
                for (var i = 0; i < sampleData.length; i++) {
                    var model = sampleData[i].value;
                    var s = -1,
                        e = -1;
                    for (var j = 0; j < model.length; j++) {
                        if (model[j] == '{' && (j + 1 <= model.length - 1 && model[j + 1] == '{')) {
                            s = j;
                            j = j + 1;
                        } else if (model[j] == '}' && (j + 1 <= model.length - 1 && model[j + 1] ==
                                '}')) {
                            e = j;
                            j = j + 1;
                        }
                        if (s < e) {
                            var key = model.substring(s + 2, e);
                            var val = triggerData[key];
                            if (val != null) {
                                model = model.substring(0, s) + val + model.substring(e + 2);
                                j = s + 2;
                            } else {
                                model = model.substring(0, s) + model.substring(e + 2);
                                j = s + 2;
                            }
                            s = -1;
                            e = -1;
                        }
                    }
                    sampleData[i].value = model;
                }
                $scope.sampleData = sampleData;
            }).catch(function(response) {
                response = response.data;
            });
    }
    $scope.checkPar = function(data) {
        if (data.charAt(0) == '{' && data.charAt(1) == '{') {}
        for (var i = 0; i < name.length; i++) {}
    };
    // $scope.checkPar();
    //View Test Action
    //   $scope.testAction = function () {
    //     var sendData = $.param({
    //       "task_id": $scope.taskid,
    //       "action_id": $scope.actionid,
    //       "action_app_auth_id": $scope.currentActionAppAuthId,
    //     });
    //     ApiService.apiCall('/updateTask', 'POST', 3, sendData)
    //       .then(function (response) {
    //         response = response.data;
    //         var sendData = $.param({
    //           "task_id": $scope.taskid
    //         });
    //         ApiService.apiCall('/viewTaskLog', 'POST', 3, sendData)
    //           .then(function (response) {
    //             response = response.data;
    //             $scope.triggerResponseObj = JSON.parse(response.data[0].trigger_response);
    //             console.log(" test action trigger response obj", $scope.triggerResponseObj);
    //             // if (response.flag == 200) {
    //             var newData = $.param($scope.triggerResponseObj)
    //             ApiService.apiCall('/webhook/' + $scope.webhookname, 'POST', 3, newData).then(function (response) {
    //               $scope.taskData = true;
    //               response = response.data;
    //               console.log("response of webhook", response);
    //               // if (response.flag == 200) {
    //               // if (response.extra == 'Task completed') {
    //               if (response.extra == 'Task completed') {
    //                   SessionStorage.set('messgaeAction', response.action_response);
    //                   $state.go('app.testAction');
    //               }
    //               else if (response.extra == 'Workflow is not enabled.') {
    //                 $scope.showError=true;
    //                 SessionStorage.set('messgaeAction', response.action_response);
    //                 $scope.WorkFlowErr=response.extra;
    //               }
    //             }).catch(function (response) {
    //               response = response.data;
    //             })
    //             // }
    //           }).catch(function (response) {
    //           })
    //       })
    //       .catch(function (response) {
    //         response = response.data;
    //       })
    //   }
});