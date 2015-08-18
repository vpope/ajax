var app = angular.module('myApp', []);

app.controller('basicController', function ($scope) {

    $scope.myMethod = function () {
        var things = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
        var i;
        function randomLoop () {
            for (i = 0; i < things.length; i = i + 1) {
                console.log(things[i]);
            }
        }
        randomLoop(Math.random() * 10);
    };

});