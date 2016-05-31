var app = angular.module('app', ['filters']);   // since we are using the open filter, its parent module now be included as a dependency in the array

app.controller('controller', function($scope) {
	$scope.phones = [
        {name: 'Galaxy S7', year: 2016},
        {name: 'OnePlus 2', year: 2015},
        {name: 'Nexus 5', year: 2014},
        {name: 'Xperia Ion', year: 2012}
    ];
    
    $scope.restaurants = [
        {name: "McDonald's", distance: 1, hours: {open: 7, close: 23}},
        {name: "Panda Express", distance: 3, hours: {open: 9, close: 22}},
        {name: "Tim Horton's", distance: 2, hours: {open: 6, close: 21}},
        {name: "Starbucks", distance: 5, hours: {open: 8, close: 23}}
    ];
});

