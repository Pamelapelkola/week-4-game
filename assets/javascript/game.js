$(document).ready(function () {

    //global variables
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var challengeNumber = Math.floor(Math.random() * 120) + 19;
    

    //functions
    //use function to generate a random challenge number and dump into random-number div

    $("#random-button").on("click", function renderChallengNumber() {
        $("#random-number").text(challengeNumber);
    })
    //use function onclick generate random number 1-12 crystal data 
    $("#crystal").on("click", function rendercrystalNumber() {
        var crystalNumber = Math.floor(Math.random() * 12) + 1;
        // then dump the random number into div
        $("#user-number").text(crystalNumber);
        //continuously add random numbers on click
         counter += parseInt(crystalNumber);
         $("#user-number").text(counter);
         //return a win/lose message
         if (counter === challengeNumber){
            alert("you win!");
            wins++;
            
        } else if (counter >= challengeNumber) {
            alert("you lose");
            losses++;
          
        }
        //reset values
        function updateScore() {
            document.querySelector("#wins").innerHTML = "wins: " + wins +1;
            document.querySelector("#losses").innerHTML = "losses: " + losses + 1;
          }
        
          //main process
        //   renderChallengNumber()
        //   rendercrystalNumber()
        //   updateScore()
          
        //   document.onclick()

          
    }) ;
    });