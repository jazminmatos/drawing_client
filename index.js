// Global variables
const canvas = document.getElementById('canvas');
// leads to creation of a CanvasRenderingContext2d object
// which represents a 2d rendering context
const ctx = canvas.getContext("2d");
// Allows canvas size to be it's container's size
const drawingBoard = document.getElementsByClassName('drawing-board');
canvas.height = drawingBoard[0].offsetHeight;
canvas.width = drawingBoard[0].offsetWidth;

const colorPicker = document.querySelector("body > main > section > div.dashboard > section.colors > input");
const strokeWeight = document.querySelector("body > main > section > div.dashboard > section.thickness > input");


// Buttons
const saveButton = document.getElementById('save-button');

// Local variables
let drawing = false;

let canvasBounds = canvas.getBoundingClientRect();
let rectLeft = canvasBounds.left;
let rectTop = canvasBounds.top;

// Fetch Requests