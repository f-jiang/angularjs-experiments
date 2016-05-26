var app = angular.module('app', []);

app.controller('controller', function($scope, $rootScope) {
	$scope.n = Math.random();
    $scope.reset = function() {
        $rootScope.$broadcast('clear');
    };
    $scope.$on('clear', function(event, args) {
        $scope.n = Math.random();  
    });
});

