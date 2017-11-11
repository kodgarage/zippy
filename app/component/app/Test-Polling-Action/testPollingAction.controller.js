App.controller('TestPollingActionController', function($scope, ApiService, $stateParams, $http, SessionStorage,
    MY_CONSTANT, $window, $q, $timeout, editWorkFlow) {
    $scope.taskid = SessionStorage.get('taskId');
    $scope.pollingtaskid = SessionStorage.get('pollingTaskId');
    // if ($scope.taskid) {
    if ($scope.taskid) {
        // $scope.taskid = SessionStorage.get('taskId');
    } else if ($scope.pollingtaskid) {
        $scope.taskid = SessionStorage.get('pollingTaskId');
    } else {
        $scope.taskid = SessionStorage.get('taskIdWorkflow');
    }
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