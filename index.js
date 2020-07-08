const colours = ["rgb(200, 200, 4)", "rgb(100, 234, 32)", "rgb(32, 210, 39)", "rgb(255, 80, 146)", "rgb(120, 56, 2)", "rgb(210, 30, 4)", "rgb(2, 229, 250)", "rgb(150, 21, 89)"]


const computerSelectsAColour = () => {
    const random = Math.floor(Math.random() * colours.length)
    return colours[random];
}


const squares = document.querySelectorAll(".square");
const selectedColourComputer = computerSelectsAColour();

const colour = document.getElementById("colour")
const display = document.getElementById("winlose");

colour.textContent = selectedColourComputer;

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i] 
    
    squares[i].addEventListener("click", function(){
        
        console.log(this.style.backgroundColor);
        let selectedColourPlayer = this.style.backgroundColor;
		
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

