var app = angular.module('myApp', []);
app.controller('customersCtrl',function($scope){
  $scope.names =[
                  { Name: "Ajinath Jedhe" , Country: " India"},
                  { Name: "Amardeep Jadhav" , Country: " India"},
                  { Name: "Sandip Wavhal" , Country: " India"},
                  { Name: "Mayur Khatri" , Country: " India"},
                ];

$scope.addUpdateRow = function(op,name){
  if (op ==1 )
  {
    $scope.names.push({
      'Name':$scope.Name,
      'Country':$scope.Country
    });
    $scope.Name="";
    $scope.Country=""
  }
  else {
    var index= -1;
    var records= eval($scope.names);
    for (var i=0 ; i<records.length ; i++ )
    {
      if (records[i].Name == name){
        records[i].Name= $scope.Name;
        records[i].Country= $scope.Country;
      }
    }
  }
};
$scope.removeRow = function(Name){
  var index= -1;
  var records= eval($scope.names);
  for (var i=0 ; i<records.length ; i++ )
  {
    if (records[i].Name == Name)
    {
      index = i;
      break;
    }
  }
  if( index == -1 )
  {
    alert("Something went wrong");
  }
$scope.names.splice(index,1) // Delete Records

};
$scope.editRow = function(Name){
  var index= -1;
  var records= eval($scope.names);
  for (var i=0 ; i<records.length ; i++ )
  {
    if (records[i].Name == Name)
    {
      index = i;
      $scope.Name=records[i].Name;
      $scope.Country=records[i].Country;
      break;
    }
  }
  if( index == -1 )
  {
    alert("Something went wrong");
  }
  $scope.op=2;
  $scope.key=Name;
};
});