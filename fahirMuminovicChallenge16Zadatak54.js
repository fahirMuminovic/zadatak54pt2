/*
Imamo masinu koja sitni novac. Obzirom da odredjenu kolicinu novca mozemo podijeliti na vise nacina, nas program za ovu masinu bi trebao da ispise sve moguce opcije. Koristiti novcanice konvertibilne marke s tim da se ne koristi manja novcanica od 5 KM.
Primjer: 20 KM bi se moglo usitniti na sljedece nacine:
2 x 10KM, 4 x 5KM, 1 x 10KM + 2 x 5KM.
Napisati funkciju koja prima jedan parametar, kolicinu novca, zatim funkcija ispisuje sve moguce opcije za tu kolicinu novca.
*/

function change(novcanica) {
    let konvertibilneMarke = [5, 10, 20, 50, 100, 200, 500];
    let moguceNovcanice = [];
    let mnozenjem = '';
    let sabiranjem_i_mnozenjem = '';


    for (let i = 0; i < konvertibilneMarke.length; i++) {
        if (konvertibilneMarke[i] < novcanica) {
            moguceNovcanice.push(konvertibilneMarke[i]);
        }
    }

    for (let i = 0; i < novcanica; i++) {
        for (let j = 0; j < moguceNovcanice.length; j++) {
            if (i * moguceNovcanice[j] === novcanica) {
                mnozenjem += String(i) + ' x ' + String(moguceNovcanice[j]) + 'KM\n';
            }
        }
    }

    for (let i = 0; i < novcanica; i++) {
        for (let j = 0; j < moguceNovcanice.length; j++) {
            for (let k = 0; k < moguceNovcanice.length; k++) {
                if (moguceNovcanice[j] === moguceNovcanice[k]) {
                    continue;
                } else if (i * moguceNovcanice[j] + moguceNovcanice[k] === novcanica) {
                    sabiranjem_i_mnozenjem += '(' + String(i) + ' x ' + String(moguceNovcanice[j]) + 'KM ' + ') + ' + String(moguceNovcanice[k]) + 'KM\n';
                }
            }
        }
    }

    
    return [mnozenjem, sabiranjem_i_mnozenjem];
}

let novcanica = 1500;
let rezultat = change(novcanica);

let mnozenjem = rezultat[0];
let sabiranjem_i_mnozenjem = rezultat[1];

console.log(`Novcanicu od ${novcanica}KM moguce je usitniti na sljedece nacine:`);
console.log(mnozenjem);
console.log(sabiranjem_i_mnozenjem);
