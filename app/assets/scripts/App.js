import '../styles/styles.css'
import Person from './modules/Person'
//alert("Hello, this is just a test")

if (module.hot) {
    module.hot.accept()
}

/* Lesson example code below this line */
console.log("This is a test!");
console.log("Hello, my name is John Doe and my favourite color is blue.");
console.log("Hello, my name is Jane Smith and my favourite color is green.");

function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favourite color is " + favColor  + ".");
}
console.log("Making use of function call in next lines..");

person("John Doe", "blue");
person("Jane Smith", "green");

console.log("Making use of the second function call in next lines..");

let johnName = "John Doe";
let johnFavColor = "blue";

person(johnName, johnFavColor);

console.log("Making use of the third function call in next lines..");

let john = {
    name: "John Doe",
    favoriteColor: "blue"
}

person(john.name, john.favoriteColor);

console.log("Making use of the fourth function call in next lines..");

var john2 = {
    name: "John Doe",
    favoriteColor: "blue",
    greet: function() {
        console.log("Hello, my name is " + john2.name + " and my favourite color is " + john2.favoriteColor  + ".");
    }
}

john2.greet();


/* Using this as the main code for video 42 */
class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes zero taxes.");
    }
}

console.log("Making use of the fifth function (object oriented) call in next lines..");

let john3 = new Person("John Doe", "blue");
john3.greet();

let jane3 = new Person("Jane Smith", "green");
let jane4 = new Adult("Jane Smith", "green");
jane3.greet();
jane4.payTaxes();