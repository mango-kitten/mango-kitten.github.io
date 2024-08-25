
// HEY YOU
// YEAH YOU
// GET OUTTA HERE IF YOU WANNA PLAY THE GAME LEGIT


// if you dont want to then go ahead and run game.katkoin = 10000000000
// waow you have EVERYTHING

// but if you DO wanna play it legit, then leave this file immediately!
// i was gonna obufscuate this entire thing but to be honest its not worth the effort


// sooooooooooo this is your last chance to GET OUTTA HERE


let allcodes = []
let codeinput = document.getElementById("codeinput")

function newCode(uid, codestr, rewardtype, rewardamount, reward2type, reward2amount, reward3type, reward3amount, reward4type, reward4amount) {
    this.uid = uid
    this.codestr = codestr
    this.rewardtype = rewardtype
    this.rewardamount = rewardamount

    this.reward2type = reward2type
    this.reward2amount = reward2amount

    this.reward3type = reward3type
    this.reward3amount = reward3amount

    this.reward4type = reward4type
    this.reward4amount = reward4amount

    allcodes.push(this)
}

function openCode() {
    codeinput.value = ""
    document.getElementById("codesupercontainer").style.display = "block"
    document.getElementById("pullgrey").style.display = "block"
}

function confirmCode() {
    let coderesult = 0
    for (let i=0; i<allcodes.length; i++) {
        if (allcodes[i].codestr == codeinput.value) {
            coderesult = allcodes[i]
        }
    }
    if (coderesult == 0) {
        let errormessage = document.getElementById("errormessage")
        errormessage.style.opacity = "0.7"
        errormessage.innerHTML = `Code ${codeinput.value} is not valid.`
        setTimeout(function () {
            errormessage.style.opacity = "0"
        }, 3000)
    } else if (eval(`game.${codeinput.value}`) == 1) {
        let errormessage = document.getElementById("errormessage")
        errormessage.style.opacity = "0.7"
        errormessage.innerHTML = `Code ${codeinput.value} has already been redeemed.`
        setTimeout(function () {
            errormessage.style.opacity = "0"
        }, 3000)
    } else if (coderesult.uid != 0 && coderesult.uid != game.uid) {
        let errormessage = document.getElementById("errormessage")
        errormessage.style.opacity = "0.7"
        errormessage.innerHTML = `Code ${codeinput.value} cannot be redeemed by you!`
        setTimeout(function () {
            errormessage.style.opacity = "0"
        }, 3000)
    } else {
        eval(`game.${codeinput.value} = 1`)
        
        if (coderesult.rewardtype == 1) {
            game.katkoin = game.katkoin + coderesult.rewardamount
            throwKatKoin(coderesult.rewardamount, 1)
        } else if (coderesult.rewardtype == 2) {
            game.katvouchers = game.katvouchers + coderesult.rewardamount
            throwKatVoucher(coderesult.rewardamount, 1)
        } else if (coderesult.rewardtype == 3) {
            game.pixels = game.pixels + coderesult.rewardamount
            throwPixel(coderesult.rewardamount, 1)
        } else {
            getSpecial(coderesult.rewardamount)
        }



        if (coderesult.reward2type == 0) {
        } else if (coderesult.reward2type == 1) {
            game.katkoin = game.katkoin + coderesult.reward2amount
            throwKatKoin(coderesult.reward2amount, 1)
        } else if (coderesult.reward2type == 2) {
            game.katvouchers = game.katvouchers + coderesult.reward2amount
            throwKatVoucher(coderesult.reward2amount, 1)
        } else if (coderesult.reward2type == 3) {
            game.pixels = game.pixels + coderesult.reward2amount
            throwPixel(coderesult.reward2amount, 1)
        } else {
            getSpecial(coderesult.reward2amount)
        }

        if (coderesult.reward3type == 0) {
        } else if (coderesult.reward3type == 1) {
            game.katkoin = game.katkoin + coderesult.reward3amount
            throwKatKoin(coderesult.reward3amount, 1)
        } else if (coderesult.reward3type == 2) {
            game.katvouchers = game.katvouchers + coderesult.reward3amount
            throwKatVoucher(coderesult.reward3amount, 1)
        } else if (coderesult.reward2type == 3) {
            game.pixels = game.pixels + coderesult.reward3amount
            throwPixel(coderesult.reward3amount, 1)
        } else {
            getSpecial(coderesult.reward3amount)
        }

        if (coderesult.reward4type == 0) {
        } else if (coderesult.reward4type == 1) {
            game.katkoin = game.katkoin + coderesult.reward4amount
            throwKatKoin(coderesult.reward4amount, 1)
        } else if (coderesult.reward4type == 2) {
            game.katvouchers = game.katvouchers + coderesult.reward4amount
            throwKatVoucher(coderesult.reward4amount, 1)
        } else if (coderesult.reward4type == 3) {
            game.pixels = game.pixels + coderesult.reward4amount
            throwPixel(coderesult.reward4amount, 1)
        } else {
            getSpecial(coderesult.reward4amount)
        }
    }
    document.getElementById("codesupercontainer").style.display = "none"
    document.getElementById("pullgrey").style.display = "none"
}


function loadCodeJSON() {
    for (let i=0; i<allcodes.length; i++) {
        if (eval(`game.${allcodes[i].codestr}`)) {

        } else {
            eval(`game.${allcodes[i].codestr} = 0`)
        }
    }
}

// worth a shot.
const releasecode = new newCode(0, "XUiuwvRGrLqgZcCxJUFD", 1, 3000, "Alpha Release Supporter", "alphasupporter", 2, 20, 0, 0)
const release2code = new newCode(0, "RELEASEGIFTYAY", 1, 5000, 2, 10, "Royal Mango", "royalmangocat", 0, 0)
const extracode = new newCode(0, "cxCpgTcKfTffRJAohXTq", 1, 10000, 2, 100, 0, 0, 0, 0)
const aquagift = new newCode(145467523, "AQUAGIFT", 1, 500, 0, 0, 0, 0, 0, 0)
const muffingift = new newCode(545874937, "MUFFINGIFT", 1, 500, 0, 0, 0, 0, 0, 0)
const goobgift = new newCode(582227009, "GOOBGIFT", 1, 500, 0, 0, 0, 0, 0, 0)

// ██████████▀▀▀▀▀▀▀▀▀▀▀▀▀██████████
// █████▀▀░░░░░░░░░░░░░░░░░░░▀▀█████
// ███▀░░░░░░░░░░░░░░░░░░░░░░░░░▀███
// ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██
// █░░░░░░▄▄▄▄▄▄░░░░░░░░▄▄▄▄▄▄░░░░░█
// █░░░▄██▀░░░▀██░░░░░░██▀░░░▀██▄░░█
// █░░░██▄░░▀░░▄█░░░░░░█▄░░▀░░▄██░░█
// ██░░░▀▀█▄▄▄██░░░██░░░██▄▄▄█▀▀░░██
// ███░░░░░░▄▄▀░░░████░░░▀▄▄░░░░░███
// ██░░░░░█▄░░░░░░▀▀▀▀░░░░░░░█▄░░░██
// ██░░░▀▀█░█▀▄▄▄▄▄▄▄▄▄▄▄▄▄▀██▀▀░░██
// ███░░░░░▀█▄░░█░░█░░░█░░█▄▀░░░░███
// ████▄░░░░░░▀▀█▄▄█▄▄▄█▄▀▀░░░░▄████
// ███████▄▄▄▄░░░░░░░░░░░░▄▄▄███████

// (if youre here im not sorry btw you deserve it)
