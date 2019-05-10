let password_field = document.getElementById("passwordField");
let button_genPass = document.getElementById("genPass");
let password_length = document.getElementById("lengthPicked");
let symbol_checked = document.getElementById("symbolChecked").checked;
let noLength = document.getElementById('lengthPicked').value;
let sepEle = noLength / 2;
let newAlphaNo;
let newNum;
let newNum1;

// button_genPass.addEventListener('click', genPassword());
console.log(noLength);

function genRandAlphabets(alphaNo) {
    let alphabets = "abcdefghijklmopqrstuvwxyz";
    let alphaLen = alphabets.length;
    let newAlpha = [];
    let randInd;
    // let myRandInd;
    // let alphaNo = noLength / 2;
    newAlphaNo = Math.floor(Math.random() * (alphaNo - 1)) + 1;
    
    
    for(let i = 0; i < newAlphaNo; i++) {
        randInd = Math.floor(Math.random() * (alphaLen - 1)) + 1;
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
            randInd = Math.floor(Math.random() * (all_nums_len - 1)) + 1;
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
            randSymb = Math.floor(Math.random() * (symbs_len - 1)) + 1;
            my_symbs[i] = symbs.charAt(randSymb);
        }
        
        return my_symbs;
    }
    
    function genPassword(){
        symbol_checked = document.getElementById("symbolChecked").checked;
        noLength = document.getElementById('lengthPicked').value;

        password_field.value = "";

        console.log(symbol_checked);
        console.log(noLength);
        
        if(symbol_checked == true){
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
            for(let i = 0; i < my_password.length; i++){
                password_field.value += my_password[i];
            }
        }
        else{
            let myAlpha = [];
            myAlpha = genRandAlphabets(sepEle);
            console.log(myAlpha);

            let myNum = [];
            newNum1 = noLength - newAlphaNo;
            myNum = genRandNumbers(newNum1);
            console.log(myNum);
            
            let my_password = myAlpha.concat(myNum);
            
            console.log(my_password);
            for(let i = 0; i < my_password.length; i++){
                password_field.value += my_password[i];
            }
        }
    }