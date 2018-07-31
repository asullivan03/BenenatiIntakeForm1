(function(){
  'use strict';
  angular
  .module('bif.slidecontainer')
  .directive('location', location);

  location.$inject=[];

  function location(){
    //Usage:
    //    <location-slide></location-slide>
    //
    var directive = {
    link:link,
    restrict:'E',
    templateUrl:'js/locationSlide/location.html',
    controller:locationController
  };

  return directive;

  function link(scope,element, attrs){}

  function locationController($scope){

     $scope.orlSelected = false;
     $scope.kissSelected = false;
 
     $scope.locationSelect = function(answer) {
         //apply variables for ng-class
         if(answer == 'Orlando')
         {
             $scope.orlSelected = true;
             $scope.kissSelected = false;
         }
         else
         {
             $scope.orlSelected = false;
             $scope.kissSelected = true;
         }
 
         //set intake form data
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

