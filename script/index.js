let userwins = 0;
let botwins = 0;
let end = 0;

// Function when User clicks Rock
function rockfn() {
    if (end != 1) {
        let botchoice = Math.random();
        if (botchoice > 0.66) {
            ++userwins;
            document.getElementById("opline").innerHTML+=`You picked Rock while Makise picked Scissors! You get a point! <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
        else if (botchoice < 0.33) {
            document.getElementById("opline").innerHTML+=`Both of you picked Rock! It's a tie. <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
        else {
            ++botwins;
            document.getElementById("opline").innerHTML+=`You picked Rock while Makise picked Paper. You lose this round. <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
    }
    if (userwins >=5 && end != 1) {
        document.getElementById("scorecard").innerHTML+=`<br/> Yay! You have won the game! <br/> Reload the page to play again!`;
        end = 1;
    }
    if (botwins >=5 && end != 1) {
        document.getElementById("scorecard").innerHTML+=`<br/> Tough luck :( You lost to Makise. <br/> Reload the page to play again!`;
        end = 1;
    }
} 

//Function when User clicks Paper
function paperfn() {
    if (end != 1) {
        let botchoice = Math.random();
        if (botchoice > 0.66) {
            ++botwins;
            document.getElementById("opline").innerHTML+=`You picked Paper while Makise picked Scissors. You lose this round. <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
        else if (botchoice < 0.33) {
            ++userwins;
            document.getElementById("opline").innerHTML+=`You picked Paper while Makise picked Rock! You get a point! <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
        else {
            document.getElementById("opline").innerHTML+=`Both of you picked Paper! It's a tie. <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
    }
    if (userwins >=5 && end != 1) {
        document.getElementById("scorecard").innerHTML+=`<br/> Yay! You have won the game! <br/> Reload the page to play again!`;
        end = 1;
    }
    if (botwins >=5 && end != 1) {
        document.getElementById("scorecard").innerHTML+=`<br/> Tough luck :( You lost to Makise. <br/> Reload the page to play again!`;
        end = 1;
    }
}


//Function when User clicks Scissors
function scissorsfn() {
    if (end != 1) {
        let botchoice = Math.random();
        if (botchoice > 0.66) {
            document.getElementById("opline").innerHTML+=`Both of you picked Scissors! It's a tie. <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
        else if (botchoice < 0.33) {
            ++botwins;
            document.getElementById("opline").innerHTML+=`You picked Scissors while Makise picked Rock. You lose this round. <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
        else {
            ++userwins;
            document.getElementById("opline").innerHTML+=`You picked Scissors while Makise picked Paper! You get a point! <br/>`;
            document.getElementById("opline").innerHTML+=`<br/>`
            document.getElementById("scorecard").innerHTML=`Your points: ${userwins}. Makise's points: ${botwins}. <br/>`
        }
    }
    if (userwins >=5 && end != 1) {
        document.getElementById("scorecard").innerHTML+=`<br/> Yay! You have won the game! <br/> Reload the page to play again!`;
        end = 1;
    }
    if (botwins >=5 && end != 1) {
        document.getElementById("scorecard").innerHTML+=`<br/> Tough luck :( You lost to Makise. <br/> Reload the page to play again!`;
        end = 1;
    }
}