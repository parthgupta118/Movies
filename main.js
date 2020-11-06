var app = angular.module('show', []);

app.controller('name', function($scope, $rootScope) {


    console.log($scope);
    console.log($rootScope);
    

    $scope.changeHome = function() {
        $rootScope.heading=$scope.$$watchers[3].last;
        $rootScope.img = $scope.$$watchers[4].last;
        $rootScope.content = $scope.$$watchers[0].last
        console.log($scope.$$watchers[1].last);
    } 
});

app.controller('movie', function($scope, $rootScope) {


    console.log($scope);
    console.log($rootScope);
    

    $scope.showMovie = function() {
        $rootScope.heading=$scope.$$watchers[3].last;
        $rootScope.img = $scope.$$watchers[4].last;
        $rootScope.content = $scope.$$watchers[0].last
        console.log($scope.$$watchers[0].last);
    } 
});