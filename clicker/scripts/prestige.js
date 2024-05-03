function prestigecheck() {
    if (cats[2] > 0) {
        document.getElementById("prestigeholder").classList = "prestige"
    } else {
        document.getElementById("prestigeholder").classList = "prestige hidden"
    }
}

var element = document.getElementById('prestigebutton');

function prestige() {
    console.log("This button doesnt do anything yet!")
}

element.addEventListener('click', prestige);
