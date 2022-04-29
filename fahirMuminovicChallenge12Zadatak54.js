/*
Napisati program koji ispisuje Floydov trokut. Program treba da radi za bilo koji broj redova.
Primjer:
Floydov trokut sastavljen od 5 redova izgleda ovako:

1
2    3
4    5    6
7    8    9    10
11    12    13    14    15 
*/

function floydovTrokut(row) {
    let ispis = '';
    let broj = 1;

    for (let i = 0; i < row; i++) {
        let j = 0;
        while (j <= i) {
            ispis += ' ' + broj;
            j++;
            broj++;
        }
        ispis += '\n';
    }
    return ispis;
}


console.log(floydovTrokut(5));

