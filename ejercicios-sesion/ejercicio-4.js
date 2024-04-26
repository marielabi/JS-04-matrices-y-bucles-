/** PASOS
 * 1- Obtener conteo toal
 * 2- Imprimir usuario users ==2
 * 3- Imprimir primeras 2 personas users == 2
 * 4- Imprimir primeras 2 personas + conteo users >=2
 */

const users = ["mocking9", "JoeyPunch", "glassedFer", "hello1"];

function displayUsers(arr) {
    const count = users.length;
    let res;
    if (count === 1) {
        res = `${arr[0]} is online`;
    } else if (count === 2) {
        res = `${arr[0]} are online`;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`;
    }
    return res
}

console.log(displayUsers(users));