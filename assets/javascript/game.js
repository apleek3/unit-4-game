// A $( document ).ready() block for starting to do things on load
$(document).ready(function () {
    var targetNumber = Math.round((Math.random()*((120-19))+19));
    var crystalsTotal = 0;
    
    var crystals = []
    while(crystals.length < 4) {
        var randomCrystal = Math.round((Math.random()*(12-1)) + 1);
        if (crystals.indexOf(randomCrystal) > -1) 
        continue;
        crystals[crystals.length] = randomCrystal;
    }

    console.log(targetNumber);
    console.log(crystalsTotal);
    console.log(crystals);

    $('#firstCrystal').prepend('<img id="green" class="img-thumbnail crystal-img" src="./assets/images/green.png" />')
    $('#secondCrystal').prepend('<img id="topaz" class="img-thumbnail crystal-img" src="./assets/images/topaz.png" />')
    $('#thirdCrystal').prepend('<img id="purple" class="img-thumbnail crystal-img" src="./assets/images/purple.png" />')
    $('#fourthCrystal').prepend('<img id="red" class="img-thumbnail crystal-img" src="./assets/images/red.png" />')

    var greenCrystal = $("#firstCrystal");
    var topazCrystal = $("#secondCrystal");
    var purpleCrystal = $("#thirdCrystal");
    var redCrystal = $("fourthCrystal");

    greenCrystal.attr("randomCrystalValue", crystals[0]);
    topazCrystal.attr("randomCrystalValue", crystals[1]);
    purpleCrystal.attr("randomCrystalValue", crystals[2]);
    redCrystal.attr("randomCrystalValue", crystals[3]);


});


$(".crystal-img").on("click", function() {


});