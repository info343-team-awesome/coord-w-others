
angular.module('SignUp', [])
    .directive('inThePast', function() {
        "use strict";
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.inThePast = function(modelValue) {
                    var today = new Date();
                    return (new Date(modelValue) <= today);
                }
            }
        };
    })
    .controller('SignUpController', function($scope) {
        'use strict';

    });