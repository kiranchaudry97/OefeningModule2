import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let Artiest = await userInput.question('Kies je artiest');
console.log(Artiest);

let KeuzeSongs = await userInput.question('Geef je keuze van 4 in');


if(Artiest == '1. Red Hot Chili Peppers'){
    KeuzeSongs = 'cant stop';

}else if(Artiest == '2. AC/DC'){
    KeuzeSongs = 'Thunderstruck';

}else if(Artiest == '3. Netsky'){
    KeuzeSongs = 'Let me hold you';

}else if(Artiest == '4. De Strangers'){
    KeuzeSongs = 'Antwarpe';
   
}

else{
    console.log('deze informatie niet gekend');
}

console.log('je koos voor ' + Artiest + ' ze zijn de artist achter de hit:' + KeuzeSongs)

process.exit();