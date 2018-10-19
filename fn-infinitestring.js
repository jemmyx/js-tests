// Complete the repeatedString function below.
function repeatedString(s, n) {

    // s = aba
    // n = 10
    // abaabaabaa|ba
    
    //how many times occurs 'a'
    var nbOccur = 0;
    var sLength = s.split("").length;
    
    s.split("").reduce( (acc,val) => {
        
        if(val=='a') nbOccur++;
        
        return nbOccur;
        
    }, nbOccur );
    
    //console.log('nbOccur: '+nbOccur);   //2
    //console.log('n: '+n);               //10
    
    var nbGroup = parseInt(n / sLength);
    //console.log('nbGroup: '+nbGroup);   // 3
    
    var nModulo = n%sLength;
    //console.log(nModulo);               // 1
    
    var sumOccurence = nbOccur*nbGroup;
    //console.log(sumOccurence);
    
    var halfSLength = s.substring(0,nModulo);
    
    halfSLength.split("").reduce((acc,val)=>{
        if(val=='a') 
            return sumOccurence++
        
    },sumOccurence);
    
    console.log(sumOccurence);
    
    return sumOccurence;
    

}