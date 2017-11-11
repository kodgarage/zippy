/**
 * Created by cl-macmini-34 on 20/01/17.
 */
(function () {
    // var App = angular.module('praosHospitalPanel');
    App.factory('SessionStorage', SessionStorageManage);

    SessionStorageManage.$inject = ['$sessionStorage','$localStorage'];

    function SessionStorageManage($sessionStorage,$localStorage) {
        var service = {};
        service.set = function (key, value) {
            value = JSON.stringify(value);
            value = encodeURIComponent(value);
            $localStorage[key]= value;
        };
        service.get = function (key) {
            var data = $localStorage[key];
            if (data) {
                data = decodeURIComponent(data);
                try{data = JSON.parse(data);} catch(error){
                }
                return data;
            }else {
                return null;
            }
        };
        service.remove = function (key) {
          delete  $localStorage[key];
        };
        service.removeAll = function () {
            $localStorage.$reset();
        };
        return service;
    }
})();

