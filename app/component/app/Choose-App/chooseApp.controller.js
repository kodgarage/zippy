App.controller('ChooseAppController', function($scope, ApiService, $http, $state, SessionStorage, $rootScope,
    editWorkFlow) {
    $scope.states = [];
    $scope.search = {};
    $scope.editDisable = editWorkFlow.get();
    var actionappid = SessionStorage.get('actionAppId');
    if (SessionStorage.get('currentActionApp') && SessionStorage.get('currentActionApp').app_id) {
        $scope.selectedAppBg = SessionStorage.get('currentActionApp').app_id;
    } else {
        $scope.selectedAppBg = false;
    }

    //Function to Get all apps
    $scope.getApps = function() {
        ApiService.apiCall('/viewCompleteApp', 'POST', 0)
            .then(function(response) {
                $scope.newValue = response.data.data;
                for (var k = 0; k < $scope.newValue.length; k++) {
                    if (actionappid == $scope.newValue[k].app_id) {
                        $scope.selectAppFun($scope.newValue[k]);
                        break;
                    }
                }
                // $scope.allApp = response.data.data;
                var tmp = [];
                angular.forEach(response.data.data, function(col) {
                    if (col.actionsCount != 0) {
                        tmp.push(col);
                    }
                });
                $scope.allApp = tmp;
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    $scope.getApps();
    
    //Function to select an app
    $scope.selectAppFun = function(data) {
        $scope.selectedAppAuthReuired = data.authentication_type;
        SessionStorage.set('currentActionAppAuthReuired', $scope.selectedAppAuthReuired);
        SessionStorage.set('currentActionApp', data);
        SessionStorage.set('currentActionStep', 1);
        $rootScope.$broadcast('changeActionStatus');
        $state.go('app.chooseAction');
    };
    $scope.onSelect = function(item, model, label) {
        $scope.selectAppFun(model);
    };
});