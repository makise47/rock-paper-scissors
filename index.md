<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8">
        <title>Rock Paper Scissors</title>
        <link href="css/style.css" rel="stylesheet">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto">
        <script type="text/javascript" src="script/index.js"></script>
    </head>

    <body>
        <div class="container">
            <div class="main">
                <p class="title">Play a game of Rock-Paper-Scissors with Makise!</p>
                <h2 class="info">First player to get to 5 wins!</h2>
            </div>

            <div class="buttons"> 
                <input type="button" class="rock" value="Rock" onclick="rockfn()">
                <input type="button" class="paper" value="Paper" onclick="paperfn()">
                <input type="button" class="scissors" value="Scissors" onclick="scissorsfn()">
            </div>
            
            <div class="opbox">
                <div id=></div>
                <p id="opline"></p>
                <p id="scorecard"></p>
            </div>
        </div>
    </body>
    </html>