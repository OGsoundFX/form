function trackForm () {
    return {
        restrict: 'E',
        // scope: {},
        bindToController: {
            data: '=',
            submit: '&'
        },
        controller: 'FormController as ctrl',
        templateUrl: '../templates/form.html'
    }
} ;

angular
    .module('app')
    .directive('trackForm', trackForm);