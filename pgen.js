let password_field = document.getElementById("passwordField");
let button_genPass = document.getElementById("genPass");
let password_length = document.getElementById("lengthPicked");
let symbol_checked = document.getElementById("symbolChecked");

button_genPass.addEventListener('click', genPassword());

function genRandAlphabets(noLetters) {
    let alphabets = "abcdefghijklmopqrstuvwxyz";
    let newAlpha = [];
    let randInd;

    for(let i = 0; i < noLetters; i++){
        randInd = 1 + Math.random() * noLetters;
        newAlpha[i] = alphabets.charAt(randInd);
    }

    return newAlpha;
}

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

}