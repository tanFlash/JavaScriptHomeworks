// //Task 1

// function upperCase(text){
//     if(/^[A-Z]/.test(text)){
//         console.log("String's starts with uppercase character");
//     }
//     else{
//         console.log("String's not starts with uppercase character");
//     }
// }
// upperCase('regexp');
// upperCase('RegExp');

// //Task2

// function checkEmail(email){
//     let emailPatterm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPatterm.test(email);
// }

// console.log(checkEmail("Qmail2@gmail.com"));

// //Task3

// const str = "cdbBdbsbz";
// const regex = /[d]([b]+)([d])/gi;

// let match;
// while ((match = regex.exec(str)) !== null) {
//     console.log(match[0]); 
//     console.log(match[1]);
//     console.log(match[2]); 
// }

// //Task 4
// let inputString = "Java Script";
// let regex = /(.+)\s(.+)/;
// let replacedString = inputString.replace(regex, "$2, $1");
// console.log(replacedString);


// //Task 5

// function validateBankCard(card){
//     if(/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(card)){
//         console.log("Card is valid.");
//     }
//     else{
//         console.log("Card is not valid");
//     }
// }

// validateBankCard("9999-9999-9999-9999");

// //Task 6

// function checkEmail(email) {
//     const regex = /^[A-Za-z0-9](?!.*--)[A-Za-z0-9_-]*@[A-Za-z]+\.[A-Za-z]{2,}$/;

//     if (regex.test(email)) {
//         console.log("Email is correct!");
//     } else {
//         console.log("Email is not correct!");
//     }
// }

// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

//Task 7
function checkLogin(login) {
    const loginRegex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    const numberRegex = /\d+(\.\d+)?/g;

    const isValid = loginRegex.test(login);
    const numbers = login.match(numberRegex);

    console.log(isValid);
    if (numbers) {
        console.log(numbers.join(', '));
    }

    return isValid;
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');