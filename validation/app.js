var app = angular.module('myApp', []);
app.controller('usersCtrl',function($scope, $http){
  $scope.sortReverse  = false;  // set the default sort order
  $scope.users = [];
  $http.get('http://localhost:3000/users.json').then(function(response) {
    $scope.users = response.data;
  });

  $scope.temp = []
  $scope.resetAll = function(){
      $http.get('http://localhost:3000/users.json').then(function(response) {
        $scope.temp = response.data;
     });
  };


  $scope.removeRow = function(index, id){
    user_id = id;
    var config = {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      }
    $http.delete('http://localhost:3000/users/' + user_id, [config] ).success(function(response){
    $scope.users.splice(index, 1)

    })
  };

  $scope.addRow = function(){

    user = { 'name':$scope.name, 'experience':$scope.experience, 'age': $scope.age }

    create_user_url = "http://localhost:3000/users";

    var config = {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      }
    $http.post(create_user_url, user, config ).success(function(response){
      $('#myModal').modal('hide');
      $scope.users.push(user);
      $scope.name = ""
      $scope.experience = ""
      $scope.age = ""
      $scope.resetAll();
    });
  };

  $scope.search = function () {
    $scope.users = _.filter( $scope.temp, function(user) {
      return searchUtil(user, $scope.searchText);
    });
    if ($scope.searchText == '') {
      $scope.users = $scope.temp;
    }
  }
  $scope.resetAll();
});

function searchUtil(user, toSearch) {
  return (user.name.toLowerCase().indexOf(toSearch.toLowerCase()) > -1) ? true : false;
}

