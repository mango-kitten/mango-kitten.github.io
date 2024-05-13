let prestigecnf = 0



function prestigecheck() {
    if (cats[2] > 0 || prestigelevel > 0) {
        document.getElementById("prestigebutton").classList = "menubutton"
    } else {
        document.getElementById("prestigebutton").classList = "menubutton hidden"
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
    let currentlevel = 0
    while (yarnamt <= yarn) {
        // yarnamt = yarnamt + ((coeff ** level) * 1000000)
        // if (coeff > 1.0025) {
        //     coeff = coeff - 0.000005
        // }
        if (level < 450) {
            yarnamt = ((1.05-(0.00005*level))**level)+(level-1)
        } else {
            yarnamt = level*((3*level)-900)
        }
        yarnamt = yarnamt * 1000000
        if (yarnamt <= yarn) {
            level = level + 1
            currentlevel = yarnamt
        }
    }
    remaining = yarnamt - yarn
    return [level, remaining, currentlevel]
}

function invPrestige(level) {
    let yarnamt = 0
    if (level < 450) {
        yarnamt = ((1.05-(0.00005*level))**level)+(level-1)
    } else {
        yarnamt = level*((3*level)-900)
    }
    yarnamt = yarnamt * 1000000
    return parseCommas(Math.round(yarnamt))
}



var prs = document.getElementById('prestigebutton');


function doPrestige() {
    if (prestigecnf == 0) {
        prestigecnf = 1
        document.getElementById('confirmprestige').classList = ""
    } else {
        prestigecnf = 0
        document.getElementById('confirmprestige').classList = "hidden"
    }
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
        catgot5 = 0
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
