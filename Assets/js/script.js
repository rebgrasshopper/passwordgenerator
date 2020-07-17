// Assignment Code
var generateBtn = document.querySelector("#generate");

//PREKNOWN VARIABLES

const ALLOWEDSPECIALCHARACTERS = ["!", '"', "#", "$", "%", "&", "\\", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " "];

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const ALLOWEDLOWERCHARACTERS = ALPHABET.split("");

const ALLOWEDUPPERCHARACTERS = ALPHABET.toUpperCase().split("");

const ALLOWEDNUMBERS = '0123456789'.split('');






//function for checking special characters
function checkCharacters(array) {
  let unaccepted = 0;
  let i = 0;

  while (unaccepted < 1 && i < array.length) {
    if (ALLOWEDSPECIALCHARACTERS.indexOf(array[i]) === -1) {
      console.log(array[i] + " is not allowed");
      unaccepted += 1;
    } else {
      console.log(array[i] + " is all good!");
      i++
    }
  }
  return (unaccepted === 0)
}




//function to Generate password
function generatePassword() {
  
  //set password length
  let passwordLength = parseInt(prompt("How long should your password be? Pick an integer between 8 and 128.", 16));
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("I'm sorry, please input an integer between 8 and 128.", 16);
  } 
  //variables for use outside of while loop:
  let specialCharacters;
  let totalAllowedCharacters;

  let k = 0;
  while (k < 1) {
  //set special characters
  specialCharacters = prompt('Let\'s talk special characters. You can choose any of these, or none!       [space] !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~', '!$%@#').split('');
  while (!checkCharacters(specialCharacters)) {
    specialCharacters = prompt("I'm sorry, some of those didn't match the allowed characters. You can use  [space] !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~', or use these pre-set common characters:", '!$%@#').split('');
  }

  
  //prompt Lower, Upper, Numbers
  let areLowersOK = confirm("Do you want to include lowercase letters?");
  let areUppersOK = confirm("Do you want uppercase letters?");
  let areNumbersOK = confirm("Do you want numbers?");
  

  //total allowed characters
  totalAllowedCharacters = specialCharacters;

  if (areLowersOK) {
    totalAllowedCharacters = totalAllowedCharacters.concat(ALLOWEDLOWERCHARACTERS);
  }
  if (areUppersOK) {
    totalAllowedCharacters = totalAllowedCharacters.concat(ALLOWEDUPPERCHARACTERS);
  }
  if (areNumbersOK) {
    totalAllowedCharacters = totalAllowedCharacters.concat(ALLOWEDNUMBERS);
  }
  if (specialCharacters.length === 0 && areLowersOK === false && areUppersOK === false && areNumbersOK === false) {
    alert("I'm sorry, you've selected no characters. Let's go back and try again!")
  } else {
    k++;
  }
}

  //let's set things up so there are at least a few symbols
  let positionsOfSpecials = []; //make sure that positionOfSpecials is available outside the conditional

  if (specialCharacters.length > 0) {
  const minNumberOfSpecials = Math.ceil(passwordLength/3);
  let i=0;
  while (i < minNumberOfSpecials) {
    newNum = Math.floor(Math.random() * passwordLength);
    if (positionsOfSpecials.indexOf(newNum) === -1) {
      positionsOfSpecials.push(newNum);
      i++;
    }
  }
    }
  
  //finally build password
  let passwordText ="";
  i = 0;
  while (i < passwordLength) {
    if (positionsOfSpecials.includes(i)) {
      let charIndex = Math.floor(Math.random() * specialCharacters.length);
      passwordText += specialCharacters[charIndex];
      i++;
    } else {
      let charIndex = Math.floor(Math.random() * totalAllowedCharacters.length);
      passwordText += totalAllowedCharacters[charIndex];
      i++;
    }
  }

  return passwordText //password is made! end of generatePassword()
}








// Write password to the #password input
function writePassword() {

  let password = generatePassword();
  let passwordHTMLText = document.querySelector("#password");

  passwordHTMLText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
