import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let maand = await vraagInput('Voer de naam van de maand in : ');
let jaar = parseInt(await vraagInput('Voer het jaar in : '));

let dagen;

if (jaar || jaar < 0) {
    console.log("Voer een jaar in.");
    process.exit();
}

let isSchrikkeljaar = false;
if ((jaar % 4 === 0 && jaar % 100 !== 0) || (jaar % 400 === 0)) {
    isSchrikkeljaar = true;
}

switch (maand) {
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        dagen = 31;
        break;
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        dagen = 30;
        break;
    case 'februari':
        if (isSchrikkeljaar) {
            dagen = 29;
        } else {
            dagen = 28;
        }
        break;
    default:
        console.log("geef maand in.");
        
}

console.log("De maand" + maand + "in het jaar " + jaar + "heeft " + dagen );

let getal1 = parseFloat(await userInput.question('Geef getal 1: '));
let getal2 = parseFloat(await userInput.question('Geef getal 2: '));
let getal3 = parseFloat(await userInput.question ('Geef getal 3: '));
let getal4 = parseFloat(await userInput.question ('Geef getal 4: '));
let getal5 = parseFloat(await userInput.question ('Geef getal 5: '));


let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5) / 5;
let hoogste = 0;(getal1, getal2, getal3, getal4, getal5);
let laagste = 0;(getal1, getal2, getal3, getal4, getal5);

if (gemiddelde >= 5) {
    console.log("Jouw score is:" + gemiddelde );
} else if (hoogste >= 4) {
    console.log("Jouw score is:" + hoogste);
} else if (laagste >= 3) {
    console.log("Jouw score is:" + laagste);
} else {
    console.log(".");
}

userInput.close();













process.exit();