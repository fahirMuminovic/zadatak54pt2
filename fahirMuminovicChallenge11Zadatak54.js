/*
Napisati program koji ispisuje 9 x 9 tablicu množenja. Program treba da ispiše tablicu u formatu prikazanom ispod. 

   1   2   3   4   5   6   7   8   9  
   2   x   x   x    
   3   x   x   x
   4   x   x   x
   5   x   x   x         …….
   6   x   x   x
   7   x   x   x
   8   x   x   x
   9   x   x   x
*/

let tablicaMnozenja = [];


for (let i = 2; i < 10; i++) {
   tablicaMnozenja[i] = [];
   for (let j = 2; j < 10; j++) {
      tablicaMnozenja[i][j] = i * j;
   }
}

console.table(tablicaMnozenja);