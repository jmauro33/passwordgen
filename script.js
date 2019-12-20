
var generatebtn=document.querySelector("#generate");
function generatePassword(length){


var alpha = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()";

var options = [alpha, caps, numeric, special];

var password = "";
var passwordArray = Array(length); 
var passwordRandom = math.floor(math.random() * (max - min + 1)) +min;
return password;
}

console.log(generatePassword)






function writePassword (){

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    console.log(passwordText)

    copyBtn.removeAttribute("#disabled");
    copyBtn.focus();

}
function copyToClipboard(){}

