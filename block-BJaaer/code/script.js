let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modelInfo = document.querySelector(".model_info");
let userData = {};
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let elements = event.target.elements;



userData.name =  elements.name.value;
userData.email = elements.email.value;
userData.choice = elements.choice.value;
userData.color = elements.color.value;
userData.movie = elements.movie.value;
userData.book = elements.book.value;
userData.terms =  elements.terms.checked;


model.classList.add("open");

let close = document.querySelector(".model_close");
close.addEventListener('click',() =>{


model.classlist.remove("open");
});
displayInfo(userData);
});
function displayInfo(data = {}){
    modelInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Hello ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `Hello ${data.choice}`;
    let color = document.createElement("p");
    color.innerText = `Hello ${data.color}`;
    let movie = document.createElement("p");
    movie.innerText = `Hello ${data.movie}`;
    let book = document.createElement("p");
    book.innerText = `Hello ${data.book}`;
    let terms = document.createElement("p");
    terms.innerText = `> : ${
        data.terms 
        ? "You have accept the terms and condition"
        : "You have not accept the terms and condition"

    }`;



    modelInfo.append(h1,email, choice , color, movie , book, terms);
}