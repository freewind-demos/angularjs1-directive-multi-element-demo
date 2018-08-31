const app = angular.module('app', [])
app.directive('bordered', function () {
    return {
        restrict: 'A',
        multiElement: true,
        link: function (scope, elements) {
            angular.forEach(elements, function (element) {
                if (element.nodeName !== '#text') {
                    angular.element(element).css('border', '1px solid red')
                }
            })
        }
    }
})