"use strict";

let index = 0;
const word = document.querySelector(".typewritten").innerHTML;
let letter = word.substring(index, index + 1);

console.log(word);
showText();


function showText() {
    if (index === 0) {
        document.querySelector(".typewritten").innerHTML = letter;
        console.log("this one" + letter);
        index++;
        setTimeout(showText, 200);

    } else if (word.length > index) {
        let letter = word.substring(index, index + 1);
        console.log(letter);
        document.querySelector(".typewritten").innerHTML += letter;
        index++;
        setTimeout(showText, 200);
    }

}