var element = document.getElementById('moneybutton');

function money() {
    dolor = dolor + (mpc)
    totalmade = totalmade + (mpc)
    document.getElementById("moneydisp").innerHTML = `Yarn: ${parseCommas(dolor)}`
}

element.addEventListener('click', money);

window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });


document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
        e.preventDefault();
        console.log("spacebar pressed")
        money()
    }
  }
