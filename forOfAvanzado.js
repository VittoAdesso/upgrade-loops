/* 1. Usa un bucle for...of para recorrer todos los juguetes y
2.  añade los que tengan más de 15 ventas (sellCount) al array popularToys. 
3. Imprimelo por consola.  */

/* **Iteración #7: For...of avanzado** */

const popularToys = [];
const toys = [
    { id: 5, name: 'Buzz MyYear', sellCount: 10 },
    { id: 11, name: 'Action Woman', sellCount: 24 },
    { id: 23, name: 'Barbie Man', sellCount: 15 },
    { id: 40, name: 'El gato con Guantes', sellCount: 8 },
    { id: 40, name: 'El gato felix', sellCount: 35 }
];

for (bestSell of toys) {

    if (bestSell.sellCount > 15) {
        popularToys.push(bestSell);
        /*  console.log(bestSell); */

    } else {
        console.log(`Hay que buscar estrategia para vender más: 
              ${bestSell.name}`); // para que me indique cuales toys no se están vendiendo tanto, y debemos tomar decisión 
    }


}

console.log(popularToys);