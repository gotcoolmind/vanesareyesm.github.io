
const axios = require('axios');

//Datos
var datos = {url: "https://ciudad1a1.files.wordpress.com/2013/09/botella_pet13.jpg"};

//Direccion de la peticion (endpoint, punto de acceso)
var direccion = 'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Categories,Description,Objects,Tags';

//Peticion POST
axios.post(direccion, datos, {
    headers: {'Ocp-Apim-Subscription-Key': '9f8839e9bd4e446c8d1bfad49bd6db72',
        'Content-type': 'application/json'
    }
})
.then(respuesta => console.log(respuesta.data['tags']))
.catch(error => {console.log(error)});

//Lo de arriba es la base para identificar la imagen

/*Imagenes a utilizar
https://ciudad1a1.files.wordpress.com/2013/09/botella_pet13.jpg
https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/6/7/679518_463454914.jpg
https://www.construnario.com/notiweb/noticias_imagenes/48000/48192_1.jpg
https://dbdzm869oupei.cloudfront.net/img/wallpaper/large/5d9dac466c1db.jpg
https://coprocesamiento.org/wp-content/uploads/2018/09/Plastic-bottles.jpg
https://tapasrioja.com/7078-large_default/botella-de-vidrio-750-ml-mod-frescor.jpg
*/