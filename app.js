var app = angular.module('myApp', []);

app.controller('basicController', function($scope) {
    $scope.test = function () {
        return $scope.x(2);
    };
    
    $scope.myMethod = function () {
        return $scope.x(10 - 9).q();
    };
    
    $scope.x = function (boo) {
        if (boo === 1) {
            return {
                q: $scope.test
            };
        } else if (boo === 2) {
            return 5 + boo;
        }
    };
});