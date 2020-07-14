// Assignment Code
var generateBtn = document.querySelector("#generate");


// Known variables
  let passwordLength;
  const OKPASSWORDLENGTH = [(passwordLength > 7), (passwordLength <129)]


// Write password to the #password input
function writePassword() {

  passwordLength = parseInt(prompt("How long do you want your password? Enter an integer between 8 and 128."));
  
  
  while (OKPASSWORDLENGTH) /*ensure correct length */{
    passwordLength = parseInt(prompt("I'm sorry, you must enter a password length between 8 and 128."));
  }

  


  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
