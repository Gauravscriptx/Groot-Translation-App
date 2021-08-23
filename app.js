var txtinput = document.querySelector('#input');
var btnTranslate = document.querySelector('#btn-translate');
var outputDiv = document.querySelector('#outputText');
var serverUrl = 'https://api.funtranslations.com/translate/groot.json';

function getTranslationUrl(text) {
  return serverUrl + '?' + 'text=' + text;
}

function errorHandler(error) {
  console.log('error occured', error);
  alert('something wrong with server');
}

function clickHandler() {
  var inputText = txtinput.value;
  fetch(getTranslationUrl(inputText))
    .then((Response) => Response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickHandler);
