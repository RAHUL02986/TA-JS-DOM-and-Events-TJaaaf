let form = document.querySelector('form');
let userInfo = {};
function handleSubmit(event){
    event.preventDefault();
    console.log(event)
}
form.addEventListener("submit",handleSubmit);