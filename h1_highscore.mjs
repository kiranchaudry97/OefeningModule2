import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let score;
console.log(score)


let Getal1 = parseFloat(await userInput.question('Geef een getal 1 :'));
console.log(Getal1)

let Getal2 = parseFloat(await userInput.question('Geef een getal 2 :'));
console.log(Getal2)

let Getal3 = parseFloat(await userInput.question('Geef een getal 3 :'));
console.log(Getal3)

let Getal4 = parseFloat(await userInput.question('Geef een getal 4 :'));
console.log(Getal4)

let Getal5 = parseFloat(await userInput.question('Geef een getal 5 :'));
console.log(Getal5)


let gemiddelde = (Getal1 + Getal2 + Getal3 + Getal4 + Getal5)/5

let hoogste = (Getal1 + Getal2 + Getal3 + Getal4 + Getal5)/10

let laagste = (Getal1 + Getal2 + Getal3 + Getal4 + Getal5)/1




    if(gemiddelde >= 5){ 
        
        console.log("jouw score is gemiddelde")
        

    }else if(hoogste >= 4 ){
        
        console.log("jouw score is hoogste");


    }
    else if(hoogste >=  3 ){
        
        console.log("jouw score is laagste");

    }


userInput.close();