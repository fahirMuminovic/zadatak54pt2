/*
Napisati program koji za proizvoljni string ispisuje:

a. broj (procenat) samoglasnika
b. broj (procenat) suglasnika
c. broj (procenat) ostalih karaktera
*/

function stringBrojacProcent(string) {
    let samoglasnici = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    //za suglasnike koristimo RegularExpression.
    //a-z -> sva slova alfabeta
    //čćžđš -> vidi se iz prilozenog
    //i -> velika slova
    let suglasnici = /^[a-zčćžđš]+$/i;

    let brojKaraktera = 0;
    let brojSamoglasnika = 0;
    let brojSuglasnika = 0;
    let brojSlova = 0;

    for (let i = 0; i < string.length; i++) {
        //samoglasnici
        for (let j = 0; j < samoglasnici.length; j++) {
            if (string.charAt(i) === samoglasnici[j]) {
                brojSamoglasnika++;
            }
        }

        //brojac slova u stringu sluzi da bi dobili broj suglasnika
        if (string.charAt(i).match(suglasnici)) {
            brojSlova++;
        }
    }
    
    
    brojSuglasnika = brojSlova - brojSamoglasnika;
    brojOstalihKaraktera = string.length - brojSamoglasnika - brojSuglasnika;

    let brojSamoglasnikaProcentualno = (brojSamoglasnika / string.length) * 100;
    let brojSuglasnikaProcentualno = (brojSuglasnika / string.length) * 100;
    let brojOstalihKarakteraProcentualno = (brojOstalihKaraktera / string.length) * 100;

    return [brojSamoglasnikaProcentualno.toFixed(2), brojSuglasnikaProcentualno.toFixed(2), brojOstalihKarakteraProcentualno.toFixed(2) ];
}


let string = 'Dobrodošli u JavaScript Programiranje.';

let rezultatFunkcije = stringBrojacProcent(string);
let brojSamoglasnikaProcentualno = rezultatFunkcije[0];
let brojSuglasnikaProcentualno = rezultatFunkcije[1];
let brojOstalihKarakteraProcentualno = rezultatFunkcije[2];


console.log(`String "${string}" se sastoji od ${brojSamoglasnikaProcentualno}% samoglasnika, ${brojSuglasnikaProcentualno}% suglasnika i  ${brojOstalihKarakteraProcentualno}% ostalih karaktera`);
console.log(string.length);