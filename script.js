function arrayFranRange(min, max) {
    const array = []
    for (let i = min; i <= max; i++) {
        array.push(i)
    }
    return array;
}
const result = arrayFranRange(0, 99)
console.log(result)


function supprimerNombres(array1,array2) {
    return array1.filter(nombre => !array2.includes(nombre));
}
// Exemple d'utilisatio
const array1 = [1, 2, 3, 4, 5,6,7,8,9];
const array2 = [2, 4,7,9];

const resultat = supprimerNombres(array1  ,array2);
console.log(resultat); 