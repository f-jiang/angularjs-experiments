var app = angular.module('app', []);

app.controller('controller', function($scope) {
    $scope.moved = 0;
    $scope.entered = 0;
    $scope.left = 0;
    $scope.down = 0;
});

