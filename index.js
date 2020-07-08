const colours = ["rgb(200, 200, 4)", "rgb(100, 234, 32)", "rgb(32, 210, 39)", "rgb(255, 80, 146)", "rgb(120, 56, 2)", "rgb(210, 30, 4)", "rgb(2, 229, 250)", "rgb(150, 21, 89)"]

const squares = document.querySelectorAll(".square");
const selectedColourComputer = colours[2];

const colour = document.getElementById("colour")
colour.textContent = selectedColourComputer;

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i] 
    
    squares[i].addEventListener("click", () => {
        alert("Square clicked!")
    });
}

