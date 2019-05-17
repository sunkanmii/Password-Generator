let password_field = document.getElementById("passwordField");
let button_genPass = document.getElementById("genPass");
let password_length = document.getElementById("lengthPicked");
let symbol_checked = document.getElementById("symbolChecked").checked;
let noLength = document.getElementById('lengthPicked').value;
let sepEle = noLength / 2;
let newAlphaNo, newNum, newNum1;
  
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
    // let myRandInd;
    // let alphaNo = noLength / 2;
    newAlphaNo = Math.floor(Math.random() * (alphaNo - 1 + 1)) + 1;


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

    return newAlpha;
}

function genRandNumbers(num) {
    let all_nums = "1234567890";
    let all_nums_len = all_nums.length;
    let nums = [];
    let randInd;
    let subtrahend = num - 1;
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
        myNum = genRandNumbers((sepEle - 1));
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
        myAlpha = genRandAlphabets(sepEle);
        console.log(myAlpha);

        let myNum = [];
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