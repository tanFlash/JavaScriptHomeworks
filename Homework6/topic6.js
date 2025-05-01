// //Task 1
// //first way
// let element = document.getElementById("test");
// element.innerText = "Last";

// //second way
// let firstElement = document.querySelector("#test");
// firstElement.innerText = "Last";

// //Task 2
// let image = document.querySelector(".image");
// image.src = "cat.jpg";
// alert(image.outerHTML);

// //Task 3
// let children = document.querySelectorAll("#text p");

// children.forEach(function(child, index){
//     console.log(`Selector text ${index}: ${child.innerText}`);

// })

// //Task 4
// let listElements = document.querySelector("#list");

// alert(listElements.firstElementChild.innerText +" "+ listElements.lastElementChild.innerText +" " + 
//     listElements.firstElementChild.nextElementSibling.innerText +" " + listElements.lastElementChild.previousElementSibling.innerText +" " +
//     listElements.firstElementChild.nextElementSibling.nextElementSibling.innerText);

// const list = document.getElementById("list");
// const items = list.getElementsByTagName("li");

// alert(
//     items[0].textContent + " " +
//     items[4].textContent + " " +
//     items[1].textContent + " " +
//     items[3].textContent + " " +
//     items[2].textContent
// );

// //Task5

// let header = document.querySelector("h1");
// let paragraphs = document.querySelectorAll("#myDiv p");
// let list = document.getElementById("myList");
// let span = document.querySelector("span");

// header.style.backgroundColor = 'lightgreen';
// header.style.fontWeight = 'bold';

// paragraphs[0].style.fontWeight = 'bold';
// paragraphs[1].style.color = 'red';
// paragraphs[2].style.textDecoration = 'underline';
// paragraphs[3].style.fontStyle = 'italic';

// list.style.display = 'flex';
// list.style.listStyleType = 'none';

// span.style.display = 'none';

// //Task 6
// let firstInput = document.getElementById("input1");
// let secondInput = document.getElementById("input2");

// let firstValue = prompt("Enter the first value");
// let secondValue = prompt("Enter the second value");
// firstInput.value = firstValue;
// secondInput.value = secondValue;

// firstInput.value = secondValue;
// secondInput.value = firstValue;

//Task 7
let body = document.createElement("body");
let main = document.createElement("main");
let div = document.createElement("div");
let paragraph = document.createElement("p");

main.setAttribute("class", "mainClass check item");
div.setAttribute("id", "myDiv");

paragraph.textContent = "First paragraph";
div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);
document.documentElement.appendChild(body);

