(function() {
    App.controller('profileController', function($scope, SessionStorage, $state, ApiService, regex, MY_CONSTANT,
        $http, $mdSidenav) {
        //login check
        if (SessionStorage.get('obj') == null || SessionStorage.get('obj') == undefined) {
            $state.go('page.login');
        }
        // binding functions
        $scope.activate = activate;
        $scope.getUserProfile = getUserProfile;
        $scope.changePassword = changePassword;
        $scope.showProfile = showProfile;
        $scope.showBiling = showBiling;
        $scope.activeProfileSection = true;
        $scope.activeBilingSection = false;
        $scope.openLeftMenu = openLeftMenu;
        $scope.getProfile = getProfile;
        $scope.logout = logout;
        $scope.checkPlan = checkPlan;

        function openLeftMenu() {
            $mdSidenav('left').toggle();
        }

        function getProfile() {
            $state.go('profile');
        }

        function logout() {
            SessionStorage.removeAll();
            $state.go('page.login');
        }

        //calling function on initialiation of controller
        function activate() {
            //calling to get user profile data
            getUserProfile();
            pricing();
        }
        activate();

        //getting user profile
        //calling post call as a get with no parameter
        function getUserProfile() {
            ApiService.apiCall('/viewUserProfile', 'POST', 2).then(function(response) {
                $scope.profile = response.data;
                $scope.profile.planData.premium_apps = $scope.profile.planData.premium_apps ?
                    $scope.profile.planData.premium_apps :
                    SessionStorage.set('$scope.profile', $scope.profile);
                checkPlan();
                $scope.taskStyle = {
                    'width': $scope.profile.userTasks / 3 + '%'
                };
                $scope.bumblStyle = {
                    'width': $scope.profile.userWorkflows + '%'
                };
            });
        }

        //Change the passoword
        function changePassword() {
            if ($scope.newPassword === $scope.confirmPassword) {
                var bodyParams = $.param({
                    'password': $scope.oldPassword,
                    'new_password': $scope.newPassword
                });
                ApiService.apiCall('/changePassword', 'POST', 3, bodyParams).then(function(response) {
                    $scope.message = response.data.description;
                    if (response.data.description === 'Password changed successfully') {
                        SessionStorage.removeAll();
                        $state.go('page.login');
                    }
                });
            } else {
                $scope.message = 'New and confirm password did not match';
            }
        }

        //Getting pricing data
        function pricing() {
            ApiService.apiCall('/viewPlan', 'POST', 2).then(function(response) {
                var result = response.data;
                $scope.pricingData = result.data;
                checkPlan();
            });
        }

        function checkPlan() {
            // if($scope.pricingData.plan_id === $scope.profile.plan_id){
            // }
        }

        //Show profile data
        function showProfile() {
            $scope.activeProfileSection = true;
            $scope.activeBilingSection = false;
            $mdSidenav('left').toggle();
        }
          
        //Show Biling
        function showBiling() {
            $scope.activeProfileSection = false;
            $scope.activeBilingSection = true;
            $mdSidenav('left').toggle();
        }
    });
})();