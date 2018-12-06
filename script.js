/*oefening 1 - Variabelen Fortuinbouwer*/
let n = 4;
let x = "Web Developer";
let y = "Spanje";
let z = "Isaura";
console.log("U wordt " + x + " en woont in " + y + ", en bent getrouwd met " + z + " met " + n + " kinderen.");


/*oefening 2 - Variabelen Bereken de leeftijd*/
let h = 2018;
let g = 1993;
console.log(h - g)


/*oefening 3 - Variabelen Voorspeller*/
let l = 25;
let m = 80;
console.log("Je hebt nog steeds " + (m - l) + " jaar voorat je de leeftijd van " + m + " jaar bereikt hebt.")


/*oefening 4 - Variabelen Prioriteren*/
let resultaat = (1 + 2) * 3 + 4 / 2;
console.log(1 + 2);
console.log(3 * 3);
console.log(4 / 2);
console.log(9 + 2);


/*oefening 1 - Vergelijkingen Talen*/
let language = "fr";
let message;
if (language === "fr") {
  message = "Bonjour tout le monde";
} else if (language === "nl") {
  message = "Hallo iedereen";
} else {
  message = "Hello World";
}
console.log(message);


/*oefening 2 - Vergelijkingen scores weergeven*/

let score = 78;
if (score >= 90) {
  resultaat = "A";
} else if (score < 90) {
  resultaat = "B";
} else if (score <= 50) {
  resultaat = "C";
} else {
  resultaat = "foute score";
}
console.log(resultaat);


/*oefening 3 - Vergelijkingen in het meervoud*/
let hond = "chihuahua";
let aantal = 2;
let uitkomst;
if (aantal === 1) {
  uitkomst = hond;
} else {
  uitkomst = hond + "s";
}
console.log(uitkomst);


/*oefening 1 - Functies Rekenmachine*/
let aftr = function(a, b) {
  return a - b;
}
console.log(aftr(7, 5));


/*oefening 1 - Loops Even en oneven*/
resultaat = ""
for (let i = 0; i < 20; i++) {
  console.log(i);
  if (i % 2 > 0) {
    console.log(i + " is oneven");
  } else {
    console.log(i + " is even ");
  }
}
console.log(resultaat);


/*oefening 2 - Loops Vermenigvuldigings tabellen*/
for (let i = 0; i <= 10; i++) {
  console.log(i + " x 9 = " + (i * 9));
}


/* oefening 3 - Loops scores toewijzen*/
for (let i = 0; i < 100; i++) {
  console.log(i);
  if (i > 90) {
    console.log("Voor " + i + " punten heb je graad A");
  } else if (i > 80) {
    console.log("Voor " + i + " punten heb je graad B");
  } else if (i > 70) {
    console.log("Voor " + i + " punten heb je graad C");
  } else if (i > 65) {
    console.log("Voor " + i + " punten heb je graad D");
  } else {
    console.log("Voor " + i + " punten heb je graad F");
  }
}


/* oefening 4 - Loops Piramide */
let teken = "";
for (let i = 1; i < 10; i++) {
  teken = teken + "*";
  console.log(teken);
}


/* oefening 1 - Arrays Optellen */
resultaat = ""
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let total = 0;
for (i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total);


/* oefening 2 - Arrays De beste keuze */
let acteurs = ["Lucy Hale", "Tom Cruiz", "Sylvester Stalone"]
for (i = 0; i < acteurs.length; i++) {
  console.log("Nummer " + (i + 1) + " is " + acteurs[i]);
}


/* oefening 3 - Arrays klonen */
let spellen = ["Mario", "Luigi", "Peach"]
spellen.push("Browser");
console.log(spellen)


/* Oefening 1 - Math Max & Min */
resultaat = ""
lowmin = [7, 5, -12, 6, 32, 18, 14, -2];
resultaat = Math.min(...lowmin);
console.log(resultaat);

uitkomst = ""
highmin = [-3, 9, 21, 36, 27, 54, 17, 35];
uitkomst = Math.max(...highmin);
console.log(uitkomst);

console.log(resultaat + uitkomst)

/* Oefening 2 - Math Willekeurig 1 */
floatspeed = 10.4;
let lowspeed = Math.floor(floatspeed);
console.log(lowspeed);
let highspeed = Math.ceil(floatspeed);
console.log(highspeed);

/* Oefening 3 - Math Willekeurig 2 */
console.log(Math.floor(Math.random() * 100 - 50)) + 50;
console.log(Math.floor(Math.random() * 1 - 0 + 1)) + 0;
console.log(Math.floor(Math.random() * 11 - 0)) + 0;

/* Oefening 4 - Math Willekeurig 3 */
namen = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Raptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]
random = Math.floor(Math.random() * (namen.length + 1));
console.log(namen[random]);


/* Oefening 1 - Objecten Non-player character*/
let character = {
  name: "Anneke",
  age: 25,
  items_to_give:["pencil", "paper", "coffee"],
  giveItem: function(a){
  console.log(this.items_to_give(a));
  }
}


/*Oefening 2 - Objecten Shop */
let object = {
}

/*Oefening 3 - Objecten Character */
