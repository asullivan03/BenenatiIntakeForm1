(function(){
    angular
        .module('bif.slidecontainer')
        .factory('slideContainerService', slideContainerService);
 
    slideContainerService.$inject = [
        '$http',
         '$q'
    ];
 
 function slideContainerService($http,$q){
 var service={sendXML:sendXML};
    return service;
 
 var logOb;
 function sendXML(xml){
 
 var fileName = "intakeXml3.xml";
        //save file to cordova
 window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fs) {
                          
                          console.log('file system open: ' + fs.name);
                          fs.getFile(fileName, { create: true, exclusive: false }, function (fileEntry) {
                                          
                                          console.log("fileEntry is file?" + fileEntry.isFile.toString());
                                          // fileEntry.name == 'someFile.txt'
                                          // fileEntry.fullPath == '/someFile.txt'
                                          //writeFile(fileEntry, xml);
                                     logOb = fileEntry;
                                     writeLog(xml);
                                     }, function(e){});
                          
                          }, function (e){});
 

 var pathToFile = cordova.file.dataDirectory + fileName;
 
 
        window.cordova.plugin.ftp.connect('ftp.prevail.net', 'benenati', 'Q3a1H2d.ek', function(ok) {
        console.info("ftp: connect ok=" + ok);
                                   
       // You can do any ftp actions from now on...
       window.cordova.plugin.ftp.upload(pathToFile, '/BETAKEY8', function(percent) {
                                        if (percent == 1) {
                                        console.info("ftp: upload finish");
                                        } else {
                                        console.debug("ftp: upload percent=" + percent * 100 + "%");
                                        }
                                        }, function(error) {
                                        console.error("ftp: upload error=" + error);
                                        });
       
       }, function(error) {
       console.error("ftp: connect error=" + error);
       });
 }
 
 function writeFile(fileEntry, dataObj) {
 // Create a FileWriter object for our FileEntry (log.txt).
 fileEntry.createWriter(function (fileWriter) {
                        
                        fileWriter.onwriteend = function() {
                        console.log("Successful file write...");
                        //readFile(fileEntry);
                        };
                        
                        fileWriter.onerror = function (e) {
                        console.log("Failed file write: " + e.toString());
                        };
                        
                        // If data object is not passed in,
                        // create a new Blob instead.
//                        if (!dataObj) {
//                        dataObj = new Blob(['some file data'], { type: 'text/plain' });
//                        }
                        
                        fileWriter.write(dataObj);
                        });
 }
 
 
 function writeLog(str) {
 if(!logOb) return;
 var log = str + " [" + (new Date()) + "]\n";
 console.log("going to log "+log);
 logOb.createWriter(function(fileWriter) {
                    
                    fileWriter.seek(fileWriter.length);
                    
                    var blob = new Blob([log], {type:'text/xml'});
                    fileWriter.write(blob);
                    console.log("ok, in theory i worked");
                    }, function(e){console.log(e);});
 }
// function sendXML(xml){
// return $http.get("ftp://benenati:Q3a1H2d.ek@ftp.prevail.net/BETAKEY8" )
// .success(
//          function(res){
//          return res;
//          }
// ).error(
//
//         function(res){
//         return $q.reject(res);
//         }
// );
//    }
 }
 })();
