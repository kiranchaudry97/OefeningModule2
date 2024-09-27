

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});




let maand = await userInput.question('Hoeveel dagen zitten in de maand?');
let dagen = 31;

switch(maand){
    case 'September':
        dagen = 30 ;
        break;
    case 'Oktober':
        dagen = 31;
        break;
    case 'November':
        dagen = 30;
        break;
    case 'december':
            dagen = 31;
            break;
            
     case 'januari':
             dagen = 30;
             break;

         case 'februari':
             dagen = 28;

        break;

     case 'maart':
                dagen = 31;
                break;
    case 'april':
            dagen = 30;
             break;

             case 'mei':
                dagen = 31;
                 break;
    case 'juni':
        dagen = 30;
        break;

        case 'juli':
            dagen = 31;
             break;
            
             case 'augustus':
                dagen = 30;
                 break;
}
console.log( 'De ze '+ maand + 'heeft' +dagen + 'dagen' );
process.exit();