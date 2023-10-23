const navbar = document.querySelector(".navbar");
const pigGameNavbar = document.querySelector(".body_piggame-navbar");
const guessGameNavbar = document.querySelector(".body_guess-navbar");
// const  innerDiceGameContainer = document.querySelector(".dieGame-container");
// const  innerGuessGameContainer = document.querySelector(".guesser-con");
// function movedown(e, element){
//     if (e.button === 0) {
//         isDown = true;
//         offset = [
//             element.offsetLeft - e.clientX,
//            element.offsetTop - e.clientY,
//             ];

        
//     }

// }

// function mousemove(event,element){
//     if (isDown) {
//         mousePosition = {
//             x: event.clientX,
//             y: event.clientY
//         };
//         var pageWidth = window.innerWidth;
//         var pageHeight = window.innerHeight;
//         if ((mousePosition.x + offset[0]) > 0) {
//             element.style.left = (mousePosition.x + offset[0]) + 'px';
//         }
//         element.style.top = (mousePosition.y + offset[1]) + 'px';
//         if ((mousePosition.y + offset[1]) > (pageHeight - 600)) {}
//     }
// }

// var mousePosition;
// var offset = [0, 0];
// var isDown = false;
// var mydiv = document.getElementById("mydiv");
// var originalWidth = mydiv.style.width;
// var originalHeight = mydiv.style.height;
// navbar.addEventListener('mousedown',(e)=> {
//     movedown(e,mydiv);
// }, true);
// pigGameNavbar.addEventListener('mousedown',(e)=> {
//     movedown(e,mydiv);
// }, true);
// guessGameNavbar.addEventListener('mousedown',(e)=> {
//     movedown(e,mydiv);
// }, true);

// /////////////////////////////////
// navbar.addEventListener('mouseup', ()=>{
//     isDown = false;
// }, true);
// pigGameNavbar.addEventListener('mouseup', ()=>{
//     isDown = false;
// }, true);
// guessGameNavbar.addEventListener('mouseup', ()=>{
//     isDown = false;
// }, true);

// /////////////////////////////////
// navbar.addEventListener('mousemove', function(event) {
//     event.preventDefault();
//     mousemove(event,mydiv);
// }, true);

// pigGameNavbar.addEventListener('mousemove', function(event) {
//     event.preventDefault();
//     mousemove(event);
// }, true);

// guessGameNavbar.addEventListener('mousemove', function(event) {
//     event.preventDefault();
//     mousemove(event);
// }, true);





function movedown(e, element) {
    if (e.button === 0) {
        isDown = true;
        offset = [
            element.offsetLeft - e.clientX,
            element.offsetTop - e.clientY,
        ];
    }
}

function mousemove(event, element) {
    if (isDown) {
        mousePosition = {
            x: event.clientX,
            y: event.clientY
        };
        var pageWidth = window.innerWidth;
        var pageHeight = window.innerHeight;
        if ((mousePosition.x + offset[0]) > 0) {
            element.style.left = (mousePosition.x + offset[0]) + 'px';
        }
        element.style.top = (mousePosition.y + offset[1]) + 'px';
    }
}

var mousePosition;
var offset = [0, 0];
var isDown = false;
var mydiv = document.getElementById("mydiv");
var innerDiceGameContainer = document.querySelector(".dieGame-container");
var innerGuessGameContainer = document.querySelector(".guesser-con");
var originalWidth = mydiv.style.width;
var originalHeight = mydiv.style.height;

navbar.addEventListener('mousedown', (e) => {
    movedown(e, mydiv);
}, true);

pigGameNavbar.addEventListener('mousedown', (e) => {
    movedown(e, mydiv);
}, true);

guessGameNavbar.addEventListener('mousedown', (e) => {
    movedown(e, mydiv);
}, true);

/////////////////////////////////
navbar.addEventListener('mouseup', () => {
    isDown = false;
}, true);

pigGameNavbar.addEventListener('mouseup', () => {
    isDown = false;
}, true);

guessGameNavbar.addEventListener('mouseup', () => {
    isDown = false;
}, true);

/////////////////////////////////
navbar.addEventListener('mousemove', function (event) {
    event.preventDefault();
    mousemove(event, mydiv);
}, true);

pigGameNavbar.addEventListener('mousemove', function (event) {
    event.preventDefault();
    mousemove(event, mydiv);
}, true);

guessGameNavbar.addEventListener('mousemove', function (event) {
    event.preventDefault();
    mousemove(event, mydiv);
}, true);

innerDiceGameContainer.addEventListener('mousedown', (e) => {
    movedown(e, innerDiceGameContainer);
}, true);

innerGuessGameContainer.addEventListener('mousedown', (e) => {
    movedown(e, innerGuessGameContainer);
}, true);

innerDiceGameContainer.addEventListener('mouseup', () => {
    isDown = false;
}, true);

innerGuessGameContainer.addEventListener('mouseup', () => {
    isDown = false;
}, true);

innerDiceGameContainer.addEventListener('mousemove', function (event) {
    event.preventDefault();
    mousemove(event, innerDiceGameContainer);
}, true);

innerGuessGameContainer.addEventListener('mousemove', function (event) {
    event.preventDefault();
    mousemove(event, innerGuessGameContainer);
}, true);