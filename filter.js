
let grid = document.querySelector(".products");


//fetching data from API
fetch('./database/store.json')
    .then(res => res.json()) 
    .then(json =>{

        for (let value of json){
            addElement(grid, value)
        }
        
    });


// Getting values from API and cteating dynamic element
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




let filterInput = document.getElementById("filterInput");

//adding event listener
filterInput.addEventListener('keyup', filterProducts);



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



//filtering function for search bar
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

//match function for filtering by text search based upon regular expression
const match = (values, filterby, input) => {
    const p = Array.from(input).reduce((a, v, i) => `${a}[^${input.substr(i)}]*?${v}`, '');
 
    const re = RegExp(p);
    
    return values.filter(v => v[filterby].toUpperCase().match(re))
}   



//filtering function for categories
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
