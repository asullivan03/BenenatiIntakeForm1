  (function(){
  angular
  .module('bif.slidecontainer')
  .factory('slideContainerService', slideContainerService);
  
  slideContainerService.$inject = [
    '$http',
    '$q',
    ];
  
function slideContainerService($http,$q){
  var service =
    {
      sendXML:sendXML,
      openConnection: openConnection
    };
  var callCount = 0;
  return service;
  
  //send xml function - start
  function sendXML(xml){
  
    var d = Date(Date.now()); //get todays date
    var d = d.toLocaleString('en-GB',{timezone:'UTC'}); //format
    d = d.replace(/\W/g, ''); //remove non alphanumeric values
    var fileName = "IntakeForm" + d + ".xml"; //create unique filename
    var pathToFile = cordova.file.documentsDirectory + fileName; //variable for path
  
    //open file system within device
    window.resolveLocalFileSystemURL(cordova.file.documentsDirectory,
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
  
  //send -start
  function sendFile(path, fileName){

    window.cordova.plugin.ftp.connect('ftp.prevail.net', 'benenati', 'Q3a1H2d.ek', function(ok) {
                                    
    //console.info("ftp: connect ok=" + ok);
    
    // You can do any ftp actions from now on...
    window.cordova.plugin.ftp.ls("/BETAKEY8", function(e){
    //window.cordova.plugin.ftp.ls("/RINeHMOqOx", function(e){
        console.log("ls success", e);
        }, function(e){
            console.log("ls fail",e);
        });
        
        setTimeout(function(){ 
            window.cordova.plugin.ftp.upload(path, "/BETAKEY8/" + fileName ,function(percent) {
            //window.cordova.plugin.ftp.upload(path, "/RINeHMOqOx/" + fileName ,function(percent) {
                if (percent == 1) {
                    console.log("ftp: upload finish");
                    window.cordova.plugin.ftp.disconnect(function(e){
                        console.log("disconnect success", e);
                        }, function(e){
                            console.log("disconnect fail",e);
                        });
                } else {
                    console.log("ftp: upload percent=" + percent * 100 + "%");
                }
                }, 
                function(error) {
                    console.error("ftp: upload error=" + error);
                    //if fails, call again up to 3 times
                    if(callCount < 3){
                        console.log("ftp upload failed " + callCount + " times");
                        sendFile(path, fileName);
                        callCount++;
                    }
            });
        }, 5000);
                                    
        },
        function(error) {
         console.log("ftp: connect error=" + error);
        
         });
  }
  //send -end


  //open connection to prevail ftp- start
  function openConnection(){
  
    window.cordova.plugin.ftp.connect('ftp.prevail.net', 'benenati', 'Q3a1H2d.ek', function(ok) {
                                      
        console.info("ftp: connect ok=" + ok);

        // You can do any ftp actions from now on...
        window.cordova.plugin.ftp.ls("/BETAKEY8", function(e){
        //window.cordova.plugin.ftp.ls("/RINeHMOqOx", function(e){
            console.log("ls success", e);
            return true;
        
        }, function(e){
            console.log("ls fail",e);
            return false;
        });
        },
        function(error) {
            console.error("ftp: connect error=" + error);
            return false;
        });
    }
  //open connection- end
  

//avs test start

var win = function (r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
}

var fail = function (error) {
    //alert("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
}

var base64= function(credentials) {
    var hash = btoa(credentials);
    return "Basic " + hash;
};

//avs test- end

  
  }
  })();

