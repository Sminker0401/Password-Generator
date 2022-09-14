var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var pw = "";

function generatePassword() {
  var bucket = "";
  var length = prompt("How many characters?");
  console.log(length);
  var upper = prompt("Do you want upper case letters?");
  console.log(upper);
  var lower = prompt("Do you want lower case letters?");
  console.log(lower);
  var num = prompt("Would you like numbers?");
  console.log(num);
  var sym = prompt("Would you like special characters?");
  console.log(sym);


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
