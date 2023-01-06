let output = document.querySelector('.result');
let allBtn = document.querySelectorAll('button');
let initialValue = 0;


output.innerText = initialValue;



function handleBtn(event) {
    if(event.target.classList.contains("equalto")) {
        output.innerText = eval(output.innerText);
        return;
    }
    if(event.target.classList.contains("clear")) {
        output.innerText = initialValue;
        return;
    }
    if(output.innerText == initialValue){
        output.innerText = event.target.innerText;
    } else {
        output.innerText += event.target.innerText;
    }
};

allBtn.forEach(btn => {
    btn.addEventListener('click', handleBtn)
});
