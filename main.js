function setup(){

canvas = createCanvas(280 , 280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}

function preload(){

    classifier= ml5.imageClassifier('DoodleNet');
}

function clearCanvas(){

    background("white");
}

function draw() {
// Set stroke weight to 13
strokeWeight (8);
// Set stroke color to black

stroke(0);
// If mouse is pressed, draw line between previous and current mouse positions
if (mouseIsPressed) {
line (pmousex, pmousey, mousex, mouseY);
}
}
function classifyCanvas() {
classifier.classify (canvas, gotResult);}

function gotResult(error, results) {
}
if (error) {
console.error(error);
}
console.log(results);
document.getElementById('label').innerHTML = 'Label:' + results[0].label;