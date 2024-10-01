import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let berekeningensymbool = await userInput.question("Welke symbolen wil je doen? (+, -, *, /");
console.log(berekeningensymbool)

let Getal1 = parseFloat(await userInput.question('Geef een getal 1 :'));
console.log(Getal1)

let Getal2 = parseFloat(await userInput.question('Geef een getal 2 :'));
console.log(Getal2)
let uitkomst = Getal1 + Getal2

switch(berekeningensymbool){
    case "+":
    console.log(Getal1 + " + " + Getal2)
    uitkomst = Getal1 + Getal2;
    console.log(uitkomst)  

    break;
    
    case "-" :
    console.log(Getal1 + " - " + Getal2)  


break;

    case "/" :
    console.log(Getal1 + " / " + Getal2)  

    break;

    case "*" :
    console.log(Getal1 + " / " + Getal2) 
}

process.exit();