App.controller('WebhookController', function($scope, ApiService, $http, SessionStorage, MY_CONSTANT, $state,
    $rootScope, editWorkFlow) {
    $scope.webData = SessionStorage.get('currentApp');
    $scope.currentAppAuthId = SessionStorage.get('currentAppAuthId');
    $scope.editDisable = editWorkFlow.get();
    //edit workflow
    $scope.webHookData = {
        webhook_name: ''
    };
    $scope.webHookData.webhook_name = SessionStorage.get('webhook_name');
    $scope.changeBtn = true;
    // $scope.url="http://bipio.jugnoo.in:8088/webhook/";
    $scope.url = MY_CONSTANT.webhookurl + '/webhook/';
    // Generate Web Hook
    $scope.generateWebHook = function() {
        if ($scope.currentAppAuthId) {
            var sendData = $.param({
                "trigger_id": $scope.webData.triggerData.trigger_id,
                "trigger_app_auth_id": $scope.currentAppAuthId
            });
        } else {
            sendData = $.param({
                "trigger_id": $scope.webData.triggerData.trigger_id,
                "trigger_app_auth_id": ""
            });
        }
        ApiService.apiCall('/generateWebhook', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                $scope.webhook_namee = $scope.url + response.webhook_name;
                $scope.webHookData = response;
                // SessionStorage.set('taskId',$scope.webHookData.task_id);
                SessionStorage.set('webhook_name', $scope.webHookData.webhook_name);
                // localStorage.setItem('taskId',$scope.webHookData.task_id);
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    if ($scope.webHookData.webhook_name) {
        $scope.webhook_namee = $scope.url + $scope.webHookData.webhook_name;
    } else {
        $scope.generateWebHook();
    }
    $scope.goToTest = function() {
        SessionStorage.set('curentStep', 4);
        var data = SessionStorage.get('currentApp');
        SessionStorage.set('currentApp', data);
        SessionStorage.set('curentStep', 4);
        $rootScope.$broadcast('changeStatus', 0);
        $state.go('app.test');
    };
});