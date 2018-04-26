//Math random function allows the script to select a random number
//Adding some simple maths would changes the parameters from 0 -1 to 0-6


function dice_change(){
    n = Math.floor((Math.random()*6) + 1);
    change_diceface(n);
}

//Change

function change_diceface(n){
  document.getElementById('dice1').src="images/inverted-dice-" + n + ".svg";
}
