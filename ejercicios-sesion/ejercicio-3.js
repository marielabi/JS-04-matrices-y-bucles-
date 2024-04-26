/* PASOS
*1. Preparar las constantes
*2. Preparar las funciones
*3.Ordernar la primer letra de cada nombre
*4.Ordenar alfabeticamente
*5.Imprimir.
*/

const member1 = ["Esperanza", "Franco", "Nia"];
const member2 = ["Phoebe", "Rose", "Chandler", "Joey", "Monica", "Rachel"];
const member3 = ["Harry", "Ron", "Hermione"];

function secretName(arr) {
    let res = [];
    arr.forEach ((e) => res.push (e.chartArt(0)));
    return res.sort().join("");

    console.log(secretName(member1));
    console.log(secretName(member2));
} 

secretName(member1);