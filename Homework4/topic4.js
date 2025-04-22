// //Task 1
// function calcRectangleArea(width, height) {
//     if(typeof width !== 'number' || typeof height !== 'number')
//         throw new Error("Width or height is not a number.")
//     return height*width
// }

// try {
//     let width = 10;
//     let height= '5';
    
//     let area = calcRectangleArea(width, height);
//     console.log("Area is:", area);
// }
// catch(error) {
//     console.log("Error", error.message);
// }

// //Task 2

// function checkAge() {
//     let age = prompt("Enter age:");
//     if(age === '')
//         throw new Error("The field is empty! Please enter your age");
//     let ageNumber = Number(age);
//     if(isNaN(ageNumber))
//         throw new Error("Incorrect data. Please enter a number.");
//     else if(ageNumber<14)
//         throw new Error("You are too young");
//     else
//     alert("You are allowed to watch this movie");
// }

// try{
//     checkAge();
// }
// catch(error){
//     alert(`Error name: ${error.name} \nError message: ${error.message}`);
// }

// //Task 3
// class MonthException extends Error {
//     constructor(message){
//         super(message);
//         this.name = "MonthException";
//     }
// }

// function showMonthName(month){
//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];

//     if(!isNaN(month)){
//         month = parseInt(month);
//         if(month<1 || month>12)
//             throw new MonthException("Incorrect month number")
//         return months[month -1];

//     }
//     else
//         throw new MonthException("Invalid input");
// }

// try{
//     console.log(showMonthName("1"));
// }
// catch(error) {
//     console.log(`Error name: ${error.name} \nError message: ${error.message}`);
// }

//Task 4

function ShowUser(id){
    if(id<0)
        throw new Error(`ID must not be negative: ${id}`);
    return {id};
}

function showUsers(ids){
    const result = [];

    for(let id of ids)
    {
        try{
            const user = ShowUser(id);
        result.push(user);
        }
        catch(error) {
            console.log(error.message);
        } 
    }
    return result;
}

let users = showUsers([7, -12, 44, 22]);
console.log(users);