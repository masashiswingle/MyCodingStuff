


function LetterChanges(str, decodeEncode) {
 var Alphabet = "abcdefghijklmnopqrstuvwxyz ";
 var Cipher =   "zabcdefghijklmnopqrstuvwxy ";

    //temp string, will become our final string
    var temp = "";

    if(decodeEncode === 0) {
        //search through the string, get each letter
        for (i=0;i<=str.length; i++) {
            //for the letter that is found, map it to the alphabet
            for (j=0;j<Alphabet.length; j++) {
                //if the letter in the string is the one in the alphabet
                if (str[i] == Alphabet[j]) {
                    //add the cipher character to the temporary string
                    temp += Cipher[j]
                }
            }
        }
    }else{
        for (i = 0; i <= str.length; i++) {
            //for the letter that is found, map it to the alphabet
            for (j = 0; j < Cipher.length; j++) {

                //if the letter in the string is the one in the alphabet
                if (str [i] == Cipher [j]) {
                    //add the cipher character to the temporary string
                    temp += Alphabet [j]
                }
            }
        }
    }

  // code goes here  
  return temp;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
var encodedString = (LetterChanges("pizza is the best and i could eat it forever"), 0);
var decodedString = (LetterChanges(decodedString), 1);

console.log("Encoded: " + encodedString);
console.log("Decoded: " + decodedString);
