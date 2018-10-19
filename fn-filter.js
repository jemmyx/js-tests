console.log('example 1');
var arr = [1,2,3,4,5,6,7,8];

const arr2 = arr.filter( (v,i,prev) => {
	return v%2==0;
} );

console.log(arr2);

/* ----------------------------------- */

console.log('example 2');

var arrOb = [{id:1,name:'fabio',sex:'m'},{id:2,name:'mibel',sex:'f'},{id:3,name:'robert',sex:'m'},{id:4,name:'monique',sex:'f'}];

var arrOb = arrOb.filter( (v,i,a)=>{
	// return v.sex=='m';				// garder uniquement les femmes
	return v.id!=3;						// retirer l'ID 3
} );

console.log(arrOb);

console.log(arrOb.filter( (v,i,a)=>{
		// return v.sex=='m';				// garder uniquement les femmes
		return v.id!=2;						// retirer l'ID 3
	} )
);


console.log(arrOb);



