import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let Quiz1= await userInput.question('Vraag 1 : Wat is de hoofdstad van Frankrijk?');
console.log(Quiz1);


let Quiz2= await userInput.question('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?');
console.log(Quiz2);

let Quiz3= await userInput.question('Vraag 3: Wat is het grootste zoogdier ter wereld?');
console.log(Quiz3);

let Quiz4= await userInput.question('Vraag 4: Wie schreef het toneelstuk Romeo en Julia?');
console.log(Quiz4);

let Quiz5= await userInput.question('Vraag 5: Hoeveel poten heeft een spin?');
console.log(Quiz5);

let antwoord = 'antwoorden';

if(Quiz1 == "Parijs"){
    console.log("Je antwoord is correct!")

}else {
    console.log("foutief antwoord!")
}
        

if(Quiz2 == 9){
    console.log("Je antwoord is correct!")

}else {
    console.log("foutief antwoord!")
}


if(Quiz3 == "Blauwe vinvis"){
    console.log("Je antwoord is correct!")

}else {
    console.log("foutief antwoord!")
}


if(Quiz4 == "Shakespeare"){
    console.log("Je antwoord is correct!")

}else {
    console.log("foutief antwoord!")
}


if(Quiz5 ==  6){
    console.log("Je antwoord is correct!")

}else {
    console.log("foutief antwoord!")
}

console.log('je hebt van de '+ antwoord +' juist beantwoord');

process.exit();