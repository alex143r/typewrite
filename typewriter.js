"use strict";

let index = 0;
const word = document.querySelector(".typewritten").innerHTML;
let letter = word.substring(index, index + 1);
const audio1 = new Audio("typekey1.mp3")
const audioSpace = new Audio("typespace.mp3")

console.log(word);
showText();

let sounds = false;



function showText() {
    if (index === 0) {
        document.querySelector(".typewritten").innerHTML = letter;
        console.log("this one" + letter);
        audio1.play();

        document.querySelector("button").addEventListener("click", turnOnSounds);

        function turnOnSounds() {
            sounds = true;
        }
        index++;
        setTimeout(showText, 500);

    } else if (word.length > index) {
        let letter = word.substring(index, index + 1);
        console.log(letter);
        document.querySelector(".typewritten").innerHTML += letter;
        index++;
        document.querySelector("button").addEventListener("click", turnOnSounds);

        function turnOnSounds() {
            sounds = true;
        }
        if (sounds == true) {
            if (letter === " ") {
                audioSpace.play();
            } else {
                audio1.play();

            }
        }


        setTimeout(showText, 400 + Math.floor(Math.random() * 400));
    }

}