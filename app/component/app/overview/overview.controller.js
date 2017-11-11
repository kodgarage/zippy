App.controller('overviewController', function($scope, ApiService, $http, ngDialog, $rootScope, SessionStorage,
    $state, MY_CONSTANT, editWorkFlow) {
    $scope.updateStatus = updateStatus;
    $scope.field = {};
    $scope.pollingtaskid = SessionStorage.get('pollingTaskId');
    $scope.editDisable = editWorkFlow.get();

    //edit workflow 
    $scope.overviewData = SessionStorage.get('currentActionApp');
    $scope.accountDataInAction = SessionStorage.get('currentApp');
    $scope.taskid = SessionStorage.get('taskId');
    if ($scope.taskid) {
    // $scope.taskid = SessionStorage.get('taskId');
    } else if ($scope.pollingtaskid) {
        $scope.taskid = SessionStorage.get('pollingTaskId');
    } else {
        $scope.taskid = SessionStorage.get('taskIdWorkflow');
    }
    $scope.actionid = SessionStorage.get('chooseActionId');
    $scope.field.name = SessionStorage.get('taskName');

    // Function to view task
    $scope.viewTask = function() {
        var sendData = $.param({
            'task_id': $scope.taskid,
        });
        ApiService.apiCall('/viewTask', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.isEnabled = response.data[0].is_enabled;
            });
    };
    $scope.viewTask();

    // Function to Update Status
    function updateStatus() {
        if ($scope.isEnabled) {
            $scope.isEnabled = 1;
        } else {
            $scope.isEnabled = 0;
        }
        var sendData = $.param({
            'task_id': $scope.taskid,
            'is_enabled': $scope.isEnabled
        });
        ApiService.apiCall('/updateTask', 'POST', 3, sendData).then(function(response) {});
    }
      
    // Function to Update Task
    $scope.updateTask = function() {
        if ($scope.field.name) {
            var sendData = $.param({
                "task_id": $scope.taskid,
                "action_id": $scope.actionid,
                "name": $scope.field.name,
                "is_enabled": $scope.isEnabled
            });
        } else {
            sendData = $.param({
                "task_id": $scope.taskid,
                "action_id": $scope.actionid
            });
        }
        ApiService.apiCall('/updateTask', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $state.go('dashboard');
                SessionStorage.remove('ActionFieldId');
                SessionStorage.remove('ActionId');
                SessionStorage.remove('chooseActionId');
                SessionStorage.remove('curentStep');
                SessionStorage.remove('currentActionApp');
                SessionStorage.remove('currentActionAppAuthReuired');
                SessionStorage.remove('currentActionStep');
                SessionStorage.remove('currentApp');
                SessionStorage.remove('currentAppAuthReuired');
                SessionStorage.remove('messgaeAction');
                SessionStorage.remove('taskId');
                SessionStorage.remove('webhook_name');
                SessionStorage.remove('currentActionAppAuthId');
                SessionStorage.remove('currentAppAuthId');
                SessionStorage.remove('mainFieldData');
                SessionStorage.remove('currentActionAppId');
            })
            .catch(function(response) {
                response = response.data;
            });
    };
});