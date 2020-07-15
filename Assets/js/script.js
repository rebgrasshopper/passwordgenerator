// Assignment Code
var generateBtn = document.querySelector("#generate");


// Known variables
  let passwordLength;
  const OKPASSWORDLENGTH = [(passwordLength > 7), (passwordLength <129)]



// Password Length Options

function chooseLength() {
  document.getElementById("password").style.display = "none";
  document.getElementById("option-box").style.display = "block"
  document.getElementById("password-length-input").style.display = "block";
  document.getElementById("generate").style.display = "none";
}

let slider = document.getElementById("passwordLength");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

//Password Character Options 

function chooseCharacters() {
  document.getElementById("special-characters-input").style.display = "flex";
  document.getElementById("password-length-input").style.display = "none";
}






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
generateBtn.addEventListener("click", chooseLength);
