App.controller('DashboardController', function($scope, ApiService, $http, $state, SessionStorage, $rootScope,
    editWorkFlow) {
      
    //Checking loggedin user access_token
    if (SessionStorage.get('obj') == null || SessionStorage.get('obj') == undefined) {
        $state.go('page.login');
    }
    $scope.states = [];
    $scope.search = {};
    $scope.getSpecificAppData = getSpecificAppData;
    if (SessionStorage.get('currentApp') && SessionStorage.get('currentApp').app_id) {
        $scope.selectedAppBg = SessionStorage.get('currentApp').app_id;
    } else {
        $scope.selectedAppBg = false;
    }
    $scope.editDisable = editWorkFlow.get();

    //edit workflow use
    var appid = SessionStorage.get('appIdForTrigger');
    $scope.appid = appid;

    function getSpecificAppData() {
        var sendData = $.param({
            "app_id": appid
        });
        ApiService.apiCall('/viewApplication', 'POST', 3, sendData)
            .then(function(response) {
                var data = response.data.data;
                $scope.currentAppAuthReuired = data[0].authentication_type;
                SessionStorage.set('currentAppAuthReuired', $scope.currentAppAuthReuired);
                SessionStorage.set('currentApp', data[0]);
                SessionStorage.set('curentStep', 1);
                $rootScope.$broadcast('changeStatus', 0);
            })
            .catch(function(response) {
                response = response.data;
            });
    }
    if (appid) {
        getSpecificAppData();
    }
    //end of edit workflow

    //Function to Get all apps
    $scope.getApps = function() {
        ApiService.apiCall('/viewCompleteApp', 'POST', 0)
            .then(function(response) {
                var tmp = [];
                angular.forEach(response.data.data, function(col) {
                    if (col.triggersCount != 0) {
                        tmp.push(col);
                    }
                });
                $scope.allApp = tmp;
            })
            .catch(function(response) {
                response = response.data;
                $scope.message = response.message;
            });
    };
    $scope.getApps();

    //Function to select App
    $scope.selectAppFun = function(data) {
        SessionStorage.remove('currentApp');
        SessionStorage.remove('currentAppAuthId');
        SessionStorage.remove('taskId');
        SessionStorage.remove('ActionId');
        SessionStorage.remove('appIdForTrigger');
        SessionStorage.remove('getTriggerId');
        SessionStorage.remove('triggerAppAuthId');
        SessionStorage.remove('setActionAppId');
        SessionStorage.remove('webhookName');
        SessionStorage.remove('webhook_name');
        SessionStorage.remove('actionAppId');
        SessionStorage.remove('currentActionAppAuthId');
        SessionStorage.remove('currentAppAuthReuired');
        SessionStorage.remove('currentApp');
        SessionStorage.remove('currentActionStep');
        SessionStorage.remove('currentActionAppAuthReuired');
        SessionStorage.remove('currentActionApp');
        SessionStorage.remove('curentStep');
        SessionStorage.remove('chooseActionId');
        SessionStorage.remove('mainFieldData');
        $scope.currentAppAuthReuired = data.authentication_type;
        SessionStorage.set('currentAppAuthReuired', $scope.currentAppAuthReuired);
        SessionStorage.set('currentApp', data);
        SessionStorage.set('curentStep', 1);
        $rootScope.$broadcast('changeStatus', 0);
        $scope.selectedAppId = SessionStorage.get('currentApp').app_id;
        $state.go('app.trigger');
    };
    $scope.onSelect = function(item, model, label) {
        $scope.selectAppFun(model);
    };
});