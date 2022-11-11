/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// // let personName = prompt("Bitte geben Sie den Namen einer Person ein.")
const personName = "Max";
let personAlter = Number(prompt("Bitte geben Sie das Alter der Person ein."));

if ( personAlter > 0 && personAlter < 6) {console.log(personName + " trinkt Milch")};
if ( personAlter >= 6 && personAlter < 13) {console.log(personName + " trinkt Saft")};
if ( personAlter >= 13 && personAlter < 18) {console.log(personName + " trinkt Cola")};
if ( personAlter >= 18) {console.log(personName + " trinkt Wein")};

// die direkte if-anweisung ist doppelt so schnell wie if-else oder switch-case.


// switch(true){

//     case (personAlter >0 && personAlter <6):
//     console.log(personName + " trinkt Milch");
//     break;
//     case (personAlter >=6 && personAlter <13):
//     console.log(personName + " trinkt Saft");
//     break;
//     case (personAlter >=13 && personAlter <18):
//     console.log(personName + " trinkt Cola");
//     break;
//     case (personAlter >=18):
//     console.log(personName + " trinkt Wein");
//     break;

//     default:
//     console.log(personName + " trinkt nichts");
//     break;
// }
   