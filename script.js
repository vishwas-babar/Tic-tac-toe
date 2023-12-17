let box = document.querySelectorAll(".box");
let X_or_O = 'X';
let arr = new Array(9);

let i = 0;
box.forEach(element => {
    element.addEventListener('click', function () {
        if (element.innerHTML == "") {
            element.innerHTML = X_or_O;

            //store the x or o in array acording to box
            
            switch (element.id) {
                case "box1":
                    arr[0] = X_or_O;
                    break;
                case "box2":
                    arr[1] = X_or_O;
                    break;
                case "box3":
                    arr[2] = X_or_O;
                    break;
                case "box4":
                    arr[3] = X_or_O;
                    break;
                case "box5":
                    arr[4] = X_or_O;
                    break;
                case "box6":
                    arr[5] = X_or_O;
                    break;
                case "box7":
                    arr[6] = X_or_O;
                    break;
                case "box8":
                    arr[7] = X_or_O;
                    break;
                case "box9":
                    arr[8] = X_or_O;
                    break;
            
                default:
                    break;
            }
            

            // check the winner
            if (checkWinner(X_or_O)) {
                showWinnerCard(X_or_O);
            }
            if (X_or_O == 'X') {
                X_or_O = 'O';
            }
            else {
                X_or_O = 'X';
            }
        }
    });
    i++;
});

function checkWinner(winner) { 
    if ((arr[0] == winner && arr[1] == winner && arr[2] == winner) ||
        (arr[3] == winner && arr[4] == winner && arr[5] == winner) ||
        (arr[6] == winner && arr[7] == winner && arr[8] == winner) ||
        (arr[0] == winner && arr[3] == winner && arr[6] == winner) ||
        (arr[1] == winner && arr[4] == winner && arr[7] == winner) ||
        (arr[2] == winner && arr[5] == winner && arr[8] == winner) ||
        (arr[0] == winner && arr[4] == winner && arr[8] == winner) ||
        (arr[2] == winner && arr[4] == winner && arr[6] == winner)) {

        return true;
    }else{
        return false;
    }
}

function reset() {
    box.forEach(element => {
        element.innerHTML = "";
        X_or_O = 'O';
    });

    for (let index = 0; index < arr.length; index++) {
        arr[index] = "";
    }
}


// show the winner card when any player won the game
let winner_card = document.querySelector(".winner-card");
let winner_headline = document.querySelector("#winner");
let overlay = document.querySelector(".overlay");

function showWinnerCard(winner_name) {

    // winner_card.style.display = "block";
    // overlay.style.display = "block";
    winner_headline.innerHTML = winner_name + " won the game";
    winner_card.classList.add("show");
    overlay.classList.add("show");
}


let restart = document.querySelector("#restart");

restart.addEventListener('click', function () {
    reset();
    winner_card.classList.remove("show");
    overlay.classList.remove("show");
    // winner_card.style.display = "none";
    // overlay.style.display = "none";
});