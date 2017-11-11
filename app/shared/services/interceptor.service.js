/**
 * Created by cl-macmini-34 on 03/04/17.
 */
// (function () {

//     // var App = angular.module('praosHospitalPanel');

//     App.factory('InterceptorService',InterceptorService);

//     function InterceptorService($q,$location,$injector,SessionStorage){
//         return {
//             'responseError': function (resErr) {
//                 if(!resErr.data){
//                     $location.path('page/404');
//                 }else if(resErr.data.statusCode == 401){
//                     SessionStorage.remove('obj');
//                     SessionStorage.remove('roleAccess');
//                     SessionStorage.remove('disableMenu');
//                     SessionStorage.remove('nurseTabs');
//                     $location.path('page/login');
//                     return $q.reject(resErr);
//                 }else if(resErr.data.status == 401){
//                     SessionStorage.remove('obj');
//                     SessionStorage.remove('roleAccess');
//                     SessionStorage.remove('disableMenu');
//                     SessionStorage.remove('nurseTabs');
//                     $location.path('page/login');
//                     return $q.reject(resErr);
//                 }else {
//                     return $q.reject(resErr);
//                 }
//             }
//         }
//     }

//     App.config(function ($httpProvider) {
//         $httpProvider.interceptors.push('InterceptorService');
//     })

// })();