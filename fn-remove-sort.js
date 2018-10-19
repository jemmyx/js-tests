const nums = [23,2,3,6,8,6,14,5,14,16,23];

// console.log(nums);

const unique = nums.filter( (v,i) => {
	// console.log('i='+i+', v='+v+', nums.indexOf(v)='+nums.indexOf(v));
	return nums.indexOf(v) >= i;
	
} );

console.log(unique);

/* sort desc -> asc */

// console.log( unique.sort( (a,b) => b-a ) );

console.log( unique.sort( (a,b) => {

	// console.log('b-a => '+(b-a));
	// return b-a;
	
	console.log('a('+a+')-b('+b+') => '+ (a-b));
	console.log(unique);
	return a-b;
	
} ) );
