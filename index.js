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

const jsonImageURL = "http://localhost:8000/images"


// Buttons
const saveButton = document.getElementById('save-button');

// Local variables
let drawing = false;

let canvasBounds = canvas.getBoundingClientRect();
let rectLeft = canvasBounds.left;
let rectTop = canvasBounds.top;

// Fetch Requests

// Fetch (GET) from JSON file
fetch(jsonImageURL).then(response =>
        response.json()
    ).then(function(json) {
        let keys = Object.keys(json);
        console.log(json[keys[keys.length * Math.random() << 0]])
        // use data inside of json to do DOM manipulation
    })
    // use the Math.random - # between 0-16 - to get an item
    // in the object, then get its image property

    // DOM manipulation: append img src element using retrieved URL




// Fetch (GET) drawing from backend db

// Fetch (POST) drawing (send to backend db)



// Not sure if I want to do this one 
// Fetch (GET) all drawings from backend db