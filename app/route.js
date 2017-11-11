/**
 * Created by cl-macmini-34 on 17/01/17.
 */
(function () {
  "use strict";

  angular.module('bumble').config(Config);
  App.constant("MY_CONSTANT", {
    "url": ENV_URL,
    "webhookurl": WEBHOOK_URL
  });
  Config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];

  function Config($stateProvider, $locationProvider, $urlRouterProvider, RouteHelpersProvider) {
    $locationProvider.html5Mode(false);
    // $locationProvider.hashPrefix('');

    // window.Stripe.setPublishableKey('pk_test_5p0Y6nXDFOI6nX2PrueXaYdc'); // test
    // default route
    $urlRouterProvider.otherwise('/page/login');
    $stateProvider
      //page routes
      .state('page', {
        url: '/page',
        templateUrl: './app/component/page/page.html'
      })
      .state('page.login', {
        url: '/login',
        title: "Login",
        templateUrl: './app/component/page/login/login.html',
        controller: 'LoginController',
      })

      // .state('page.signin', {
      //     url: '/signup',
      //     title: "Sign Up",
      //     templateUrl: './app/component/page/signin/signin.html',
      //     controller: 'SignInController as vm',
      //     //resolve: RouteHelpersProvider.resolveFor('signInCtrl')
      // })
      // .state('page.emailVerify', {
      //     url: '/email-verify/:email/:token',
      //     title: "Email Verify",
      //     templateUrl: './app/component/page/email-verify/email-verify.html',
      //     controller:'EmailVerifyController as vm',
      //     //resolve: RouteHelpersProvider.resolveFor('emailVerifyCtrl')
      // })
      // .state('page.resetPassword', {
      //     url: '/reset-password/:email/:token',
      //     title: "Reset Password",
      //     templateUrl: './app/component/page/reset-password/reset-password.html',
      //     controller: 'ResetPasswordController as vm',
      //     //resolve: RouteHelpersProvider.resolveFor('resetPwdCtrl')
      // })
      // .state('page.redirect', {
      //     url: '/redirect',
      //     title: "Redirect",
      //     templateUrl: './app/component/page/redirect/redirect.html',
      //     controller: 'redirectController as vm',
      //     //resolve: RouteHelpersProvider.resolveFor('redirectCtrl')
      // })
      .state('page.notFound', {
        url: '/404',
        title: "Page Not Found",
        templateUrl: './app/component/page/page-not-found/page-not-found.html',
        controller: 'pageNotFoundController as vm',
        //resolve: RouteHelpersProvider.resolveFor('pageNotFoundCtrl')
      })


      //App routes
      .state('app', {
        url: '/app',
        // abstract: true,
        templateUrl: './app/component/app/app.html',
        controller: 'AppController',
        //resolve: RouteHelpersProvider.resolveFor('appCtrl')
      })
      .state('app.triggerapp', {
        url: '/triggerapp',
        title: "ChooseTriggerApp",
        templateUrl: './app/component/app/dashboard/dashboard.html',
        controller: 'DashboardController'
      })
      .state('app.trigger', {
        url: '/trigger',
        title: "Choose trigger",
        templateUrl: './app/component/app/Trigger/Trigger.html',
        controller: 'TriggerController'
      })
      .state('app.explore', {
        url: '/explore',
        title: "Explore",
        templateUrl: './app/component/app/explore/explore.html',
        // controller: 'ExploreController',
      })
      .state('app.account', {
        url: '/account',
        title: "Choose Account",
        templateUrl: './app/component/app/Account/account.html',
        controller: 'AccountController'
      })
      .state('app.webhook', {
        url: '/webhook',
        title: "Webhook",
        templateUrl: './app/component/app/Webhook/webhook.html',
        controller: 'WebhookController'
      })
      .state('app.setupTrigger', {
        url: '/setupTrigger',
        title: "set up trigger",
        templateUrl: './app/component/app/setup-trigger/setUpTrigger.html',
        controller: 'setUpTriggerController'
      })
      .state('app.test', {
        url: '/test?/:webhook',
        title: "Test",
        templateUrl: './app/component/app/Test/test.html',
        controller: 'TestController'
      })
      .state('app.testPolling', {
        url: '/testPolling',
        title: "Test Polling",
        templateUrl: './app/component/app/Test-Polling/testPolling.html',
        controller: 'TestPollingController'
      })
       .state('app.testPollingAction', {
        url: '/testPollingAction',
        title: "Test Polling Action",
        templateUrl: './app/component/app/Test-Polling-Action/testPollingAction.html',
        controller: 'TestPollingActionController'
      })

      //Actions
      .state('app.chooseApp', {
        url: '/chooseApp',
        title: "App",
        templateUrl: './app/component/app/Choose-App/chooseApp.html',
        controller: 'ChooseAppController'
      })
      .state('app.chooseAction', {
        url: '/chooseAction',
        title: "Action",
        templateUrl: './app/component/app/Choose-Action/chooseAction.html',
        controller: 'ChooseActionController'
      })
      .state('app.chooseActionAccount', {
        url: '/chooseAccount',
        title: "Choose Account",
        templateUrl: './app/component/app/Choose-Action-Account/actionAccount.html',
        controller: 'ActionAccountController'
      })


      //Dashboard Workflow
      .state('dashboard', {
        url: '/dashboard',
        title: "dashboard",
        templateUrl: './app/component/app/Workflow/workflow.html',
        controller: 'WorkflowController'
      })
      .state('history', {
        url: '/history',
        title: "history",
        templateUrl: './app/component/app/taskhistory/history.html',
        controller: 'historyController'
      })

      .state('app.setupTemplate', {
        url: '/setupTemplate',
        title: "set up template",
        templateUrl: './app/component/app/setup-template/setupTemplate.html',
        controller: 'setUpTemplateController'
      })
      .state('app.testAction', {
        url: '/testAction',
        title: "Test Action",
        templateUrl: './app/component/app/Test-Action/testAction.html',
        controller: 'testActionController'
      })
      .state('app.sample', {
        url: '/sample',
        title: "Sample",
        templateUrl: './app/component/app/Sample/sample.html',
        controller: 'sampleController'
      })
      .state('app.sampleTrigger', {
        url: '/sampleTrigger',
        title: "Sample Trigger",
        templateUrl: './app/component/app/Sample-Trigger/sampleTrigger.html',
        controller: 'sampleTriggerController'
      })

      .state('app.overview', {
        url: '/overview',
        title: "overview",
        templateUrl: './app/component/app/overview/overview.html',
        controller: 'overviewController'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: './app/component/page/signup/signup.html',
        controller: 'signupController'
      })
      .state('profile', {
        url: '/profile',
        // abstract: true,
        templateUrl: './app/component/app/profile/profile.html',
        controller: 'profileController',
        //resolve: RouteHelpersProvider.resolveFor('appCtrl')
      })
      .state('forgetpassword', {
        url: '/forgetpassword',
        title: "forgetpassword",
        templateUrl: './app/component/app/forget-password/forgetpassword.html',
        controller: 'forgetpasswordController'
      })
      .state('resetpassword', {
        url: '/resetpassword',
        title: "resetpassword",
        templateUrl: './app/component/app/reset-password/resetpassword.html',
        controller: 'resetController'
      })



    // .state('app.profile', {
    //     url: '/profile',
    //     title: "Profile",
    //     templateUrl: './app/component/app/profile/profile.html',
    //     controller: 'ProfileController as vm',
    //     //resolve: RouteHelpersProvider.resolveFor('profileCtrl')
    // })
  }

})();
