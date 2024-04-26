/** PASOS:
 * 1- Establecer funcion que tome como parametro numero y longitud.
 * 2- Usar bucle for.*/

function arrayMultiplos(numero, longitud) {
    
    const multiplos = [];
    for (let i=1; i<= longitud; i++) {
        multiplos.push(numero * i);
    }

    return multiplos;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17,6));