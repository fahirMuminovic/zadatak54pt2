/*
Napisati funkciju koja validira broj telefona. Funkcija treba da prima string tj broj telefona, a vraca true ili false zavisno od toga da li je broj telefona ispravan. Broj telefona da bi bio ispravan mora biti u jednom od 2 sljedeca formata: 06x/xxx-xxx ili 060/xx-xx-xxx.
*/
// function validatePhoneNumber(phoneNumber) {
//    let number = String(phoneNumber);
//    for (let i = 0; i < array.length; i++) {
//        const element = array[i];

//    }
// }

function validatePhoneNumber(brojMobitela) {
    brojMobitela = String(brojMobitela);
    let prviValidniFormat = /^\(?([0-9]{3})\)?([/]{1})?([0-9]{3})[-]?([0-9]{3})$/;
    let drugiValidniFormat = /^\(?([0-9]{3})\)?([/]{1})?([0-9]{2})[-]?([0-9]{2})[-]?([0-9]{3})$/;

    if (brojMobitela.indexOf('/') !== -1 && brojMobitela.indexOf('-') !== -1) {
        if (brojMobitela.match(prviValidniFormat) || brojMobitela.match(drugiValidniFormat)) {
            return true;
        }
        return false;
    }
    return false;
}


console.log(validatePhoneNumber("062/008-777"));
console.log(validatePhoneNumber("060/00-08-777"));
console.log(validatePhoneNumber("062/008777"));
console.log(validatePhoneNumber("062/008 777"));
console.log(validatePhoneNumber("062-008-777"));
console.log(validatePhoneNumber("062008777"));
console.log(validatePhoneNumber("062 008 777"));