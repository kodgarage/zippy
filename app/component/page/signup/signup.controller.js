'use strict';

App.controller('signupController', signupController);

function signupController($scope, SessionStorage, $state, ApiService, regex, MY_CONSTANT, $http, $location, $timeout) {
  $scope.user_name = '';
  $scope.signup_email = '';
  $scope.signup_password = '';
  $scope.signupRegister = signupRegister;
  $scope.checkUserRegister = checkUserRegister;
  $scope.checkUserEmail = checkUserEmail;
  $scope.validateEmail = validateEmail;
  $scope.emailRegex = regex.emailRegex;

  function signupRegister() {
    var plan_id = $location.search().plan_id;
    if (plan_id) {
      plan_id = plan_id
    } else {
      plan_id = 1;
    }
    var patt = /^[a-zA-Z]*$/;
    var result = patt.test($scope.user_name);
    console.log('result', result);

    if ($scope.signup_password.length < 7) {
      console.log('if runs');
      $scope.authMsg = "Password should be more then 8 characters";
    } else if($scope.signup_password.length > 7 && result && $scope.userFlag) {
      console.log('else runs');
      var sendData = $.param({
        'user_name': $scope.user_name,
        'email': $scope.signup_email,
        'password': $scope.signup_password,
        'plan_id': plan_id
      });
      ApiService.apiCall('/signUp', 'POST', 1, sendData).then(function (response) {
        if (response.data.flag === 201) {
          $scope.greetingMessage = 'Account created successfully.'
          if (response.data.access_token) {
            $state.go('dashboard');
            SessionStorage.set('obj', response.data);
          }
          $state.go('page.login');
        }
      })
    }

  }

  function checkUserRegister() {
    var patt = /^[a-zA-Z]*$/;
    var result = patt.test($scope.user_name);
    console.log('result', result);
    if ($scope.user_name.length > 4 && result) {
      $scope.userFlag = "true";
      console.log('iff', result);
      var sendData = $.param({
        'user_name': $scope.user_name
      });
      ApiService.apiCall('/checkUserName', 'POST', 1, sendData).then(function (response) {
        if (response.data.flag === 200) {
          $scope.userGreetingMessage = '';
        } else {
          $scope.userGreetingMessage = response.data.message;
        }
      })
    } else {
      console.log('else');
      $scope.userGreetingMessage = 'Not Acceptable';
      // $timeout(function () {
      //   $scope.userGreetingMessage = '';
      // }, 2000);
    }

  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function checkUserEmail() {
    validateEmail($scope.signup_email);
    if (validateEmail($scope.signup_email)) {
      var sendData = $.param({
        'email': $scope.signup_email
      });
      ApiService.apiCall('/checkUserEmail', 'POST', 1, sendData).then(function (response) {
        if (response.data.flag === 200) {
          $scope.emailGreetingMessage = '';
        } else {
          $scope.emailGreetingMessage = response.data.message;
        }
      })
    }
  }
}
