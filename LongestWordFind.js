function LongestWord(sen) { 
var senSplit = sen.split(" ");
  var sense = 0 
  for(i=0;i<senSplit.length;i++){
    	if (sense < senSplit [i].length){
          sense = senSplit [i].length; 
          sen = senSplit [i]; 
        }
  }  
  
  // code goes here  
  return sen; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline()); 