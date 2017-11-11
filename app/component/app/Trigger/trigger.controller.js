App.controller('TriggerController', function($scope, ApiService, $http, SessionStorage, $rootScope, $state,
    editWorkFlow) {
    $scope.triggerData = SessionStorage.get('currentApp');
    $scope.appAuthValue = SessionStorage.get('currentAppAuthReuired');

    //edit workflow
    var triggerid = SessionStorage.get('getTriggerId');
    if ($scope.triggerData && $scope.triggerData.triggerData) {
        $scope.triggerSelected = $scope.triggerData.triggerData.name;
        $scope.savedTrigger = $scope.triggerData.triggerData.auth_required;
        $scope.disableBtton = false;
        $scope.selectData = $scope.triggerData.triggerData;
    } else {
        $scope.disableBtton = true;
    }
    $scope.editDisable = editWorkFlow.get();
    $scope.getTriggers = function() {
        var sendData = $.param({
            "app_id": $scope.triggerData.app_id
        });
        ApiService.apiCall('/viewTrigger', 'POST', 3, sendData)
            .then(function(response) {
                $scope.triggerList = response.data.data;
                for (var k = 0; k < $scope.triggerList.length; k++) {
                    if ($scope.triggerList[k].trigger_id == triggerid) {
                        $scope.triggerSelected = $scope.triggerSelected ? $scope.triggerSelected :
                            $scope.triggerList[k].name;
                        $scope.changeTrigger($scope.triggerList[k]);
                    }
                }
            })
            .catch(function(response) {
                response = response.data;
                $scope.message = response.message;
            });
    };
    $scope.getTriggers();
    $scope.changeTrigger = function(data) {
        $scope.selectData = data;
        $scope.disableBtton = false;
    };
    $scope.selectTrigger = function() {
        var data = SessionStorage.get('currentApp');
        data.triggerData = $scope.selectData;
        SessionStorage.set('currentApp', data);
        SessionStorage.set('triggerType', $scope.selectData.request_type);
        if ($scope.selectData.auth_required === 0 && $scope.selectData.request_type == 1) {
            SessionStorage.set('curentStep', 5);
            $rootScope.$broadcast('changeStatus', 0);
            $state.go('app.setupTrigger');
        } else if ($scope.selectData.auth_required === 0 && $scope.selectData.request_type == 0) {
            SessionStorage.set('curentStep', 3);
            $rootScope.$broadcast('changeStatus', 0);
            $state.go('app.test');
        } else if ($scope.selectData.auth_required === 1) {
            SessionStorage.set('curentStep', 2);
            $rootScope.$broadcast('changeStatus', 0);
            $state.go('app.account');
        }
    };
});