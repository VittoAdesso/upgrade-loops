/* **Iteración #6: Mixed For...of e includes** */

/* 1. Usa un bucle **for...of** para recorrer todos los juguetes y
 2. elimina los que incluyan la palabra gato. 
 3. Recuerda que puedes usar la función ***.includes()***  */


const toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
]

for (includeWord of toys) {


    if (includeWord.name.includes('gato')) {

        // delete toys.includeWord.name; // me da con ésto undifined

        delete includeWord.name; // me borra solo una propiedad
        delete includeWord.id; // me borra solo una propiedad 

    }

    console.log(includeWord);

}