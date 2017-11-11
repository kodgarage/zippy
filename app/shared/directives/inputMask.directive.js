/**
 * Created by cl-macmini-34 on 27/03/17.
 */
(function () {
    // var App = angular.module('praosHospitalPanel');

    App.directive('inputMask', function(){
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, el, attrs, ngModel){
                $(el).inputmask(scope.$eval(attrs.inputMask));
                el.bind('keyup',function(e){
                    scope.$apply(function(){
                        var regex =/^[1-9]\d{9,9}$/;
                        var name = $(el).attr('name');
                        if (name == 'phoneNo') {
                            scope.vm.account.phoneNo = $(e.target).val();
                            var v = scope.vm.account.phoneNo.replace(/[^0-9]+/g, '').length == 10;
                            ngModel.$setValidity('phoneNoMatch', v);

                            var phone = scope.vm.account.phoneNo.replace(/[^0-9]+/g, '');
                            if(regex.test(phone)){
                                ngModel.$setValidity('phoneNoMatch', true);
                            }else {
                                ngModel.$setValidity('phoneNoMatch', false);
                            }
                        } else if (name == 'phoneNoP') {
                            scope.profile.phoneNo = $(e.target).val();
                            var v = scope.profile.phoneNo.replace(/[^0-9]+/g, '').length == 10;
                            ngModel.$setValidity('phoneNoMatch', v);

                            var phone = scope.profile.phoneNo.replace(/[^0-9]+/g, '');
                            if(regex.test(phone)){
                                ngModel.$setValidity('phoneNoMatch', true);
                            }else {
                                ngModel.$setValidity('phoneNoMatch', false);
                            }
                        } else if (name == 'contactPhoneNo') {
                            scope.profile.contactPhoneNo = $(e.target).val();
                            var v = scope.profile.contactPhoneNo.replace(/[^0-9]+/g, '').length == 10;
                            ngModel.$setValidity('phoneNoMatch', v);

                            var phone = scope.profile.contactPhoneNo.replace(/[^0-9]+/g, '');
                            if(regex.test(phone)){
                                ngModel.$setValidity('phoneNoMatch', true);
                            }else {
                                ngModel.$setValidity('phoneNoMatch', false);
                            }
                        } else if (name == 'phoneNoU') {
                            scope.vm.profile.phoneNo = $(e.target).val();
                            var v = scope.vm.profile.phoneNo.replace(/[^0-9]+/g, '').length == 10;
                            ngModel.$setValidity('phoneNoMatch', v);

                            var phone = scope.vm.profile.phoneNo.replace(/[^0-9]+/g, '');
                            if(regex.test(phone)){
                                ngModel.$setValidity('phoneNoMatch', true);
                            }else {
                                ngModel.$setValidity('phoneNoMatch', false);
                            }
                        } else if (name == 'date') {
                            scope.vm.job.date = $(e.target).val();
                            var v = scope.vm.job.date.replace(/[^0-9]+/g, '').length == 8;
                            if (v) {
                                var dateAry = (scope.vm.job.date).split('-');
                                var date = new Date(scope.vm.job.date);
                                if (date.getDate() == dateAry[1]) {
                                    var currentDate = new Date();
                                    currentDate.setHours(0, 0, 0, 0);
                                    if (date >= currentDate) {
                                        ngModel.$setValidity('dateNoMatch', true);
                                    } else {
                                        ngModel.$setValidity('dateNoMatch', false);
                                    }
                                } else {
                                    ngModel.$setValidity('dateNoMatch', false);
                                }
                            } else {
                                ngModel.$setValidity('dateNoMatch', false);
                            }
                        }
                    });
                });
            }
        };
    });

}());