App.controller('AccountController', function($scope, ApiService, $http, ngDialog, $rootScope, SessionStorage,
    $state, MY_CONSTANT, editWorkFlow, $timeout) {
    $scope.accountData = SessionStorage.get('currentApp');
    $scope.triggerId = $scope.accountData.triggerData.trigger_id;
    $scope.triggerTypeInAccount = SessionStorage.get('triggerType');
    $scope.appAuthValue = SessionStorage.get('currentAppAuthReuired'); //authentication type
    if (SessionStorage.get('currentApp').editFlag) {
        $scope.editDisable = true;
    } else {
        $scope.editDisable = false;
    }
    $scope.editDisable = editWorkFlow.get();

    // View Triggers
    $scope.getTriggers = function() {
        $scope.immutableArrayData = [];
        var sendData = $.param({
            "app_id": $scope.accountData.app_id,
            "trigger_id": $scope.triggerId
        });
        ApiService.apiCall('/viewTrigger', 'POST', 1, sendData)
            .then(function(response) {
                response = response.data;
                var data = response.data[0];
                data.request_params = JSON.parse(data.request_params);
                $scope.requestedParamsList = data.request_params;
                SessionStorage.set('RequestParamList', $scope.requestedParamsList);
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    $scope.getTriggers();

    // function for edit workflow
    $scope.triggerauthid = SessionStorage.get('triggerAppAuthId');
    if ($scope.appAuthValue == 2) {
        $scope.showDomainName = true;
    }
    if ($scope.accountData && $scope.accountData.accountData) {
        if ($scope.accountData.accountData && $scope.accountData.accountData.app_auth_id) {
            $scope.accountSelected = $scope.accountData.accountData.app_auth_id.toString();
        }
        $scope.disableBtton = false;
        $scope.selectData = $scope.accountData.accountData;
    } else {
        $scope.disableBtton = true;
    }

    //Dialog box to open poup
    $scope.connectAnAccountPopup = function() {
        $scope.apikey = {};
        $scope.authMsg = '';
        if ($scope.accountData.authentication_type == 3) {
            var sendData = $.param({
                "app_id": $scope.accountData.app_id,
                "page_type": "trigger"
            });
            ApiService.apiCall('/oauth/validate', 'POST', 3, sendData).then(function(response) {
                window.location = response.data.complete_authorization_url;
            });
        } else if ($scope.accountData.authentication_type == 0) {
            if ($scope.selectData.request_type == 1) {
                $state.go('app.test');
            } else if ($scope.selectData.request_type == 0) {
                $state.go('app.setUpTrigger');
            }
        } else {
            ngDialog.open({
                template: 'select-role',
                className: 'ngdialog-theme-default commandialog',
                showClose: true,
                closeByDocument: false,
                closeByEscape: false,
                scope: $scope
            });
        }
        // $scope.insertAppAuth();
    };

    //Function to View App Auth
    $scope.getAccounts = function() {
        var sendData = $.param({
            "app_id": $scope.accountData.app_id
        });
        ApiService.apiCall('/viewAppAuth', 'POST', 3, sendData)
            .then(function(response) {
                $scope.accountList = response.data.data;
                for (var k = 0; k < $scope.accountList.length; k++) {
                    if ($scope.accountList[k].app_auth_id === $scope.triggerauthid) {
                        $scope.accountSelected = $scope.accountSelected ? $scope.accountSelected :
                            $scope.accountList[k].app_auth_id;
                        $scope.changeAccount($scope.accountList[k]);
                        break;
                    }
                }
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    $scope.getAccounts();

    //Function to Change Account
    $scope.changeAccount = function(data) {
        $scope.selectData = data;
        $scope.disableBtton = false;
    };

    //Function to select Account
    $scope.selectAccount = function() {
        var data = SessionStorage.get('currentApp');
        data.accountData = $scope.selectData;
        SessionStorage.set('currentApp', data);
        SessionStorage.set('currentAppAuthId', $scope.selectData.app_auth_id);
        if ($scope.triggerTypeInAccount == 0) {
            SessionStorage.set('curentStep', 3);
            $rootScope.$broadcast('changeStatus', 0);
            $state.go('app.test');
        } else if ($scope.requestedParamsList == null && $scope.triggerTypeInAccount == 1) {
            SessionStorage.set('curentStep', 7);
            $rootScope.$broadcast('changeStatus', 0);
            $state.go('app.testPolling');
        } else if ($scope.triggerTypeInAccount == 1) {
            SessionStorage.set('curentStep', 5);
            $rootScope.$broadcast('changeStatus', 0);
            $state.go('app.setupTrigger');
        }
    };
      
    //Function to Insert App Auth
    $scope.apikey = {};
    $scope.insertAppAuth = function(data) {
        if (data.domainvalue) {
            var sendData = $.param({
                "app_id": $scope.accountData.app_id,
                "api_key": data.apivalue,
                "domain_name": data.domainvalue
            });
        } else {
            sendData = $.param({
                "app_id": $scope.accountData.app_id,
                "api_key": data.apivalue
            });
        }
        ApiService.apiCall('/insertAppAuth', 'POST', 3, sendData)
            .then(function(response) {
                response = response.data;
                if (response.flag == 201) {
                    ngDialog.close();
                    $state.reload();
                }
                if (response.flag == 420) {
                    // $scope.apikey = {};
                    $scope.authMsg = "Invalid API Key";
                    $timeout(function() {
                        $scope.authMsg = false;
                    }, 2000);
                }
            })
            .catch(function(response) {
                response = response.data;
            });
    };
});