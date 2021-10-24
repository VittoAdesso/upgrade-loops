/* 1. Haz un bucle y 
2. muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".  */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];


const filterItems = (arr, word) => {
    return arr.filter(dentroContenido => dentroContenido.indexOf(word) !== -1)
}

console.log(filterItems(products, 'Camiseta'))