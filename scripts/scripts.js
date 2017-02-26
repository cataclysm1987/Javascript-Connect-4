//Initial Values

var CurrentTurn = 1;

function UpdateStatus() {
    if (CheckTurn() == 1) {
        document.getElementById("gamestatus").innerHTML = "Player 1, Make Your Move!";
    } else if (CheckTurn() == 2) {
        document.getElementById("gamestatus").innerHTML = "Player 2, Make Your Move!";
    }
}
var Board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

function CheckTurn() {
    if (CurrentTurn % 2 == 1) {
        return 1;
    } else {
        return 2;
    }
}

function CheckWin(row, column) {
    var vertical = 0;
    var horizontal = 0;
    var diagonalUp = 0;
    var diagonalDown = 0;
    //Vertical calculate up
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row + i][column] == CheckTurn()) {
                vertical++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }
    //Vertical calculate down
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row - i][column] == CheckTurn()) {
                
                vertical++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }

    //Horizontal calculate right
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row][column + i] == CheckTurn()) {
                
                horizontal++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }
    //Horizontal calculate left
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row][column - i] == CheckTurn()) {
                
                horizontal++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }

    //Diagonal up calculate right
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row - i][column + i] == CheckTurn()) {
                
                diagonalUp++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }
    //Diagonal up calculate left
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row + i][column - i] == CheckTurn()) {
                
                diagonalUp++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }
    //Diagonal down calculate right
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row + i][column + i] == CheckTurn()) {
                
                diagonalDown++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }
    //Diagonal down calculate left
    
    for (var i = 1; i <= 3; i++) {
        try {
            if (Board[row - i][column - i] == CheckTurn()) {
                
                diagonalDown++;
            } else {
                break;
            }
        }

        catch (err) {
            console.log("Out of range");

        }
    }

    if (vertical >= 3 || horizontal >= 3 || diagonalUp >= 3 || diagonalDown >= 3) {
        if (vertical >= 3) {
            console.log("Vertical win");
        } else if (horizontal >= 3) {
            console.log("Horizontal win");
        } else if (diagonalUp >= 3) {
            console.log("Diagonal Up Win");
        } else if (diagonalDown >= 3) {
            console.log("Diagonal Down Win");
        }
        $("#row0").hide();
        $("#gamestatus").hide();

        if (CheckTurn() == 1) {
            document.getElementById("winmessage").innerHTML = "Player 1 Wins!";
        } else if (CheckTurn() == 2) {
            document.getElementById("winmessage").innerHTML = "Player 2 Wins!";
        }
    } else if ($.inArray( 0, Board ) == -1) {
        $("#row0").hide();
        $("#gamestatus").hide();
        document.getElementById("winmessage").innerHTML = "It's a Draw!";
    }
}

function DropColumn0() {
    if (Board[5][0] == 0) {
        if (CheckTurn() == 1) {
            Player1Place50();
            CheckWin(5, 0);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn(5, 0) == 2) {
            Player2Place50();
            CheckWin(5, 0);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[4][0] == 0) {
        if (CheckTurn() == 1) {
            Player1Place40();
            CheckWin(4, 0);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place40();
            CheckWin(4, 0);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[3][0] == 0) {
        if (CheckTurn() == 1) {
            Player1Place30();
            CheckWin(3, 0);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place30();
            CheckWin(3, 0);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[2][0] == 0) {
        if (CheckTurn() == 1) {
            Player1Place20();
            CheckWin(2, 0);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place20();
            CheckWin(2, 0);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[1][0] == 0) {
        if (CheckTurn(1, 0) == 1) {
            Player1Place10();
            CheckWin();
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place10();
            CheckWin(1, 0);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[0][0] == 0) {
        if (CheckTurn() == 1) {
            Player1Place00();
            CheckWin(0, 0);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place00();
            CheckWin(0, 0);
            CurrentTurn++;
            UpdateStatus();
        }
    }
    
}

function DropColumn1() {
    if (Board[5][1] == 0) {
        if (CheckTurn() == 1) {
            Player1Place51();
            CheckWin(5, 1);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place51();
            CheckWin(5, 1);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[4][1] == 0) {
        if (CheckTurn() == 1) {
            Player1Place41();
            CheckWin(4, 1);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place41();
            CheckWin(4, 1);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[3][1] == 0) {
        if (CheckTurn() == 1) {
            Player1Place31();
            CheckWin(3, 1);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place31();
            CheckWin(3, 1);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[2][1] == 0) {
        if (CheckTurn() == 1) {
            Player1Place21();
            CheckWin(2, 1);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place21();
            CheckWin(2, 1);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[1][1] == 0) {
        if (CheckTurn() == 1) {
            Player1Place11();
            CheckWin(1, 1);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place11();
            CheckWin(1, 1);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[0][1] == 0) {
        if (CheckTurn() == 1) {
            Player1Place01();
            CheckWin(0, 1);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place01();
            CheckWin(0, 1);
            CurrentTurn++;
            UpdateStatus();
        }
    }
}

function DropColumn2() {
    if (Board[5][2] == 0) {
        if (CheckTurn() == 1) {
            Player1Place52();
            CheckWin(5, 2);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place52();
            CheckWin(5, 2);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[4][2] == 0) {
        if (CheckTurn() == 1) {
            Player1Place42();
            CheckWin(4, 2);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place42();
            CheckWin(4, 2);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[3][2] == 0) {
        if (CheckTurn() == 1) {
            Player1Place32();
            CheckWin(3, 2);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place32();
            CheckWin(3, 2);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[2][2] == 0) {
        if (CheckTurn() == 1) {
            Player1Place22();
            CheckWin(2, 2);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place22();
            CheckWin(2, 2);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[1][2] == 0) {
        if (CheckTurn() == 1) {
            Player1Place12();
            CheckWin(1, 2);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place12();
            CheckWin(1, 2);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[0][2] == 0) {
        if (CheckTurn() == 1) {
            Player1Place02();
            CheckWin(0, 2);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place02();
            CheckWin(0, 2);
            CurrentTurn++;
            UpdateStatus();
        }
    }
}

function DropColumn3() {
    if (Board[5][3] == 0) {
        if (CheckTurn() == 1) {
            Player1Place53();
            CheckWin(5, 3);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place53();
            CheckWin(5, 3);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[4][3] == 0) {
        if (CheckTurn() == 1) {
            Player1Place43();
            CheckWin(4, 3);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place43();
            CheckWin(4, 3);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[3][3] == 0) {
        if (CheckTurn() == 1) {
            Player1Place33();
            CheckWin(3, 3);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place33();
            CheckWin(3, 3);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[2][3] == 0) {
        if (CheckTurn() == 1) {
            Player1Place23();
            CheckWin(2, 3);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place23();
            CheckWin(2, 3);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[1][3] == 0) {
        if (CheckTurn() == 1) {
            Player1Place13();
            CheckWin(1, 3);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place13();
            CheckWin(1, 3);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[0][3] == 0) {
        if (CheckTurn() == 1) {
            Player1Place03();
            CheckWin(0, 3);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place03();
            CheckWin(0, 3);
            CurrentTurn++;
            UpdateStatus();
        }
    }
}

function DropColumn4() {
    if (Board[5][4] == 0) {
        if (CheckTurn() == 1) {
            Player1Place54();
            CheckWin(5, 4);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place54();
            CheckWin(5, 4);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[4][4] == 0) {
        if (CheckTurn() == 1) {
            Player1Place44();
            CheckWin(4, 4);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place44();
            CheckWin(4, 4);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[3][4] == 0) {
        if (CheckTurn() == 1) {
            Player1Place34();
            CheckWin(3, 4);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place34();
            CheckWin(3, 4);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[2][4] == 0) {
        if (CheckTurn() == 1) {
            Player1Place24();
            CheckWin(2, 4);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place24();
            CheckWin(2, 4);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[1][4] == 0) {
        if (CheckTurn() == 1) {
            Player1Place14();
            CheckWin(1, 4);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place14();
            CheckWin(1, 4);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[0][4] == 0) {
        if (CheckTurn() == 1) {
            Player1Place04();
            CheckWin(0, 4);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place04();
            CheckWin(0, 4);
            CurrentTurn++;
            UpdateStatus();
        }
    }
}

function DropColumn5() {
    if (Board[5][5] == 0) {
        if (CheckTurn() == 1) {
            Player1Place55();
            CheckWin(5, 5);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place55();
            CheckWin(5, 5);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[4][5] == 0) {
        if (CheckTurn() == 1) {
            Player1Place45();
            CheckWin(4, 5);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place45();
            CheckWin(4, 5);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[3][5] == 0) {
        if (CheckTurn() == 1) {
            Player1Place35();
            CheckWin(3, 5);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place35();
            CheckWin(3, 5);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[2][5] == 0) {
        if (CheckTurn() == 1) {
            Player1Place25();
            CheckWin(2, 5);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place25();
            CheckWin(2, 5);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[1][5] == 0) {
        if (CheckTurn() == 1) {
            Player1Place15();
            CheckWin(1, 5);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place15();
            CheckWin(1, 5);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[0][5] == 0) {
        if (CheckTurn() == 1) {
            Player1Place05();
            CheckWin(0, 5);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place05();
            CheckWin(0, 5);
            CurrentTurn++;
            UpdateStatus();
        }
    }
}

function DropColumn6() {
    if (Board[5][6] == 0) {
        if (CheckTurn() == 1) {
            Player1Place56();
            CheckWin(5, 6);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place56();
            CheckWin(5, 6);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[4][6] == 0) {
        if (CheckTurn() == 1) {
            Player1Place46();
            CheckWin(4, 6);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place46();
            CheckWin(4, 6);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[3][6] == 0) {
        if (CheckTurn() == 1) {
            Player1Place36();
            CheckWin(3, 6);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place36();
            CheckWin(3, 6);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[2][6] == 0) {
        if (CheckTurn() == 1) {
            Player1Place26();
            CheckWin(2, 6);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place26();
            CheckWin(2, 6);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[1][6] == 0) {
        if (CheckTurn() == 1) {
            Player1Place16();
            CheckWin(1, 6);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place16();
            CheckWin(1, 6);
            CurrentTurn++;
            UpdateStatus();
        }
    } else if (Board[0][6] == 0) {
        if (CheckTurn() == 1) {
            Player1Place06();
            CheckWin(0, 6);
            CurrentTurn++;
            UpdateStatus();
        } else if (CheckTurn() == 2) {
            Player2Place06();
            CheckWin(0, 6);
            CurrentTurn++;
            UpdateStatus();
        }
    }
}




//Place methods for player 1

//Player 1 Row 0
function Player1Place00() {
    $("#00").append('<div class="red-circle"></div>');
    Board[0][0] = 1;
}

function Player1Place01() {
    $("#01").append('<div class="red-circle"></div>');
    Board[0][1] = 1;
}

function Player1Place02() {
    $("#02").append('<div class="red-circle"></div>');
    Board[0][2] = 1;
}

function Player1Place03() {
    $("#03").append('<div class="red-circle"></div>');
    Board[0][3] = 1;
}

function Player1Place04() {
    $("#04").append('<div class="red-circle"></div>');
    Board[0][4] = 1;
}

function Player1Place05() {
    $("#05").append('<div class="red-circle"></div>');
    Board[0][5] = 1;
}

function Player1Place06() {
    $("#06").append('<div class="red-circle"></div>');
    Board[0][6] = 1;
}

//Player 1 Row 1
function Player1Place10() {
    $("#10").append('<div class="red-circle"></div>');
    Board[1][0] = 1;
}

function Player1Place11() {
    $("#11").append('<div class="red-circle"></div>');
    Board[1][1] = 1;
}

function Player1Place12() {
    $("#12").append('<div class="red-circle"></div>');
    Board[1][2] = 1;
}

function Player1Place13() {
    $("#13").append('<div class="red-circle"></div>');
    Board[1][3] = 1;
}

function Player1Place14() {
    $("#14").append('<div class="red-circle"></div>');
    Board[1][4] = 1;
}

function Player1Place15() {
    $("#15").append('<div class="red-circle"></div>');
    Board[1][5] = 1;
}

function Player1Place16() {
    $("#16").append('<div class="red-circle"></div>');
    Board[1][6] = 1;
}

//Player 1 Row 2

function Player1Place20() {
    $("#20").append('<div class="red-circle"></div>');
    Board[2][0] = 1;
}

function Player1Place21() {
    $("#21").append('<div class="red-circle"></div>');
    Board[2][1] = 1;
}

function Player1Place22() {
    $("#22").append('<div class="red-circle"></div>');
    Board[2][2] = 1;
}

function Player1Place23() {
    $("#23").append('<div class="red-circle"></div>');
    Board[2][3] = 1;
}

function Player1Place24() {
    $("#24").append('<div class="red-circle"></div>');
    Board[2][4] = 1;
}

function Player1Place25() {
    $("#25").append('<div class="red-circle"></div>');
    Board[2][5] = 1;
}

function Player1Place26() {
    $("#26").append('<div class="red-circle"></div>');
    Board[2][6] = 1;
}

//Player 1 Row 3

function Player1Place30() {
    $("#30").append('<div class="red-circle"></div>');
    Board[3][0] = 1;
}

function Player1Place31() {
    $("#31").append('<div class="red-circle"></div>');
    Board[3][1] = 1;
}

function Player1Place32() {
    $("#32").append('<div class="red-circle"></div>');
    Board[3][2] = 1;
}

function Player1Place33() {
    $("#33").append('<div class="red-circle"></div>');
    Board[3][3] = 1;
}

function Player1Place34() {
    $("#34").append('<div class="red-circle"></div>');
    Board[3][4] = 1;
}

function Player1Place35() {
    $("#35").append('<div class="red-circle"></div>');
    Board[3][5] = 1;
}

function Player1Place36() {
    $("#36").append('<div class="red-circle"></div>');
    Board[3][6] = 1;
}
//Player 1 Row 4

function Player1Place40() {
    $("#40").append('<div class="red-circle"></div>');
    Board[4][0] = 1;
}

function Player1Place41() {
    $("#41").append('<div class="red-circle"></div>');
    Board[4][1] = 1;
}

function Player1Place42() {
    $("#42").append('<div class="red-circle"></div>');
    Board[4][2] = 1;
}

function Player1Place43() {
    $("#43").append('<div class="red-circle"></div>');
    Board[4][3] = 1;
}

function Player1Place44() {
    $("#44").append('<div class="red-circle"></div>');
    Board[4][4] = 1;
}

function Player1Place45() {
    $("#45").append('<div class="red-circle"></div>');
    Board[4][5] = 1;
}

function Player1Place46() {
    $("#46").append('<div class="red-circle"></div>');
    Board[4][6] = 1;
}

//Player 1 Row 5

function Player1Place50() {
    $("#50").append('<div class="red-circle"></div>');
    Board[5][0] = 1;
}

function Player1Place51() {
    $("#51").append('<div class="red-circle"></div>');
    Board[5][1] = 1;
}

function Player1Place52() {
    $("#52").append('<div class="red-circle"></div>');
    Board[5][2] = 1;
}

function Player1Place53() {
    $("#53").append('<div class="red-circle"></div>');
    Board[5][3] = 1;
}

function Player1Place54() {
    $("#54").append('<div class="red-circle"></div>');
    Board[5][4] = 1;
}

function Player1Place55() {
    $("#55").append('<div class="red-circle"></div>');
    Board[5][5] = 1;
}

function Player1Place56() {
    $("#56").append('<div class="red-circle"></div>');
    Board[5][6] = 1;
}

//Place methods for Player 2

//Player 2 Row 0

function Player2Place00() {
    $("#00").append('<div class="blue-circle"></div>');
    Board[0][0] = 2;
}

function Player2Place01() {
    $("#01").append('<div class="blue-circle"></div>');
    Board[0][1] = 2;
}

function Player2Place02() {
    $("#02").append('<div class="blue-circle"></div>');
    Board[0][2] = 2;
}

function Player2Place03() {
    $("#03").append('<div class="blue-circle"></div>');
    Board[0][3] = 2;
}

function Player2Place04() {
    $("#04").append('<div class="blue-circle"></div>');
    Board[0][4] = 2;
}

function Player2Place05() {
    $("#05").append('<div class="blue-circle"></div>');
    Board[0][5] = 2;
}

function Player2Place06() {
    $("#06").append('<div class="blue-circle"></div>');
    Board[0][6] = 2;
}

//Player 2 Row 1
function Player2Place10() {
    $("#10").append('<div class="blue-circle"></div>');
    Board[1][0] = 2;
}

function Player2Place11() {
    $("#11").append('<div class="blue-circle"></div>');
    Board[1][1] = 2;
}

function Player2Place12() {
    $("#12").append('<div class="blue-circle"></div>');
    Board[1][2] = 2;
}

function Player2Place13() {
    $("#13").append('<div class="blue-circle"></div>');
    Board[1][3] = 2;
}

function Player2Place14() {
    $("#14").append('<div class="blue-circle"></div>');
    Board[1][4] = 2;
}

function Player2Place15() {
    $("#15").append('<div class="blue-circle"></div>');
    Board[1][5] = 2;
}

function Player2Place16() {
    $("#16").append('<div class="blue-circle"></div>');
    Board[1][6] = 2;
}

//Player 2 Row 2

function Player2Place20() {
    $("#20").append('<div class="blue-circle"></div>');
    Board[2][0] = 2;
}

function Player2Place21() {
    $("#21").append('<div class="blue-circle"></div>');
    Board[2][1] = 2;
}

function Player2Place22() {
    $("#22").append('<div class="blue-circle"></div>');
    Board[2][2] = 2;
}

function Player2Place23() {
    $("#23").append('<div class="blue-circle"></div>');
    Board[2][3] = 2;
}

function Player2Place24() {
    $("#24").append('<div class="blue-circle"></div>');
    Board[2][4] = 2;
}

function Player2Place25() {
    $("#25").append('<div class="blue-circle"></div>');
    Board[2][5] = 2;
}

function Player2Place26() {
    $("#26").append('<div class="blue-circle"></div>');
    Board[2][6] = 2;
}

//Player 2 Row 3

function Player2Place30() {
    $("#30").append('<div class="blue-circle"></div>');
    Board[3][0] = 2;
}

function Player2Place31() {
    $("#31").append('<div class="blue-circle"></div>');
    Board[3][1] = 2;
}

function Player2Place32() {
    $("#32").append('<div class="blue-circle"></div>');
    Board[3][2] = 2;
}

function Player2Place33() {
    $("#33").append('<div class="blue-circle"></div>');
    Board[3][3] = 2;
}

function Player2Place34() {
    $("#34").append('<div class="blue-circle"></div>');
    Board[3][4] = 2;
}

function Player2Place35() {
    $("#35").append('<div class="blue-circle"></div>');
    Board[3][5] = 2;
}

function Player2Place36() {
    $("#36").append('<div class="blue-circle"></div>');
    Board[3][6] = 2;
}
//Player 2 Row 4

function Player2Place40() {
    $("#40").append('<div class="blue-circle"></div>');
    Board[4][0] = 2;
}

function Player2Place41() {
    $("#41").append('<div class="blue-circle"></div>');
    Board[4][1] = 2;
}

function Player2Place42() {
    $("#42").append('<div class="blue-circle"></div>');
    Board[4][2] = 2;
}

function Player2Place43() {
    $("#43").append('<div class="blue-circle"></div>');
    Board[4][3] = 2;
}

function Player2Place44() {
    $("#44").append('<div class="blue-circle"></div>');
    Board[4][4] = 2;
}

function Player2Place45() {
    $("#45").append('<div class="blue-circle"></div>');
    Board[4][5] = 2;
}

function Player2Place46() {
    $("#46").append('<div class="blue-circle"></div>');
    Board[4][6] = 2;
}

//Player 2 Row 5

function Player2Place50() {
    $("#50").append('<div class="blue-circle"></div>');
    Board[5][0] = 2;
}

function Player2Place51() {
    $("#51").append('<div class="blue-circle"></div>');
    Board[5][1] = 2;
}

function Player2Place52() {
    $("#52").append('<div class="blue-circle"></div>');
    Board[5][2] = 2;
}

function Player2Place53() {
    $("#53").append('<div class="blue-circle"></div>');
    Board[5][3] = 2;
}

function Player2Place54() {
    $("#54").append('<div class="blue-circle"></div>');
    Board[5][4] = 2;
}

function Player2Place55() {
    $("#55").append('<div class="blue-circle"></div>');
    Board[5][5] = 2;
}

function Player2Place56() {
    $("#56").append('<div class="blue-circle"></div>');
    Board[5][6] = 2;
}
