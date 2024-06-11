let game = null;

let achtotal = 100
let boughttotal = 8
let catslots = 8
let cattotal = 50


game = JSON.parse(localStorage.getItem("json"))

if (game) {
    console.log("found json file")
} else {
    game = {
        yarn: 0,
        totalyarn: 0,
        fishbones: 0,
        cats: [
            0,
            0
        ],
        catgot: [
            0,
            0
        ],
        bought: [
            0,
            0
        ],
        achievements: [
            0,
            0
        ]
    }
}

if (game.cats.length < catslots) {
    while (game.cats.length < catslots) {
        game.cats.push(0)
    }
}
if (game.catgot.length < cattotal) {
    while (game.catgot.length < cattotal) {
        game.catgot.push(0)
    }
}
if (game.bought.length < boughttotal) {
    while (game.bought.length < boughttotal) {
        game.bought.push(0)
    }
}
if (game.achievements.length < achtotal) {
    while (game.achievements.length < achtotal) {
        game.achievements.push(0)
    }
}


console.log(game)


function exportsave() {
    var save = JSON.stringify(game)
    var saveenc = encrypt(save)
    document.getElementById("expbot").innerHTML = `${saveenc}`

    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp"
    document.getElementById("saveimp").classList = "saveexp hidden"
}

function importsave() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp"
}

function importconf() {
    var saveimport = decrypt(document.getElementById("impcode").value)
    try {
        var newsave = JSON.parse(saveimport)
        if (newsave.yarn && newsave.totalyarn && newsave.fishbones && newsave.cats && newsave.catgot && newsave.bought && newsave.achievements) {
            console.log("valid save input")
            game = newsave

            if (game.fishbones > prestigeLevel(game.totalyarn)[0]) {
                game.fishbones = prestigeLevel(game.totalyarn)[0]
            }
            buildPrestige()
            mpc = buildYpc()
            cps = buildCps()
            buildAch()
            achLoad()
            loader = 1


            document.getElementById("importconf").classList = "importconf importgood"
            setTimeout(function () {
                document.getElementById("importconf").classList = "importconf"
            }, 5000)
        } else {
            console.log("invalid save")
            document.getElementById("importconf").classList = "importconf importbad"
            setTimeout(function () {
                document.getElementById("importconf").classList = "importconf"
            }, 5000)
        }
    } catch (error) {
        console.log("invalid json")
        document.getElementById("importconf").classList = "importconf importbad"
        setTimeout(function () {
            document.getElementById("importconf").classList = "importconf"
        }, 5000)
    }
}
