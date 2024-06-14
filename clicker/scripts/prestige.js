let prestigecnf = 0

let prepres = 0

function prestigecheck() {
    if (game.cats[2] > 0 || game.fishbones > 0) {
        document.getElementById("prestigemenu").classList = "menubutton"
    } else {
        document.getElementById("prestigemenu").classList = "menubutton hidden"
    }
}

// var element = document.getElementById('prestigebutton');

// function prestige() {
//     console.log("This button doesnt do anything yet!")
// }

// element.addEventListener('click', prestige);


function prestigeLevel(yarn) {
    let yarnamt = 0
    let level = lastprestigelevel
    let remaining = 0
    let currentlevel = 0
    currentlevel = invPrestige(level-1)
    while (yarnamt <= yarn) {
        yarnamt = invPrestige(level)
        // if (level < 450) {
        //     yarnamt = ((1.05-(0.00005*level))**level)+(level-1)
        // } else {
        //     yarnamt = level*((3*level)-900)
        // }
        // yarnamt = yarnamt * 1000000
        if (yarnamt <= yarn) {
            level = level + 1
            currentlevel = yarnamt
        }
    }
    remaining = Number(yarnamt) - Number(yarn)
    lastprestigelevel = level
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
    return Math.round(yarnamt)
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
        prepres = game.fishbones
        document.getElementById('confirmprestige').classList = "hidden"
        prestigecnf = 0
        // console.log("nothing happened, because this doesnt work yet")
        game.fishbones = prestigeLevel(totalmade)[0]
        // dolor = 0;
        game.yarn = 0
        game.catnip = 0
        // localStorage.setItem("money", 0);
        // mpc = 1;
        // bought = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        console.log("made it here")
        i = 0
        while (i < game.bought.length) {
            game.bought[i] = 0
            i = i+1
        }
        // localStorage.setItem("bought", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        cats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        i = 0
        while (i < game.cats.length) {
            game.cats[i] = 0
            i = i+1
        }
        catgot1 = 0
        catgot2 = 0
        catgot3 = 0
        catgot4 = 0
        catgot5 = 0
        // localStorage.setItem("cats", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        // cps = 0
        // localStorage.setItem("cps", 0)
        localStorage.setItem("json", game)
        document.getElementById("moneydisp").innerHTML = `Yarn: ${String(game.yarn)}`
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click: 1`
        if (prepres == game.fishbones) {
            achstore = `${achstore.substring(0, 3)}1${achstore.substring(4)}`
            game.achievements[43] = 1
        }
        updatetext();
        updatebutton();
        updateCatalogue();
        // localsave();
    }
}

prscnf.addEventListener('click', confirmPrestige)
