App.controller('setUpTemplateController', function($scope, ApiService, $http, ngDialog, $rootScope, SessionStorage,
    $state,
    MY_CONSTANT, $q, $timeout, $log, editWorkFlow, cursorPosition) {
    $scope.editDisable = editWorkFlow.get();
    $scope.pollingtaskid = SessionStorage.get('pollingTaskId');
    $scope.field = {};
    $scope.templateData = SessionStorage.get('currentActionApp');
    $scope.addNotification = {};
    $scope.taskid = SessionStorage.get('taskId');
    if ($scope.taskid) {
        // $scope.taskid = SessionStorage.get('taskId');
    } else if ($scope.pollingtaskid) {
        $scope.taskid = SessionStorage.get('pollingTaskId');
    } else {
        $scope.taskid = SessionStorage.get('taskIdWorkflow');
    }
    if (SessionStorage.get('chooseActionId')) {
        $scope.actionId = SessionStorage.get('chooseActionId');
    } else {
        $scope.actionId = SessionStorage.get('currentActionAppId');
    }
    $scope.newtaskid = parseInt($scope.taskid);
    if (SessionStorage.get('ActionFieldId')) {
        $scope.checkAutoFill = SessionStorage.get('ActionFieldId');
    } else {
        $scope.checkAutoFill = SessionStorage.get('ActionFieldIdWorkflow');
    }
    //View Actions(To get dynamic fields)
    $scope.getActions = function() {
        $scope.immutableArrayData = [];
        var sendData = $.param({
            "app_id": $scope.templateData.app_id,
            "action_id": $scope.actionId
        });
        ApiService.apiCall('/viewAction', 'POST', 1, sendData)
            .then(function(response) {
                response = response.data;
                var data = response.data[0];
                data.request_params = JSON.parse(data.request_params);
                $scope.requestedParamsList = data.request_params;
                //  $scope.requestedParamsList=[{"dropdownType":"static","in": "body", "name": "order_id", "type": "string", "label": "Order ID", "required": false, "description": "Your can pass this key as your own transaction number which can be used to identify tasks in tookan"}, 
                //  {"dropdownType":"static","in": "body", "name": "job_description", "type": "textarea", "label": "Description", "required": false, "description": "The description of the task to be done"}, 
                //  {"dropdownType":"dynamic","in": "body", "name": "customer_username", "type": "string", "label": "Customer Name", "required": false, "description": "This is the name of the customer to whom the product should be delivered"},  
                //  {"dropdownType":"dynamic","in": "body", "name": "customer_address", "type": "string", "label": "Task Address", "required": true, "description": "This is the address of the customer to whom the product should be delivered"}, 
                // ]
                // var detailsArray = [];
                // $scope.list=[];
                // $scope.requestedParamsList.forEach(function (key,value) {
                //   console.log("key value",key.dropdownType);
                //   if(key.dropdownType=='static'){
                //        $scope.getTaskLog();
                //        console.log("statis it isss");
                //   }
                //   else if(key.dropdownType=='dynamic'){
                //     $scope.dynamicDataCount=0;
                //   }
                //     // var detailsObj = {};
                //     // detailsObj.dropdownType = column.dropdownType;
                //     // detailsArray.push(detailsObj);
                // })
                //   $scope.list = detailsArray;
                //  console.log("$scope.list",$scope.list); 
                // console.log("$scope.requestedParamsList",$scope.requestedParamsList.dropdownType);
                // if($scope.requestedParamsList.dropdownType=='static'){
                //   console.log("static type it is");
                //     $scope.getTaskLog();
                // }
                // else if($scope.requestedParamsList.dropdownType=='dynamic'){
                //     console.log("dynamic type it is");
                // }
                for (var i = 0; i < $scope.requestedParamsList.length; i++) {
                    $scope.requestedParamsList[i].model = '';
                    $scope.requestedParamsList[i].dropDownModel = '';
                    if ($scope.requestedParamsList[i].immutable == 0 || $scope.requestedParamsList[i].immutable ==
                        1) {
                        $scope.immutableArrayData.push($scope.requestedParamsList[i]);
                    }
                }
                if ($scope.checkAutoFill && $scope.checkAutoFill != "undefined") {
                    getPrefilled().then(function(preFillTask) {
                        if (preFillTask) {
                            angular.forEach(preFillTask, function(col) {
                                for (var i = 0; i < $scope.requestedParamsList.length; i++) {
                                    if ($scope.requestedParamsList[i].name == col.name) {
                                        $scope.requestedParamsList[i].model = col.value;
                                        var apiData = $scope.requestedParamsList[i].model
                                            .split(' ');
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
    $scope.getActions();
    //View Task Log Function(To get the dropdown data)
    $scope.getTaskLog = function() {
        var sendData = $.param({
            //  "task_id": 221,
            "task_id": $scope.taskid
            // "task_id": $scope.newtaskid
        });
        ApiService.apiCall('/viewTaskLog', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.triggerResponseObj = JSON.parse(response.data[0].trigger_response);
                if ($scope.triggerResponseObj == null) {
                    $scope.triggerCount = 0;
                } else {
                    $scope.triggerCount = Object.keys($scope.triggerResponseObj).length;
                }
                $timeout(function() {
                    $('.selectpicker').selectpicker('refresh');
                }, 500);
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    $scope.getTaskLog();
    $scope.goToTestAction = function() {
        $state.go('app.testAction');
    };
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
                            model = model.substring(0, s - 1) + ' ' + val + ' ' + model.substring(e + 1);
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
                    'task_id': $scope.newtaskid,
                    'name': $scope.requestedParamsList[i].name,
                    "value": model
                };
                action_field_array1.push(data1);
            }
        }
        for (var k = 0; k < $scope.immutableArrayData.length; k++) {
            var value = {
                'task_id': $scope.newtaskid,
                'name': $scope.immutableArrayData[k].name,
                'value': $scope.immutableArrayData[k].immutable
            };
            action_field_array1.push(value);
        }
        var sendData = $.param({
            "action_field_array": action_field_array1
        });
        ApiService.apiCall('/insertActionField', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.insertActionFieldd = parseInt(response.actionField_id);
                var checked = SessionStorage.get('ActionFieldId');
                var data = SessionStorage.get('currentActionApp');
                SessionStorage.set('currentActionApp', data);
                SessionStorage.set('currentActionStep', 4);
                $rootScope.$broadcast('changeActionStatus');
                SessionStorage.set('ActionFieldId', $scope.insertActionFieldd);
                $state.go('app.sample');
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    /*
       Insert Message Tag From dropdown to message template
       */
    $scope.insertMessageTag = function() {
        var selectedTag = $scope.addNotification.select1;
        //$scope.items.push(selectedTag);
        $rootScope.$broadcast('insertMessageTag', selectedTag);
        $scope.addNotification.smsmessage = $("#smsmessge").val();
        $scope.addNotification.select1 = '';
    };
    //View Task Log(To get the prefilled details)
    function getPrefilled() {
        var defer = $q.defer();
        var sendData = $.param({
            "task_id": $scope.taskid
        });
        ApiService.apiCall('/viewActionField', 'POST', 3, sendData)
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
    $scope.getCursorPos = function($event, index) {
        $scope.cursorPosVal = cursorPosition.getCursorPos($event);
        $scope.inputIndex = index;
    };
    $scope.addDropDowndata = function(index, key) {
        if ($scope.requestedParamsList[index].model == undefined) {
            $scope.requestedParamsList[index].model = "{{" + key + "}}";
        } else {
            if ($scope.inputIndex != index) {
                $scope.requestedParamsList[index].model = $scope.requestedParamsList[index].model + "{{" +
                    key + "}}";
            } else {
                var tmp = $scope.requestedParamsList[index].model;
                $scope.requestedParamsList[index].model = tmp.substring(0, $scope.cursorPosVal) + "{{" +
                    key + "}}" + tmp.substring($scope.cursorPosVal, tmp.length);
            }
        }
        var selectedTag = $scope.addNotification.select1;
        // $('.selectpicker').selectpicker('refresh');
    };
    $scope.onedit = function() {
        // $scope.states = ["Saab", "Volvo", "BMW", "Saab1", "Volvo1", "BMW1", "Saab2", "Volvo2", "BMW2"];
        $scope.states = {
            "team_id": 194,
            "user_id": 87
        };
    };
    $scope.setTemplate = function() {
        $state.go('app.chooseActionAccount');
    };
    $scope.fn = function(key, value) {
        if ($scope.requestedParamsList[index].model == undefined) {
            $scope.requestedParamsList[index].model = "{{" + key + "}}";
        } else {
            $scope.requestedParamsList[index].model = $scope.requestedParamsList[index].model + "{{" + key +
                "}}";
        }
        var selectedTag = $scope.addNotification.select1;
        $('.selectpicker').selectpicker('refresh');
    };
    //Prevent enter key function
    // $('#setupTemplate').on('keyup keypress', function (e) {
    //   var keyCode = e.keyCode || e.which;
    //   if (keyCode === 13) {
    //     e.preventDefault();
    //     return false;
    //   }
    // });
    $scope.myFunction = function() {
        document.getElementById("myDropdown").classList.toggle("show");
    };
    $scope.textareaAction = function(event) {};
});