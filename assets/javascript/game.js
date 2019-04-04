$(document).ready(function () {

    // ============================= Variables ===================================================
    // Wins
    // Losses
    // The start game function assigns random values to the crystal buttons and returns 
    var numberWin;
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    // console.log(numberWin);
    console.log("userTotal FIRST RUN ---------->" + userTotal);

    
    // ================================== Functions ===================================================
    // Creates 4 buttons
    // Put buttons in a div
    // Assign each button a random number
    // button clicked adds number to total
    // Win or loss notification
    // level reset
    // RNG guess number 19-112
    // RNG button numbers 1-12
    // append number to data attribute

    // insert 4 buttons with random numbers between 1 and 12 assigned to the data attribute of the button
    function buttLoop() {
        for (var i = 0; i < 4; i++) {
            $("#buttons").append("<button id='crystal" + i + "'><img src='https://pixel.nymag.com/imgs/daily/grub/2016/06/06/06-guy-fieri.w700.h700.jpg' width='200px'></img></button>");
            $("#crystal" + i).attr("data-numval", Math.floor((Math.random() * 12) + 1));
            $("#crystal" + i).addClass("butt");
        }

        $(".butt").click(function () {

            userTotal += parseInt($(this).attr("data-numval"));
            console.log("After Button Press userTotal ---------> " + userTotal);

            if (userTotal === numberWin) {
                wins++;
                userTotal = 0;
                startGame();
            }
            if (userTotal > numberWin) {
                losses++;
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
        console.log("winNum " + numberWin);
    }

    startGame();
});