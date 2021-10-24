/* 1. Haz un bucle y 
2. muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".  */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

/*  creo una constante que me leerá filtrará el array y me buscará dentro de el la palabra camniseta, si me la enciuentra me lo pinta, sino no hace nada.  */
const filterItems = (arr, word) => {
    return arr.filter(dentroContenido => dentroContenido.indexOf(word) !== -1)
}

/* products es arr de arriba y camiseta es word == son los argumentos o parametros que le paso a la función */
console.log(filterItems(products, 'Camiseta'))