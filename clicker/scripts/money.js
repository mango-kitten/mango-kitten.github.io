var element = document.getElementById('moneybutton');

function money() {
    dolor = dolor + (mpc * prestigelevel)
    totalmade = totalmade + (mpc * prestigelevel)
    document.getElementById("moneydisp").innerHTML = `Yarn: ${parseCommas(dolor)}`
}

element.addEventListener('click', money);
