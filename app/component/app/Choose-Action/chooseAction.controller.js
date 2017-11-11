App.controller('ChooseActionController', function($scope, ApiService, $http, SessionStorage, $rootScope, $state,
    editWorkFlow) {

    //getting for edit workflow
    var actionapp_id = SessionStorage.get('setActionAppId');
    var actionid = SessionStorage.get('ActionId');
    $scope.actionData = SessionStorage.get('currentActionApp');
    if ($scope.actionData && $scope.actionData.actionData) {
        $scope.actionSelected = $scope.actionData.actionData.name;
        $scope.selectData = $scope.actionData.actionData;
        $scope.disableBtton = false;
    } else {
        $scope.disableBtton = true;
    }
    $scope.editDisable = editWorkFlow.get();

    //Function to view actions
    $scope.getActions = function() {
        if (actionapp_id) {
            $scope.actionData.app_id = actionapp_id;
        }
        var sendData = $.param({
            "app_id": $scope.actionData.app_id
        });
        ApiService.apiCall('/viewAction', 'POST', 1, sendData)
            .then(function(response) {
                $scope.actionList = response.data.data;
                for (var k = 0; k < $scope.actionList.length; k++) {
                    if (actionid == $scope.actionList[k].action_id) {
                        $scope.changeAction($scope.actionList[k]);
                        $scope.actionSelected = $scope.actionSelected ? $scope.actionSelected : $scope.actionList[
                            k].name;
                        break;
                    }
                }
                $scope.actionID = $scope.actionList[0].action_id;
                SessionStorage.set('ActionId', $scope.actionID);
            })
            .catch(function(response) {
                response = response.data;
            });
    };
    $scope.getActions();

    //Function to change actions
    $scope.changeAction = function(data) {
        $scope.selectData = data;
        $scope.disableBtton = false;
    };
    
    //Function to select actions
    $scope.selectAction = function() {
        var data = SessionStorage.get('currentActionApp');
        data.actionData = $scope.selectData;
        SessionStorage.set('currentActionApp', data);
        SessionStorage.set('chooseActionId', data.actionData.action_id);
        SessionStorage.set('currentActionStep', 2);
        $rootScope.$broadcast('changeActionStatus');
        $state.go('app.chooseActionAccount');
    };
});