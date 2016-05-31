var app = angular.module('app', []);

app.controller('controller', function($scope) {
	$scope.phones = [
        {name: 'Galaxy S7', year: 2016},
        {name: 'OnePlus 2', year: 2015},
        {name: 'Nexus 5', year: 2014},
        {name: 'Xperia Ion', year: 2012}
    ];
});

