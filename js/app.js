
angular.module('SignUp', [])
    .controller('SignUpController', function($scope) {
        'use strict';

        $scope.submit = function() {
            $('.alert-success').show();
        }
    });