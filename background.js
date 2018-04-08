

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
    console.log("hello world:)")
  });
});
console.log("hello again");
//

//making http request
//var API_KEY="";
// console.log("hello:)");
// var xhttp = new XMLHttpRequest();
 var endpointURL="https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/59ac9c7e-96e4-4288-bdf0-512dc97a8315/url?iterationId=ff3956ac-f5db-4100-98d4-86e7b39107b1";
 var http = function (method, url, body, cb) {
   var xhr = new XMLHttpRequest();
   xhr.open(method, url, true);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.onreadystatechange = function () {
     if (xhr.readyState !== 4) {
       return;
     }
     if (xhr.status >= 400) {
       notify('API request failed');
       console.log('XHR failed', xhr.responseText);
       return;
     }
     cb(JSON.parse(xhr.responseText));
   };
   xhr.send(body);
 };
 const url = endpointURL
fetch(url, {
  method: 'POST',
  body: '{\"Url\": "https://pmcvariety.files.wordpress.com/2016/05/spongebob-nickelodeon.jpg?w=1000&h=563&crop=1"}',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Prediction-Key': '711b162034e7406b8f28694424e397ab'
  })
})
.then(res => res.json())
.catch(error => console.error('Error. Something messed up here:', error))
.then(response => {
  // console.log(img);
  console.log('Success:', response);
  var result = JSON.stringify(response);
  console.log(response);

//  labels = response.responses[0].labelAnnotations;
  var isPhobia = false;

  });
// console.log(this.status);
//
//     xhttp.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         var response = JSON.parse(this.responseText);
//         console.log(response);
//       }
//     }
//   xhttp.setRequestHeader('Content-Type', 'application/json');
//   xhttp.setRequestHeader('Prediction-Key','711b162034e7406b8f28694424e397ab');//hopefully this line works lol
//   xhttp.open("POST", "endpointURL", true);
//   xhttp.send();
//   var response = JSON.parse(xhttp.responseText);
