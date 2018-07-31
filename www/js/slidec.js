(function(){
  'use strict';
  angular
  .module('bif.slidecontainer')
  .directive('slidecontainer', slidecontainer);

  slideContainer.$inject=['$ionicSlideBoxDelegate'];

  function slidecontainer(){
    //Usage:
    //    <location-slide></location-slide>
    //
    var directive = {
    link:link,
    restrict:'E',
    templateUrl:'js/slidecontainer.html',
    controller:controller
  };

  return directive;

  function link(scope,element, attrs){}

  function controller($scope, $ionicSlideBoxDelegate){

$scope.options = {
    loop: false,
    speed: 500,
    };
    $scope.haveFiledBankruptcy = "No";
    $scope.showFiledBankruptcyExtra = function (){
      if($scope.haveFiledBankruptcy == "Yes"){
          return true;
      }
      return true;
    }
    
    $scope.intake={
    'location':null
    };
    
    $scope.nextSlide = function(){
      $scope.slider._slideNext();
    };
    $scope.previousSlide = function(){
      $scope.slider._slidePrev();
    };


  $scope.showSpouseArea=function(){
          if($scope.intake.spouse == true){
            return false;
}
      return true;
  }
    $scope.locationSelect = function(answer) {
        $scope.$parent.intake.location = answer;
    };
 
     $scope.isDisabled = function(){
        if($scope.$parent.intake.location == null){
            return false;
         }
         else{
                return true;
            }
        }
    }
 }
})();