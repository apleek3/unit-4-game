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
    console.log("ready!");
});


