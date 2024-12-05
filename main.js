let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add click events to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#04724d"
            turnO = false;
        } else {
            box.innerText = "X";
              box.style.color = "red"
            turnO = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

// Display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msg.style.color="#04724d"
     msg.style.marginTop='10px'
      msg.style.fontSize="30px"
    msgContainer.classList.remove("hide");
    disableAllBoxes();
};

// Check for winner or draw
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 !== "" && position1 === position2 && position2 === position3) {
            showWinner(position1);
            return;
        }
    }

    // Check for a draw
    if ([...boxes].every((box) => box.innerText !== "")) {
        msg.innerText = "It's a draw!";
        msg.style.color = "red"

        msgContainer.classList.remove("hide");
    }
};


const disableAllBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

// Reset game
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
});


newGameBtn.addEventListener("click", () => {
    resetBtn.click();
});
 