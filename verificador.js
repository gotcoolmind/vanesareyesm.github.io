
const axios = require('axios');

//Datos
var datos = {url: "https://en.reset.org/files/imagecache/sc_832x468/2018/09/07/muell-littering-abfallmanagement.jpg"};

//Direccion de la peticion (endpoint, punto de acceso)
var direccion = 'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Categories,Description,Objects,Tags';

//Peticion POST
axios.post(direccion, datos, {
    headers: {'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72',
        'Content-type': 'application/json'
    }
})
.then(respuesta => console.log(respuesta.data.tags))
.catch(error => {console.log(error)});

//Lo de arriba es la base para identificar la imagen