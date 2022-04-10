// With Multiple Functions

// function greyBackground() {
//     document.body.style.backgroundColor = "grey";
//     document.body.style.transition = "1s";
// }

// function whiteBackground() {
//     document.body.style.backgroundColor = "white";
//     document.body.style.transition = "1s";
// }

// function blueBackground() {
//     document.body.style.backgroundColor = "blue";
//     document.body.style.transition = "1s";
// }

// function yellowBackground() {
//     document.body.style.backgroundColor = "yellow";
//     document.body.style.transition = "1s";
// }


// With Event Listeners

// let grey = document.getElementById('grey').addEventListener('click', () => {
//     document.body.style.backgroundColor = "grey";
// });

// let white = document.getElementById('white').addEventListener('click', () => {
//     document.body.style.backgroundColor = "white";
// });;

// let blue = document.getElementById('blue').addEventListener('click', () => {
//     document.body.style.backgroundColor = "blue";
// });;

// let yellow = document.getElementById('yellow').addEventListener('click', () => {
//     document.body.style.backgroundColor = "yellow";
// });;


// With 1 Function
/*
function changeBackground(color) {
    document.body.style.background = color;
    document.body.style.transition = '1s';
}
*/
//With one function and the element you want
function changeBackground(element,color) {
    element.style.background = color;
    element.style.transition = '1s';
}
/*
    examples:
    changeBackround(document.body,'red'); //for the body 
    changeBackround(document.querySelectorAll("p"),'red'); //for all the p elements in the document
    

*/
