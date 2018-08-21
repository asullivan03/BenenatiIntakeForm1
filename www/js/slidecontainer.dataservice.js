 (function(){
  angular
  .module('bif.slidecontainer')
  .factory('slideContainerService', slideContainerService);
  
  slideContainerService.$inject = [
                                   '$http',
                                   '$q',
                                   ];
  
  function slideContainerService($http,$q){
  var service={sendXML:sendXML};
  return service;
  
  
  
  //send xml function - start
  function sendXML(xml){
  
  var d = Date(Date.now()); //get todays date
  var d = d.toLocaleString('en-GB',{timezone:'UTC'}); //format
  d = d.replace(/\W/g, ''); //remove non alphanumeric values
  var fileName = "IntakeForm" + d + ".xml"; //create unique filename
  var pathToFile = cordova.file.dataDirectory + fileName; //variable for path
  
  //open file system within device
  window.resolveLocalFileSystemURL(cordova.file.dataDirectory,
                                   function (fs)
                                   {
                                   //success
                                   console.log('file system open: ' + fs.name);
                                   
                                   //filesystem exists, create file here
                                   fs.getFile(fileName,
                                              { create: true, exclusive: false },
                                              function (fileEntry)
                                              {
                                              //success
                                              console.log("fileEntry is file?" + fileEntry.isFile.toString());
                                              //create file was successful, write xml data to file
                                              writeFile(fileEntry, xml, pathToFile, fileName);
                                              },
                                              function(e)
                                              {
                                              //failure
                                              console.log(e);
                                              }
                                              );
                                   
                                   },
                                   function (e)
                                   {
                                   //failure
                                   console.log(e);
                                   });
  }
  //end
  
  //write to file- start
  function writeFile(fileEntry, dataObj, path, fileName) {
  // Create a FileWriter object for our FileEntry (log.txt).
  fileEntry.createWriter(function (fileWriter) {
                         
                         fileWriter.onwriteend = function() {
                         console.log("Successful file write...");
                         sendFile(path, fileName);
                         };
                         
                         fileWriter.onerror = function (e) {
                         console.log("Failed file write: " + e.toString());
                         };
                         
                         var data = new Blob([dataObj], {type: 'text/xml'});
                         fileWriter.write(data);
                         });
  }
  //write to file- end
  $scope.callCount = 0;
  //send -start
  function sendFile(path, fileName){
    
  window.cordova.plugin.ftp.connect('ftp.prevail.net', 'benenati', 'Q3a1H2d.ek', function(ok) {
                                    
                                    console.info("ftp: connect ok=" + ok);
                                    
                                    // You can do any ftp actions from now on...
                                    window.cordova.plugin.ftp.ls("/BETAKEY8", function(e){
                                                                 console.log("ls success", e);
                                                                 
                                                                 }, function(e){
                                                                 console.log("ls fail",e);
                                                                 
                                                                 });
                                    
                                    
                                    window.cordova.plugin.ftp.upload(path, "/BETAKEY8/" + fileName ,function(percent) {
                                                                     if (percent == 1) {
                                                                        console.info("ftp: upload finish");
                                                                       
                                                                     } else {
                                                                        console.debug("ftp: upload percent=" + percent * 100 + "%");
                                                                     }
                                                                     }, function(error) {
                                                                        console.error("ftp: upload error=" + error);
                                                                        
                                                                        //if fails, call again up to 3 times
                                                                        if($scope.callCount < 3){
                                                                            sendFile(path, fileName);
                                                                            $scope.callCount++;
                                                                        }
                                                                     });
                                    
                                    },
                                    function(error) {
                                    console.error("ftp: connect error=" + error);
                                    
                                    });
  }
  //send -end
  
  
  }
  })();

