
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// Switch Case //

let Artiest = await userInput.question('Kies je artiest?');
console.log(Artiest);

let songs = 'songs';

switch(Artiest){
    case 'Red Hot Chili Peppers':
    songs = 'cant stop' ;
   
    break;

    case 'AC/DC':
        songs = 'Thunderstruck';
   
    break;

    case 'Netsky':
        songs = 'Let me hold you';
    break;

    case 'De Strangers':
        songs = 'Antwarpe';
    break;

    default:
        console.log('Type informtie niet gekend');
}
console.log( 'je koos voor '  + Artiest + '  ze zijn de artist achter de hit: '  + songs )

process.exit();