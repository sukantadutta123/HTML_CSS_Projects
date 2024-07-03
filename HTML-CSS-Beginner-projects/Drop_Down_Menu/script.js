let countries = [ "Afghanistan", "Algeria", "Argentina", "India", "Pakistan", "USA", "UK", "Australia", "Bangladesh", "Nepal"];



let container = document.querySelector('.container');
let SelectBtn = container.querySelector('.select-option');
let dropDownList = container.querySelector('.list-search-container');
let searchInput = container.querySelector('#search');
let lists = dropDownList.querySelector('.list');


SelectBtn.addEventListener('click', () =>{
    container.classList.toggle('active');
})

function addCountry(selectedCountry){
    lists.innerHTML="";
    countries.forEach((country)=>{
        let isSelected = selectedCountry==country?"selected":"";
        let listItem = '<li class="' + isSelected + '">' + country + '</li>';
        lists.insertAdjacentHTML('beforeend',listItem);
    })
    addClickEventToLi();
}
addCountry();

function addClickEventToLi(){
    lists.querySelectorAll('li').forEach(listItem=>{
        listItem.addEventListener('click',()=>{
            updateSelectCountry(listItem);
        })
    })
}

function updateSelectCountry(listItem){
    searchInput.value = "";
    SelectBtn.firstElementChild.innerHTML = listItem.innerHTML;
    container.classList.remove('active');
    addCountry(listItem.innerHTML);
}

searchInput.addEventListener('keyup', ()=>{
    let searchInpVal = searchInput.value.toLowerCase();
    let filteredCountries = countries.filter(country=>{
        return country.toLocaleLowerCase().startsWith(searchInpVal);     
    }).map(country=>{
        let listItem = '<li>' + country + '</li>';
        return listItem;
    }).join('');
    lists.innerHTML = filteredCountries;
    addClickEventToLi();
})