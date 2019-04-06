$(document).ready(function () {

    // ============================= Variables ===================================================
    // 
    var numberWin;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    // console.log(numberWin);
    console.log("userTotal FIRST RUN ---------->" + userTotal);

    // ================================== Functions ===================================================
    // insert 4 buttons with random numbers between 1 and 12 assigned to the data attribute of the button
    // add butt class so the buttons so that an on click event can be defined for all buttons
    function buttLoop() {
        for (var i = 0; i < 4; i++) {
            $("#buttons").append("<button id='crystal" + i + "'><img src='https://pixel.nymag.com/imgs/daily/grub/2016/06/06/06-guy-fieri.w700.h700.jpg' width='200px'></img></button>");
            $("#crystal" + i).attr("data-numval", Math.floor((Math.random() * 12) + 1));
            $("#crystal" + i).addClass("butt");
        }

        $(".butt").click(function () {
            // parse data-numval value 
            userTotal += parseInt($(this).attr("data-numval"));
            $("#total").html("<h3>"+ userTotal +"</h3>")
            console.log("After Button Press userTotal ---------> " + userTotal);
            // Win condition adds a win, resets all random numbers and resets the user total
            if (userTotal === numberWin) {
                wins++;
                $("#wins").html("<h3>"+ wins +"</h3>");
                $("#message").html("<h3>You win!</h3>");
                userTotal = 0;
                startGame();
            }
            // Loss condition same as win condition but for losses. No else function because we do not want an exit condition.
            if (userTotal > numberWin) {
                losses++;
                $("#losses").html("<h3>"+ losses +"</h3>");
                $("#message").html("<h3>You lose!</h3>");
                userTotal = 0;
                startGame();
            }
        });
    }
    // Calls the buttloop function and sets the number that you must 
    function startGame() {
        $("#buttons").empty();
        buttLoop();
        numberWin = Math.floor((Math.random() * 120) + 20);
        $("#goal").html("<h3>"+ numberWin +"</h3>");
        $("#total").html("<h3>"+ userTotal +"</h3>")
        console.log("winNum " + numberWin);
    }
    //Starts the game ;)
    startGame();
});