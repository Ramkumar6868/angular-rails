//Routes
myApp.config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/users',{
      templateUrl: '/users/index',
      controller: 'UserListCtr'
    });
    // $routeProvider.when('/users/new', {
    //   templateUrl: '/users/new',
    //   controller: 'UserAddCtr'
    // });
    // $routeProvider.when('/users/:id/edit', {
    //   templateUrl: '/users/edit',
    //   controller: "UserUpdateCtr"
    // });
    // $routeProvider.otherwise({
    //   redirectTo: '/users'
    // });
  }
]);

