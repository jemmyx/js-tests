/* 

Sample Input

5
amy 100
david 100
heraldo 50
aakansha 75
aleksa 150
Sample Output

aleksa 150
amy 100
david 100
aakansha 75
heraldo 50
Explanation

OUTPUT : sort players by scores descreasing / sorted alphabetically by name ascending

 */

 
var arr = [
		{name:'david',score:100},
		{name:'amy',score:100},
		{name:'heraldo',score:50},
		{name:'aakansha',score:75},
		{name:'aleksa',score:150}
	];


/* 1) sort by score by name */

arr.sort( function(a,b){ 
	
	var nameA = a.name.toUpperCase();
	var nameB = b.name.toUpperCase();
	
	if(nameA > nameB){
		return 1;
	}

	if(nameA < nameB){
		return -1;
	}

	return 0;

} );

// console.log(arr);

/* 2) sort by score */

arr.sort( function(a,b){
	return b.score - a.score;
});



console.log(arr);