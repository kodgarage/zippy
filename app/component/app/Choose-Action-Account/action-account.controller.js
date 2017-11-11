App.controller('ActionAccountController', function($scope, ApiService, $http, ngDialog, $rootScope,
    SessionStorage, $state, MY_CONSTANT, editWorkFlow) {

    //edit workflow
    var authid = SessionStorage.get('currentActionAppAuthId');
    $scope.actionAccountData = SessionStorage.get('currentActionApp');
    $scope.appAuthValue = SessionStorage.get('currentActionAppAuthReuired');
    if ($scope.appAuthValue == 2) {
        $scope.showDomainName = true;
    }
    if ($scope.actionAccountData && $scope.actionAccountData.actionAccountData) {
        $scope.accountSelected = $scope.actionAccountData.actionAccountData.app_auth_id.toString();
        $scope.disableBtton = false;
        $scope.selectData = $scope.actionAccountData.actionAccountData;
    } else {
        $scope.disableBtton = true;
    }
    $scope.editDisable = editWorkFlow.get();

    // Function for opening the dialog box
    $scope.connectAnAccountPopup = function() {
        if ($scope.actionAccountData.authentication_type == 3) {
            var sendData = $.param({
                "app_id": $scope.actionAccountData.app_id,
                "page_type": "action"
            });
            ApiService.apiCall('/oauth/validate', 'POST', 3, sendData).then(function(response) {
                window.location = response.data.complete_authorization_url;
            });
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
    };
      
    // Function for View App Auth
    $scope.getAccounts = function() {
        var sendData = $.param({
            "app_id": $scope.actionAccountData.app_id
        });
        ApiService.apiCall('/viewAppAuth', 'POST', 3, sendData)
            .then(function(response) {
                $scope.accountList = response.data.data;
                for (var k = 0; k < $scope.accountList.length; k++) {
                    if ($scope.accountList[k].app_auth_id === authid) {
                        $scope.accountSelected = $scope.accountSelected ? $scope.accountSelected :
                            $scope.accountList[k].app_auth_id.toString();
                        $scope.changeAccount($scope.accountList[k]);
                        break;
                    }
                }
            })
            .catch(function(response) {
                response = response.data;
                // $scope.message = response.message;
            });
    };
    $scope.getAccounts();
    // Function for change Account
    $scope.changeAccount = function(data) {
        $scope.selectData = data;
        $scope.disableBtton = false;
    };
    // Function for select Account
    $scope.selectAccount = function() {
        var data = SessionStorage.get('currentActionApp');
        data.actionAccountData = $scope.selectData;
        SessionStorage.set('currentActionApp', data);
        SessionStorage.set('currentActionAppAuthId', $scope.selectData.app_auth_id);
        SessionStorage.set('currentActionStep', 3);
        $rootScope.$broadcast('changeActionStatus');
        $state.go('app.setupTemplate');
    };
    //Function for Insert App Auth
    $scope.apikey = {};
    $scope.insertAppAuth = function(data) {
        if (data.domainvalue) {
            var sendData = $.param({
                "app_id": $scope.actionAccountData.app_id,
                "api_key": data.apivalue,
                "domain_name": data.domainvalue
            });
        } else {
            sendData = $.param({
                "app_id": $scope.actionAccountData.app_id,
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
    $scope.checkVal = function(data) {
        if (data.apivalue) {}
    };
});