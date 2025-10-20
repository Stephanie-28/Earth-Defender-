let gameName : string = "EarthDefender!";
console.log(gameName);

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 900;

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

context.fillStyle = "#141414";
context.fillRect(
    0,0,
    CANVAS_HEIGHT, CANVAS_WIDTH
);

