var allSvgSelector = "svg";
var allCellSelector = ".cell";
var lastPlayerMoved = null;
var winningPositions = [
    ['x', 0, 0, 'x', 0, 0, 'x', 0, 0],
    [0, 'x', 0, 0, 'x', 0, 0, 'x', 0],
    [0, 0, 'x', 0, 0, 'x', 0, 0, 'x'],
    ['x', 'x', 'x', 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 'x', 'x', 'x', 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 'x', 'x', 'x'],
    ['x', 0, 0, 0, 'x', 0, 0, 0, 'x'],
    [0, 0, 'x', 0, 'x', 0, 'x', 0, 0]
]

function run()
{
    clearBoard();
    $("#reset").on("click", reset);
}

function applyListener()
{
    $(this).on("click", cellClicked);
}

function removeListener()
{
    $(this).off("click");
}

function cellClicked()
{
    if (lastPlayerMoved == null || lastPlayerMoved == 2)
    {
        showSvg(".cross", 1, this);
    }
    else
    {
        showSvg(".circle", 2, this);
    }
    $(this).off("click");
    hasSomeoneWon();
}

function showSvg(symbol, player, cell)
{
    var svg = $(cell).children(symbol)[0];
    $(svg).removeClass("hide");
    lastPlayerMoved = player;
}

function reset()
{
    window.alert("Game Reset");
    clearBoard();
}

function clearBoard()
{
    $(allSvgSelector).each(function ()
    {
        $(this).addClass("hide");
    });
    $(allCellSelector).each(removeListener);
    $(allCellSelector).each(applyListener);
}

function getState()
{
    var result = [];
    for (var i = 0; i < 9; i++)
    {
        result.push(getStateOfCell(i))
    }
    console.log(result);
    return result;
}

function getStateOfCell(position)
{
    var result;
    $(".cell").each(function (index)
    {
        if (index == position)
        {
            var cross = $(this).children(".cross")[0];
            var circle = $(this).children(".circle")[0];

            if (cross.classList[0] == "hide" && circle.classList[0] == "hide")
            {
                result = 0;
            }
            else if (cross.classList[0] !== "hide" && circle.classList[0] == "hide")
            {
                result = 1;
            }
            else { result = 2; }
        }
    })
    return result;
}

function hasSomeoneWon() {
    var currentState = getState();
    var winner = "No winner";

    for (var i = 0; i < winningPositions.length && winner === "No winner"; i++) {
        var currentPositions = winningPositions[i];
        var player1 = 0;
        var player2 = 0;

        for (var i2 = 0; i2 < currentPositions.length; i2++) {
            if (currentPositions[i2] == 'x' && currentState[i2] == 1)
                player1++;

            if (currentPositions[i2] == 'x' && currentState[i2] == 2)
                player2++;
        }

        if (player1 == 3)
            winner = "Player 1 (Crosses)";
        
        if (player2 == 3)
            winner = "Player 2 (Circles)";  

        if (winner !== "No winner")
            showWinningSvg(i);      
    }
    console.log(winner);
    return winner;
}

function showWinningSvg(i)
{
    var className = ".win" + i;
    $(className).each(function ()
    {
        $(this).removeClass("hide");
    });
}

