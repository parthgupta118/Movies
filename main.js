var app = angular.module('show', []);

app.controller('name', function($scope, $rootScope) {


    console.log($scope);
    console.log($rootScope);
    

    $scope.changeHome = function() {
        $rootScope.heading=$scope.$$watchers[2].last;
        $rootScope.img = $scope.$$watchers[3].last;
        console.log($scope.$$watchers[1].last);
    } 
});