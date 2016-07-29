// Directive for generic chart, pass in chart options
shipApp.directive('hcChart', function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {

            scope.$watch('options', function(newVal) {
                          //console.log(newVal);
                          Highcharts.chart(element[0], scope.options)
                        });
        }
    };
});