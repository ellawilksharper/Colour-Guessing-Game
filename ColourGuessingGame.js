var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  colorDisplay.textContent = pickedColor;
  setupModeButtons();
  setupSquares();
  reset();
  resetBtn.addEventListener("click", function() {
    reset();
  });
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons.forEach((modeButton) => {
        modeButton.classList.remove("selected");
      });
        this.classList.add("selected");

        //this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

        switch (this.textContent) {
            case "Easy":
              numSquares = 3
                // code block
                break;
            case "Hard":
              numSquares = 6
                // code block
                break;
            case "Extra Hard":
              numSquares = 9
            default: 6;
            // code block
        }


      reset();
    });
  }
  // Indicating that "EXTRA HARD" is the default setting
  modeButtons[2].classList.add("selected");
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  setupSquares();
  resetBtn.textContent = "New Colours";
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}


function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    h1.style.backgroundColor = color;
  }
}

function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  return arr;
}
