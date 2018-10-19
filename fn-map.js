/* function map */

(function(){

	function map(){
		
		var result = document.querySelector('#result');
		console.log(result);

		let array1 = [1,2,3,4];

		let newArray1 = array1.map( (x)=>x * 2);

		result.innerText = newArray1.join(', ')+'\n';

		// newArray1.forEach( function(v, i){ //params: val, index, array used
			// result.innerHTML += `<br>table ${i} : ${v}`;
		// } );

		newArray1.map( (v,i) =>{
			result.innerHTML += `<br/>Nouvelle valeur ${i} : ${v}`;
		} );

	}
	
	map();
	
})();

