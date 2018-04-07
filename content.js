

//making http request
//var API_KEY="";
var endpointURL=":https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/59ac9c7e-96e4-4288-bdf0-512dc97a8315/url?iterationId=ff3956ac-f5db-4100-98d4-86e7b39107b1";
var http = function (method, url, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Prediction-Key','711b162034e7406b8f28694424e397ab');//hopefully this line works lol

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) { return; }
    if (xhr.status >= 400) {
      notify('API request failed');
      console.log('XHR failed', xhr.responseText);
      return;
    }
    cb(JSON.parse(xhr.responseText));
  };
  xhr.send(body);
};

// Fetch the API key from config.json on extension startup.
http('GET', chrome.runtime.getURL('config.json'), '', function (obj) {
  API_KEY = obj.key;
  document.addEventListener('DOMContentLoaded', checkImages(), false);
});
