// Assignment code here
function generatePassword () {
  /* specify selection criteria for new password */
  let errormsg = 'Wrong value! Please start again.'

  let temp = window.prompt("Please specify the length of your password. Choose a number between 8 and 128.");
  let condition1 = Number(temp);
  if ((condition1 < 8) || (condition1 > 128) || !(Number.isInteger(condition1))) {
    window.alert(errormsg);
    return;
  }

  function winAlert (condition) {
    if (condition != 'Y' && condition != 'N') {
      window.alert(errormsg);
      return true;
    }
  }

  let condition2 = window.prompt("Please confirm your password to include lowercase. Enter 'Y' or 'N'");
  if (winAlert(condition2)) {
    return;
  };
  
  let condition3 = window.prompt("Please confirm your password to include uppercase. Enter 'Y' or 'N'");
  if (winAlert(condition3)) {
    return;
  };
  
  let condition4 = window.prompt("Please confirm your password to include numeric type. Enter 'Y' or 'N'");
  if (winAlert(condition4)) {
    return;
  };
  
  let condition5 = window.prompt("Please confirm your password to include special characters. Enter 'Y' or 'N'");
  if (winAlert(condition5)) {
    return;
  };

  if (condition2 === 'N' && condition3 === 'N' && condition4 === 'N' && condition5 === 'N') {
    window.alert("You need at least one type of special characters. Please start again.")
    return;
  }

  /* build a string of characters for new password */
  let character = ' ';
  if (condition2 === 'Y') {
    character += 'abcdefghijklmnopqrstuvwxyz';
  } 
  if (condition3 === 'Y') {
    character += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } 
  if (condition4 === 'Y') {
    character += '0123456789';
  }
  if (condition5 === 'Y') {
    character += "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";
  }

  /* generate random characters for new password*/
  let result = ' ';
  const charactersLength = character.length;
  for ( let i = 0; i < condition1; i++ ) {
      result += character.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result; 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
