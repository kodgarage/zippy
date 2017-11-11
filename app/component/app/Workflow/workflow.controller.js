(function() {
    App.controller('WorkflowController', function($scope, SessionStorage, $state, ApiService, regex, MY_CONSTANT,
        $http, $rootScope, $mdDialog, $mdToast) {
        if (SessionStorage.get('obj') == null || SessionStorage.get('obj') == undefined) {
            $state.go('page.login');
        }
        $scope.activate = activate;
        $scope.logout = logout;
        $scope.goDashboard = goDashboard;
        $scope.updateStatus = updateStatus;
        $scope.editWorkflow = editWorkflow;
        $scope.getProfile = getProfile;
        $scope.showGlobalProfile;
        $scope.showProfile = showProfile;
        $scope.actionFieldFn = actionFieldFn;
        $scope.triggerFieldFn = triggerFieldFn;
        $scope.goToHistory = goToHistory;
        var last = {
            bottom: true,
            top: false,
            left: false,
            right: true
        };
        $scope.toastPosition = angular.extend({}, last);

        function sanitizePosition() {
            var current = $scope.toastPosition;
            if (current.bottom && last.top) current.top = false;
            if (current.top && last.bottom) current.bottom = false;
            if (current.right && last.left) current.left = false;
            if (current.left && last.right) current.right = false;
            last = angular.extend({}, current);
        }
        $scope.getToastPosition = function() {
            sanitizePosition();
            return Object.keys($scope.toastPosition)
                .filter(function(pos) {
                    return $scope.toastPosition[pos];
                })
                .join(' ');
        };
        // Function to view task history
        function goToHistory(id) {
            SessionStorage.set('TaskHistoryId', id);
            $state.go('history');
        }
        // Function to delete the bumble
        $scope.showConfirm = function(ev, itemdata) {
            var confirm = $mdDialog.confirm()
                .title('Do you really want to delete this bumbl?')
                .targetEvent(ev)
                .cancel('No')
                .ok('Yes');
            $mdDialog.show(confirm).then(function() {
                var sendData = $.param({
                    "task_id": itemdata.taskId,
                    "is_deleted": 1
                });
                ApiService.apiCall('/updateTask', 'POST', 3, sendData).then(function(response) {
                    var result = response.data;
                    if (result.flag == "200") {
                        var pinTo = $scope.getToastPosition();
                        $mdToast.show(
                            $mdToast.simple()
                            .textContent('Bumbl deleted successfully')
                            .position(pinTo)
                            .hideDelay(3000)
                        );
                        $state.reload();
                    }
                });
            }, function() {
                console.log("no");
            });
        };
        // Action Field function
        function actionFieldFn(id) {
            var sendData = $.param({
                "task_id": id
            });
            ApiService.apiCall('/viewActionField', 'POST', 3, sendData)
                .then(function(response) {
                    response = response.data;
                    $scope.actionfieldid = response.data[0].action_field_id;
                    SessionStorage.set('ActionFieldIdWorkflow', $scope.actionfieldid);
                    $state.go('app.setupTemplate');
                })
                .catch(function(response) {
                    response = response.data;
                });
        }
        // Trigger Field function
        function triggerFieldFn(id) {
            var sendData = $.param({
                "task_id": id
            });
            ApiService.apiCall('/viewTriggerField', 'POST', 3, sendData)
                .then(function(response) {
                    response = response.data;
                    $scope.triggerfieldid = response.data[0].trigger_field_id;
                    SessionStorage.set('TriggerFieldIdWorkflow', $scope.triggerfieldid);
                    $state.go('app.setupTemplate');
                })
                .catch(function(response) {
                    response = response.data;
                });
        }

        function showProfile() {
            $scope.showGlobalProfile = true;
        }

        function getProfile() {
            $state.go('profile');
        }
        if (SessionStorage.get('obj') == null || SessionStorage.get('obj') == undefined) {
            $state.go('page.login');
        }

        function activate() {
            var sendData = $.param({
                "is_deleted": 0
            });
            ApiService.apiCall('/viewCompleteTask', 'POST', 3, sendData).then(function(response) {
                $scope.appDataList = response.data;
            });
        }
        activate();

        function logout() {
            SessionStorage.removeAll();
            $state.go('page.login');
        }

        function goDashboard() {
            var obj = SessionStorage.get('obj');
            SessionStorage.removeAll();
            SessionStorage.set('obj', obj);
            $state.go('app.triggerapp');
        }
        $scope.goToTrigger = function() {
            var obj = SessionStorage.get('obj');
            SessionStorage.removeAll();
            SessionStorage.set('obj', obj);
            $state.go('app.triggerapp');
        };

        function updateStatus(value) {
            if (value && value.isEnabled) {
                value.isEnabled = 1;
            } else {
                value.isEnabled = 0;
            }
            var sendData = $.param({
                'task_id': value.taskId,
                'is_enabled': value.isEnabled
            });
            ApiService.apiCall('/updateTask', 'POST', 3, sendData).then(function(response) {
            });
        }
        //Edit Workflow
        function editWorkflow(itemData) {
            SessionStorage.remove('mainFieldData');
            SessionStorage.remove('currentApp');
            var obj = SessionStorage.get('obj');
            SessionStorage.removeAll();
            SessionStorage.set('obj', obj);
            SessionStorage.set('taskIdWorkflow', itemData.taskId);
            SessionStorage.set('taskName', itemData.taskName);
            SessionStorage.set('triggerType', itemData.triggerRequestType);
            var triggerData = {
                "auth_required": itemData.triggerAuthRequired,
                "details": itemData.triggerDetails,
                "name": itemData.triggerName,
                "trigger_id": itemData.triggerId
            };
            var accountData = {
                "app_auth_id": itemData.triggerAppAuthId
            };
            var currentApp = {
                "editFlag": true,
                "app_id": itemData.triggerAppId,
                "image_url": itemData.triggerAppImageUrl,
                "name": itemData.triggerAppName,
                "triggerData": triggerData,
                "accountData": accountData
            };
            var triggerType =
                SessionStorage.set('currentAppAuthId', itemData.triggerAppAuthId);
            SessionStorage.set('currentApp', currentApp);
            SessionStorage.set('curentStep', 3);
            $rootScope.$broadcast('changeStatus');
            var actionData = {
                "auth_required": itemData.actionAppAuthRequired,
                "details": itemData.actionDetails,
                "name": itemData.actionName,
                "action_id": itemData.actionId
            };
            var actionAccountData = {
                "app_auth_id": itemData.actionAppAuthId
            };
            var currentActionApp = {
                "editFlag": true,
                "app_id": itemData.actionAppId,
                "image_url": itemData.actionAppImageUrl,
                "name": itemData.actionAppName,
                "actionData": actionData,
                "actionAccountData": actionAccountData
            };
            SessionStorage.set('currentActionAppId', actionData.action_id);
            SessionStorage.set('currentActionApp', currentActionApp);
            SessionStorage.set('chooseActionId', itemData.actionId);
            SessionStorage.set('currentActionAppAuthId', itemData.actionAppAuthId);
            SessionStorage.set('webhook_name', itemData.webhookName);
            SessionStorage.set('currentActionStep', 3);
            $rootScope.$broadcast('changeActionStatus');
            if (itemData.isEnabled == 0) {
                var pinTo = $scope.getToastPosition();
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Please enable your bumbl to continue editing')
                    .position(pinTo)
                    .hideDelay(3000)
                );
            } else if (itemData.isEnabled == 1) {
                actionFieldFn(itemData.taskId);
                triggerFieldFn(itemData.taskId);
            }
        }
    });
})();