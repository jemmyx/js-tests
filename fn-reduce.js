
const array1 = [1,2,3,4];

// console.log(array1);

const myReducer = ( accumulator, currentValue ) => {
	console.log('accumulator : '+accumulator+', currentValue. '+currentValue);
	return accumulator + currentValue;
}

// console.log(array1.reduce(myReducer));
// console.log(array1.reduce(myReducer, 5));

// console.log('total du tableau');

const array2 = [2,5,2];

// console.log(  array2.reduce( (a, b) => a+b, 2 )  );


console.log('somme de tableau d\'objets');

const array3 = [{s:1}, {s:2}, {s:3}];
var valInitiale = 2;

console.log( array3.reduce( (a, b) => a + b.s, valInitiale ) );





/* 

callback
La fonction à exécuter sur chaque valeur de la liste, elle prend quatre arguments en entrée :

accumulateur
La valeur précédemment retournée par le dernier appel du callback, ou valeurInitiale, si elle est fournie (voir ci-après) (c'est la valeur « accumulée » au fur et à mesure des appels

valeurCourante
La valeur de l'élément courant actuellement manipulé dans le tableau.

index
L'index de l'élément courant actuellement manipulé dans le tableau.

array
Le tableau sur lequel on a appelé la méthode reduce().

valeurInitiale Facultatif
Une valeur utilisée comme premier argument lors du premier appel de la fonction callback. Si on appelle reduce() sur un table vide sans fournir de valeur initiale, on aura une erreur.
Valeur de retourSection
La valeur obtenue grâce à la fonction de réduction.
 */