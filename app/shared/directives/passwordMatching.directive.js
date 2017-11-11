/**
 * Created by cl-macmini-34 on 19/01/17.
 */
(function () {
    // var App = angular.module('praosHospitalPanel');

    App.directive('passwordMatching', PasswordMatching);
    function PasswordMatching() {
        var directiveObj = {};
        directiveObj.restrict = 'A';
        directiveObj.require = 'ngModel';
        directiveObj.link = Link;
        function Link(scope,element,attr,ctrl) {
            function passwordMatch(val){
                if(scope.vm.account.password === val){
                    ctrl.$setValidity('passwordMatching',true);
                }
                else{
                    ctrl.$setValidity('passwordMatching',false);
                }
                return val;
            }
            ctrl.$parsers.push(passwordMatch);
        }
        return directiveObj;
    }

/*
concat value into textarea
 */
App.directive('myText', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element, attrs) {
            $rootScope.$on('insertMessageTag', function (e, val) {
                var domElement = element[0];

                if (document.selection) {
                    domElement.focus();
                    var sel = document.selection.createRange();
                    sel.text = val;
                    domElement.focus();
                } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                    var startPos = domElement.selectionStart;
                    var endPos = domElement.selectionEnd;
                    var scrollTop = domElement.scrollTop;
                    domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);
                    domElement.focus();
                    domElement.selectionStart = startPos + val.length;
                    domElement.selectionEnd = startPos + val.length;
                    domElement.scrollTop = scrollTop;
                } else {
                    domElement.value += val;
                    domElement.focus();
                }

            });
        }
    }
}])




})();