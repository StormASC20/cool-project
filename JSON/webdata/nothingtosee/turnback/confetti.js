import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function makeConfetti(){
    confetti()
}

let yeah = document.querySelector("#yeah-button");

    yeah.addEventListener("click", () => {makeConfetti()});