let password_field = document.getElementById("passwordField");
let button_genPass = document.getElementById("genPass");
let password_length = document.getElementById("lengthPicked");
let symbol_checked = document.getElementById("symbolChecked");
let noLength = document.getElementById('lengthPicked').value;
let sepEle = noLength / 2;
let newAlphaNo;
let newNum;

// button_genPass.addEventListener('click', genPassword());
console.log(noLength);

function genRandAlphabets(alphaNo) {
    let alphabets = "abcdefghijklmopqrstuvwxyz";
    let alphaLen = alphabets.length;
    let newAlpha = [];
    let randInd;
    // let myRandInd;
    // let alphaNo = noLength / 2;
    newAlphaNo = 1 + Math.floor(Math.random() * alphaNo);


    for(let i = 0; i < newAlphaNo; i++) {
        randInd = 1 + Math.floor(Math.random() * alphaLen);
        newAlpha[i] = alphabets.charAt(randInd);
    }


    //convert some lowercase elements in newAlpha array
    //to uppercase

    // let newAlphaLen = newAlpha.length;
    // let uppAlpha;
    // for(let j = 0; j < newAlphaNo - 1; j++){
    //     myRandInd = Math.random() * (newAlphaLen - 1);
    //     uppAlpha = newAlpha[myRandInd];
    //     uppAlpha.toUpperCase();
    //     newAlpha[randInd] = uppAlpha; 
    // }

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
    
    for(let i = 0; i < newNum; i++) {
        randInd = Math.floor(Math.random() * all_nums_len);
        nums[i] = all_nums.charAt(randInd);
    }

    return nums;
}

function genRandSymbols(my_num){
    let symbs = "!@#$%^&*()_+~`|";
    let symbs_len = symbs.length;
    let my_symbs = [];
    let randSymb;

    for(let i = 0; i < my_num; i++){
        randSymb = Math.floor(Math.random() * symbs_len);
        my_symbs[i] = symbs.charAt(randInd);
    }

    return my_symbs;
}

function genPassword(){
    if(symbol_checked == true){
        let myAlpha = [];
        myAlpha = genRandAlphabets(sepEle);

        let alphaNo1 =  - newAlphaNo;
        let myNum = [];
        myNum = genRandNumbers(sepEle - 1);
        
    }
}