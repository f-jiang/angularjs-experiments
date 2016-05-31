var app = angular.module('taskApp', []);

app.controller('taskController', function($scope) {
    $scope.tasks = [
        {name: "Example", dueDate: "date", priority: 3, complete: false}
    ];
    $scope.addTask = function(task) {
        $scope.tasks.push({
            name: task.name,
            dueDate: task.dueDate,
            priority: task.priority,
            complete: false
        });
    };
});

