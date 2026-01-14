
require('dotenv').config()


const {inquirerMenu, pausa, leerInput, listarLugares} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() =>{
let opt;
const busquedas = new Busquedas();
   
do {
    

opt = await inquirerMenu();

switch(opt){
case 1:
//mostrar mensaje

const lugar = await leerInput(' Ciudada')
await busquedas.ciudad(lugar);

console.log(lugar);
//buscar lugar

//seleccionar el lugar

    //clima
//mostrar Resultados

console.log('')
console.log('informacion de la ciuadad'.green)
console.log('')
console.log('Lat: ',);
console.log('Long: ',);
}

if(opt !== 0) await pausa ();   

} while (opt!==0);

}

main();