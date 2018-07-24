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

