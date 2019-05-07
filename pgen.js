let password_field = document.getElementById("passwordField");
let button_genPass = document.getElementById("genPass");
let password_length = document.getElementById("lengthPicked");
let symbol_checked = document.getElementById("symbolChecked");
let noLength = document.getElementById('lengthPicked').value;

// button_genPass.addEventListener('click', genPassword());

function genRandAlphabets() {
    let alphabets = "abcdefghijklmopqrstuvwxyz";
    let newAlpha = [];
    let randInd;


    for(let i = 0; i < noLength; i++){
        randInd = 1 + Math.random() * noLength;
        newAlpha[i] = alphabets.charAt(randInd);
    }

    return newAlpha;
}

let myAlpha = [];
myAlpha = genRandAlphabets();
console.log(myAlpha);

function genRandNumbers(num) {
    let all_nums = "1234567890";
    let nums = [];
    let randInd;

    for(let i = 0; i < num; i++){
        randInd = 1 + Math.random() * num;
        nums[i] = all_nums.charAt(randInd);
    }

    return nums;
}

function genRandSymbols(){

}

function genPassword() {
    password_field.value = "";
     setInterval(function(){password_field.value = "STOP CLICKING";}, 2350);
    
}