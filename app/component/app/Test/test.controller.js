App.controller('TestController', function($scope, ApiService, $stateParams, $http, SessionStorage,
    MY_CONSTANT, $window, $q, $timeout, editWorkFlow) {
    $scope.testDataa = SessionStorage.get('currentApp');
    $scope.taskid = SessionStorage.get('taskId');
    $scope.currentAppAuthId = SessionStorage.get('currentAppAuthId');
    $scope.editDisable = editWorkFlow.get();

    //edit workflow
    $scope.webHookData = {
        webhook_name: ''
    };
    $scope.webHookData.webhook_name = SessionStorage.get('webhook_name');
    if ($scope.webHookData.webhook_name) {
        if (SessionStorage.get('viewMessage')) {
            $scope.viewMessage = SessionStorage.get('viewMessage');
        } else {
            $scope.viewMessage = true;
        }
    }

    function retakeAction() {
        $scope.viewMessage = false;
        SessionStorage.set('viewMessage', $scope.viewMessage);
    }
    // $scope.newtaskid = parseInt($scope.taskid);
    $scope.changeBtn = true;
    $scope.showMakeBtn = false;
    $scope.webhookurl = MY_CONSTANT.webhookurl + '/webhook/';
    $scope.testSuccessPage = false;
    $scope.testStatusData = false;
    if (SessionStorage.get('currentApp').editFlag) {
        $scope.testSuccessPage = true;
        $scope.onlyEdit = true;
    }
    var obj = {
        "WebHook": $stateParams.webhook
    };
      
    // Generate Web Hook on test
    $scope.generateWebHookTest = function() {
        if ($scope.currentAppAuthId) {
            var sendData = $.param({
                "trigger_id": $scope.testDataa.triggerData.trigger_id,
                "trigger_app_auth_id": $scope.currentAppAuthId
            });
        } else {
            sendData = $.param({
                "trigger_id": $scope.testDataa.triggerData.trigger_id,
                "trigger_app_auth_id": ""
            });
        }
        ApiService.apiCall('/generateWebhook', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.testData = response;
                $scope.webhookUrlData = $scope.webhookurl + response.webhook_name;
                SessionStorage.set('taskId', $scope.testData.task_id);
                SessionStorage.set('webhook_name', $scope.testData.webhook_name);
            })
            .catch(function(response) {
                response = response.data;
                //$scope.message = response.message;
            });
    };
    if ($scope.webHookData.webhook_name) {
        $scope.testData = {
            task_id: SessionStorage.get('taskId'),
            webhook_name: $scope.webHookData.webhook_name
        };
        $scope.webhookUrlData = $scope.webhookurl + $scope.webHookData.webhook_name;
        SessionStorage.set('taskId', SessionStorage.get('taskId'));
        SessionStorage.set('webhook_name', $scope.webHookData.webhook_name);
    } else {
        $scope.generateWebHookTest();
    }
    // View Task
    $scope.viewTask = function() {
        $scope.showMakeBtn = true;
        $scope.loadingTest = true;
        // var interval = $interval($scope.viewTask, 10000);
        ApiService.apiCall('/viewTask', 'POST', 2)
            .then(function(response) {
                response = response.data;
                $scope.viewTaskData = response.data;
                //    $scope.stop =  setInterval($scope.viewTask, 10000);
                checkViewTaskFun(response.data);
            })
            .catch(function(response) {
                response = response.data;
                //$scope.message = response.message;
            });
    };

    function checkViewTaskFun(data) {
        var flag = false;
        angular.forEach(data, function(col) {
            if (col.webhook_name == $scope.testData.webhook_name && col.is_verified == 1) {
                flag = true;
                $scope.mytask = col;
                $scope.veriFiedTaskId = col.task_id;
            }
        });
        if (flag) {
            $scope.testSuccessPage = true;
        } else {
            $timeout(function() {
                $scope.viewTask();
            }, 3000);
        }
    }
    $scope.showTaskData = function() {
        $scope.taskData = true;
        var sendData = $.param({
            "task_id": $scope.veriFiedTaskId
        });
        // var sendData = $.param({ "task_id": 221 });
        ApiService.apiCall('/viewTaskLog', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.triggerResponseObj = JSON.parse(response.data[0].trigger_response);
                $scope.triggerReponseCount = Object.keys($scope.triggerResponseObj).length;
            })
            .catch(function(response) {
                response = response.data;
            });
    };
});