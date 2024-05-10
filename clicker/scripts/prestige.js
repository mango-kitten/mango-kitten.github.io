let prestigecnf = 0



function prestigecheck() {
    if (cats[2] > 0 || prestigelevel > 0) {
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
    let coeff = 1.02
    let currentlevel = 0
    while (yarnamt <= yarn) {
        yarnamt = yarnamt + ((coeff ** level) * 1000000)
        if (coeff > 1.001) {
            coeff = coeff - 0.00001
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
    document.getElementById('confirmprestige').classList = ""
}

prs.addEventListener('click', doPrestige);

var prscnf = document.getElementById('confirmprestige')

function confirmPrestige() {
    if (prestigecnf == 1) {
        document.getElementById('confirmprestige').classList = "hidden"
        prestigecnf = 0
        // console.log("nothing happened, because this doesnt work yet")
        prestigelevel = prestigeLevel(totalmade)[0]
        dolor = 0;
        localStorage.setItem("money", 0);
        mpc = 1;
        bought = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        localStorage.setItem("bought", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        cats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        catgot1 = 0
        catgot2 = 0
        catgot3 = 0
        catgot4 = 0
        localStorage.setItem("cats", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        cps = 0
        // localStorage.setItem("cps", 0)
        document.getElementById("moneydisp").innerHTML = `Yarn: ${String(dolor)}`
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click: ${String(mpc)}`
        updatetext();
        updatebutton();
        updateCatalogue();
        // localsave();
    }
}

prscnf.addEventListener('click', confirmPrestige)
