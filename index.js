

const squares = document.querySelectorAll(".square");
const colour = document.getElementById("colour")
const display = document.getElementById("winlose");
const h1 = document.querySelector("h1");


const computerSelectsAColour = () => {
    const random = Math.floor(Math.random() * colours.length)
    return colours[random];
}

const createRandomColour = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + "," + green + "," + blue + ")";
}

const makeColours = (num) => {
    const array = [];
    for(let i = 0; i < num; i++) {
        array.push(createRandomColour());
        console.log(array)

    }

    return array;
}
const colours = makeColours(6);

const selectedColourComputer = computerSelectsAColour();
colour.textContent = selectedColourComputer;


for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i] 
    
    squares[i].addEventListener("click", function(){
        
        console.log(this.style.backgroundColor);
        let selectedColourPlayer = this.style.backgroundColor;
        
        console.log(selectedColourPlayer, selectedColourComputer);
		if(selectedColourComputer === selectedColourPlayer) {
            console.log(selectedColourComputer);
            console.log(selectedColourPlayer);
            display.textContent = "Congrats! You won"
            changeColoursOnWin(selectedColourPlayer);
		} else {
            console.log(selectedColourComputer);
            console.log(selectedColourPlayer);
            this.style.backgroundColor = "#acd1f0";
            display.textContent = "Try again";
		}
    });
}

const changeColoursOnWin = (colour) => {
    for(let i = 0; squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}












