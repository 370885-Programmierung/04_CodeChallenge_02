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

// let eingabeName = prompt("Bitte geben Sie den Namen einer Person ein.")
const eingabeName = "Max"
let eingabeAlter = parseInt(prompt("Bitte geben Sie das Alter der Person ein."))

if (eingabeAlter <6) {
    console.log(eingabeName + " trinkt Milch")
} else if (eingabeAlter <13){
    console.log(eingabeName + " trinkt Saft")
} else if (eingabeAlter <18){
    console.log(eingabeName + " trinkt Cola")
} else if (eingabeAlter >17){
    console.log(eingabeName + " trinkt Wein")
} else {console.log(eingabeName + " trinkt nichts")
}