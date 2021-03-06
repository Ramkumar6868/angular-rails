

//Controller
myApp.controller("UserListCtr", ['$scope', '$http', '$resource', 'Users', 'User', '$location', function($scope, $http, $resource, Users, User, $location) {

  $scope.users = Users.query();
  $scope.deleteUser = function (userId) {
    if (confirm("Are you sure you want to delete this user?")){
      User.delete({ id: userId }, function(){
        $scope.users = Users.query();
        $location.path('/');
      });
    }
  };
}]);

// myApp.controller("UserUpdateCtr", ['$scope', '$resource', 'User', '$location', '$routeParams', function($scope, $resource, User, $location, $routeParams) {
//   $scope.user = User.get({id: $routeParams.id})
//   $scope.update = function(){
//     if ($scope.userForm.$valid){
//       User.update({id: $scope.user.id},{user: $scope.user},function(){
//         $location.path('/');
//       }, function(error) {
//         console.log(error)
//       });
//     }
//   };

//   $scope.addAddress = function(){
//     $scope.user.addresses.push({street1: '', street2: '', city: '', state: '', country: '', zipcode: '' })
//   }

//   $scope.removeAddress = function(index, user){
//     var address = user.addresses[index];
//     if(address.id){
//       address._destroy = true;
//     }else{
//       user.addresses.splice(index, 1);
//     }
//   };

// }]);

// myApp.controller("UserAddCtr", ['$scope', '$resource', 'Users', '$location', function($scope, $resource, Users, $location) {
//   $scope.user = {addresses: [{street1: '', street2: '', city: '', state: '', country: '', zipcode: '' }]}
//   $scope.save = function () {
//     if ($scope.userForm.$valid){
//       Users.create({user: $scope.user}, function(){
//         $location.path('/');
//       }, function(error){
//         console.log(error)
//       });
//     }
//   }

//   $scope.addAddress = function(){
//     $scope.user.addresses.push({street1: '', street2: '', city: '', state: '', country: '', zipcode: '' })
//   }

//   $scope.removeAddress = function(index, user){
//     var address = user.addresses[index];
//     if(address.id){
//       address._destroy = true;
//     }else{
//       user.addresses.splice(index, 1);
//     }
//   };

// }]);



