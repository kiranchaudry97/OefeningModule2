import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});





let jaartal = await userInput.question('Geef het jaartal in');
console.log(jaartal);

 //deelbaar door 4 dus schrikkeljaar.//

if(jaartal/ 4){
   console.log("het is  wel een schrikkeljaar");
   
}

else if (jaartal/100){
    console.log( "het is geen schrikkeljaar");

}

else if (jaartal/400){
    console.log( "het is toch wel een schrikkeljaar");
    
}

userInput.close();