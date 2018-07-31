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
 
            $scope.pictures = ['img/Client_Information_pic.png','img/Spouse_Information_pic.png','img/Vehicle_Information_pic.png','img/More_Information_pic.png',''];
            $scope.sectionNames = ['Client Information','Spouse Information','Assets','Client Information'];
            $scope.isSendingXml = true;
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
            $scope.currentStep = 1;
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

            $scope.currentHeight=0;
            $scope.currentSection = 1;
            $scope.currentStep = 0;
            $scope.calcVal = 0;
            $scope.lastPropertyStep = 0;
            $scope.lastVehicleStep = 0;
           $scope.setSelectedCircle = function(){
              for(var i = 1; i < 7; i++){
                if($scope.currentSection != i){
                  document.getElementById('selected-circle'+i).classList.remove("circle-border-not-selected");
                  document.getElementById('selected-circle'+i).classList.remove("circle-border-selected");
                  document.getElementById('selected-circle'+i).classList.add("circle-border-not-selected");
                }
                else{
                  document.getElementById('selected-circle'+i).classList.remove("circle-border-selected");
                  document.getElementById('selected-circle'+i).classList.remove("circle-border-not-selected");
                  document.getElementById('selected-circle'+i).classList.add("circle-border-selected");
                  if(i < 5){
                    document.getElementById('main-header-txt').innerHTML = $scope.sectionNames[i-1];
                  }
                  else{
                    document.getElementById('main-header-txt').innerHTML = '';
                  }
                }
              }
           }
            $scope.selectedImg = '';
          $scope.changePicture = function(){
              $scope.selectedImg = $scope.pictures[$scope.currentSection-1];    
          }
           $scope.nextSlide = function (section,step,val) {
                if(section == 2 && step == 20 && !$scope.intake.isOnThirdPartyDeed){
                    //set current progress bar
                    document.getElementById('progressBar'+$scope.currentSection).style.height = '100px';
                    $scope.currentSection=3;
                    $scope.currentStep=1;
                    $scope.currentHeight =0;
                    document.getElementById('selected-num-circle'+$scope.currentSection).style.backgroundColor="#5392cf";
                    $scope.setSelectedCircle();
                }
                else if(section == 3 && step == 2){
                  if($scope.intake.numberOfVehicles != 0){
                    $scope.calcVal = 25 / ($scope.intake.numberOfVehicles*7);
                    $scope.currentStep = step;
                  }
                  else
                  {
                    $scope.currentHeight = 25;
                    $scope.currentStep = 51;
                  }
                }
                else if(section == 3 && step == 52){
                  if($scope.intake.numberOfProperties != 0){
                    $scope.calcVal = 25/($scope.intake.numberOfProperties*5);
                    $scope.currentStep = step;
                  }
                  else
                  {
                    $scope.currentHeight = 50;
                    $scope.calcVal = 50/13;
                    $scope.currentStep = 87;
                  }
                }
                else if(section == 3 && step == 51){
                  document.getElementById('progressBar'+$scope.currentSection).style.height = '25px';
                  $scope.currentHeight = 25;
                  $scope.currentStep = step;
                }
                else if(section == 3 && ((step == 57 || step == 62 || step == 67 || step  == 72 || step == 77 || step == 82 && $scope.numberOfProperties == ((step-2)/5)-10) ||
                ((step == 55 || step == 60 || step == 65 || step == 70 || step == 75 || step == 80) && $scope.intake.realEstate[(step/5)-11].hasSecondMortgage == false))){
                    $scope.currentHeight = 50;
                    $scope.currentStep = 87;
                    $scope.calcVal = 50/13;
                    $scope.lastPropertyStep = step;
                }
                else if(section == 3 && (step == 9 || step == 16 || step == 23 || step == 30 || step == 37 || step == 44)){
                  if((step-2)/7 == $scope.intake.numberOfVehicles){
                    $scope.currentHeight = 25;
                    $scope.currentStep = 51;
                    $scope.lastVehicleStep = step;
                  }
                  else{
                    var stepDiff = step - $scope.currentStep;
                    $scope.currentStep = step;
                    var incrementVal = $scope.calcVal*stepDiff;
                    $scope.currentHeight += incrementVal;
                  }
                }
                else if(section > $scope.currentSection){
                  //Set current progress bar to full
                  document.getElementById('progressBar'+$scope.currentSection).style.height = '100px';
                  //Switch section
                  $scope.currentSection = section;
                  $scope.currentStep = step;
                  $scope.currentHeight = 0;
                  //todo
                  document.getElementById('selected-num-circle'+$scope.currentSection).style.backgroundColor="#5392cf";
                  $scope.setSelectedCircle();
                }
                else if(section == 3){
                  var stepDiff = step - $scope.currentStep;
                  $scope.currentStep = step;
                  var incrementVal = $scope.calcVal*stepDiff;
                  $scope.currentHeight += incrementVal;
                }
                else if(section == $scope.currentSection){
                  var stepDiff = step - $scope.currentStep;
                  $scope.currentStep = step;
                  var incrementVal = val*stepDiff;
                  $scope.currentHeight += incrementVal;
                }
                /*document.getElementById('main-step-txt').innerHTML = 'Step '+ step;*/
                if($scope.currentSection != 5){
                  document.getElementById('progressBar'+$scope.currentSection).style.height = $scope.currentHeight+'px';
                }
                $scope.slider._slideNext();
                $scope.changePicture();
            }

            $scope.previousSlide = function (section,step,val) {
                if(section == 3 && step ==86){
                  if($scope.intake.numberOfProperties != 0){
                    $scope.currentStep = $scope.lastPropertyStep;
                    $scope.calcVal = 25/($scope.intake.numberOfProperties*5);
                    $scope.currentHeight = 50-$scope.calcVal;
                  }
                  else{
                    $scope.currentHeight = 25;
                    $scope.currentStep = 51;
                    $scope.calcVal = 0;
                  }
                }
                else if(section == 3 && step ==50){
                  if($scope.intake.numberOfVehicles != 0){
                    $scope.currentStep = $scope.lastVehicleStep;
                    $scope.calcVal = 25 / ($scope.intake.numberOfVehicles*7);
                    $scope.currentHeight = 25-$scope.calcVal;
                  }
                  else{
                    $scope.currentStep = 1;
                    $scope.calcVal = 0;
                    $scope.currentHeight = 0;
                  }
                }
                else if(section == 3 && step == 99){
                  $scope.calcVal = 50/13;
                  document.getElementById('progressBar'+$scope.currentSection).style.height = '0px';
                  $scope.currentHeight = 100 - $scope.calcVal;
                  $scope.currentStep = step;
                  document.getElementById('selected-num-circle'+$scope.currentSection).style.backgroundColor="#C7C7C7";
                  $scope.currentSection = section;
                  $scope.setSelectedCircle();
                }
                else if(section == $scope.currentSection){
                  var stepDiff = $scope.currentStep - step;
                  $scope.currentStep = step;
                  var decrementVal;
                  if($scope.currentSection != 3){
                    decrementVal = val * stepDiff;
                  }
                  else{
                    decrementVal = $scope.calcVal * stepDiff;
                  }
                  $scope.currentHeight -= decrementVal;
                }
                else if(section < $scope.currentSection){
                    document.getElementById('progressBar'+$scope.currentSection).style.height = '0px';
                    $scope.currentHeight =100-val;
                    $scope.currentStep = step;  
                    document.getElementById('selected-num-circle'+$scope.currentSection).style.backgroundColor="#C7C7C7";
                    $scope.currentSection = section;
                    $scope.setSelectedCircle();
                }
                /*document.getElementById('main-step-txt').innerHTML = 'Step '+ step;*/
                document.getElementById('progressBar'+$scope.currentSection).style.height = $scope.currentHeight+'px';
                $scope.slider._slidePrev();
                $scope.changePicture();
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
