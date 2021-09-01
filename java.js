//console.log(JS.loaded)
//function dosomething(num1, num2) {
//debug the output
//console.log("You passed me ${num1} and ${num2}.");

//return num1 + num2;
//}
//let
// let firstHey = document.querySelector("h1");
// firstHey.addEventListener("click", MouseEvent);
// firstHey.addEventListener("mouseover", MouseEvent2);

function MouseEvent(MouseEvent) {
    alert("You clicked me, Whats up.");
}
let label = document.querySelector("label");
let textBox = document.querySelector("textarea");
let button = document.querySelector("button");
let idx = 0;
let codeCrewString =
    "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness."
    // textBox.addEventListener("keydown", function(e) {
    //     console.log(e);
    //     console.log(e.key);
    //     label.textContent += e.key;
    // });
textBox.addEventListener("keydown", function(e) {
    if (idx < codeCrewString.length) {
        label.textContent += codeCrewString[idx]
        idx++
    }
    console.log(codeCrewString[0]);
});
button
    .addEventListener("click", function(e) {
        label.textContent = "";
        textBox.value = "";
        idx = 0
    });
//function MouseEvent2(MouseEvent) {
//alert("Move, your mouse is on my face.");
//}