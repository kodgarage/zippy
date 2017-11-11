App.controller('historyController', function($scope, ApiService, $http, ngDialog, $rootScope, SessionStorage, $state,
    MY_CONSTANT, editWorkFlow) {
    //$scope.activate = activate;
    $scope.viewTaskHistory = viewTaskHistory;
    $scope.id = SessionStorage.get('TaskHistoryId');
    $scope.goToTrigger = function() {
        var obj = SessionStorage.get('obj');
        SessionStorage.removeAll();
        SessionStorage.set('obj', obj);
        $state.go('app.triggerapp');
    };

    function viewTaskHistory() {
        var sendData = $.param({
            "is_deleted": 0,
            "task_id": $scope.id
        });
        ApiService.apiCall('/viewTaskHistory', 'POST', 3, sendData).then(function(response) {
            response = response.data;
            $scope.taskHistoryData = response.data;
            $scope.taskHistory = response.data.taskHistory;
            $scope.taskData = response.data.taskHistory[0];
            $scope.showTaskDetails(response.data.taskHistory[0], 0);
        });
    }
    viewTaskHistory();
    $scope.IsVisibleTriggerRequest = false;
    $scope.IsVisibleTriggerResponse = false;
    $scope.IsVisibleActionRequest = false;
    $scope.IsVisibleActionResponse = false;
    $scope.selected = 0;
    $scope.showTaskDetails = function(data, index) {
        $scope.selected = index;
        $scope.taskData = data;
        $scope.IsVisibleTriggerRequest = false;
        $scope.IsVisibleTriggerResponse = false;
        $scope.IsVisibleActionRequest = false;
        $scope.IsVisibleActionResponse = false;
        if (data.triggerRequest) {
            $scope.triggerRequest = JSON.parse(data.triggerRequest);
            var key3 = Object.keys($scope.triggerRequest);
            $scope.tmp3 = [];
            for (var i = 0; i < key3.length; i++) {
                $scope.tmp3.push({
                    key: key3[i],
                    value: $scope.triggerRequest[key3[i]]
                });
            }
            if (!Object.keys($scope.triggerRequest).length) {
                $scope.triggerRequest = false;
            }
        } else {
            $scope.triggerRequest = false;
        }
        if (data.triggerResponse) {
            $scope.triggerResponse = JSON.parse(data.triggerResponse);
            var key4 = Object.keys($scope.triggerResponse);
            $scope.tmp4 = [];
            for (i = 0; i < key4.length; i++) {
                $scope.tmp4.push({
                    key: key4[i],
                    value: $scope.triggerResponse[key4[i]]
                });
            }
            if (!Object.keys($scope.triggerResponse).length) {
                $scope.triggerResponse = false;
            }
        } else {
            $scope.triggerResponse = false;
        }
        if (data.actionRequest) {
            $scope.actionRequest = JSON.parse(data.actionRequest);
            var key = Object.keys($scope.actionRequest);
            $scope.tmp = [];
            for (i = 0; i < key.length; i++) {
                $scope.tmp.push({
                    key: key[i],
                    value: $scope.actionRequest[key[i]]
                });
            }
            if (!Object.keys($scope.actionRequest).length) {
                $scope.actionRequest = false;
            }
        } else {
            $scope.actionRequest = false;
        }
        if (data.actionResponse) {
            $scope.actionResponse = JSON.parse(data.actionResponse);
            var key2 = Object.keys($scope.actionResponse);
            $scope.tmp2 = [];
            for (i = 0; i < key2.length; i++) {
                $scope.tmp2.push({
                    key: key2[i],
                    value: $scope.actionResponse[key2[i]]
                });
            }
            if (!Object.keys($scope.actionResponse).length) {
                $scope.actionResponse = false;
            }
        } else {
            $scope.actionResponse = false;
        }
    };
    // Show and Hide Trigger Request Data
    $scope.triggerToggle = function(flag) {
        if (flag == 0) {
            $scope.IsVisibleTriggerResponse = false;
            $scope.IsVisibleTriggerRequest = !$scope.IsVisibleTriggerRequest;
        } else if (flag == 1) {
            $scope.IsVisibleTriggerRequest = false;
            $scope.IsVisibleTriggerResponse =  !$scope.IsVisibleTriggerResponse;
        }
    };
    // Show and Hide Action Request Data
    $scope.actionToggle = function(flag) {
        if (flag == 0) {
            $scope.IsVisibleActionResponse = false;
            $scope.IsVisibleActionRequest = !$scope.IsVisibleActionRequest;
        } else if (flag == 1) {
            $scope.IsVisibleActionRequest = false;
            $scope.IsVisibleActionResponse =  !$scope.IsVisibleActionResponse;
        }
    };
    // Show and Hide Trigger Response Data
    // $scope.triggerResponseData=function(){
    //     $scope.IsVisibleTriggerResponse = $scope.IsVisibleTriggerResponse ? false : true;  
    // }
    //selected row hover
    $("tr").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
});