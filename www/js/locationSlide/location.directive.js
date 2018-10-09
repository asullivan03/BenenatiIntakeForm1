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
 
     $scope.locationSelect = function(answer, section, step, points) {
         //apply variables for ng-class
         if(answer == 'Orlando')
         {
             $scope.orlSelected = true;
             $scope.kissSelected = false;
             //set intake form data
             $scope.$parent.intake.location = "0000001672 - Orlando";
         }
         else
         {
             $scope.orlSelected = false;
             $scope.kissSelected = true;
             //set intake form data
             $scope.$parent.intake.location = "pLKlmnVLZW - Kissimmee";
         }

         $scope.$parent.nextSlide(section,step,points);
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

