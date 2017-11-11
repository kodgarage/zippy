/**
 * Created by cl-macmini-34 on 31/01/17.
 */

//===============loading directive========================
(function () {
    // var App = angular.module('praosHospitalPanel');
    App.directive('loading', function () {
        return {
            restrict: 'E',
            replace:true,
            template: '<div class="loading"><img class="loading-img" src="./app/image/loader-img.gif"></div>',
            link: function (scope, element, attr) {
                scope.$watch('loading', function (val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
    });

    App.directive('loadingTest', function () {
        return {
            restrict: 'E',
            replace:true,
            template: '<div class="loading-test"><img class="loading-img-test" src="./app/image/loader-img.gif"></div>',
            link: function (scope, element, attr) {
                scope.$watch('loadingTest', function (val) {
                    if (val)
                        $(element).show();
                    else
                        $(element).hide();
                });
            }
        }
    });

})();