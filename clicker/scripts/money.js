var element = document.getElementById('moneybutton');

function money() {
    dolor = dolor + ((mpc)*manualclick)
    totalmade = totalmade + ((mpc)*manualclick)
    document.getElementById("moneydisp").innerHTML = `Yarn: ${parseCommas(Number(dolor))}`
}

element.addEventListener('click', function () {
    money()
    manualclicks = manualclicks + 1
    if (manualclicks >= 1000) {
        achstore = `${achstore.substring(0, 4)}1${achstore.substring(5)}`
    }
});

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
