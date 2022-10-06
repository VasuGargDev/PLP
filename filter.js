
let grid = document.querySelector(".products");
let filterInput = document.getElementById("filterInput");

fetch('./database/store.json')
    .then(res => res.json()) 
    .then(json =>{

        for (let value of json){
            addElement(grid, value)
        }
        
    });


function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.item')
    

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}



function addElement(appendIn, value){
    let div = document.createElement('div');
    div.className = "item justify-self-center";

    let { image, title, category, price } = value;

    div.innerHTML = `
            <img src="${image}" class="bg-cover img mx-auto" alt="img1">
            <div class="text-center py-3 font-poppins">
                <h1 class="text-lg title">${title}</h1>
                <a href="#" class="block"><span class="text-sm text-red-400">${category}</span></a>
                <span class="block py-3">$<span class="text-md">${price}</span></span>
                <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">Buy Now</button>
            </div>
    `;
    appendIn.appendChild(div);
}





filterInput.addEventListener('keyup', filterProducts);

function filterProducts(){
    while(grid.childNodes.length > 1){
        grid.removeChild(grid.lastChild)
    }

    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        let filterValue = filterInput.value.toUpperCase();
        let filterData = match(json, 'title', filterValue)       //filtering by title


        for (const value of filterData){
            addElement(grid, value)
        }

    });

}


function filterBtnProducts(itemCategory){

  
    while(grid.childNodes.length > 1){
        grid.removeChild(grid.lastChild)
    }

    fetch('./database/store.json')
    .then(res => res.json())
    .then(json =>{

        let filterValue = itemCategory;
        let filterData = []
        json.filter(v =>(v.category===filterValue)?filterData.push(v):"")      //filtering by category
        console.log(filterData)
        for (const value of filterData){
            addElement(grid, value)
        }

    });

}



const match = (values, filterby, input) => {
    const p = Array.from(input).reduce((a, v, i) => `${a}[^${input.substr(i)}]*?${v}`, '');
    //console.log(p)
    const re = RegExp(p);
    //console.log(re)
    //console.log(values.filter(v => v[filterby].toUpperCase().match(re)))
    return values.filter(v => v[filterby].toUpperCase().match(re))
}   




