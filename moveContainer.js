const navbar = document.querySelector(".navbar");
var mousePosition;
var offset = [0, 0];
var isDown = false;
var mydiv = document.getElementById("mydiv");
var originalWidth = mydiv.style.width;
var originalHeight = mydiv.style.height;
navbar.addEventListener('mousedown', function(e) {
    if (e.button === 0) {
        isDown = true;
        offset = [
            mydiv.offsetLeft - e.clientX,
            mydiv.offsetTop - e.clientY
        ];
    }
}, true);
navbar.addEventListener('mouseup', function() {
    isDown = false;
}, true);
navbar.addEventListener('mousemove', function(event) {
    event.preventDefault();

    if (isDown) {
        mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        var pageWidth = window.innerWidth;
        var pageHeight = window.innerHeight;
        if ((mousePosition.x + offset[0]) > 0) {
            mydiv.style.left = (mousePosition.x + offset[0]) + 'px';
        }
        mydiv.style.top = (mousePosition.y + offset[1]) + 'px';
        if ((mousePosition.y + offset[1]) > (pageHeight - 600)) {}
    }
}, true);


///////////////


// const guessContainer = document.querySelector(".guesser-con");
const navbarPigGame = document.querySelector(".body_piggame-navbar")
    // var mousePosition;
    // var offset = [0, 0];
    // var isDown = false;
    // var diceContainer = document.querySelector(".dieGame-container");
    // // var mydiv = document.getElementById("mydiv");
    // var originalWidth = diceContainer.style.width;
    // var originalHeight = diceContainer.style.height;
    // navbarPigGame.addEventListener('mousedown', function(e) {
    //     if (e.button === 0) {
    //         isDown = true;
    //         offset = [
    //             diceContainer.offsetLeft - e.clientX,
    //             diceContainer.offsetTop - e.clientY
    //         ];
    //     }
    // }, true);
    // navbarPigGame.addEventListener('mouseup', function() {
    //     isDown = false;
    // }, true);
    // navbarPigGame.addEventListener('mousemove', function(event) {
    //     event.preventDefault();

//     if (isDown) {
//         mousePosition = {
//             x: event.clientX,
//             y: event.clientY
//         };
//         var pageWidth = window.innerWidth;
//         var pageHeight = window.innerHeight;
//         if ((mousePosition.x + offset[0]) > 0) {
//             diceContainer.style.left = (mousePosition.x + offset[0]) + 'px';
//         }
//         diceContainer.style.top = (mousePosition.y + offset[1]) + 'px';
//         if ((mousePosition.y + offset[1]) > (pageHeight - 600)) {}
//     }
// }, true);
const diceContainer = document.querySelector(".diceGame-main-container");
let isDragging = false;
let offsetDiceContainer = { x: 0, y: 0 };

navbarPigGame.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        isDragging = true;
        offsetDiceContainer.x = diceContainer.offsetLeft - e.clientX;
        offsetDiceContainer.y = diceContainer.offsetTop - e.clientY;
    }
});

navbarPigGame.addEventListener('mouseup', () => {
    isDragging = false;
});

navbarPigGame.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        diceContainer.style.left = (mousePosition.x + offsetDiceContainer.x) + 'px';
        diceContainer.style.top = (mousePosition.y + offsetDiceContainer.y) + 'px';
    }
});






// For the guess game container
const navbarGuessGame = document.querySelector(".body_guess-navbar");
const guessContainer = document.querySelector(".guessGame-main-container");
let isDraggingGuessContainer = false;
let offsetGuessContainer = { x: 0, y: 0 };

navbarGuessGame.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        isDraggingGuessContainer = true;
        offsetGuessContainer.x = guessContainer.offsetLeft - e.clientX;
        offsetGuessContainer.y = guessContainer.offsetTop - e.clientY;
    }
});

navbarGuessGame.addEventListener('mouseup', () => {
    isDraggingGuessContainer = false;
});

navbarGuessGame.addEventListener('mousemove', (event) => {
    if (isDraggingGuessContainer) {
        const mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        guessContainer.style.left = (mousePosition.x + offsetGuessContainer.x) + 'px';
        guessContainer.style.top = (mousePosition.y + offsetGuessContainer.y) + 'px';
    }
});