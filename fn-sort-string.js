const arr = ['fab', 'monique', 'michelle', 'jon'];

// console.log(arr);

// console.log(arr.sort());


console.log( arr.sort( (a,b) => {
	
	var valA = a.toUpperCase();
	var valB = b.toUpperCase();
	
	if(valA > valB){
		return -1;
	}
	
	if(valA < valB){
		return 1;
	}
	
	return 0;
	
	
} ) );