
console.log('1st method');

let initialVal = 4;
let sum = initialVal;

// factorial = 4*3*2*1


myfac(4);


function myfac(n){
	
	if(n>1){
		sum = sum * ( n-1) ;
		myfac(n-1);
	}
	
}

console.log('sum = '+sum);




console.log('2nd method');


/* my method */

initialVal = 4;

// result => 4*3*2*1

let arr = [];
let aV = initialVal;

while(aV > 1){
	arr.push(aV-1);
	aV--;
}

// console.log( arr.reduce( (a,b) => a*b, initialVal ) );

const factorial = (a,b) => {
	return a*b;
};

console.log(arr);

sum = arr.reduce(factorial, initialVal);

console.log('sum = '+sum);



console.log('3rd  method');


let arr2 =[];
let tempVal = initialVal;
while(tempVal > 1){
	tempVal--;
	arr2.push(tempVal);
}

console.log(arr2);

const myFacto = (a,b) => a*b;

console.log(	arr2.reduce(myFacto, initialVal)	);
