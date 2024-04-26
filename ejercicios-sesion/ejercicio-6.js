/**
 * PASOS;
 * 1- Definir una funcion que nos diga si una matriz es positivamente dominante
 * 2- Iniciar variable contador "positivos" para que cuente los elementos positivos en matriz, inicia en cero.
 * 3.- For para repetir el conteo sobre cada elemento de la matriz.
 * 4- Por cada repetición se verifica que cada numero sea positivo, si lo es, aumenta el marcador de positivo.
 * 5. Al final devolvera true si es positivamente dominante o false si no lo es.
 *  
 */




function dominioPositivo(array) {
    let positivos = 0;
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] > 0) {
            positivos++;
        }
    }
}

if (positivos > array.lenght / 2) {
    return true;
} else {
    return false;
}

console.log(positiveDom([-1, -8, -2, 8, 964]));