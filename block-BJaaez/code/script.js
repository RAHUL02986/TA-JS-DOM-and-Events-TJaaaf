function main(){
    let rootElm=document.querySelector("ul")
    let input=document.querySelector(`input[type="text"]`);
    let list=document.querySelector("label");
    let allMovies=localStorage.getItem("allMovies")?JSON.parse(localStorage.getItem("allMovies")):[];


    //for all,activate,completed,etc
    let all=document.querySelector(".all")
    let complete=document.querySelector(".complete")
    let active=document.querySelector(".active")
    let clear=document.querySelector(".clear");    
    //for deleting movies

    function deleteMovie(event){
        let id=event.target.dataset.id;
        allMovies.splice(id,1);
        createMovies(allMovies);
    }
    //for handling toggle

    function handleToggle(event){
        let id=event.target.dataset.id;
        allMovies[id].watched=!allMovies[id].watched;
        createMovies(allMovies);
    }

    //make li of the movie
        /*<ul>
            <li>
              <input class="styled-checkbox" id="1" type="checkbox">
              <label for="1">MovieName</label>
              <button>X</button>
            </li>
          </ul>
          */
    function createMovies(array){
        rootElm.innerHTML="";
    array.forEach((elm,i)=>{
    let li=document.createElement("li");
    let inputUI=document.createElement("input");
    inputUI.classList.add("styled-checkbox");
    inputUI.id="i";
    inputUI.checked=elm.watched;
    inputUI.type="checkbox";
    inputUI.setAttribute("data-id",i);
    inputUI.addEventListener("input",handleToggle);
    let label=document.createElement("label");
    label.for="i";
    label.innerText=elm.name;
    let button=document.createElement("button");
    button.innerText="X";
    //let i=document.createElement("i");
    //icheck.classList.add("fas fa-check-double");
    //button.append(i);
    //button.innerHTML=<i class="fas fa-check-double"></i>
    button.setAttribute("data-id",i);
    button.addEventListener("click",deleteMovie);


    li.append(inputUI,label,button);
    rootElm.append(li);
    }
    )
    }
    input.addEventListener("keyup",(event)=>{
        if(event.keyCode===13){
        allMovies.push({
            name:event.target.value,
            watched:false
        })
        event.target.value="";
        }
    createMovies(allMovies);
    localStorage.setItem("allMovies",JSON.stringify(allMovies));
    })

    complete.addEventListener("click",(event)=>{
          let allComplete=allMovies.filter((elm)=>elm.watched)
    createMovies(allComplete);
    })
    active.addEventListener("click",(event)=>{
        let allactive=allMovies.filter((elm)=>!elm.watched)
  createMovies(allactive);
    })
    all.addEventListener("click",()=>{
        createMovies(allMovies);
        localStorage.setItem("allMovies",JSON.stringify(allMovies));
    })
    clear.addEventListener("click",(event)=>{
    allMovies=[];
    createMovies(allMovies);
    localStorage.setItem("allMovies",JSON.stringify(allMovies));
    }
    )

}
main();
