"use strict";
if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js")
        .then(registration => {
            console.log("Service worker is registered: ", registration);
        })
        .catch(err => {
            console.error("Registration failed: ", err);
        });
    });
}
let password_field = document.getElementById("passwordField");
let button_genPass = document.getElementById("genPass");
let password_length = document.getElementById("lengthPicked");
let symbol_checked = document.getElementById("symbolChecked").checked;
let noLength = document.getElementById('lengthPicked').value;
let options_menu = document.getElementsByClassName('options-menu')[0];
let options_class = document.getElementsByClassName('button-class')[0];
let options_button = document.getElementById('options-button');
let close_button = document.getElementById('close-button');
let noSym = document.getElementById('no-symbols');
let noLetters = document.getElementById('no-letters');
let nums1 = document.getElementById('amount-nums');
let sysDec = document.getElementById('sys-decide');
let noSymbs = document.getElementById('no-sym-picked');
let noLettP = document.getElementById('no-lett-picked');
let noGen = document.getElementById('nums-to-gen');
let sysDecision = document.getElementById('sys-dec');
let saveButton = document.getElementById('save-button');
let my_password, myAlpha, myNum, mySymb;
let temp1 = 0, temp2;
let sepEle = noLength / 2;
let moreAlpha = sepEle + 2;
let newAlphaNo = 0, newAlphaNo1 = 0, newNum = 0, newNum1 = 0;
let temp = 0;

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
    if(sysDecision.checked == true){
        if (symbol_checked == true) {

            newAlphaNo = Math.floor(Math.random() * (alphaNo - subtrahend_check + 1)) + subtrahend_check;

            for (let i = 0; i < newAlphaNo; i++) {
                randInd = Math.floor(Math.random() * (alphaLen - 0)) + 0;
                newAlpha[i] = alphabets.charAt(randInd);
            }

            //convert some lowercase elements in newAlpha array
            //to uppercase

            newMaxVal = newAlpha.length - 1;

            newAlphaLen = Math.floor(Math.random() * (newMaxVal - 1 + 1)) + 1;

            for (let j = 0; j < newAlphaLen; j++) {
                randInd = Math.floor(Math.random() * (newAlpha.length - 0)) + 0;
                alpha = newAlpha[randInd].toUpperCase();
                newAlpha[randInd] = alpha;
            }
        } else {
            newAlphaNo = Math.floor(Math.random() * (alphaNo - subtrahend_uncheck + 1)) + subtrahend_uncheck;

            for (let i = 0; i < newAlphaNo; i++) {
                randInd = Math.floor(Math.random() * (alphaLen - 0)) + 0;
                newAlpha[i] = alphabets.charAt(randInd);
            }

            newMaxVal = newAlpha.length - 1;

            newAlphaLen = Math.floor(Math.random() * (newMaxVal - 1 + 1)) + 1;

            for (let j = 0; j < newAlphaLen; j++) {
                randInd = Math.floor(Math.random() * (newAlpha.length - 0)) + 0;
                alpha = newAlpha[randInd].toUpperCase();
                newAlpha[randInd] = alpha;
            }
        }
    }
    else{
        for (let i = 0; i < alphaNo; i++) {
            randInd = Math.floor(Math.random() * (alphaLen - 0)) + 0;
            newAlpha[i] = alphabets.charAt(randInd);
        }

        //convert some lowercase elements in newAlpha array
        //to uppercase

        newMaxVal = newAlpha.length - 1;

        newAlphaLen = Math.floor(Math.random() * (newMaxVal - 1 + 1)) + 1;

        for (let j = 0; j < newAlphaLen; j++) {
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

    if (sysDecision.checked == true) {
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
    sysDecision.checked;
    
    password_field.value = "";
    
    console.log(symbol_checked);
    console.log(noLength);
    
    if (sysDecision.checked == true) {
        temp = 0;

        if (symbol_checked == true) {

            myAlpha = [];
            myAlpha = genRandAlphabets(sepEle);

            noLettP.value = newAlphaNo;

            myNum = [];
            myNum = genRandNumbers(sepEle - 1);
            noGen.value = newNum;

            mySymb = [];
            let symbLen = noLength - (newAlphaNo + newNum);
            mySymb = genRandSymbols(symbLen);
            noSymbs.value = symbLen;

            my_password = myAlpha.concat(myNum, mySymb);

            console.log(my_password);

            for (let i = 0; i < my_password.length; i++) {
                password_field.value += my_password[i];
            }

        } else {
            myAlpha = [];
            myAlpha = genRandAlphabets(moreAlpha);
            noLettP.value = newAlphaNo;

            console.log(myAlpha);

            myNum = [];

            console.log(newAlphaNo);
            newNum1 = noLength - newAlphaNo;

            console.log(newNum1);

            noSymbs.value = "-";
            myNum = genRandNumbers(newNum1);
            noGen.value = newNum1;

            console.log(myNum);

            my_password = myAlpha.concat(myNum);

            console.log(my_password);

            for (let i = 0; i < my_password.length; i++) {
                password_field.value += my_password[i];
            }
        }
    } else {

        if(temp1 > 0){
        
            myAlpha = [];
            myAlpha = genRandAlphabets(noLettP.value);
                
            myNum = [];
        
            myNum = genRandNumbers(noGen.value);
        
            symbol_checked;
            if(symbol_checked = true){
                my_password = myAlpha.concat(myNum);
                mySymb = [];
                mySymb = genRandSymbols(noSymbs.value);
                
                my_password = myAlpha.concat(myNum, mySymb);
                
                for (let i = 0; i < my_password.length; i++) {
                    password_field.value += my_password[i];
                }
            }
            else{
                for (let i = 0; i < my_password.length; i++) {
                    password_field.value += my_password[i];
                }
            }
        }   
    }
}

function checkAddress()
{
    sysDecision.checked;
    if(sysDecision.checked == false){
        noLettP.disabled = false;
        noGen.disabled = false;
        noSymbs.disabled = false;
        saveButton.disabled = false;
    }
    else{
        noLettP.disabled = true;
        noGen.disabled = true;
        noSymbs.disabled = true;
        saveButton.disabled = true;
    }
}

function saveButtonClick(){
    temp1++;
    if(noSymbs.value === "-"){
        password_length.value = Number(noLettP.value) + Number(noGen.value); 
    }
    else{
        password_length.value = Number(noLettP.value) + Number(noGen.value) + Number(noSymbs.value); 
    }
}
function displayOptions() {
    options_menu.style.display = 'inline-block';
    options_class.style.margin = '30px 0px 5px';
    options_button.style.display = 'none';
    close_button.style.display = 'inline-block';
    noSym.style.animation = 'fade-in-left-1 220ms cubic-bezier(0, 0, 0.28, 0.96) 50ms 1 forwards';
    noLetters.style.animation = 'fade-in-left-2 220ms cubic-bezier(0, 0, 0.28, 0.96) 80ms 1 forwards';
    nums1.style.animation = 'fade-in-left-3 220ms cubic-bezier(0, 0, 0.28, 0.96) 110ms 1 forwards';
    sysDec.style.animation = 'fade-in-left-4 220ms cubic-bezier(0, 0, 0.28, 0.96) 140ms 1 forwards';
}
function closeOptions(){
    options_menu.style.display = 'none';
    options_button.style.display = 'inline-block';
    close_button.style.display = 'none';
}

//To-do
//-Create another js file for user and import functions from here and use