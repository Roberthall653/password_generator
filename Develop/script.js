// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for various character options in generator
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specChars = "!@#$%^&*()";
var charRepo = "";

//function to ask for input and generate a random password
function generatePassword() {
    var randomPass = ""
    let specCharsChoice = confirm("Do you want special characters?");

    if (specCharsChoice) {
        charRepo = charRepo.concat(specChars);
    }


    let uppercaseChoice = confirm("Do you want uppercase characters?");
    if (uppercaseChoice) {
        charRepo = charRepo.concat(uppercase);
    }


    let lowercaseChoice = confirm("Do you want lowercase characters?");
    if (lowercaseChoice) {
        charRepo = charRepo.concat(lowercase);
    }


    let numbersChoice = confirm("Do you want numbers?");
    if (numbersChoice) {
        charRepo = charRepo.concat(number);
    }


    let charsCountChoice = prompt("How long would you like the password to be? (between 8 and 128)", 8);

//takes the parameters above to generate a random password.
    for (var i = 0; i < charsCountChoice; i++) {
        let randomIndex = Math.floor(Math.random() * charRepo.length)
        let randomChar = charRepo[randomIndex]
        randomPass = randomPass + randomChar;
    }
    return randomPass;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);