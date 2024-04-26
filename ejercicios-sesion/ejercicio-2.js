/** PASOS:
 * 1- Obtener la mitad del número
 * 2-Agregar un arr
 * 3-x2
 * Regresar el array final
 * 
 */

const n = 4
const n2 = 10;

function numDiv(num) {
    let res = [];
    const half = num / 2;
    res.push(half);
    res.push(half);
    return res;
}

console.log (numDiv(n2));