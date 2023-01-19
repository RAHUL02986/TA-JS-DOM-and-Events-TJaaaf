function main (){
    let div = document.querySelector(".btnsection");

    let ul = document.querySelector('ul');

    let search = document.querySelector("#search");


    let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
    }, []);

    let family = got.houses.map((names) => names.name);

    let activeFamily = "";

    function createPeople(data = []) {
    ul.innerHTML = "";
    data.forEach(peoples => {
        let li = document.createElement('li');
        li.classList.add('box');
        let img = document.createElement('img');
        img.src = peoples.image;
        img.alt = peoples.name;
        let h2 = document.createElement('h2');
        h2.innerText = peoples.name;
        let p = document.createElement('p');
        p.innerText = peoples.description;
        let a = document.createElement('a');
        a.innerText = "Know More!"
        a.href = peoples.wikiLink;
        li.append(img, h2, p, a);
        ul.append(li);
    });
    }




    function tagsUI(tag = []) {
        div.innerHTML = "";
        tag.forEach(name => {
            let button = document.createElement('button');
            button.innerText = name;
            if(activeFamily === name) {
                button.classList.add("active");
            }  
            button.addEventListener('click', () => {
                activeFamily = name;
                let filteredFamily = got.houses.find(house => house.name === name).people || [];
                createPeople(filteredFamily);
                tagsUI(family);
            });
            div.append(button);  
        });
    }


    function handleSearch(event) {
        let searchText = event.target.value;
        let searchPeople = allPeople.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
        createPeople(searchPeople);
    }


    search.addEventListener('keyup', handleSearch);
    createPeople(allPeople);
    tagsUI(family);
};

main();