/*
Napisati program koji pretvara neki string u Morsov kod(Morse code).
*/

function toMorseCode(string) {
    let morseCode = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "0": "-----",
        " ": "/"
    };

    string = string.toUpperCase().replace(/[^A-Z0-9\s]/g, ""); //uklonimo sve karaktere iz recenice osim slova i brojeva
    let stringInMorse = '';

    for (let i = 0; i < string.length; i++) {
        for (const key in morseCode) {
            if (string.charAt(i) === key) {
                stringInMorse += morseCode[key] + ' ';
            }
        }
    }
    return stringInMorse;
}

console.log(toMorseCode('test test 1 2 3'));