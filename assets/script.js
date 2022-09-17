var alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = "!@#$%^&*_-+=";
var pw = "";

function generatePassword() {
  var bucket = "";
  var length = prompt("How many characters?");
  console.log(length);
  var upper = confirm("Do you want upper case letters?");
  console.log(upper);
  var lower = confirm("Do you want lower case letters?");
  console.log(lower);
  var num = confirm("Would you like numbers?");
  console.log(num);
  var sym = confirm("Would you like special characters?");
  console.log(sym);


var possibleCharacters = [];

if(upper) {
  possibleCharacters = [...possibleCharacters, ...alphaUpper];
}

if(lower) {
  possibleCharacters = [...possibleCharacters, ...alphaLower];
}

if(num) {
  possibleCharacters = [...possibleCharacters, ...numbers];
}

if(sym) {
  possibleCharacters = [...possibleCharacters, ...symbols];
}

var generatedPassword = '';

for(i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
  generatedPassword += possibleCharacters[randomIndex];
}

return generatedPassword;

}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
