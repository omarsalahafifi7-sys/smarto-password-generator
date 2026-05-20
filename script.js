const slider=document.getElementById('inputslider');
const sliderValue=document.getElementById('sliderValue');
const passbox=document.getElementById('passbox');
const lowercase=document.getElementById('lowercase');
const uppercase=document.getElementById('uppercase');
const numbers=document.getElementById('numbers');
const symbols=document.getElementById('symbols');
const genBtn=document.getElementById('genBtn');


slider.addEventListener('input',() =>{
    sliderValue.textContent=slider.value;
});
sliderValue.textContent=slider.value;


genBtn.addEventListener('click', () =>{
    passbox.value=GeneratePassword();
});

let lowerChars= "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function GeneratePassword(){
    let genPassword = "";
    let allChars = "";
    
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i <= inputslider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
return genPassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";
        
        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 300)
    }
});
