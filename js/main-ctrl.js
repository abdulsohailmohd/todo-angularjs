var app = angular.module("myApp", []);

app.controller("main-ctrl", function($scope) {
  // Init
  $scope.incomplete_list = ["Go to Gym", "Pending works"];
  $scope.complete_list = [];
  $scope.incomplete_list_show = true;
  $scope.complete_list_show = false;
  $scope.item;

  //Add item
  $scope.addItem = function() {
    if (
      $scope.item.length > 0 &&
      $scope.incomplete_list.indexOf($scope.item) < 0
    ) {
      $scope.incomplete_list.push($scope.item);
      $scope.item = "";
    }
  };

  // Move item to completed list
  $scope.completed = function(x) {
    $scope.complete_list.push($scope.incomplete_list[x]);
    $scope.incomplete_list.splice(x, 1);
  };

  // Move item to incomplete list
  $scope.incomplete = function(x) {
    $scope.incomplete_list.push($scope.complete_list[x]);
    $scope.complete_list.splice(x, 1);
  };
});
