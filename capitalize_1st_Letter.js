function LetterCapitalize(str) { 
  var strsplitta = str.split (" "); 
  	str = ""
  	for (i=0 ;i < strsplitta.length; i++ ){
      var currentString = strsplitta [i] 
      currentString [0] 
      var capitalizeString 
      capitalizeString = currentString [0].toUpperCase(); 
      var finString = capitalizeString + currentString.slice (1,currentString.length);
      str += finString + " "
      } 
  
  

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());    