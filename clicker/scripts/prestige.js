let prestigecnf = 0



function prestigecheck() {
    if (cats[2] > 0) {
        document.getElementById("prestigeholder").classList = "prestige"
    } else {
        document.getElementById("prestigeholder").classList = "prestige hidden"
    }
}

// var element = document.getElementById('prestigebutton');

// function prestige() {
//     console.log("This button doesnt do anything yet!")
// }

// element.addEventListener('click', prestige);


function prestigeLevel(yarn) {
    let yarnamt = 0
    let level = 0
    let remaining = 0
    let coeff = 1.05
    let currentlevel = 0
    while (yarnamt <= yarn) {
        yarnamt = yarnamt + ((coeff ** level) * 1000000)
        if (coeff > 1.005) {
            coeff = coeff - 0.0001
        }
        if (yarnamt <= yarn) {
            level = level + 1
            currentlevel = yarnamt
        }
    }
    remaining = yarnamt - yarn
    return [level, remaining, currentlevel]
}

var prs = document.getElementById('prestigebutton');


function doPrestige() {
    prestigecnf = 1
    document.getElementById('confirmprestige').classList = "prestigebutton"
}

prs.addEventListener('click', doPrestige);

var prscnf = document.getElementById('confirmprestige')

function confirmPrestige() {
    if (prestigecnf == 1) {
        document.getElementById('confirmprestige').classList = "prestigebutton hidden"
        prestigecnf = 0
        console.log("nothing happened, because this doesnt work yet")
    }
}

prscnf.addEventListener('click', confirmPrestige)
