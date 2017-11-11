/**
 * Created by cl-macmini-34 on 18/04/17.
 */
(function () {
    App.controller('pageNotFoundController', function ($scope, $http, MY_CONSTANT, ngDialog, $timeout, SessionStorage, $state, ApiService, $q) {
        var vm = this;
        vm.goTOPreviousState = GoTOPreviousState;

        $scope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                vm.state = fromState.name;
                vm.parm = fromParams;
                vm.parmCheck = Object.keys(fromParams).length;
            }
        );

        function GoTOPreviousState(){
            if(vm.parmCheck){
                $state.go(vm.state,vm.parm);
            }else {
                $state.go(vm.state);
            }
        }
    });


})();
