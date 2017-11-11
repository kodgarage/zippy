App.controller('TestPollingController', function($scope, ApiService, $stateParams, $http, SessionStorage,
    MY_CONSTANT, $window, $q, $timeout, editWorkFlow) {
    $scope.task_id = SessionStorage.get('pollingTaskId');
    $scope.showTaskData = function() {
        $scope.taskData = true;
        var sendData = $.param({
            "task_id": $scope.task_id
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