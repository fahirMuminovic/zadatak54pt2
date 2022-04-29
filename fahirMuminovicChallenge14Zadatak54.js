/*
Koristiti funkcije u rjesavanju ovog zadatka.
Napisati funkciju koja transponuje matricu. Dakle, prvo generisati matricu 3x3 i popuniti nasumicnim brojevima od 0 do 10 a zatim ju ispisati. Sljedeci korak je trasponovanje matrice. Transponovati matricu znaci zamijeniti joj redove i kolone.
Primjer:
Ukoliko je matrica:
1 2 3
4 5 6
7 8 9

Transponovana matrica je:
1 4 7
2 5 8
3 6 9
*/
function transponuj(matrica) {
    let transponovanaMatrica = [];
    for (let i = 0; i < 3; i++) {
        transponovanaMatrica[i] = [];
        for (let j = 0; j < 3; j++) {
            transponovanaMatrica[i][j] = matrica[j][i];
        }
    }
    return transponovanaMatrica;
}

let matrica = [];

for (let i = 0; i < 3; i++) {
    
    matrica[i] = [];
    for (let j = 0; j < 3; j++) {
        matrica[i][j] = Math.floor(Math.random() * 10);
        
    }
}

console.log('Matrica je:');
console.table(matrica);
console.log('Matrica transponovana je:');
console.table(transponuj(matrica));