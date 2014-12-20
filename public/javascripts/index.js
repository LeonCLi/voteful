/*global angular:false */
angular.module('voteful', ['ngMaterial'])
.controller('HomeController', ['$scope', '$http', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdDialog, $mdBottomSheet){
  
  $scope.expand = function($event) {
    $event.target.removeClass('md-whiteframe-z1').addClass('md-whiteframe-z4');
  };
  $scope.shrink = function($event) {
    // $event.target.removeClass('md-whiteframe-z4').addClass('md-whiteframe-z1');
  };
}]);
  // $scope.report = function(type, message, user){
  //   function success(data){
  //     $mdToast.show($mdToast.simple().content('Thank you for your feedback!').capsule(true));
  //     $mdDialog.hide();
  //   }
  //   function error(){}
  //   $http({
  //     method: 'POST',
  //     url: '/bug',
  //     data: {bug: {type: type, message:message, user:user}},
  //     headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}  
  //   }).success(success).error(error);
  // };

//toast