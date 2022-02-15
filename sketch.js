/// <reference path="./libraries/p5.global-mode.d.ts" />

function setup() {
  createCanvas(400, 400);
  background(220);
  ellipseMode(CENTER);
}

function draw() {
  //Draw the square
  fill(mouseX/400 * 255,(1 - mouseY / 400) * 255,100)
  rect(200,200,100,100);

  //Draw the moving rectangle
  fill(200,244,40)
  rect(100,frameCount,50,50)
}

function mouseClicked() {
  //Draw the ellipse at the mouse location
  fill(50,200,200)
  ellipse(mouseX,mouseY,30,30)
}
