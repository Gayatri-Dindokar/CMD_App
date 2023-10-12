const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const scoresss = document.querySelector('.score');

const diceimg = document.querySelector('.dice');
const newgame = document.querySelector('.btn-btn btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const btn = document.querySelector(".btn-btn");
const currentscore1 = document.getElementById("current--0");
const currentscore2 = document.getElementById("current--1");

const section1 = document.querySelector(".player--0");
const section2 = document.querySelector(".player--1");



const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
let currentscore = 0;
activeplayer = 0;
let playing = true;

diceimg.classList.add('hidden');





// 1. Generating a random dice roll

function btnroll() {
    if (playing) {
        const random = Math.trunc(Math.random() * 6) + 1;
        console.log(random);

        // 2. Display dice
        diceimg.classList.remove('hidden');
        diceimg.src = `dice-${random}.png`;

        // if dice is 1  
        if (random !== 1) {
            currentscore = currentscore + random;
            document.getElementById(`current--${activeplayer}`).textContent = currentscore;
            // currentscore1.innerText = currentscore;


        } else {
            // switch to next player
            // repeated part
            document.getElementById(`current--${activeplayer}`).textContent = 0;


            currentscore = 0;
            activeplayer = activeplayer === 0 ? 1 : 0;
            // toggle method add the class if is not there and if it is there i will remove it

            section1.classList.toggle('player--active');
            section2.classList.toggle('player--active')
        }

    }
}
btnroll();


function btnhold() {
    if (playing) {
        //  add current score to active player score

        scores[activeplayer] += currentscore;

        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

        //  cheack if player score >= 100 player win

        if (scores[activeplayer] >= 20) {
            //  finish the game
            playing = false;
            diceimg.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        } else {
            // repeted part
            document.getElementById(`current--${activeplayer}`).textContent = 0;


            currentscore = 0;
            activeplayer = activeplayer === 0 ? 1 : 0;
            // toggle method add the class if is not there and if it is there i will remove it

            section1.classList.toggle('player--active');
            section2.classList.toggle('player--active')


        }
    }
}
btnhold();


function reset() {

    score0.textContent = 0;
    score1.textContent = 0;
    currentscore1.textContent = 0;
    currentscore2.textContent = 0;
    playing = true;
    const random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);

    // 2. Display dice
    diceimg.classList.add('hidden');
    diceimg.src = `dice-${random}.png`;

    section1.classList.remove('player--winner');
    section2.classList.remove('player--winner');
    section1.classList.add('player--active');
    section2.classList.remove('player--active');







}
reset();

// document.getElementById("nnnn").addEventListener("click",()=>{

// })

const startWindowImg = document.querySelector(".left-startWindow-img");
const startWindowpopup = document.querySelector(".startWindow-popup");

function forcancelbtn() {
    if (!startWindowpopup.classList.contains("popup-visible")) {

        startWindowpopup.style.display = "block";
        setTimeout(() => {
            startWindowpopup.classList.add("popup-visible");
        }, 0);
    } else {

        startWindowpopup.classList.remove("popup-visible");
        setTimeout(() => {
            startWindowpopup.style.display = "none";
        }, 300);
    }

}

const mydivid = document.getElementById("mydiv");
const pigGame = document.querySelector(".bodyy");
document.getElementById("dice-game").addEventListener("click", () => {
    console.log("llll")
    pigGame.style.display = "block";
    pigGame.style.left = "30%";
    pigGame.style.top = "30%";
    forcancelbtn();
    mydivid.style.display = "none";
});
document.querySelector(".exit-dice-btn").addEventListener("click", () => {
    pigGame.style.display = "none";
    reset();
});