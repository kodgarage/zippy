var App = angular.module('bumble', ['ui.router','ngDialog','ngMaterial','ui.bootstrap','angularPayments','ngStorage','oc.lazyLoad','ngclipboard','ngSanitize']);
App.run( ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams; 
    console.log($state);
}]);