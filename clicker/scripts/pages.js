let resetconfirmval = 0



let fishbone = document.getElementById("realfishbone")
fishbone.addEventListener('click', function () {
    achstore = `${achstore.substring(0, 6)}1${achstore.substring(7)}`
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
        document.getElementById("moneydisp").innerHTML = `Yarn: ${String(dolor)}`
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click: ${String(mpc)}`
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
    document.getElementById("offlinepage").classList = "offlinescreen hidden"
}
