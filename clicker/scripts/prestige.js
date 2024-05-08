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


function prestigeLevel(yarn) {
    let yarnamt = 0
    let level = 0
    let remaining = 0
    let coeff = 1.05
    while (yarnamt <= yarn) {
        yarnamt = yarnamt + ((coeff ** level) * 1000000)
        if (coeff > 1.005) {
            coeff = coeff - 0.00002
        }
        if (yarnamt <= yarn) {
            level = level + 1
        }
    }
    yarnamt = yarnamt + ((coeff ** level) * 1000000)
    remaining = yarnamt - yarn
    return [level, remaining]
}
