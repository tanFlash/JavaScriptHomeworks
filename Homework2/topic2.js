//Task 1
let x = 1;
let y = 2;

let res1 = String(x)+String(y);

console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x)+ `${y}`;

console.log(res2);
console.log(typeof res2);

let res3 = x < y;

console.log(res3);
console.log(typeof res3);

let res4 = "Hello" - x*y;

console.log(res4);
console.log(typeof res4)

//Task 2
let res = +prompt("Enter number");
if(isNaN(res)){
    console.log("Invalid input");
}
else{
    if(res%2===0&&res>0)
        console.log("Number is even and positive");
    else
        console.log("Number is not even or positive");
    
    if (res%7===0)
        console.log("Number is divisibale by 7")
    else
        console.log("Number is not divisibale by 7")
}

//Task 3

let myArray = [2, "Hello", true, null];

console.log(`The number of elements in array is ${myArray.length}`);

let anotherElement = prompt("Set the fifth element in array");
myArray.push(anotherElement);
console.log(`The fifth element: ${myArray[4]}`);

myArray.shift();
console.log(myArray);

//Task 4
let cities = ["Rome", "Lviv", "Warsaw"];

let result = cities.join("*")
console.log(result);

//Task 5
let age = +prompt("How old are you?");

let response = (age<18)? "You are not adult": "You are adult";
console.log(response);

//Task 6
let side1 = prompt("Set the first side of triangle");
let side2 = prompt("Set the second side of triangle");
let side3 = prompt("Set the third side of triangle");

if(isNaN(side1) || isNaN(side2) || isNaN(side3)){
    console.log("Incorrect data. One or more paramneters are not a number.");
}
else {
    side1 = parseFloat(side1);
    side2 = parseFloat(side2);
    side3 = parseFloat(side3);
    if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1) {

        let semiPerimeter = (side1 + side2 + side3) / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
        console.log(`Triangle area: ${area.toFixed(3)}`);
    }
    else
        console.log("Incorrect data.")
}

if((a*a + b*b === c*c) || (b*b+ c*c === a*a) || (c*c + a*a === b*b)) {
    console.log("The triangle is right-angeled");
}
else {
    console.log("The triangle is not right-angled");
}

//Task 7
let date = new Date();
let currentHour = date.getHours();

if(currentHour >=23 || currentHour <5)
    console.log("Good night");
else if (currentHour >=5 && currentHour <11)
    console.log("Good morning");
else if (currentHour>=11 && currentHour <17)
    console.log("Good afternoon");
else if (currentHour >=17 && currentHour <23)
    console.log("Good evening");

switch(true){
    case(currentHour >=23 || currentHour <5):
        console.log("Good night");
        break;
    case(currentHour >=5 && currentHour <11):
        console.log("Good morning");
        break;
    case(currentHour>=11 && currentHour <17):
        console.log("Good afternoon");
        break;
    case(currentHour >=17 && currentHour <23):
        console.log("Good evening");
        break;
}