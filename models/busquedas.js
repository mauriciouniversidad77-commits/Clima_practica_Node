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