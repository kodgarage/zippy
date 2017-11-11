(function() {
    // 'use strict';
    App.controller('resetController', function($scope, SessionStorage,
        $state, ApiService, regex, MY_CONSTANT, $http, $rootScope, $location, $timeout) {
        $scope.resetPassword = resetPassword;

        function resetPassword() {
          //Getting ResetToken from url
            var tokenvalue = $location.search().resetdata;
            if ($scope.reset_password == $scope.confirm_password) {
                var sendData = $.param({
                    "password": $scope.reset_password
                });
                ApiService.apiCall('/resetpassword/' + tokenvalue, 'POST', 1, sendData).then(
                    function(response) {
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
                            $state.go('page.login');
                        }
                    });
            } else {
                $scope.message = 'Password mismatched';
            }
        }
    });
})();