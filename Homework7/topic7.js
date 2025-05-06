// //Task1

// let newWindow = window.open('', 'New window', 'width=300,height=300');

// setTimeout(function() {
//     newWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(function() {
//     newWindow.resizeTo(200, 200);
// }, 4000);

// setTimeout(function() {
//     newWindow.close();
// }, 6000);

// //Task2

// let changeStyleButton = document.querySelector("#changeStyle");
// let paragraph = document.querySelector("#text");

// function changeCSS(){
//     paragraph.style.color = "orange";
//     paragraph.style.fontSize = "20px";
//     paragraph.style.fontFamily = "Comic Sans MS";
// }

// changeStyleButton.addEventListener("click", changeCSS);

// //Task 3
// let buttonBlue = document.querySelector("#btnBlue");
// let buttonPink = document.querySelector("#btnPink");
// let buttonBrown = document.querySelector("#btnBrown");
// let link = document = document.querySelector("a");

// buttonBlue.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue";
// });

// buttonPink.addEventListener("dblclick", function(){
//     document.body.style.backgroundColor = "pink";
// });

// buttonBrown.addEventListener("mousedown", function(){
//     document.body.style.backgroundColor = "brown";
// });

// buttonBrown.addEventListener("mouseup", function(){
//     document.body.style.backgroundColor = "white";
// });

// link.addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = "yellow";
// });

// link.addEventListener("mouseout", function(){
//     document.body.style.backgroundColor = "white";
// });

// //Task 4
// const list = document.querySelector('#mySelect');

// function removeSelectedOption(){
//     list.remove(list.selectedIndex);
// }

// //Task 5
// let liveButton = document.querySelector("#liveButton");
// let statusMessage = document.createElement("div");
// document.body.appendChild(statusMessage);

// liveButton.addEventListener("mouseover", function() {
//     statusMessage.innerHTML += "Mouse on me!<br>";
// });

// liveButton.addEventListener("mouseout", function() {
//     statusMessage.innerHTML += "Mouse is not on me!<br>";
// });

// liveButton.addEventListener("click", function() {
//     statusMessage.innerHTML += "I was pressed!<br>";
// });

// //Task 6
// function displayWindowSize() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
   
//     document.getElementById("dimensions").innerText = "Width: " + width + ", Height: " + height;
//   }
 
//   window.onload = displayWindowSize;
//   window.onresize = displayWindowSize;

//   displayWindowSize();

//   window.addEventListener('resize', displayWindowSize);

//Task 7
const citiesUkraine = ['Kyiv', 'Rivne', 'Ternopil', 'Lviv'];
const citiesUSA = ['New Your', 'Washington', 'Chicago'];
const citiesAustralia = ['Sydney', 'Hobart', 'Darwin'];

const countryDropdown = document.getElementById('country');
const citiesDropdown = document.getElementById('cities');
const selectedCountry = document.getElementById('selected-country');
const selectedCity = document.getElementById('selected-city');

function setCities(selectedCountryValue) {
    let cities;

    switch(selectedCountryValue) {
        case 'Ukraine':
            cities = citiesUkraine;
            break;
        case 'USA':
            cities = citiesUSA;
            break;
        case 'Australia':
            cities = citiesAustralia;
            break;
        default:
            cities = [];
    }

    citiesDropdown.innerHTML = '';

    cities.forEach(function(city) {
        const option = document.createElement('option');
        option.text = city;
        citiesDropdown.add(option);
    });

    selectedCountry.textContent = selectedCountryValue;
    citiesDropdown.selectedIndex = 0;
    const selectedCityValue = citiesDropdown.value;
    selectedCity.textContent = selectedCityValue;
};

countryDropdown.addEventListener('change', function() {
    const selectedCountryValue = countryDropdown.value;
    setCities(selectedCountryValue);
});

citiesDropdown.addEventListener('change', function() {
    const selectedCityValue = citiesDropdown.value;
    selectedCity.textContent = selectedCityValue;
});

countryDropdown.value = 'Ukraine';
setCities('Ukraine');