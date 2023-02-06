// tady je místo pro náš program
let vystup = document.querySelector(".vystup");

let jmeno = prompt("Zadej své jméno");
let vek = Number(prompt("Zadej svůj věk")); 

vystup.innerHTML = jmeno +", věk: " + vek;

let hodinovaMzda = Number(prompt("Zadej svou hodinovou sazbu v Kč"));
let hodinyZaDen = Number(prompt("Kolik hodin denně pracuješ?"));
let dniVMesici = Number(prompt("Kolik dní v měsíci pracuješ?"));

let mzda = document.querySelector(".mzda");
let vypocetMzdy = hodinovaMzda * hodinyZaDen * dniVMesici;

mzda.innerHTML = "Hrubá mzda: "+ vypocetMzdy; 

