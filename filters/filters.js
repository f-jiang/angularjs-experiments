angular.module('filters', []).filter('open', function() {
    return function(input) {
        var time = new Date().getHours();
        if (time >= input.open && time < input.close) {
            return "Open";
        } else {
            return "Closed";
        }
    };
});