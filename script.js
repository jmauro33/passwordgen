
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

function generatePassword(min) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    var special = "!@#$%^&*()";

    var charPool = alpha.concat(caps, numeric, special);

    var password = "";
    var passwordArray = Array(min);
    
    // loop as times as defined by min variable

    
    for(i=0; i < min; i++) {
        var idx = Math.floor(Math.random() * charPool.length);
        password = password + charPool[idx]
       
    }
   
    return password;
}

generatePassword(8);


function writePassword() {
    var password = generatePassword(8);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("#disabled");
    copyBtn.focus();
}

function copyToClipboard() {

    var copyText = document.getElementById("#password");
    copyText.select();
    document.execCommand("copy");
    
}

generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);
