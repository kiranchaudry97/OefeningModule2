import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let Getal1 = parseFloat(await userInput.question('Geef een getal 1 :'));
console.log(Getal1)

let Getal2 = parseFloat(await userInput.question('Geef een getal 2 :'));
console.log(Getal2)

let maximum = Getal1 
let minimum = Getal2 
let uitkomst = Getal1 + Getal2

if(uitkomst % 2 == 0){ 
    console.log( "Je getal" + uitkomst + " ligt tussen"  + maximum + "en"   + minimum);
}else{
    console.log("Je getal " + uitkomst + "ligt tussen"  + minimum + "en"   + maximum);
}

process.exit();