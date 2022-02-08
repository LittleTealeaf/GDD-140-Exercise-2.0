/// <reference path="./libraries/p5.d.ts" />

function setup() {
  createCanvas(800, 800);
  background(0);
}

x = 200;
y = 200;
interp = 0.15;

function draw() {
  noStroke();
  fill(mouseX / 400 * 255,mouseY / 400 * 255,(mouseX + mouseY) / 800 * 255,50);
  interpolateCoordinates();
  ellipse(x, y, 75, 75);
}

function interpolateCoordinates() {
  x = x + (mouseX - x) * interp;
  y = y + (mouseY - y) * interp;
}
