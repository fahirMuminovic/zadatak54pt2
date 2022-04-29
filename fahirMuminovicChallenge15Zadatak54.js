/*
Imamo robota koji hoda po 2D koordinatnoj mreži sa osama x i y. Počinje na (0, 0) tj x = 0 i y = 0 i okrenut je prema sjeveru. Nakon svakog kretanja, robot se rotira za 90 stepeni u smjeru kazaljke na satu. S obzirom na količinu koju je robot pomjerio svaki put, morate izračunati konačnu poziciju robota. Ilustracije radi, ako se robotu daju pokreti 20, 30, 10, 40 onda će se kretati: 20 koraka sjeverno, sada na (0, 20) 30 koraka istočno, sada na (30, 20) 10 koraka južno. sada u (30, 10) 40 koraka zapadno, sada na (-10, 10) ...i završit će na koordinatama (-10, 10).
*/

function kretanjeRobota(unosSjever, unosIstok, unosJug, unosZapad) {
    let krajnjaTacka = [0, 0];

    console.log(`Robot se nalazi na koordinatama (${krajnjaTacka}).\n`);
    console.log(`Zadata putanja za robota je (${unosSjever},${unosIstok},${unosJug},${unosZapad}).\n`);
    console.log(`--Robot se krece ${unosSjever} koraka sjeverno.`);
    console.log(`Robot je sada na koordinatama: (${krajnjaTacka = [0,unosSjever]}).\n`);
    console.log(`--Robot se krece ${unosIstok} koraka istocno.`);
    console.log(`Robot je sada na koordinatama: (${krajnjaTacka = [unosIstok,unosSjever]}).\n`);
    console.log(`--Robot se krece ${unosJug} koraka juzno.`);
    console.log(`Robot je sada na koordinatama: (${krajnjaTacka = [unosIstok,unosSjever - unosJug]}).\n`);
    console.log(`--Robot se krece ${unosZapad} koraka zapadno.`);
    console.log(`Robot je sada na koordinatama: (${krajnjaTacka = [unosIstok - unosZapad,unosSjever - unosJug]}).\n`);

   console.log(`Konacne koordinate robota su: (${krajnjaTacka}).`);
}

kretanjeRobota(20,30,10,40);