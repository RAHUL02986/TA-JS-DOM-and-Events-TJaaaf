let form = document.querySelector('form');
let usernameError = "";
let nameError = "";
let emailError = "";
let numberError = "";
function handleSubmit(event){
    event.preventDefault();
    let usernameElm = event.target.elements.userName;
    if(usernameElm.value ===""){
      usernameError = "can't be empty!";
    } else if (usernameElm.value.length < 4){
        usernameError = "can't be a less then 4 charecters";
        console.log(usernameError)
    }
    usernameElm.nextElementSibling.innerText = usernameError;
    
    
    let nameElm = event.target.elements.name;

    if(nameElm.value === ""){
        nameError = "can't be empty!";
    }else if (nameElm.value ===typeof(number))
    nameError = "Name can't be number";
    nameElm.nextElementSibling.innerText = nameError;
    

    let emailElm = event.target.elements.email;
    if(emailElm.value === ""){
        emailError.value = "Can't be Empty!";
    }else if(emailElm.value.length <6){
        emailError.value = "email must contain at least 6 character"
    }

    emailElm.nextElementSibling.innerText = emailError;
 
    
    
    let numberElm = event.target.elements.number;

    if(numberElm.value === ""){
        numberError.value = "Phone number can only contain numbers"
    }
    numberElm.nextElementSibling.innerText = numberError;
}

form.addEventListener("submit", handleSubmit);