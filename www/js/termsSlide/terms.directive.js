(function(){
    'use strict';
    angular
    .module('bif.slidecontainer')
    .directive('terms', terms);
  
    terms.$inject=[];
  
    function terms(){
      //Usage:
      //    <terms></terms>
      //
      var directive = {
      link:link,
      restrict:'E',
      templateUrl:'js/termsSlide/terms.html',
      controller:termsController
    };
  
    return directive;
  
    function link(scope,element, attrs){}
  
    function termsController($scope){
  
       
      }
   }
  })();
  
  