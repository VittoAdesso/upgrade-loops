/* 1. Usa un for...in para 
2. imprimir por consola los datos del alienígena. */

/* Use for loops through the properties of an object
 */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let datos in alien) {

    /* como se usa para objetos, siempre designo una variable y cuando la llame le digo variable + el indice del recorrdio del arraya ntiguo  */
    console.log(datos + ':' + alien[datos]);

}