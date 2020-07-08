
let numberOfSquares = 9;
let squares = document.querySelectorAll(".square");
const colourdisplay = document.getElementById("colourdisplay")
const display = document.getElementById("winlose");
const h1 = document.querySelector("h1");
const resetGame = document.getElementById("resetGame");
let easyMode = document.getElementById("easyMode");
let mediumMode = document.getElementById("mediumMode");
let hardMode = document.getElementById("hardMode");


createRandomColour = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

makeColours = (num) => {
    let array = [];
    for(let i = 0; i < num; i++) {
        array.push(createRandomColour());
        console.log(array)
    }
    return array;
}

computerSelectsAColour = () => {
    const random = Math.floor(Math.random() * colours.length)
    return colours[random];
}


let colours = makeColours(numberOfSquares);

let selectedColourComputer = computerSelectsAColour();
colourdisplay.textContent = selectedColourComputer;

resetGame.addEventListener("click", function() {

    colours = makeColours(numberOfSquares);
    selectedColourComputer = computerSelectsAColour();
    colourdisplay.textContent = selectedColourComputer;
    display.textContent = '';
  
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColour = colours[i];
    }
    h1.style.backgroundColor = "#acd1f0";
    
});
  


for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i] 
    
    squares[i].addEventListener("click", function() {

        let selectedColourPlayer = this.style.backgroundColor;
        
		if(selectedColourComputer === selectedColourPlayer) {

            display.textContent = "Congrats! You won"
            resetGame.textContent = "Play again? - click easy or hard";
            changeColoursOnWin(selectedColourPlayer);
            h1.style.backgroundColor = selectedColourPlayer;
            display.textContent = '';
		} else {
            this.style.backgroundColor = "#acd1f0";
            display.textContent = "Try again";
        }
    });
}

 changeColoursOnWin = (colour) => {
    for(let i = 0; squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}

easyMode.addEventListener("click", () => {
    hardMode.classList.remove("mode");
    easyMode.classList.add("mode");
    numberOfSquares = 3
    colours = makeColours(numberOfSquares)
    selectedColourComputer = computerSelectsAColour();
    colourdisplay.textContent = selectedColourComputer;
    for(let i = 0; i < squares.length; i++) {
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

mediumMode.addEventListener("click", () => {
    hardMode.classList.remove("mode");
    easyMode.classList.remove("mode");
    mediumMode.classList.add("mode");
    numberOfSquares = 6
    colours = makeColours(numberOfSquares)
    selectedColourComputer = computerSelectsAColour();
    colourdisplay.textContent = selectedColourComputer;
    for(let i = 0; i < squares.length; i++) {
        if(colours[i]){
            squares[i].style.backgroundColor = colours[i];
        } else {
            squares[i].style.display = "none";
            
        }
    }
});

hardMode.addEventListener("click", () => {
    hardMode.classList.add("mode");
    easyMode.classList.remove("mode");
    numberOfSquares = 9
    colours = makeColours(numberOfSquares);
    selectedColourComputer = computerSelectsAColour();
    colourdisplay.textContent = selectedColourComputer;
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
    }  
});















