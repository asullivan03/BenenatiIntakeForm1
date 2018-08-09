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
                onlyExternal: false,
                noSwipingClass: 'swiper-no-swiping',
                loop: false,
                speed: 500
            };
 
      $scope.recieveChildSupportYesSelected = false;
      $scope.recieveChildSupportNoSelected = false;

      $scope.spouseYesSelected = false;
      $scope.spouseNoSelected = false;

			 $scope.sameAddressYesSelected = false;
			 $scope.sameAddressNoSelected = false;
 
			 $scope.filedYesSelected = false;
			 $scope.filedNoSelected = false;
 
			 $scope.paidFriendsYesSelected = false;
			 $scope.paidFriendsNoSelected = false;
 
			 $scope.deedYesSelected = false;
			 $scope.deedNoSelected = false;
 
			 $scope.secondMortgageYesSelected = [false, false, false, false, false, false, false];
			 $scope.secondMortgageNoSelected = [false, false, false, false, false, false, false];
 
			 $scope.rentingYesSelected = false;
			 $scope.rentingNoSelected = false;
 
			 $scope.livingffYesSelected = false;
			 $scope.livingffNoSelected = false;
 
			 $scope.medicalDebtYesSelected = false;
			 $scope.medicalDebtNoSelected = false;
 
 			 $scope.foreclosurePapersYesSelected = false;
			 $scope.foreclosurePapersNoSelected = false;
 
			 $scope.servedDebtYesSelected = false;
			 $scope.servedDebtNoSelected = false;


			 $scope.othersPropertyYesSelected = false;
			 $scope.othersPropertyNoSelected = false;
 
			 $scope.soldAssetsYesSelected = false;
			 $scope.soldAssetsNoSelected = false;
 
			 $scope.familyDebtYesSelected = false;
			 $scope.familyDebtNoSelected = false;
 
			 $scope.garnishYesSelected = false;
			 $scope.garnishNoSelected = false;
 
			 $scope.filedTaxYesSelected = false;
			 $scope.filedTaxNoSelected = false;
 
			 $scope.behindCarYesSelected = false;
			 $scope.behindCarNoSelected = false;
 
			 $scope.largePurchasesYesSelected = false;
			 $scope.largePurchasesNoSelected = false;
 
			 $scope.takenCashYesSelected = false;
			 $scope.takenCashNoSelected = false;
 
			 $scope.paidLawyerYesSelected = false;
			 $scope.paidLawyerNoSelected = false;
 
			 $scope.officerYesSelected = false;
			 $scope.officerNoSelected = false;
 
			 $scope.inheritanceYesSelected = false;
			 $scope.inheritanceNoSelected = false;
 
			 $scope.maritalAgreementYesSelected = false;
			 $scope.maritalAgreementNoSelected = false;
 
			 $scope.taxRefundYesSelected = false;
			 $scope.taxRefundNoSelected = false;
 
			 $scope.suingYesSelected = false;
			 $scope.suingNoSelected = false;
 
			 $scope.livedInFLYesSelected = false;
			 $scope.livedInFLNoSelected = false;
 
			 $scope.debtToCreditUnionYesSelected = false;
			 $scope.debtToCreditUnionNoSelected = false;
 
			 $scope.loansYesSelected = false;
			 $scope.loansNoSelected = false;
 
			 $scope.usingCCYesSelected = false;
			 $scope.usingCCNoSelected = false;
 
			 $scope.fourYearsHomeYesSelected = false;
			 $scope.fourYearsHomeNoSelected = false;
 
			 $scope.freshStartYesSelected = false;
			 $scope.freshStartNoSelected = false;
 
			 $scope.repossessYesSelected = false;
			 $scope.repossessNoSelected = false;
 
       $scope.englishSelected = false;
       $scope.spanishSelected = false;

       $scope.previousText = "Prev";
       $scope.nextText = "Next";
       $scope.yesText = "Yes";

            $scope.pictures = ['data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=','img/Client_Information_pic.png','img/Spouse_Information_pic.png','img/Vehicle_Information_pic.png','img/More_Information_pic.png',''];

            $scope.sectionNames = ['Welcome','Client Information','Spouse Information','Assets','Client Information'];
            $scope.isSendingXml = true;
            $scope.intake = {
                'language':'',
                'location': '',
                'client':{'firstName':'','middleName':'','lastName':'','areaCode':'','phone1':'','phone2':'','birthDate':'','address':'','socialSecurityNumber1':'','socialSecurityNumber2':'','socialSecurityNumber3':'','email':'','city':'','state':'','zipCode':'','cellAreaCode':'','cellPhone1':'','cellPhone2':'','income':'', 'incomeType':'','hasSpouse':''},
                'receiveChildSupport':'',
                'spouse':{'name':'','areaCode':'','phone1':'','phone2':'','birthDate':'','address':'','socialSecurityNumber1':'','socialSecurityNumber2':'','socialSecurityNumber3':'','email':'','city':'','state':'','zipCode':'','cellAreaCode':'','cellPhone1':'','cellPhone2':'','income':'', 'incomeType':'','shareAddress':''},
                'numberOfChildren':0,
                'numberOfChildrenReceivingSupport':'',
                'hasFiledBankruptcy':'',
                'whenWasBankruptcyFiled':'',
                'hasPaidFriends':'',
                'whoWasMoneyGivenTo':'',
                'howMuchMoneyWasGiven':'',
                'isOnThirdPartyDeed':'',
                'whoOwnsProperty':'',
                'howMuchIsPropertyWorth':'',
                'numberOfVehicles':0,
                'Automobiles':[
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':'','currentAmountOwed': '','paymentAmount': ''},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':'','currentAmountOwed': '','paymentAmount': ''},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':'','currentAmountOwed': '','paymentAmount': ''},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':'','currentAmountOwed': '','paymentAmount': ''},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':'','currentAmountOwed': '','paymentAmount': ''},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':'','currentAmountOwed': '','paymentAmount': ''},
                  {'year':'','make':'', 'model':'', 'mileage':'','payType':'','isPaidOff':'','currentAmountOwed': '','paymentAmount': ''}
                ],
                'numberOfProperties':0,
                'realEstate':[
                  {'hasSecondMortgage': '','firstMortgageBalance':'', 'firstMortgagePayment':'','secondMortgageBalance':'', 'secondMortgageMonthlyPayment':''},
                  {'hasSecondMortgage': '' ,'firstMortgageBalance':'', 'firstMortgagePayment':'','secondMortgageBalance':'', 'secondMortgageMonthlyPayment':''},
                  {'hasSecondMortgage': '' ,'firstMortgageBalance':'', 'firstMortgagePayment':'','secondMortgageBalance':'', 'secondMortgageMonthlyPayment':''},
                  {'hasSecondMortgage': '' ,'firstMortgageBalance':'', 'firstMortgagePayment':'','secondMortgageBalance':'', 'secondMortgageMonthlyPayment':''},
                  {'hasSecondMortgage': '' ,'firstMortgageBalance':'', 'firstMortgagePayment':'','secondMortgageBalance':'', 'secondMortgageMonthlyPayment':''},
                  {'hasSecondMortgage': '' ,'firstMortgageBalance':'', 'firstMortgagePayment':'','secondMortgageBalance':'', 'secondMortgageMonthlyPayment':''},
                  {'hasSecondMortgage': '' ,'firstMortgageBalance':'', 'firstMortgagePayment':'','secondMortgageBalance':'', 'secondMortgageMonthlyPayment':''}
                ],
                'isRenting':'',
                'rentAmount':'',
                'isLivingWithFamily':'',
                'hasMedicalDebt':'',
                'checkingAccountBalance':'',
                'savingsAccountBalance':'',
                'jointAccountsWithFamilyBalance':'',
                'stocksOrBondsValue':'',
                'retirement401kBalance':'',
                'householdFurnitureValue':'',
                'toolValue':'',
                'collectionAndJewelryValue':'',
                'otherMajorAssetValue':'',
                'heardFrom':'',
//
                'servedForeclosurePapers':'',
                'servedDebtLawsuit':'',
                'biggestConcern':'',
                'hasAnothersProperty':'',
                'hasSoldAssets':'',
                'hasPaidDebtToFamily':'',
                'isWagesGarnished':'',
                'hasFiledTaxReturns':'',
                'hasAssetBeenForeclosed':'',
                'isBehindOnCarPayment':'',
                'hasMadeLargePurchase':'',
                'hasTakenCashAdvance':'',
                'hasPaidOtherLawyers':'',
                'hasBeenOfficerOfCompany':'',
                'hasInheritanceNotReceived':'',
                'hasMaritalAgreement':'',
                'hasTaxRefundNotReceived':'',
                'isSuing':'',
                'hasLivedInFlorida':'',
                'hasDebtToCreditUnion':'',
                'hasTakenOutLoans':'',
                'isUsingCreditCards':'',
                'hasLivedInHouse4Years':'',
                'isReadyForFreshStart':''
            };
            
            $scope.checkNumber = function(val){
              if(Number.isInteger($scope.intake[val])){
                return true;
              }
              else{
                return false;
              }
            }
            
            $scope.inputFocusIn = function(){
              setTimeout(function(){
              $('input').focus(function(e){
                  $('#restart-footer').css('opacity',0);
              });
              $('input').blur(function(e){
                $('#restart-footer').animate({'opacity':1});
            });

            document.getElementById('main-header-txt').innerHTML ="Welcome";
            $('#restart-footer').animate({'opacity':0});
            $('.progress-area').animate({'opacity':0});
            $scope.originalIntake = $scope.intake;
              },1000);
            }

            $scope.inputFocusIn();
            $scope.restartForm = function(){
              $scope.intake = $scope.originalIntake;
              $scope.slider._slideTo(0);
            }

            $scope.currentStep = 1;
            $scope.createXMLDocument = function(){
              var XML = new XMLWriter('UTF-8');
              XML.writeStartDocument();
              XML.writeStartElement('prevail');
                XML.writeStartElement('matter');
                  XML.writeElementString('lawtype','bankruptcy');
                  XML.writeStartElement('additionalInformation');
                    XML.writeString('Number of Children: ' + $scope.intake.numberOfChildren + '\n');
                    XML.writeString('Number of Children Receiving Child Support ' + $scope.intake.numberOfChildrenReceivingSupport + '\n');
                    XML.writeComment('Spouse Information');
                    XML.writeString('Has Spouse? ' + $scope.intake.client.hasSpouse + '\n');
                    if($scope.intake.client.hasSpouse == 'yes'){
                      XML.writeString('Spouse Name: ' + $scope.intake.spouse.name +'\n' );
                      XML.writeString('Spouse Phone:  (' + $scope.intake.spouse.areaCode + ')' + $scope.intake.spouse.phone1 + '-' + $scope.intake.spouse.phone2 + '\n');
                      XML.writeString('Spouse birthDate: ' + $scope.intake.spouse.birthDate + '\n');
                      XML.writeString('Spouse Address: ' + $scope.intake.spouse.address + '\n');
                      XML.writeString('Spouse Social Security Number: ' + $scope.intake.client.socialSecurityNumber1 + '-' + $scope.intake.client.socialSecurityNumber2 + '-' + $scope.intake.client.socialSecurityNumber3 + '\n');
                      XML.writeString('Spouse Email: ' + $scope.intake.spouse.email +'\n');
                      XML.writeString('Spouse City: ' + $scope.intake.spouse.city + '\n');
                      XML.writeString('Spouse State: ' + $scope.intake.spouse.state + '\n');
                      XML.writeString('Spouse ZipCode: ' + $scope.intake.spouse.zipCode + '\n');
                      XML.writeString('Spouse CellPhone: (' + $scope.intake.spouse.cellAreaCode + ')' + $scope.intake.spouse.cellPhone1 + '-' + $scope.intake.spouse.cellPhone2 + '\n');
                      XML.writeString('Spouse Income: ' + $scope.intake.spouse.income + '\n');
                      XML.writeString('Spouse Income Type: ' + $scope.intake.spouse.incomeType + '\n');
                    }
                    XML.writeString('Has Filed Bankruptcy? ' + $scope.intake.hasFiledBankruptcy + '\n');
                    if($scope.intake.hasFiledBankruptcy == 'yes'){
                      XML.writeString('Bankruptcy File Date: ' + $scope.intake.whenWasBankruptcyFiled + '\n');
                    }
                    XML.writeString('Has Given money to family or friends? ' + $scope.intake.hasPaidFriends + '\n');
                    if($scope.intake.hasPaidFriends == 'yes'){
                      XML.writeString('Who was the money given to? ' + $scope.intake.whoWasMoneyGivenTo + '\n');
                      XML.writeString('How much money was given? ' + $scope.intake.howMuchMoneyWasGiven + '\n');
                    }
                    XML.writeString('Are you on a deed to a third party? ' + $scope.intake.isOnThirdPartyDeed + '\n');
                    if($scope.intake.isOnThirdPartyDeed == 'yes'){
                      XML.writeString('Who owns the property? ' + $scope.intake.whoOwnsProperty + '\n');
                      XML.writeString('How much is the property worth? ' + $scope.intake.howMuchIsPropertyWorth + '\n');
                    }
                    XML.writeComment('Automobile Information');
                    XML.writeString('How many vehicles do you own? ' + $scope.intake.numberOfVehicles + '\n');
                    for(var i = 0; i < $scope.intake.numberOfVehicles; i++){
                        XML.writeString('Vehicle #'+ (i+1) + ' year: ' + $scope.intake.Automobiles[i].year);
                        XML.writeString('Vehicle #'+ (i+1) + ' make: ' + $scope.intake.Automobiles[i].make);
                        XML.writeString('Vehicle #'+ (i+1) + ' model: ' + $scope.intake.Automobiles[i].model);
                        XML.writeString('Vehicle #'+ (i+1) + ' mileage: ' + $scope.intake.Automobiles[i].mileage);
                        XML.writeString('Vehicle #'+ (i+1) + ' payment type: ' + $scope.intake.Automobiles[i].payType);
                        XML.writeString('Vehicle #'+ (i+1) + ' current amount owed: ' + $scope.intake.Automobiles[i].currentAmountOwed);
                        XML.writeString('Vehicle #'+ (i+1) + ' payment amount: ' + $scope.intake.Automobiles[i].paymentAmount);
                    }
                    XML.writeComment('Real Estate Information');
                    XML.writeString('How many properties do you own? ' + $scope.intake.numberOfProperties + '\n');
                    for(var i = 0; i < $scope.intake.numberOfProperties; i++){
                      XML.writeString('Property #'+ (i+1) + ' first mortgage balance: ' + $scope.intake.realEstate[i].firstMortgageBalance + '\n');
                      XML.writeString('Property #'+ (i+1) + ' first mortgage payment: ' + $scope.intake.realEstate[i].firstMortgagePayment + '\n');
                      XML.writeString('Does Property #'+ (i+1) + ' have a second mortgage? ' + $scope.intake.realEstate[i].hasSecondMortgage + '\n');
                      if($scope.intake.realEstate[i].hasSecondMortgage == 'yes'){
                        XML.writeString('Property #'+ (i+1) + ' second mortgage balance: ' + $scope.intake.realEstate[i].secondMortgageBalance + '\n');
                        XML.writeString('Property #'+ (i+1) + ' second mortgage payment: ' + $scope.intake.realEstate[i].secondMortgagePayment + '\n');
                      }
                    }
                    XML.writeString('Renting: '+ $scope.intake.isRenting + '\n');
                    if($scope.intake.isRenting == 'yes'){
                      XML.writeString('Rent Amount: ' + $scope.intake.rentAmount + '\n');
                    }
                    XML.writeString('Living with friends or family: ' + $scope.intake.isLivingWithFamily + '\n');
                    XML.writeString('Medical Debt: ' + $scope.intake.hasMedicalDebt + '\n');
                    XML.writeString('Checking Account Balance: ' + $scope.intake.checkingAccountBalance + '\n');
                    XML.writeString('Savings Account Balance: ' + $scope.intake.savingsAccountBalance + '\n');
                    XML.writeString('Joint Accounts with Family Balance: ' + $scope.intake.jointAccountsWithFamilyBalance + '\n');
                    XML.writeString('Stocks or Bonds Value: ' + $scope.intake.stocksOrBondsValue + '\n');
                    XML.writeString('Retirement401k Balance: ' + $scope.intake.retirement401kBalance + '\n');
                    XML.writeString('Household Furniture Value: ' + $scope.intake.householdFurnitureValue + '\n');
                    XML.writeString('Tool Value: ' + $scope.intake.toolValue + '\n');
                    XML.writeString('Collections and Jewelry Value: ' + $scope.intake.collectionAndJewelryValue + '\n');
                    XML.writeString('Other Major Asset Value: ' + $scope.intake.otherMajorAssetValue + '\n');
                    XML.writeComment('Other Information');
                    XML.writeString('How did you hear of us? ' + $scope.intake.heardFrom + '\n');
                    XML.writeString('Served forclosure papers: ' + $scope.intake.servedForeclosurePapers + '\n');
                    XML.writeString('Served a debt lawsuit: ' + $scope.intake.servedDebtLawsuit + '\n');
                    XML.writeString('Biggest concern: ' + $scope.intake.biggestConcern + '\n');
                    XML.writeString('Has possession or title of anothers property: ' + $scope.intake.hasAnothersProperty+ '\n');
                    XML.writeString('Has sold assets in the past 2 years: '+ $scope.intake.hasSoldAssets + '\n');
                    XML.writeString('Has paid family on debt owed in the past year: ' + $scope.intake.hasPaidDebtToFamily + '\n');
                    XML.writeString('Is creditor garnishing wages: ' + $scope.intake.isWagesGarnished + '\n');
                    XML.writeString('Has filed all tax returns: ' + $scope.intake.hasFiledTaxReturns + '\n');
                    XML.writeString('House, car or any asset foreclosed or repossessed: ' + $scope.intake.hasAssetBeenForeclosed + '\n');
                    XML.writeString('Behind on car or house payment: ' + $scope.intake.isBehindOnCarPayment + '\n');
                    XML.writeString('Any large purchases in that past 90 days: ' + $scope.intake.hasMadeLargePurchase + '\n');
                    XML.writeString('Has taken cash advances from credit cards in the past 90 days: ' + $scope.intake.hasTakenCashAdvance + '\n');
                    XML.writeString('Has paid lawyer for advice on debts or bankruptcy: ' + $scope.intake.hasPaidOtherLawyers + '\n'); 
                    XML.writeString('Has been officer or partner of business in the past 6 years: ' + $scope.intake.hasBeenOfficerOfCompany + '\n');
                    XML.writeString('Has inheritance not received: ' + $scope.intake.hasInheritanceNotReceived + '\n');
                    XML.writeString('Owe money for marital agreement or judgment of divorce: ' + $scope.intake.hasMaritalAgreement + '\n');
                    XML.writeString('Has tax refund that has not been received: ' + $scope.intake.hasTaxRefundNotReceived + '\n');
                    XML.writeString('Is currently suing someone: ' + $scope.intake.isSuing + '\n');
                    XML.writeString('Has lived in Florida for past 2 years: ' + $scope.intake.hasLivedInFlorida + '\n' );
                    XML.writeString('Owes money to credit union: ' + $scope.intake.hasDebtToCreditUnion + '\n');
                    XML.writeString('Has taken loans from retirement savings in the past 6 months: ' + $scope.hasTakenOutLoans + '\n');
                    XML.writeString('Still using credit cards: ' + $scope.intake.isUsingCreditCards + '\n');
                    XML.writeString('Lived in mortgaged home for less than 4 years: ' + $scope.intake.hasLivedInHouse4Years + '\n');
                    XML.writeString('Ready for fresh start: ' + $scope.intake.isReadyForFreshStart + '\n');
                  XML.writeEndElement();
                XML.writeEndElement();
                XML.writeStartElement('rolodex');
                  XML.writeElementString('first name', $scope.intake.client.name);
                  XML.writeElementString('middle name', $scope.intake.client.name);
                  XML.writeElementString('last name', $scope.intake.client.name);
                  XML.writeElementString('ss', $scope.intake.client.socialSecurityNumber1 + '-' + $scope.intake.client.socialSecurityNumber2 + '-' + $scope.intake.client.socialSecurityNumber3);
                  XML.writeElementString('dob', $scope.intake.client.birthDate);
                  XML.writeElementString('address',$scope.intake.client.address);
                  XML.writeElementString('city', $scope.intake.client.city);
                  XML.writeElementString('state', $scope.intake.client.state);
                  XML.writeElementString('zipcode', $scope.intake.client.zipCode);
                  XML.writeElementString('phone1', '(' + $scope.intake.client.areaCode + ')' + $scope.intake.client.phone1 + '-' + $scope.intake.client.phone2);
                  XML.writeElementString('phone2', '(' + $scope.intake.client.cellAreaCode + ')' + $scope.intake.client.cellPhone1 + '-' + $scope.intake.client.cellPhone2);
                  XML.writeElementString('email', $scope.intake.client.email);
                  XML.writeElementString('referralsource1', $scope.intake.heardFrom);
                XML.writeEndElement();
              XML.writeEndElement();
              /*var doc = document.implementation.createDocument("","",null);
              var nameElem = doc.createElement("fullName");
              nameElem.innerHTML = 'Jacob Jackson';

              var addressElem = doc.createElement("address");
              addressElem.innerHTML =  '824 Maumee St';

              nameElem.append(addressElem);*/
 
                slideContainerService.sendXML(XML);
            }

            $scope.hasSameAddress = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.sameAddressYesSelected = true;
					 $scope.sameAddressNoSelected = false;
				 }
				 else
				 {
					 $scope.sameAddressYesSelected = false;
					 $scope.sameAddressNoSelected = true;
				 }
 
				 //set intake form data
              	$scope.intake.spouse.shareAddress = val;

              if(val){
                $scope.intake.spouse.address = $scope.intake.client.address;
                $scope.intake.spouse.zipCode = $scope.intake.client.zipCode;
                $scope.intake.spouse.city = $scope.intake.client.city;
                $scope.intake.spouse.state = $scope.intake.client.state;
              }
            }

            $scope.receiveChildSupport = function(val){
                 //apply variables for ng-class
                 if(val == 'yes')
                 {
                     $scope.recieveChildSupportYesSelected = true;
                     $scope.recieveChildSupportNoSelected = false;
                 }
                 else
                 {
                     $scope.recieveChildSupportYesSelected = false;
                     $scope.recieveChildSupportNoSelected = true;
                 }
 
                 //set intake form data
                  $scope.intake.receiveChildSupport = val;
            }

            $scope.isReadyForFreshStart = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.freshStartYesSelected = true;
					 $scope.freshStartNoSelected = false;
				 }
				 else
				 {
					 $scope.freshStartYesSelected = false;
					 $scope.freshStartNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.isReadyForFreshStart = val;
            }

            $scope.hasLivedInHouse4Years = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.fourYearsHomeYesSelected = true;
					 $scope.fourYearsHomeNoSelected = false;
				 }
				 else
				 {
					 $scope.fourYearsHomeYesSelected = false;
					 $scope.fourYearsHomeNoSelected = true;
				 }
 
				 //set intake form data
				 $scope.intake.hasLivedInHouse4Years = val;
            }

            $scope.isUsingCreditCards = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.usingCCYesSelected = true;
					 $scope.usingCCNoSelected = false;
				 }
				 else
				 {
					 $scope.usingCCYesSelected = false;
					 $scope.usingCCNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.isUsingCreditCards = val;
            }

            $scope.hasTakenOutLoans = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.loansYesSelected = true;
					 $scope.loansNoSelected = false;
				 }
				 else
				 {
					 $scope.loansYesSelected = false;
					 $scope.loansNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasTakenOutLoans = val;
            }

            $scope.hasDebtToCreditUnion = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.debtToCreditUnionYesSelected = true;
					 $scope.debtToCreditUnionNoSelected = false;
				 }
				 else
				 {
					 $scope.debtToCreditUnionYesSelected = false;
					 $scope.debtToCreditUnionNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasDebtToCreditUnion = val;
            }

            $scope.hasLivedInFlorida = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.livedInFLYesSelected = true;
					 $scope.livedInFLNoSelected = false;
				 }
				 else
				 {
					 $scope.livedInFLYesSelected = false;
					 $scope.livedInFLNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasLivedInFlorida = val;
            }

            $scope.isSuing = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.suingYesSelected = true;
					 $scope.suingNoSelected = false;
				 }
				 else
				 {
					 $scope.suingYesSelected = false;
					 $scope.suingNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.isSuing = val;
            }

        $scope.hasTaxRefundNotReceived = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.taxRefundYesSelected = true;
					 $scope.taxRefundNoSelected = false;
				 }
				 else
				 {
					 $scope.taxRefundYesSelected = false;
					 $scope.taxRefundNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasTaxRefundNotReceived = val;
            }

            $scope.hasMaritalAgreement = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.maritalAgreementYesSelected = true;
					 $scope.maritalAgreementNoSelected = false;
				 }
				 else
				 {
					 $scope.maritalAgreementYesSelected = false;
					 $scope.maritalAgreementNoSelected = true;
				 }
 
				 //set intake form data
              	$scope.intake.hasMaritalAgreement = val;
            }

            $scope.hasInheritanceNotReceived = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.inheritanceYesSelected = true;
					 $scope.inheritanceNoSelected = false;
				 }
				 else
				 {
					 $scope.inheritanceYesSelected = false;
					 $scope.inheritanceNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasInheritanceNotReceived = val;
            }
  
            $scope.hasBeenOfficerOfCompany = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.officerYesSelected = true;
					 $scope.officerNoSelected = false;
				 }
				 else
				 {
					 $scope.officerYesSelected = false;
					 $scope.officerNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasBeenOfficerOfCompany = val;
            }

            $scope.hasPaidOtherLawyers = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.paidLawyerYesSelected = true;
					 $scope.paidLawyerNoSelected = false;
				 }
				 else
				 {
					 $scope.paidLawyerYesSelected = false;
					 $scope.paidLawyerNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasPaidOtherLawyers = val;
            }

            $scope.hasTakenCashAdvance = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.takenCashYesSelected = true;
					 $scope.takenCashNoSelected = false;
				 }
				 else
				 {
					 $scope.takenCashYesSelected = false;
					 $scope.takenCashNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasTakenCashAdvance = val;
            }

            $scope.hasMadeLargePurchase = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.largePurchasesYesSelected = true;
					 $scope.largePurchasesNoSelected = false;
				 }
				 else
				 {
					 $scope.largePurchasesYesSelected = false;
					 $scope.largePurchasesNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasMadeLargePurchase = val;
            }

            $scope.isBehindOnCarPayment = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.behindCarYesSelected = true;
					 $scope.behindCarNoSelected = false;
				 }
				 else
				 {
					 $scope.behindCarYesSelected = false;
					 $scope.behindCarNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.isBehindOnCarPayment = val;
            }

            $scope.hasAssetBeenForeclosed = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.repossessYesSelected = true;
					 $scope.repossessNoSelected = false;
				 }
				 else
				 {
					 $scope.repossessYesSelected = false;
					 $scope.repossessNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasAssetBeenForeclosed = val;
            }

            $scope.hasFiledTaxReturns = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.filedTaxYesSelected = true;
					 $scope.filedTaxNoSelected = false;
				 }
				 else
				 {
					 $scope.filedTaxYesSelected = false;
					 $scope.filedTaxNoSelected = true;
				 }
 
				 //set intake form data
              	$scope.intake.hasFiledTaxReturns = val;
            }

            $scope.isWagesGarnished = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.garnishYesSelected = true;
					 $scope.garnishNoSelected = false;
				 }
				 else
				 {
					 $scope.garnishYesSelected = false;
					 $scope.garnishNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.isWagesGarnished = val;
            }

            $scope.hasPaidDebtToFamily = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.familyDebtYesSelected = true;
					 $scope.familyDebtNoSelected = false;
				 }
				 else
				 {
					 $scope.familyDebtYesSelected = false;
					 $scope.familyDebtNoSelected = true;
				 }
 
				 //set intake form data
              	$scope.intake.hasPaidDebtToFamily = val;
            }

            $scope.hasSoldAssets = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.soldAssetsYesSelected = true;
					 $scope.soldAssetsNoSelected = false;
				 }
				 else
				 {
					 $scope.soldAssetsYesSelected = false;
					 $scope.soldAssetsNoSelected = true;
				 }
 
				 //set intake form data
              	$scope.intake.hasSoldAssets = val;
            }

            $scope.hasAnothersProperty = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.othersPropertyYesSelected = true;
					 $scope.othersPropertyNoSelected = false;
				 }
				 else
				 {
					 $scope.othersPropertyYesSelected = false;
					 $scope.othersPropertyNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasAnothersProperty = val;
            }

            $scope.servedForeclosurePapers = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.foreclosurePapersYesSelected = true;
					 $scope.foreclosurePapersNoSelected = false;
				 }
				 else
				 {
					 $scope.foreclosurePapersYesSelected = false;
					 $scope.foreclosurePapersNoSelected = true;
				 }
				 $scope.intake.servedForeclosurePapers = val;
            }

            $scope.servedDebtLawsuit = function(val){
              $scope.intake.servedDebtLawsuit = val;
            }

            $scope.currentHeight=0;
            $scope.currentSection = 0;
            $scope.currentStep = 0;
            $scope.calcVal = 0;
            $scope.lastPropertyStep = 0;
            $scope.lastVehicleStep = 0;
           $scope.setSelectedCircle = function(){
              for(var i = 1; i < 6; i++){
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
                    document.getElementById('main-header-txt').innerHTML = $scope.sectionNames[i];
                  }
                  else{
                    document.getElementById('main-header-txt').innerHTML = '';
                  }
                }
              }
           }
            $scope.selectedImg = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
          $scope.changePicture = function(){
              $scope.selectedImg = $scope.pictures[$scope.currentSection];    
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
                  if($scope.currentSection > 0){
                    document.getElementById('progressBar'+$scope.currentSection).style.height = '100px';
                  }
                  //Switch section
                  $scope.currentSection = section;
                  $scope.currentStep = step;
                  $scope.currentHeight = 0;
                  //todo
                  $('.progress-area').animate({'opacity':1});
                  $('#restart-footer').animate({'opacity':1});
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
                if($scope.currentSection != 5 && $scope.currentSection != 0){
                  document.getElementById('progressBar'+$scope.currentSection).style.height = $scope.currentHeight+'px';
                }
                $scope.slider._slideNext();
                $scope.changePicture();

                if($scope.currentSection == 5){
                  $scope.createXMLDocument ();
                }
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
                if($scope.currentSection > 0){
                  document.getElementById('progressBar'+$scope.currentSection).style.height = $scope.currentHeight+'px';
                }
                else{
                  document.getElementById('main-header-txt').innerHTML ="Welcome";
                  $('.progress-area').animate({'opacity':0});
                  $('#restart-footer').animate({'opacity':0});
                }
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
				 //apply variables for ng-class
				 if(answer == 'yes')
				 {
					 $scope.spouseYesSelected = true;
					 $scope.spouseNoSelected = false;
				 }
				 else
				 {
					 $scope.spouseYesSelected = false;
					 $scope.spouseNoSelected = true;
				 }
 
 				//set intake form data
                $scope.intake.client.hasSpouse = answer;
            }
            
            $scope.hasChildren = function(){
                if($scope.intake.numberOfChildren == 0){
                  return false;
                }

                return true;
            }

            $scope.setFiledBankruptcy = function(answer){
			     //apply variables for ng-class
				 if(answer == true)
				 {
					 $scope.filedYesSelected = true;
					 $scope.filedNoSelected = false;
				 }
				 else
				 {
					 $scope.filedYesSelected = false;
					 $scope.filedNoSelected = true;
				 }
 
				 //set intake form data
                $scope.intake.hasFiledBankruptcy = answer;
            }
            $scope.hasFiledBankruptcy = function(){
                if(!$scope.intake.hasFiledBankruptcy){
                  return false;
                }

                return true;
            }

            $scope.setHasPaidFriends = function(answer){
				 //apply variables for ng-class
				 if(answer == true)
				 {
					 $scope.paidFriendsYesSelected = true;
					 $scope.paidFriendsNoSelected = false;
				 }
				 else
				 {
					 $scope.paidFriendsYesSelected = false;
					 $scope.paidFriendsNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasPaidFriends = answer;
            }

            $scope.hasPaidFriends = function(){
                if(!$scope.intake.hasPaidFriends){
                  return false;
                }

                return true;
            }

            $scope.setOnThirdPartyDeed = function(answer){
				 //apply variables for ng-class
				 if(answer == true)
				 {
					 $scope.deedYesSelected = true;
					 $scope.deedNoSelected = false;
				 }
				 else
				 {
					 $scope.deedYesSelected = false;
					 $scope.deedNoSelected = true;
				 }
 
				 //set intake form data
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
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.secondMortgageYesSelected[idx] = true;
					 $scope.secondMortgageNoSelected[idx] = false;
				 }
				 else
				 {
					 $scope.secondMortgageYesSelected[idx] = false;
					 $scope.secondMortgageNoSelected[idx] = true;
				 }
 
				 //set intake form data
			     $scope.intake.realEstate[idx-1].hasSecondMortgage = val;
            }

            $scope.hasSecondMortgage = function(idx){
                if($scope.intake.realEstate[idx-1].hasSecondMortgage == false){
                  return false;
                }
                return true;
            }

            $scope.setIsRenting = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.rentingYesSelected = true;
					 $scope.rentingNoSelected = false;
				 }
				 else
				 {
					 $scope.rentingYesSelected = false;
					 $scope.rentingNoSelected = true;
				 }
 
 				//set intake form data
              	$scope.intake.isRenting = val;
            }

            $scope.setIsLivingWithFamily = function(val){
				 //apply variables for ng-class
				 if(val == 'yes')
				 {
					 $scope.livingffYesSelected = true;
					 $scope.livingffNoSelected = false;
				 }
				 else
				 {
					 $scope.livingffYesSelected = false;
					 $scope.livingffNoSelected = true;
				 }
 
				 //set intake form data
				 $scope.intake.isLivingWithFamily = val;
            }

            $scope.setHasMedicalDebt = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
				 $scope.medicalDebtYesSelected = true;
				 $scope.medicalDebtNoSelected = false;
				 }
				 else
				 {
				 $scope.medicalDebtYesSelected = false;
				 $scope.medicalDebtNoSelected = true;
				 }
 
				 //set intake form data
              	 $scope.intake.hasMedicalDebt = val;
            }

            $scope.setServedForeclosure =function(val){
 
 
				 //set intake form data
              	$scope.intake.servedForeclosurePapers = val;
            }

            $scope.setServedDebtLawsuit = function(val){
				 //apply variables for ng-class
				 if(val == true)
				 {
					 $scope.servedDebtYesSelected = true;
					 $scope.servedDebtNoSelected = false;
				 }
				 else
				 {
					 $scope.servedDebtYesSelected = false;
					 $scope.servedDebtNoSelected = true;
				 }
 
				 //set intake form data
              	$scope.intake.servedDebtLawsuit = val;
            }

        //set language
        $scope.languageSelect = function(val){
          //apply variables for ng-class
          if(val == 'English')
          {
            $scope.englishSelected = true;
            $scope.spanishSelected = false;

            //set prev/next button text based on language
            $scope.previousText = "Prev";
            $scope.nextText = "Next";
            $scope.yesText = "Yes";
          }
          else
          {
            $scope.englishSelected = false;
            $scope.spanishSelected = true;

            //set prev/next button text based on language
            $scope.previousText = "Anterior";
            $scope.nextText = "Próximo";
            $scope.yesText = "Sí";
          }
          //set intake form data
          $scope.intake.language = val;
        }

        //set income type
        $scope.changeIncomeType = function(val){
            $scope.intake.client.incomeType = val; 
        }

        //set spouse income type
        $scope.changeSpouseIncomeType = function(val){
            $scope.intake.spouse.incomeType = val; 
        }

        //set auto pay type
        $scope.changeAutoPayType = function(val, index){
            $scope.intake.Automobiles[index].payType = val; 
        }
            
        //set heard from 
        $scope.changeHeardFrom = function(val){
            $scope.intake.heardFrom = val; 
        }

            $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
				// data.slider is the instance of Swiper
               	$scope.slider = data.slider;
             });
        }
    }
})();
