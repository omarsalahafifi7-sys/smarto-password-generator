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

