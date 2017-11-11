App.controller('testActionController', function($scope, ApiService, $http, ngDialog, $rootScope, SessionStorage, $state,
    MY_CONSTANT) {
    $scope.taskid = SessionStorage.get('taskId');
    $scope.actionid = SessionStorage.get('ActionId');
    $scope.webhookname = SessionStorage.get('webhook_name');
    $scope.templateData = SessionStorage.get('currentActionApp');
    if ($scope.taskid) {
        // $scope.taskid = SessionStorage.get('taskId');
    } else {
        $scope.taskid = SessionStorage.get('taskIdWorkflow');
    }
    try {
        $scope.messageAction = SessionStorage.get('messgaeAction');
        if (typeof($scope.messageAction) === 'string') {
            $scope.messageAction = JSON.parse($scope.messageAction);
        } else {
            $scope.messageAction = $scope.messageAction;
        }
    } catch (e) {
        console.log("exception", e);
    }
    $scope.getActions = function() {
        var sendData = $.param({
            "app_id": $scope.templateData.app_id
        });
        ApiService.apiCall('/viewAction', 'POST', 1, sendData)
            .then(function(response) {
                response = response.data;
                var data = response.data[0];
                data.request_params = JSON.parse(data.request_params);
                $scope.requestedParamsList = data.request_params;
            })
            .catch(function(response) {
                response = response.data;
                $scope.message = response.message;
            });
    };
    $scope.getActions();
    $scope.goToTestAction = function() {
        $state.go('app.testAction');
    };
    $scope.showTaskData = function() {
        $scope.taskData = true;
        var sendData = $.param({
            "task_id": $scope.taskid
        });
        // var sendData = $.param({ "task_id": 221 });
        ApiService.apiCall('/viewTaskLog', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                if (response.data[0] && response.data[0].action_response) {
                    $scope.triggerResponseObj = JSON.parse(response.data[0].action_response);
                    $scope.triggerReponseCount = Object.keys($scope.triggerResponseObj).length;
                } else {
                    $scope.triggerReponseCount = 0;
                }
            })
            .catch(function(response) {
                response = response.data;
            });
    };
});