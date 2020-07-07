const colours = ["red", "yellow", "pink", "green", "orange", "purple", "blue"]

const squares = document.querySelectorAll(".square");
for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i]
    
}