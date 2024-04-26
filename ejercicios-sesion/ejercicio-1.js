/* PASOS:
*1- Preprarar constantes 
*2- Declarar funcion para  aceptar un arr por parametro
*3- Loop por el arr
*4- Tomar el valor abs de c/elemento
*5- Sumar todos los valores absolutos
*/

const res1 = [-1,5, 6, 3];
const res2 = [14, 3.5, 6];
const res3 = [8, 15, 100];

function sumResistance(arr) {
    const arr2 = [];
    let res = 0;
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e => (res = + e)));
    console.log(`${res} ohms`);
}

    function sumResistance(arr){
        let res = 0;
        for (let i = 0; i < arr.length; i++){
            res += Math.abs(arr[i]);
        }
        return res;
}

sumResistance(res3);
const try2 = sumResistance2(res1);
console.log (try2);