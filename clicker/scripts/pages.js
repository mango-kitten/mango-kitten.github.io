let resetconfirmval = 0



let fishbone = document.getElementById("realfishbone")
fishbone.addEventListener('click', function () {
    achstore = `${achstore.substring(0, 6)}1${achstore.substring(7)}`
    game.achievements[46] = 1
})



function homepage() {
    document.getElementById("mainpage").classList = "mainpage"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
    resetconfirmval = 0
}

function prestigepage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
    resetconfirmval = 0
}

function adoptpage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
    resetconfirmval = 0
}

function catapage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
    resetconfirmval = 0
}

function changepage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
    resetconfirmval = 0
}

function tutorial() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
    resetconfirmval = 0
}

function achievementpage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("resetpage").classList = "resetpage hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("achievementpage").classList = "achievementpage"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
    resetconfirmval = 0
}


function resetconfirm() {
    if (resetconfirmval == 1) {
        dolor = 0;
        localStorage.setItem("money", 0);
        mpc = 1;
        // localStorage.setItem("mpc", 1);
        bought = [0, 0, 0, 0];
        localStorage.setItem("bought", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        cats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        catgot1 = 0
        localStorage.setItem("cats", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        cps = 0
        // localStorage.setItem("cps", 0)
        prestigelevel = 0
        localStorage.setItem("prestige", 0)
        totalmade = 0
        localStorage.setItem("total", 0)
        catgot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        localStorage.setItem("catgot",[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

        achstore = "0000000"
        localStorage.setItem("achstore", achstore)
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
    
        localStorage.setItem("json", JSON.stringify(game))

        document.getElementById("moneydisp").innerHTML = `Yarn: ${String(game.yarn)}`
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click: ${String(game.totalyarn)}`
        updatetext();
        updatebutton();
        updateCatalogue();
        resetconfirmval = 0
        window.location.reload();
    }
}

function resetstorage() {
    resetconfirmval = 1
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
    document.getElementById("tutorial").classList = "tutorialpage hidden"
    document.getElementById("resetpage").classList = "resetpage"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
    document.getElementById("saveexp").classList = "saveexp hidden"
    document.getElementById("saveimp").classList = "saveexp hidden"
}
