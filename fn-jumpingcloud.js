

var c = [0,0,1,0,0,1,0];	//7 elements
var nbjumps = 0;


for(		var i=0 ; i < c.length ; i++	){
	
	if(	c[i+1] === undefined	){
		console.log('exit !');
		break;
	}
	
	if(	c[i+2] === undefined  || c[i+2] ===1	){
		
		console.log('no double step');
		
		if(	c[i+1] === undefined	){
			
			console.log('exit !');
			break;
			
		}else{
			nbjumps++;
		}
		
		
	}else{
		
		nbjumps++;
		i++;			//we have made 2 steps
		
	}
	
	
	console.log( c[i+1] );
	
	
}

console.log('nb steps = '+nbjumps);








