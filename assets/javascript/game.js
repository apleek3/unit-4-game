// A $( document ).ready() block for starting to do things on load
$(document).ready(function () {
    var targetNumber = Math.round((Math.random()*((120-19))+19));
    var crystalsTotal = 0;
    var winsCounter = 0;
    
    var crystals = []
    while(crystals.length < 4) {
        var randomCrystal = Math.round((Math.random()*(12-1)) + 1); // generates random # from 1-12
        if (crystals.indexOf(randomCrystal) > -1) { // Checks if random # is in array
            continue; // If it is, don't run next line
        }
        crystals.push(randomCrystal); // Push random # to last item of crystals
    }
    // At the end - crystals should be an array with 3 indexes (length of 4) full of unique random numbers

    console.log(targetNumber);
    console.log(crystalsTotal);
    console.log(crystals);
    $("#targetNumber").text(targetNumber);
    
    var greenCrystal = $("#firstCrystal");
    var topazCrystal = $("#secondCrystal");
    var purpleCrystal = $("#thirdCrystal");
    var redCrystal = $("#fourthCrystal");

    greenCrystal.prepend('<img id="green" class="img-thumbnail" src="./assets/images/green.png" />')
    topazCrystal.prepend('<img id="topaz" class="img-thumbnail" src="./assets/images/topaz.png" />')
    purpleCrystal.prepend('<img id="purple" class="img-thumbnail" src="./assets/images/purple.png" />')
    redCrystal.prepend('<img id="red" class="img-thumbnail" src="./assets/images/red.png" />')

    // Add random numbers as attributes to newly created elements
    greenCrystal.attr("randomCrystalValue", crystals[0]);
    topazCrystal.attr("randomCrystalValue", crystals[1]);
    purpleCrystal.attr("randomCrystalValue", crystals[2]);
    redCrystal.attr("randomCrystalValue", crystals[3]);

    $("#advisory").text("");


        $("#firstCrystal").on("click", function() {
            var crystalValue1 = greenCrystal.attr("randomCrystalValue");
            crystalValue1 = parseInt(crystalValue1);
            crystalsTotal += crystalValue1;
            console.log(crystalsTotal);
            $("#crystalCounter").text(crystalsTotal);
            if (crystalsTotal == targetNumber) {
                winsCounter++;
                $("#winsCounter").text(winsCounter);
                $("#advisory").text("YOU WIN!!!");
                $("#advisory").css("font-size","50px");
                return;
              }
            else if (crystalsTotal > targetNumber) {
                $("#advisory").text("YOU LOSE!!!");
                $("#advisory").css("font-size","50px");
                return;
            }
        }); 
        $("#secondCrystal").on("click", function() {
            var crystalValue2 = topazCrystal.attr("randomCrystalValue");
            crystalValue2 = parseInt(crystalValue2);
            crystalsTotal += crystalValue2;
            console.log(crystalsTotal);
            $("#crystalCounter").text(crystalsTotal);
            if (crystalsTotal == targetNumber) {
                winsCounter++;
                $("#winsCounter").text(winsCounter);
                $("#advisory").text("YOU WIN!!!");
                $("#advisory").css("font-size","50px");
                return;
              }
            else if (crystalsTotal > targetNumber) {
                $("#advisory").text("YOU LOSE!!!");
                $("#advisory").css("font-size","50px");
                return;
            }
        }); 
        $("#thirdCrystal").on("click", function() {
            var crystalValue3 = purpleCrystal.attr("randomCrystalValue");
            crystalValue3 = parseInt(crystalValue3);
            crystalsTotal += crystalValue3;
            console.log(crystalsTotal);
            $("#crystalCounter").text(crystalsTotal);
            if (crystalsTotal == targetNumber) {
                winsCounter++;
                $("#winsCounter").text(winsCounter);
                $("#advisory").text("YOU WIN!!!");
                $("#advisory").css("font-size","50px");
                return;
              }
            else if (crystalsTotal > targetNumber) {
                $("#advisory").text("YOU LOSE!!!");
                $("#advisory").css("font-size","50px");
                return;
            }
        }); 
        $("#fourthCrystal").on("click", function() {
            var crystalValue4 = redCrystal.attr("randomCrystalValue");
            crystalValue4 = parseInt(crystalValue4);
            crystalsTotal += crystalValue4;
            console.log(crystalsTotal);
            $("#crystalCounter").text(crystalsTotal);
            if (crystalsTotal == targetNumber) {
                winsCounter++;
                $("#winsCounter").text(winsCounter);
                $("#advisory").text("YOU WIN!!!");
                $("#advisory").css("font-size","50px");
                return;
              }
            else if (crystalsTotal > targetNumber) {
                $("#advisory").text("YOU LOSE!!!");
                $("#advisory").css("font-size","50px");
                return;
            }
        }); 
        
}); 

        