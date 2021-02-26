let turn = 'X';
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function clickCell(e, num) {
    playerTurn(e, num);
    checkWinner();
}
function playerTurn(e, num) {
    if (e.target.disabled != true)    //every td has default disabled false property 
    {                                 //if not true then it will print otherwise not
        e.target.innerHTML = turn;
        arr[num - 1] = turn;          //array to keep track of winner;
        if (turn == 'X')  //turn shift
            turn = 'O';
        else
            turn = 'X';
    }
    e.target.disabled = true;       // after printing if will disable cell - not to change its text
}
function checkWinner() {
    var count;
    count = arr.filter((value) => (value == 'X' || value == 'O'))
    if (count.length >= 5) {
        var winner = win(0, 1, 2) || win(3, 4, 5) || win(6, 7, 8) || win(0, 3, 6) || win(1, 4, 7) ||
            win(2, 5, 8) || win(0, 4, 8) || win(2, 4, 6);
        setTimeout(function () {
            if (winner != "") {
                alert("Winner is " + winner);
                clearData();
            }
            else if (count.length == 9 && !arr.includes(/[0-9]/)) {
                confirm("Draw");
                clearData();
            }
        }, 1000);
    }
}
function win(c1, c2, c3) {
    if (arr[c1] == arr[c2] && arr[c2] == arr[c3]) {
        return arr[c1];
    }
    else {
        return "";
    }
}
function clearData() {
    if (confirm("Reset your game")) {
        location.reload();
    }
}


