(function() {
    //   'use strict';
    App.controller('forgetpasswordController', function($scope, SessionStorage,
        $state, ApiService, regex, MY_CONSTANT, $http, $rootScope, $timeout) {
        $scope.forgetPassword = forgetPassword;

        function forgetPassword() {
            var sendData = $.param({
                "email": $scope.forget_password
            });
            ApiService.apiCall('/forgotPassword', 'POST', 1, sendData).then(function(response) {
                response = response.data;
                if (response.flag == '404') {
                    $scope.ErrorMsg = response.description;
                    $timeout(function() {
                        $state.reload();
                    }, 2000);
                    $scope.errorClr = true;
                } else if (response.flag == '200') {
                    $scope.SuccessMsg = response.description;
                    $timeout(function() {
                        $state.reload();
                    }, 2000);
                    $scope.successClr = true;
                }
            });
        }
    });
})();