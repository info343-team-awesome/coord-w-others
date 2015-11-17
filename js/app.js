
angular.module('SignUp', [])
    .directive('tooYoung', function() {
        "use strict";
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.tooYoung = function(modelValue) {
                    var thirteenYearsAgo = new Date();
                    thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);
                    return (new Date(modelValue) <= thirteenYearsAgo);
                }
            }
        }
    })
    .directive('samePassword', function() {
        "use strict";
        return {
            require: 'ngModel',
            scope: {
                otherModelValue: "=samePassword"
            },
            link: function(scope, elem, attrs, controller) {
                controller.$validators.samePassword = function(modelValue) {
                    return modelValue === scope.otherModelValue;
                }
            }
        }
    })
    .controller('SignUpController', function($scope) {
        'use strict';

        $scope.submit = function() {
            $('.alert-success').show();
        }
    });