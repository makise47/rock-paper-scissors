let userwins = 0;
let botwins = 0;
let end = 0;

// Function when User clicks Rock
function rockfn() {
    if (end != 1) {
        let botchoice = Math.random();
        if (botchoice > 0.66) {
            ++userwins;
            document.getElementById("opline").innerHTML+=`Rock beats scissor! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
        else if (botchoice < 0.33) {
            document.getElementById("opline").innerHTML+=`It's a tie! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
        else {
            ++botwins;
            document.getElementById("opline").innerHTML+=`Aww rock loses to paper! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
    }
    if (userwins >=5) {
        document.getElementById("opline").innerHTML+=`<br/> Yay! You have won the game! <br/> Reload the page to play again!`;
        end = 1;
    }
    if (botwins >=5) {
        document.getElementById("opline").innerHTML+=`<br/> Tough luck :( You lost to Makise. <br/> Reload the page to play again!`;
        end = 1;
    }
} 

//Function when User clicks Paper
function paperfn() {
    if (end != 1) {
        let botchoice = Math.random();
        if (botchoice > 0.66) {
            ++botwins;
            document.getElementById("opline").innerHTML+=`Aww paper loses to scissors! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
        else if (botchoice < 0.33) {
            ++userwins;
            document.getElementById("opline").innerHTML+=`Paper beats rock! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
        else {
            document.getElementById("opline").innerHTML+=`It's a tie! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
    }
    if (userwins >=5) {
        document.getElementById("opline").innerHTML+=`<br/> Yay! You have won the game! <br/> Reload the page to play again!`;
        end = 1;
    }
    if (botwins >=5) {
        document.getElementById("opline").innerHTML+=`<br/> Tough luck :( You lost to Makise. <br/> Reload the page to play again!`;
        end = 1;
    }
}


//Function when User clicks Scissors
function scissorsfn() {
    if (end != 1) {
        let botchoice = Math.random();
        if (botchoice > 0.66) {
            document.getElementById("opline").innerHTML+=`It's a tie! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
        else if (botchoice < 0.33) {
            ++botwins;
            document.getElementById("opline").innerHTML+=`Aww scissor loses to rock! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
        else {
            ++userwins;
            document.getElementById("opline").innerHTML+=`Scissor beats paper! You have ${userwins} points while Makise has ${botwins} points! <br/>`;
        }
    }
    if (userwins >=5) {
        document.getElementById("opline").innerHTML+=`<br/> Yay! You have won the game! <br/> Reload the page to play again!`;
        end = 1;
    }
    if (botwins >=5) {
        document.getElementById("opline").innerHTML+=`<br/> Tough luck :( You lost to Makise. <br/> Reload the page to play again!`;
        end = 1;
    }
}