let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X , player O

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }else{
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;
        checkwinnwer();
    });
});


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};


const showwinner = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkwinnwer = () => {
    for (let pattern of winningCombination) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner is", pos1Val);
            showwinner(pos1Val);
        }
       
    }
}
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
}

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
