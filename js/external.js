/*console.log("Hello from External JavaScript");
alert("Welcome to my Website!");
var userInput= prompt('What is your favorite color?')
console.log('Great, my favorite color is ' + userInput +" too!");*/
var littleMermaid = prompt('Rent Little Mermaid for how many days?');
var brotherBear = prompt('Rent Brother Bear for how many days?');
var hercules = prompt('Rent Hercules for how many days');
var totalCost = (parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules))*3;
alert('The total cost is $' + totalCost);
