/**
 * Created by cl-macmini-34 on 17/01/17.
 */
(function() {
    App.controller('LoginController', function($scope, SessionStorage, $state, ApiService, regex,
        MY_CONSTANT, $http, $timeout) {
        // $scope.loginShow = false;
        if (SessionStorage.get('obj') != null && SessionStorage.get('obj') != undefined) {
            $state.go('dashboard');
        }
        //  else{
        //   $scope.loginShow = true;
        // }
        $scope.account = {};
        $scope.emailRegex = regex.emailRegex;
        $scope.login = function() {
            var senddata = $.param({
                "email": $scope.account.email,
                "password": $scope.account.password
            });
            ApiService.apiCall('/login', 'POST', 1, senddata)
                .then(function(response) {
                    SessionStorage.removeAll();
                    response = response.data;
                    SessionStorage.set('obj', response.data);
                    // localStorage.setItem('obj', JSON.stringify(response.data));
                    if (response.flag == 200) {
                        $state.go('dashboard');
                    } else {
                        $scope.authMsg = "Invalid login credentials. Please try again.";
                        $timeout(function() {
                            $scope.authMsg = '';
                        }, 2000);
                        console.log("authmsg", $scope.authMsg);
                    }
                })
                .catch(function(response) {
                    console.log("error", response);
                });
        };
    });
})();