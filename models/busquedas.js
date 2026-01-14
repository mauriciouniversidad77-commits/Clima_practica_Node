const axios = require('axios');




class Busquedas {
historial = ['Tegu','andromeda','madrid'];

constructor(){

    //todo: leer Db si existe
}

get paramsApi(){
    return{
 
        'appid': process.env.apiKey,
        'units': 'metric',
            'lang': 'es' 

    }
}

async ciudad(lugar= ''){

    //peticion http

   // console.log('ciudad: ', lugar);
try {
// https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=f75e70010722b1ea194ffae9eddbd41f&units=metric
const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
   params: {...this.paramsApi,q: lugar}   
});

const resp = await instance.get();
console.log(resp.data);




return [];
} catch (error) {
if (error.response) {
                console.log('Status:', error.response.status);
                console.log('Data:', error.response.data);
            }

            return null; //
}

}



}

module.exports = Busquedas