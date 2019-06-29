let password_field = document.getElementById("passwordField");
let button_genPass = document.getElementById("genPass");
let password_length = document.getElementById("lengthPicked");
let symbol_checked = document.getElementById("symbolChecked").checked;
let noLength = document.getElementById('lengthPicked').value;
let options_menu = document.getElementsByClassName('options-menu')[0]; 
let noSym = document.getElementById('no-symbols');
let noLetters = document.getElementById('no-letters');
let nums = document.getElementById('amount-nums');
let sysDec = document.getElementById('sys-decide');
let sepEle = noLength / 2;
let moreAlpha = sepEle + 2; 
let newAlphaNo1, newNum, newNum1;

// button_genPass.addEventListener('click', genPassword());
console.log(noLength);

function genRandAlphabets(alphaNo) {
    let alphabets = "abcdefghijklmopqrstuvwxyz";
    let alphaLen = alphabets.length;
    let newAlpha = [];
    let randInd;
    let newAlphaLen;
    let newMaxVal;
    let alpha;
    let subtrahend_check = alphaNo - 1;
    let subtrahend_uncheck = alphaNo - 2;
    // let myRandInd;
    // let alphaNo = noLength / 2;
    
    symbol_checked = document.getElementById("symbolChecked").checked;
    
    if(symbol_checked == true){
        
        newAlphaNo = Math.floor(Math.random() * (alphaNo - subtrahend_check + 1)) + subtrahend_check;
        for (let i = 0; i < newAlphaNo; i++) {
            randInd = Math.floor(Math.random() * (alphaLen - 0)) + 0;
            newAlpha[i] = alphabets.charAt(randInd);
        }
        
        //convert some lowercase elements in newAlpha array
        //to uppercase
        
        newMaxVal = newAlpha.length - 1;
        
        newAlphaLen = Math.floor(Math.random() * (newMaxVal - 1 + 1)) + 1 ;
        
        for(let j = 0; j < newAlphaLen; j++){
            randInd = Math.floor(Math.random() * (newAlpha.length - 0)) + 0;
            alpha = newAlpha[randInd].toUpperCase();
            newAlpha[randInd] = alpha;
        }
    }
    
    else{
        newAlphaNo = Math.floor(Math.random() * (alphaNo - subtrahend_uncheck + 1)) + subtrahend_uncheck;

        for (let i = 0; i < newAlphaNo; i++) {
            randInd = Math.floor(Math.random() * (alphaLen - 0)) + 0;
            newAlpha[i] = alphabets.charAt(randInd);
        }

        newMaxVal = newAlpha.length - 1;

        newAlphaLen = Math.floor(Math.random() * (newMaxVal - 1 + 1)) + 1;

        for(let j = 0; j < newAlphaLen; j++){
            randInd = Math.floor(Math.random() * (newAlpha.length - 0)) + 0;
            alpha = newAlpha[randInd].toUpperCase();
            newAlpha[randInd] = alpha;
        }
    }
        return newAlpha;
    }

function genRandNumbers(num) {
    let all_nums = "1234567890";
    let all_nums_len = all_nums.length;
    let nums = [];
    let randInd;
    let subtrahend = 1;
 
    //How to create a random number between two numbers(the two numbers are 
    //inclusive)

    newNum = Math.floor(Math.random() * (num - subtrahend + 1)) + subtrahend;
    
    symbol_checked = document.getElementById("symbolChecked").checked;
 
    if (symbol_checked == true) {

        for (let i = 0; i < newNum; i++) {
            randInd = Math.floor(Math.random() * (all_nums_len - 0)) + 0;
            nums[i] = all_nums.charAt(randInd);
        }

    } else {
        for (let j = 0; j < num; j++) {
            randInd = Math.floor(Math.random() * (all_nums_len - 0)) + 0;
            nums[j] = all_nums.charAt(randInd);
        }
    }

    return nums;
}

function genRandSymbols(my_num) {
    let symbs = "!@#$%^&*()_+~`|";
    let symbs_len = symbs.length;
    let my_symbs = [];
    let randSymb;

    for (let i = 0; i < my_num; i++) {
        //For brevity
        randSymb = Math.floor(Math.random() * (symbs_len - 0)) + 0;
        my_symbs[i] = symbs.charAt(randSymb);
    }

    return my_symbs;
}

function genPassword() {
    symbol_checked = document.getElementById("symbolChecked").checked;
    noLength = document.getElementById('lengthPicked').value;

    password_field.value = "";

    console.log(symbol_checked);
    console.log(noLength);

    if (symbol_checked == true) {
        let myAlpha = [];
        myAlpha = genRandAlphabets(sepEle);

        let myNum = [];
        myNum = genRandNumbers(sepEle - 1);
        console.log(myNum);

        let mySymb = [];
        let symbLen = noLength - (newAlphaNo + newNum);
        mySymb = genRandSymbols(symbLen);

        console.log(mySymb);
        let my_password = myAlpha.concat(myNum, mySymb);

        console.log(my_password);

        for (let i = 0; i < my_password.length; i++) {
            password_field.value += my_password[i];
        }

    } else {
        let myAlpha = [];
        myAlpha = genRandAlphabets(moreAlpha);
        console.log(myAlpha);

        let myNum = [];

        console.log(newAlphaNo);
        newNum1 = noLength - newAlphaNo;
        
        console.log(newNum1);

        myNum = genRandNumbers(newNum1);
        console.log(myNum);

        let my_password = myAlpha.concat(myNum);

        console.log(my_password);

        for (let i = 0; i < my_password.length; i++) {
            password_field.value += my_password[i];
        }
    }
}

function displayOptions(){
    options_menu.style.display = 'inline-block';
    noSym.style.animation = 'fade-in-left-1 220ms cubic-bezier(0, 0, 0.28, 0.96) 50ms 1 forwards';
    noLetters.style.animation = 'fade-in-left-2 220ms cubic-bezier(0, 0, 0.28, 0.96) 80ms 1 forwards';
    nums.style.animation = 'fade-in-left-3 220ms cubic-bezier(0, 0, 0.28, 0.96) 110ms 1 forwards';
    sysDec.style.animation = 'fade-in-left-4 220ms cubic-bezier(0, 0, 0.28, 0.96) 140ms 1 forwards';
}   
