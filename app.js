
const third_button = document.getElementById('third_button'); 
let num = document.getElementById('num');   
let counter = 0; 

third_button.addEventListener('click', () => {
    counter++;
    num.style.transition = 'all 1s';
    num.style.transform = 'scale(2,2)';
    num.innerHTML = counter;  
    if(num.innerHTML > 0){
        num.style.color = 'green';
    }else if (num.innerHTML == 0){
        num.style.color = 'black';
        num.style.transform = 'scale(1,1)';
    }
} )


first_button.addEventListener('click', () => {
    counter--;
    num.style.transition = 'all 1s';
    num.style.transform = 'scale(2,2)';
    num.innerHTML = counter;  
    if(num.innerHTML < 0){
        num.style.color = 'red';
    }else if (num.innerHTML == 0){
        num.style.color = 'black';
        num.style.transform = 'scale(1,1)';
    }
} )


second_button.addEventListener('click', () => {
    counter = 0;
    num.style.transition = 'all 1s';
    num.innerHTML = counter; 
    num.style.transform = 'scale(1,1)';
    num.style.color = 'black';
    
} )