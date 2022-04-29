/*
Napisati funkciju koja provjerava da li string sadrzi brojeve i slova naizmjenicno. Funkcija prima string a vraca true ili false zavisno toga da li su brojevi i slova naizmjenicni. Npr. za string: “a1b2c3d4” vraca true, a za string “a12b3c4d” vraca false jer imamo dva broja(1i2) jedan pored drugog.
*/

function slovaBrojeviNaizmjenicno(string) {

    let regexChar = /^[a-zčćžđš]+$/i;
    let regexNum = /^[0-9]+$/;

    for (let i = 0; i < string.length; i += 2) {
        for (let j = 1; j < string.length; j += 2) {
            if ((string.charAt(i).match(regexChar) === null || string.charAt(j).match(regexNum) === null) &&
                (string.charAt(i).match(regexNum) === null || string.charAt(j).match(regexChar) === null)) {
                return false;
            }
        } 
    }
    return true;
}


let stringFalse = "a12b3c4d";
let stringTrue = "a1b2c3d4";
let stringFalse2 = "12ab3c4d";
let stringTrue2 = "1a2b3c4d";

console.log(slovaBrojeviNaizmjenicno(stringFalse));
console.log(slovaBrojeviNaizmjenicno(stringTrue));
console.log(slovaBrojeviNaizmjenicno(stringFalse2));
console.log(slovaBrojeviNaizmjenicno(stringTrue2));

