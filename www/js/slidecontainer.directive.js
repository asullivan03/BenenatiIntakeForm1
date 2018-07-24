 /*  (function(){
      'use strict';
      angular
          .module('bif.slidecontainer')
          .directive('slideContainer', slideContainer);
    
    slideContainer.$inject=['$ionicSlideBoxDelegate'];
    
    function slideContainer(){
    //Usage:
    //    <slide-container></slide-container>
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
      $scope.hello = 'Hello';
      $scope.activeTab = {text: 'language', index: 0};
    
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
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
               // data.slider is the instance of Swiper
               $scope.slider = data.slider;
               });
    
    $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
               console.log('Slide change is beginning');
               });
    
    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
               // note: the indexes are 0-based
               $scope.activeIndex = data.slider.activeIndex;
               $scope.previousIndex = data.slider.previousIndex;
               });
    }
  }
  })();*/

(function () {
    'use strict';

    angular
        .module('bif.slidecontainer')
        .directive('slideContainer', slideContainer);

    slideContainer.$inject = [];

    function slideContainer() {
        // Usage:
        //     <slidetest></slidetest>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: "js/slidecontainer.html",
            controller: slideController
        };
        return directive;

        function link(scope, element, attrs) {
        }

        slideController.$inject = ['$scope','$ionicSlideBoxDelegate','slideContainerService'];

        function slideController($scope,$ionicSlideBoxDelegate, slideContainerService) {
            $scope.options = {
                loop: false,
                speed: 500
            };

            $scope.intake = {
                'location': null,
                'client':{'name':'','phone':'','birthDate':'','address':'','socialSecurityNumber':'','email':'','city':'','state':'','zipCode':'','cellPhone':'','income':'', 'incomeType':'','hasSpouse':null},
                'receiveChildSupport':null,
                'spouse':{'name':'','phone':'','birthDate':'','address':'','socialSecurityNumber':'','email':'','city':'','state':'','zipCode':'','cellPhone':'','income':'', 'incomeType':'','shareAddress':null},
                'numberOfChildren':0,
                'numberOfChildrenReceivingSupport':null,
                'hasFiledBankruptcy':false,
                'whenWasBankruptcyFiled':null,
                'hasPaidFriends':false,
                'whoWasMoneyGivenTo':'',
                'howMuchMoneyWasGiven':'',
                'isOnThirdPartyDeed':false,
                'whoOwnsProperty':'',
                'howMuchIsPropertyWorth':'',
                'numberOfVehicles':0,
                'Automobiles':[
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':false,'currentAmountOwed': 0,'paymentAmount': 0},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':false,'currentAmountOwed': 0,'paymentAmount': 0},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':false,'currentAmountOwed': 0,'paymentAmount': 0},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':false,'currentAmountOwed': 0,'paymentAmount': 0},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':false,'currentAmountOwed': 0,'paymentAmount': 0},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':false,'currentAmountOwed': 0,'paymentAmount': 0},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':false,'currentAmountOwed': 0,'paymentAmount': 0}
                ],
                'numberOfProperties':0,
                'realEstate':[
                  {'hasSecondMortgage': false,'firstMortgageBalance':0, 'firstMortgagePayment':0,'secondMortgageBalance':0, 'secondMortgageMonthlyPayment':0},
                  {'hasSecondMortgage': false ,'firstMortgageBalance':0, 'firstMortgagePayment':0,'secondMortgageBalance':0, 'secondMortgageMonthlyPayment':0},
                  {'hasSecondMortgage': false ,'firstMortgageBalance':0, 'firstMortgagePayment':0,'secondMortgageBalance':0, 'secondMortgageMonthlyPayment':0},
                  {'hasSecondMortgage': false ,'firstMortgageBalance':0, 'firstMortgagePayment':0,'secondMortgageBalance':0, 'secondMortgageMonthlyPayment':0},
                  {'hasSecondMortgage': false ,'firstMortgageBalance':0, 'firstMortgagePayment':0,'secondMortgageBalance':0, 'secondMortgageMonthlyPayment':0},
                  {'hasSecondMortgage': false ,'firstMortgageBalance':0, 'firstMortgagePayment':0,'secondMortgageBalance':0, 'secondMortgageMonthlyPayment':0},
                  {'hasSecondMortgage': false ,'firstMortgageBalance':0, 'firstMortgagePayment':0,'secondMortgageBalance':0, 'secondMortgageMonthlyPayment':0}
                ],
                'isRenting':false,
                'rentAmount':0,
                'isLivingWithFamily':false,
                'hasMedicalDebt':false,
                'checkingAccountBalance':0,
                'savingsAccountBalance':0,
                'jointAccountsWithFamilyBalance':0,
                'stocksOrBondsValue':0,
                'retirement401kBalance':0,
                'householdFurnitureValue':0,
                'toolValue':0,
                'collectionAndJewelryValue':0,
                'otherMajorAssetValue':0,
                'heardFrom':null,
//
                'servedForeclosurePapers':false,
                'servedDebtLawsuit':false,
                'biggestConcern':'',
                'hasAnothersProperty':false,
                'hasSoldAssets':false,
                'hasPaidDebtToFamily':false,
                'isWagesGarnished':false,
                'hasFiledTaxReturns':false,
                'hasAssetBeenForeclosed':false,
                'isBehindOnCarPayment':false,
                'hasMadeLargePurchase':false,
                'hasTakenCashAdvance':false,
                'hasPaidOtherLawyers':false,
                'hasBeenOfficerOfCompany':false,
                'hasInheritanceNotReceived':false,
                'hasMaritalAgreement':false,
                'hasTaxRefundNotReceived':false,
                'isSuing':false,
                'hasLivedInFlorida':false,
                'hasDebtToCreditUnion':false,
                'hasTakenOutLoans':false,
                'isUsingCreditCards':false,
                'hasLivedInHouse4Years':false,
                'isReadyForFreshStart':false
            };

            $scope.createXMLDocument = function(){
              var doc = document.implementation.createDocument("","",null);
              var nameElem = doc.createElement("fullName");
              nameElem.innerHTML = 'Jacob Jackson';

              var addressElem = doc.createElement("address");
              addressElem.innerHTML =  '824 Maumee St';

              nameElem.append(addressElem);
 
                slideContainerService.sendXML(doc);
            }

            $scope.hasSameAddress = function(val){
              $scope.intake.spouse.shareAddress = val;

              if(val){
                $scope.intake.spouse.address = $scope.intake.client.address;
                $scope.intake.spouse.zipCode = $scope.intake.client.zipCode;
                $scope.intake.spouse.city = $scope.intake.client.city;
                $scope.intake.spouse.state = $scope.intake.client.state;
              }
            }

            $scope.receiveChildSupport = function(val){
              $scope.intake.receiveChildSupport = val;
            }

            $scope.isReadyForFreshStart = function(val){
              $scope.intake.isReadyForFreshStart = val;
            }

            $scope.hasLivedInHouse4Years = function(val){
              $scope.intake.hasLivedInHouse4Years = val;
            }

            $scope.isUsingCreditCards = function(val){
              $scope.intake.isUsingCreditCards = val;
            }

            $scope.hasTakenOutLoans = function(val){
              $scope.intake.hasTakenOutLoans = val;
            }

            $scope.hasDebtToCreditUnion = function(val){
              $scope.intake.hasDebtToCreditUnion = val;
            }

            $scope.hasLivedInFlorida = function(val){
              $scope.intake.hasLivedInFlorida = val;
            }

            $scope.isSuing = function(val){
              $scope.intake.isSuing = val;
            }

            $scope.hasTaxRefundNotReceived = function(val){
              $scope.intake.hasTaxRefundNotReceived = val;
            }

            $scope.hasMaritalAgreement = function(val){
              $scope.intake.hasMaritalAgreement = val;
            }

            $scope.hasInheritanceNotReceived = function(val){
              $scope.intake.hasInheritanceNotReceived = val;
            }
  
            $scope.hasBeenOfficerOfCompany = function(val){
              $scope.intake.hasBeenOfficerOfCompany = val;
            }

            $scope.hasPaidOtherLawyers = function(val){
              $scope.intake.hasPaidOtherLawyers = val;
            }

            $scope.hasTakenCashAdvance = function(val){
              $scope.intake.hasTakenCashAdvance = val;
            }

            $scope.hasMadeLargePurchase = function(val){
              $scope.intake.hasMadeLargePurchase = val;
            }

            $scope.isBehindOnCarPayment = function(val){
              $scope.intake.isBehindOnCarPayment = val;
            }

            $scope.hasAssetBeenForeclosed = function(val){
              $scope.intake.hasAssetBeenForeclosed = val;
            }

            $scope.hasFiledTaxReturns = function(val){
              $scope.intake.hasFiledTaxReturns = val;
            }

            $scope.isWagesGarnished = function(val){
              $scope.intake.isWagesGarnished = val;
            }

            $scope.hasPaidDebtToFamily = function(val){
              $scope.intake.hasPaidDebtToFamily = val;
            }

            $scope.hasSoldAssets = function(val){
              $scope.intake.hasSoldAssets = val;
            }

            $scope.hasAnothersProperty = function(val){
              $scope.intake.hasAnothersProperty = val;
            }

            $scope.servedForeclosurePapers = function(val){
              $scope.intake.servedForeclosurePapers = val;
            }

            $scope.servedDebtLawsuit = function(val){
              $scope.intake.servedDebtLawsuit = val;
            }

            $scope.nextSlide = function () {
                $scope.slider._slideNext();
            }

            $scope.previousSlide = function () {
                $scope.slider._slidePrev();
            }

            $scope.showSpouseArea = function () {
                if ($scope.intake.client.hasSpouse == 'yes') {
                    return true;
                }
                return false;
            }

            $scope.haveSpouse = function(answer){
                $scope.intake.client.hasSpouse = answer;
            }
            
            $scope.hasChildren = function(){
                if($scope.intake.numberOfChildren == 0){
                  return false;
                }

                return true;
            }

            $scope.setFiledBankruptcy = function(answer){
                $scope.intake.hasFiledBankruptcy = answer;
            }
            $scope.hasFiledBankruptcy = function(){
                if(!$scope.intake.hasFiledBankruptcy){
                  return false;
                }

                return true;
            }

            $scope.setHasPaidFriends = function(answer){
              $scope.intake.hasPaidFriends = answer;
            }

            $scope.hasPaidFriends = function(){
                if(!$scope.intake.hasPaidFriends){
                  return false;
                }

                return true;
            }

            $scope.setOnThirdPartyDeed = function(answer){
              $scope.intake.isOnThirdPartyDeed = answer;
            }

            $scope.isOnThirdPartyDeed = function(){
                if(!$scope.intake.isOnThirdPartyDeed){
                  return false;
                }

              return true;
            }

            $scope.hasVehicles = function(val){
                if($scope.intake.numberOfVehicles < val){
                  return false;
                }
                
                return true;
            }

            $scope.hasProperties = function(val){
                if($scope.intake.numberOfProperties < val){
                  return false;
                }

                return true;
            }

            $scope.setSecondMortgage = function(idx,val){
                $scope.intake.realEstate[idx-1].hasSecondMortgage = val;
            }

            $scope.hasSecondMortgage = function(idx){
                if($scope.intake.realEstate[idx-1].hasSecondMortgage == false){
                  return false;
                }
                return true;
            }

            $scope.setIsRenting = function(val){
              $scope.intake.isRenting = val;
            }

            $scope.setIsLivingWithFamily = function(val){
              $scope.intake.isLivingWithFamily = val;
            }

            $scope.setHasMedicalDebt = function(val){
              $scope.intake.hasMedicalDebt = val;
            }

            $scope.setServedForeclosure =function(val){
              $scope.intake.servedForeclosurePapers = val;
            }

            $scope.setServedDebtLawsuit = function(val){
              $scope.intake.servedDebtLawsuit = val;
            }
            
            $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
               // data.slider is the instance of Swiper
               $scope.slider = data.slider;
             });
        }
    }
})();
