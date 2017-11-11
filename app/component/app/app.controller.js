/**
 * Refactor by mac-air.
 */
(function() {
    App.controller('AppController', function($scope, ApiService, $state, SessionStorage, $rootScope,
        $mdSidenav, editWorkFlow) {
        $scope.triggerType = SessionStorage.get('triggerType');
        $scope.requestParamList = SessionStorage.get('RequestParamList');
        $scope.editDisable = editWorkFlow.get();
        $scope.updateStatus = updateStatus;
        $scope.editShow = editWorkFlow.get();
        $scope.taskid = SessionStorage.get('taskId');
        if ($scope.taskid) {
            $scope.taskid = SessionStorage.get('taskId');
        } else {
            $scope.taskid = SessionStorage.get('taskIdWorkflow');
        }
        if (SessionStorage.get('obj') == null || SessionStorage.get('obj') == undefined) {
            $state.go('page.login');
        }
        $scope.logout = logout;
        $scope.toggleSideMenu = toggleSideMenu;

        function toggleSideMenu() {
            $mdSidenav('left').toggle();
        }
        //==========sidebar trigger============
        // $scope.toggleSideMenu = function () {
        //   $('.content-main').toggleClass('pad-350');
        //   $('.sidebar').toggleClass('width-350');
        // };
        $scope.trigger = [{
                'text': 'Choose App',
                'isDisabled': false,
                'link': 'app.triggerapp',
                'icon': './app/image/trigger.png',
                'isShow': true
            },
            {
                'text': 'Choose Trigger',
                'isDisabled': true,
                'link': 'app.trigger',
                'icon': './app/image/lock.png',
                'isShow': true
            },
            {
                'text': 'Choose Account',
                'isDisabled': true,
                'link': 'app.account',
                'icon': './app/image/lock.png',
                'isShow': true
            },
            {
                'text': 'Set Up Webhook',
                'isDisabled': true,
                'link': 'app.webhook',
                'icon': './app/image/lock.png',
                'isShow': true
            },
            {
                'text': 'Test This App',
                'isDisabled': true,
                'link': 'app.test',
                'icon': './app/image/lock.png',
                'isShow': true
            }
        ];
          //Edit mode webhook
        if ($scope.editDisable == true && $scope.triggerType == 0) {
            $scope.trigger = [{
                    'text': 'Choose App',
                    'isDisabled': false,
                    'link': 'app.triggerapp',
                    'icon': './app/image/trigger.png',
                    'isShow': true
                },
                {
                    'text': 'Choose Trigger',
                    'isDisabled': true,
                    'link': 'app.trigger',
                    'icon': './app/image/lock.png',
                    'isShow': true
                },
                {
                    'text': 'Choose Account',
                    'isDisabled': true,
                    'link': 'app.account',
                    'icon': './app/image/lock.png',
                    'isShow': true
                },
                {
                    'text': 'Set Up Webhook',
                    'isDisabled': true,
                    'link': 'app.webhook',
                    'icon': './app/image/lock.png',
                    'isShow': true
                },
                {
                    'text': 'Test This App',
                    'isDisabled': true,
                    'link': 'app.test',
                    'icon': './app/image/lock.png',
                    'isShow': true
                }
            ];
        } 
          //Edit mode polling
        else if ($scope.editDisable == true && $scope.triggerType == 1) {
            $scope.trigger = [{
                    'text': 'Choose App',
                    'isDisabled': false,
                    'link': 'app.triggerapp',
                    'icon': './app/image/trigger.png',
                    'isShow': true
                },
                {
                    'text': 'Choose Trigger',
                    'isDisabled': true,
                    'link': 'app.trigger',
                    'icon': './app/image/lock.png',
                    'isShow': true
                },
                {
                    'text': 'Choose Account',
                    'isDisabled': true,
                    'link': 'app.account',
                    'icon': './app/image/lock.png',
                    'isShow': true
                },
                {
                    'text': 'Set Up Trigger',
                    'isDisabled': true,
                    'link': 'app.setupTrigger',
                    'icon': './app/image/lock.png',
                    'isShow': true
                },
                {
                    'text': 'Test This App',
                    'isDisabled': true,
                    'link': 'app.sampleTrigger',
                    'icon': './app/image/lock.png',
                    'isShow': true
                }
            ];
        }
        //Enter in broadcast state
        $rootScope.$on('changeStatus', function(event, flag) {
            var data = SessionStorage.get('currentApp');
            if (data) {
            } else {
                data = SessionStorage.get('currentAppData');
            }
            $scope.progressLogo = data.image_url || 'app/image/icon.png';
            $scope.trigger[0].text = data.name;
            $scope.trigger[0].icon = data.image_url || 'app/image/icon.png';
            var curentStep = SessionStorage.get('curentStep');
            switch (curentStep) {
                case 1:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[1].text = 'Choose Trigger';
                    $scope.trigger[2].icon = 'app/image/lock.png';
                    $scope.trigger[2].text = 'Choose Account';
                    $scope.trigger[2].isDisabled = true;
                    $scope.trigger[2].isShow = true;
                    $scope.trigger[3].icon = 'app/image/lock.png';
                    $scope.trigger[3].isDisabled = true;
                    $scope.trigger[3].text = 'Set Up Webhook';
                    $scope.trigger[3].isShow = true;
                    $scope.trigger[4].isDisabled = true;
                    $scope.trigger[4].icon = 'app/image/lock.png';
                    $scope.trigger[4].isShow = true;
                    break;
                case 2:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = data.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].isDisabled = false;
                    break;
                case 3:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = data.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = data.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    if (data.triggerData.auth_required == 0) {
                        $scope.trigger[2].isShow = false;
                    }
                    break;
                case 4:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = data.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = data.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].text = 'View Webhook';
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    break;
                case 5:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = data.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = data.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].text = 'Setup Trigger';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].link = 'app.setupTrigger';
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    if (data.triggerData.auth_required === 0 && data.triggerData.request_type ==
                        1) {
                        $scope.trigger[2].isShow = false;
                    }
                    break;
                case 6:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = data.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = data.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].text = 'Setup Trigger';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].link = 'app.setupTrigger';
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    break;
                case 7:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = data.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = data.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].text = 'Setup Trigger';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].link = 'app.setupTrigger';
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[4].link = 'app.testPolling';
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    if ($scope.requestParamList == null && data.triggerData.request_type ==
                        1) {
                        $scope.trigger[3].isShow = false;
                    }
                    break;
            }
        });
        $scope.progressLogo = "app/image/temporary-logo.png";
        var menuData = SessionStorage.get('currentApp');
        var curentStep = SessionStorage.get('curentStep');
        if (menuData) {
            $scope.progressLogo = menuData.image_url || 'app/image/icon.png';
            $scope.trigger[0].text = menuData.name;
            $scope.trigger[0].icon = menuData.image_url || 'app/image/icon.png';
            switch (curentStep) {
                case 1:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].isDisabled = false;
                    break;
                case 2:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = menuData.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].isDisabled = false;
                    break;
                case 3:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = menuData.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = menuData.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    if (menuData.triggerData.auth_required == 0) {
                        $scope.trigger[2].isShow = false;
                    }
                    break;
                case 4:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = menuData.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = menuData.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].text = 'View Webhook';
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    break;
                case 5:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = menuData.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = menuData.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].text = 'Setup Trigger';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].link = 'app.setupTrigger';
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    if (menuData.triggerData.auth_required === 0 && menuData.triggerData.request_type ==
                        1) {
                        $scope.trigger[2].isShow = false;
                    }
                    break;
                case 6:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = menuData.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = menuData.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].text = 'Setup Trigger';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].link = 'app.setupTrigger';
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    break;
                case 7:
                    $scope.trigger[1].icon = 'app/image/trigger.png';
                    $scope.trigger[1].text = menuData.triggerData.name;
                    $scope.trigger[1].isDisabled = false;
                    $scope.trigger[2].icon = 'app/image/account.png';
                    $scope.trigger[2].text = menuData.name;
                    $scope.trigger[2].isDisabled = false;
                    $scope.trigger[3].text = 'Setup Trigger';
                    $scope.trigger[3].isDisabled = false;
                    $scope.trigger[3].link = 'app.setupTrigger';
                    $scope.trigger[3].icon = 'app/image/attachment.png';
                    $scope.trigger[4].link = 'app.testPolling';
                    $scope.trigger[4].icon = 'app/image/test.png';
                    $scope.trigger[4].isDisabled = false;
                    if ($scope.requestParamList == null && menuData.triggerData.request_type == 1) {
                        $scope.trigger[3].isShow = false;
                    }
                    break;
            }
        }
        $scope.changeState = function(state, index) {
            if (!state.isDisabled) {
                $state.go(state.link);
            }
        };
        $scope.goToAction = function() {
            $('#demo1').addClass('in');
            SessionStorage.set('currentActionStep', 0);
            $scope.action[0].isDisabled = false;
            $state.go('app.chooseApp');
        };
        //==========sidebar actions============//
        $scope.action = [{
                'text': 'Choose App',
                'isDisabled': true,
                'link': 'app.chooseApp',
                'icon': './app/image/trigger.png'
            },
            {
                'text': 'Choose Action',
                'isDisabled': true,
                'link': 'app.chooseAction',
                'icon': './app/image/lock.png'
            },
            {
                'text': 'Choose Account',
                'isDisabled': true,
                'link': 'app.chooseActionAccount',
                'icon': './app/image/lock.png'
            },
            {
                'text': 'Set Up Template',
                'isDisabled': true,
                'link': 'app.setupTemplate',
                'icon': './app/image/lock.png'
            },
            {
                'text': 'Test This App',
                'isDisabled': true,
                'link': 'app.testAction',
                'icon': './app/image/lock.png'
            }
        ];
        $scope.progressLogoAction = "app/image/temporary-logo.png";
        $scope.changeActionState = function(state, index) {
            if (!state.isDisabled) {
                $state.go(state.link);
            }
        };
        var menuDataAction = SessionStorage.get('currentActionApp');
        var curentStepAction = SessionStorage.get('currentActionStep');
        if (curentStepAction == 0) {
            $scope.action[0].isDisabled = false;
        }
        if (menuDataAction) {
            $scope.progressLogoAction = menuDataAction.image_url || 'app/image/icon.png';
            $scope.action[0].isDisabled = false;
            $scope.action[0].text = menuDataAction.name;
            $scope.action[0].icon = menuDataAction.image_url || 'app/image/icon.png';
            switch (curentStepAction) {
                case 1:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].isDisabled = false;
                    break;
                case 2:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].text = menuDataAction.actionData.name;
                    $scope.action[1].isDisabled = false;
                    $scope.action[2].icon = 'app/image/account.png';
                    $scope.action[2].isDisabled = false;
                    break;
                case 3:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].text = menuDataAction.actionData.name;
                    $scope.action[1].isDisabled = false;
                    $scope.action[2].icon = 'app/image/account.png';
                    $scope.action[2].text = menuDataAction.name;
                    $scope.action[2].isDisabled = false;
                    $scope.action[3].icon = 'app/image/edit.png';
                    $scope.action[3].isDisabled = false;
                    $scope.action[4].icon = 'app/image/lock.png';
                    $scope.action[4].isDisabled = false;
                    break;
                case 4:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].text = menuDataAction.actionData.name;
                    $scope.action[1].isDisabled = false;
                    $scope.action[2].icon = 'app/image/account.png';
                    $scope.action[2].text = menuDataAction.name;
                    $scope.action[2].isDisabled = false;
                    $scope.action[3].icon = 'app/image/edit.png';
                    $scope.action[3].isDisabled = false;
                    $scope.action[3].text = 'Edit Template';
                    $scope.action[4].icon = 'app/image/test.png';
                    $scope.action[4].isDisabled = false;
                    break;
            }
        }
        $rootScope.$on('changeActionStatus', function(event, flag) {
            var data = SessionStorage.get('currentActionApp');
            $scope.progressLogoAction = data.image_url || 'app/image/icon.png';
            $scope.action[0].isDisabled = false;
            $scope.action[0].text = data.name;
            $scope.action[0].icon = data.image_url || 'app/image/icon.png';
            var currentActionStep = SessionStorage.get('currentActionStep');
            switch (currentActionStep) {
                case 1:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].isDisabled = false;
                    $scope.action[2].icon = 'app/image/lock.png';
                    $scope.action[2].text = 'Choose Account';
                    $scope.action[2].isDisabled = true;
                    $scope.action[3].icon = 'app/image/lock.png';
                    $scope.action[3].isDisabled = true;
                    $scope.action[3].text = 'Set Up Template';
                    $scope.action[4].isDisabled = true;
                    $scope.action[4].icon = 'app/image/lock.png';
                    break;
                case 2:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].text = data.actionData.name;
                    $scope.action[1].isDisabled = false;
                    $scope.action[2].icon = 'app/image/account.png';
                    $scope.action[2].isDisabled = false;
                    break;
                case 3:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].text = data.actionData.name;
                    $scope.action[1].isDisabled = false;
                    $scope.action[2].icon = 'app/image/account.png';
                    $scope.action[2].text = data.name;
                    $scope.action[2].isDisabled = false;
                    $scope.action[3].icon = 'app/image/edit.png';
                    $scope.action[3].isDisabled = false;
                    $scope.action[4].icon = 'app/image/lock.png';
                    $scope.action[4].isDisabled = false;
                    break;
                case 4:
                    $scope.action[1].icon = 'app/image/trigger.png';
                    $scope.action[1].text = data.actionData.name;
                    $scope.action[1].isDisabled = false;
                    $scope.action[2].icon = 'app/image/account.png';
                    $scope.action[2].text = data.name;
                    $scope.action[2].isDisabled = false;
                    $scope.action[3].icon = 'app/image/edit.png';
                    $scope.action[3].isDisabled = false;
                    $scope.action[3].text = 'Edit Template';
                    $scope.action[4].icon = 'app/image/test.png';
                    $scope.action[4].isDisabled = false;
                    break;
            }
        });

        function logout() {
            SessionStorage.removeAll();
            $state.go('page.login');
        }
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
        // $scope.viewTask();
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
    });
})();