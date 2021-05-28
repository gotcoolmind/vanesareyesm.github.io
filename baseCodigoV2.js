const axios = require('axios');

var enlaces = [];

enlaces[0] = 'https://ciudad1a1.files.wordpress.com/2013/09/botella_pet13.jpg';
enlaces[1] = 'https://www.heb.com.mx/media/catalog/product/cache/c53365f59daab819cdc02670afde8677/6/7/679518_463454914.jpg';
enlaces[2] = 'https://www.construnario.com/notiweb/noticias_imagenes/48000/48192_1.jpg';
enlaces[3] = 'https://dbdzm869oupei.cloudfront.net/img/wallpaper/large/5d9dac466c1db.jpg';
enlaces[4] = 'https://coprocesamiento.org/wp-content/uploads/2018/09/Plastic-bottles.jpg';
enlaces[5] = 'https://tapasrioja.com/7078-large_default/botella-de-vidrio-750-ml-mod-frescor.jpg';

var direccion = 'https://serviciovisionnorte.cognitiveservices.azure.com/vision/v3.0/analyze?visualFeatures=Categories,Description,Objects,Tags';

function peticion( cont , callback ){
    var respuestaInfo;
    var data = { url: enlaces[cont] }
    axios.post( direccion , data, { 
        headers: {
            'Ocp-Apim-Subscription-Key' : '9f8839e9bd4e446c8d1bfad49bd6db72',
            'Content-Type': 'application/json' 
        }
    }).then( respuesta => {
        respuestaInfo = { 
            etiquetas: respuesta.data.description.tags 
        };
        callback( respuestaInfo , ( cont + 1 )); 
    }).catch( err => {
        console.log("Error: ", err.message);
    });
    
}

function imprimirDatos( datosRespuesta , cont ){
    var j = 0;
    do{
        if( datosRespuesta['etiquetas'][j] == 'plastic'){
            console.log( "El objeto en la imagen " + cont + " es de plastico.");
            break;
        }
        if( (datosRespuesta['etiquetas'][j] !== 'plastic') && (j == ( datosRespuesta['etiquetas'].length - 1))){
            console.log( "El objeto en la imagen " + cont + " no es de plastico.");
            break;
        }
        j++;
    }while( i < datosRespuesta['etiquetas'].length);

}

for( var i = 0; i < 6 ; i++ ){
    peticion( i , imprimirDatos );
}