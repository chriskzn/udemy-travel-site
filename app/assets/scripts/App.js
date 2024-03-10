import '../styles/styles.css'
//alert("Hello, this is just a test")

if (module.hot) {
    module.hot.accept()
}

/* Lesson example code below this line */
console.log("This is a test!");
console.log("Hello, my name is John Doe and my favourite color is blue.");
console.log("Hello, my name is Jane Smith and my favourite color is green.");

function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favourite color is " + favColor + ".");
}
console.log("Making use of function call in next lines..");

person("John Doe", "blue");
person("Jane Smith", "green");