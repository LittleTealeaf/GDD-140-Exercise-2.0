/// <reference path="./libraries/p5.global-mode.d.ts" />

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(mouseX/400 * 255,(1 - mouseY / 400) * 255,100)
  rect(200,200,100,100);
  fill(200,244,40)
  rect(100,frameCount,50,50)
}

function mouseClicked() {
  ellipseMode(CENTER)
  fill(50,200,200)
  ellipse(mouseX,mouseY,30,30)
}
