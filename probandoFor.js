/* **Iteración #5: Probando For** */



/* 
1. Usa un bucle **for** para recorrer todos los destinos del array y 
2. elimina los elementos que tengan el id 11 y 40. 
3. Imprime en un ***console log*** el array.  */

const placesToTravel = [{ id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 59, name: 'Madagascar' }
];

for (elemento of placesToTravel) {

    if (elemento.id === 11) {
        delete placesToTravel[1];
    } else if (elemento.id === 40) {

        delete placesToTravel[3];
    }
}
console.log(placesToTravel);