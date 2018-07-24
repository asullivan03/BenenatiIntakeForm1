(function(){
  'use strict';
  angular
  .module('bif.slidecontainer')
  .directive('slidecontainer', slidecontainer);

  slidecontainer.$inject=[];

  function slidecontainer(){
    //Usage:
    //    <location-slide></location-slide>
    //
    var directive = {
    link:link,
    restrict:'E',
    templateUrl:'js/slidecontainer.html',
    controller:slideController
  };

  return directive;

  function link(scope,element, attrs){}

  function slideController($scope){

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