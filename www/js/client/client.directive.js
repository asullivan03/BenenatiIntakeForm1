/*(function(){
  'use strict';
  angular
  .module('bif.slidecontainer')
  .directive('client', client);

  client.$inject=[];

  function client(){
    //Usage:
    //    <client></client>
    //
    var directive = {
    link:link,
    restrict:'E',
    templateUrl:'js/client/client.html',
    controller:clientController
  };

  return directive;

  function link(scope,element, attrs){}

 clientController.$inject=['$scope'];
  function clientController($scope){

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
})();*/


(function () {
    'use strict';

    angular
        .module('bif.slidecontainer')
        .directive('client', client);

    client.$inject = [];

    function client() {
        // Usage:
        //     <client></client>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: "js/client/client.html",
            controller: clientController
        };
        return directive;

        function link(scope, element, attrs) {
        }

        clientController.$inject = ['$scope'];

        function clientController($scope) {

        }
    }
})();
