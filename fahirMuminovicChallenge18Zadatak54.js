/*
Napisati funkciju koja provjerava da li cijeli broj ima tacno 3 djelioca, i vraca true ukoliko broj ima tacno 3 djelioca a false u suprotnom. Npr broj 4 ima tacno 3 djelioca: 1, 2 i 4. Zatim ispisati prvih 20 brojeva koji imaju tacno 3 djelioca.
*/

function brojDjelioca(number) {
    let brojac = 0;

    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            brojac++;
        }
    }

    if (brojac === 3) {
        return true;
    }
    return false;
}


let brojac = 0;
let brojeviSaTriDjelioca = '';

for (let i = 0; brojac < 20; i++) {
    if (brojDjelioca(i)) {
        brojeviSaTriDjelioca += i + ' ';
        brojac++;
    }
}

console.log(brojeviSaTriDjelioca);