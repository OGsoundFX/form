function trackForm () {
    return {
        restrict: 'E',
        scope: {},
        bindToController: {
            data: '='
        },
        templateUrl: '../templates/form.html'
    }
} ;

angular
    .module('app')
    .directive('trackForm', trackForm);