// //Task 1

// function propsCount(currentObject) {
//     let count = 0;
//     for(let key in currentObject){
//         if(currentObject.hasOwnProperty(key)){
//             count++;
//         }
//     }
//     return count;
// }

// let mentor = {

//     course: "JS fundamental",
    
//     duration: 3,
    
//     direction: "web-development"
    
//     };

//     console.log(propsCount(mentor));

// //Task 2

// let student = {
//     name: "Vasyl",
//     surname: "Pupkin",
//     group: "A",
//     department: "Law",
//     phone: "1234"
// }

// function showProps(obj) {
//     const keys = Object.keys(obj);
//     const values = Object.values(obj);

//     console.log(`Keys of object: ${keys}`);
//     console.log(`Vales of object: ${values}`)
// }

// showProps(student);

// //Task 3

// class Person {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName() {
//         return `${this.surname} ${this.name}`;
//     }
// }

// class Student extends Person{
//     constructor(name, surname, year){
//         super(name, surname);
//         this.year = year;
//     }

//     showFullName(middleName) {
//         return `${super.showFullName()} ${middleName}`;
//     }

//     showCourse() {
//         const currentYear = new Date().getFullYear();
//         let course = currentYear - this.year + 1;
//         if(course < 1 || course > 6)
//             return "Incorrect data.";
//         else
//             return course;
//     }
// }

// const stud1 = new Student("Petro", "Petrenko", 2020);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

// //Task 4

// class Worker {
    
//     constructor(fullName, dayRate, workingDays){
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//         this.#experience = 1.2;
//     } 
//     #experience;

//     showSalary(){
//         console.log(this.dayRate*this.workingDays);
//     }

//     showSalaryWithExperience(){
//         console.log(this.dayRate*this.workingDays*this.#experience);
//     }

//     get showExp(){
//         return this.#experience;
//     }

//     set setExp(value){
//         this.#experience=value;
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);

// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();

// let workers = [worker1, worker2, worker3];

// workers.sort((a, b) => 
//     (a.dayRate * a.workingDays * a.showExp) - (b.dayRate * b.workingDays * b.showExp)
// );

// for (let worker of workers) {
//     console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.showExp}`);
// }

//Task 5

class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function handleFigures(figures) {
    return figures.reduce((total, figure) => {
        if (figure instanceof GeometricFigure) {
            const area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return total + area;
        } else {
            console.warn("Invalid object:", figure);
            return total;
        }
    }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)]; 
console.log(handleFigures(figures));

