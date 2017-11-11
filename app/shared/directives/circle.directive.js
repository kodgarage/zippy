/**
 * Created by cl-macmini-34 on 15/02/17.
 */
(function () {
    // var App = angular.module('praosHospitalPanel');
    App.directive('pctComplete', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                value: '='
            },
            template: ' <div class="c100 p{{value}} small blue">'+
            '<span>{{value}}%</span>'+
            '<div class="slice">'+
            ' <div class="bar"></div>'+
            '<div class="fill"></div>'+
            '</div>'+
            '</div>'
        };
    });
})();