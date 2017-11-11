/**
 * Created by cl-macmini-34 on 19/06/17.
 */
(function () {

    // var App = angular.module('praosHospitalPanel');

    App.factory('regex',Regex);

    function Regex(){
        var serviceObj = {};
        serviceObj.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        serviceObj.alphaRegex = /^[a-zA-z ]{1,}$/;
        serviceObj.nameRegex = /^[a-zA-z .]{1,}$/;
        serviceObj.numberRegex = /^[0-9]{6,10}$/;
        serviceObj.pwdRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!#%*?&]{8,}/;
        serviceObj.zipRegex = /^[0-9]{5,5}$/;
        serviceObj.nurseRegex = /^[1-9]{1,1}[0-9]{0,}$/;
        serviceObj.amountRegex = /^[1-9]{1,10}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;
        serviceObj.cardNumberRegex = /^[0-9]{16,16}$/;
        serviceObj.ccvRegex = /^[0-9]{3,4}$/;

        return serviceObj;
    }

})();