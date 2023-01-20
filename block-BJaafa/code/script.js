function main(){
let rootElm = document.querySelector('ul');
let input = document.getElementById('input');
let list = document.querySelector('label');
let allMovies = [];

// for deleting movies
function deleteMovie(event){
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovies();
}

// for handling toggle

function handleToggle(event){
    let id = event.target.dataset.id;
    allMovies[id].watched = !allMovies[id].watched;
    createMovies();
}

function createMovies(){
rootElm.innerHTML = "";
allMovies.forEach((elm ,i)=>{
    let li = document.createElement('li');
    let inputUI = document.createElement('input');
    inputUI.classList.add("type-checkbox");
    inputUI.id = "i";
    inputUI.checked = elm.watched;
    inputUI.type= "checked";
    inputUI.setAttribute('data-id',i);
    input.addEventListener("input",handleToggle);
    let label = document.createElement('label');
    label.for = "i";
    label.innerText = elm.name;
    let button = document.createElement('button');
    button.innerText = 'X';
    button.setAttribute('data-id', i);
    button.addEventListener("click",deleteMovie);

    li.append(inputUI, label, button);
    rootElm.append(li);

}
)

};

input.addEventListener("keyup", (event)=>{
    if(event.keyCode === 13){
        allMovies.push({
            name : event.target.value,
            watched: false
        })
        event.target.value = "";

    }
    createMovies();
})



}
main();