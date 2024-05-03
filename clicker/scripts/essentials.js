function updatetext() {
    if (isNaN(dolor)) {
        console.log("dolor = NaN")
        resetstorage();
        dolor = 0;
    }
    if (isNaN(mpc)) {
        console.log("mpc = NaN")
        resetstorage();
        mpc = 1;
    }
    document.getElementById("moneydisp").innerHTML = `Yarn: ${parseCommas(dolor)}`
    document.getElementById("mpcdisp").innerHTML = `Yarn per Click ${parseCommas(mpc)}`
    // document.getElementById("cat1").innerHTML = `Buy a Cat $2000 (${String(bought[0])}/1)`
    document.getElementById("mpc1").innerHTML = `Increase mpc $50 (${String(bought[1])}/6)`
    document.getElementById("mpc2").innerHTML = `Mpc lv2 $1000 (${String(bought[2])}/8)`
    document.getElementById("mpc3").innerHTML = `Mpc lv3 $10000 (${String(bought[3])}/8)`
    document.getElementById("cpsdisp").innerHTML = `Clicks per Second: ${String(cps)}`
    if (bought[4]) {
        document.getElementById("mpc4").innerHTML = `Mpc lv4 $100000 (${String(bought[4])}/10)`
    } else {
        document.getElementById("mpc4").innerHTML = `Mpc lv4 $100000 (0/10)`
    }
    if (cats[0] == 0) {
        document.getElementById("catown1").innerHTML = "You have no cat in slot 1"
    } else {
        document.getElementById("catown1").innerHTML = `You have a ${String(ctname[cats[0]])} Cat (+${String(mpcadd[cats[0]])} mpc)`
    }
    if (cats[1] == 0) {
        document.getElementById("catown2").innerHTML = "You have no cat in slot 2"
    } else {
        document.getElementById("catown2").innerHTML = `You have a ${String(ctname[cats[1]])} Cat (+${String(mpcadd[cats[1]])} mpc)`
    }
    if (cats[2] == 0) {
        document.getElementById("catown3").innerHTML = "You have no cat in slot 3"
    } else {
        document.getElementById("catown3").innerHTML = `You have a ${String(ctname[cats[2]])} Cat (+${String(mpcadd[cats[2]])} mpc\n+${String(catcps[cats[2]])} cps)`
        if (cps == 0) {
            console.log("Updating cps...")
            cps = catcps[cats[2]]
        }
    }
    if (cats[3] == 0) {
        document.getElementById("catown4").innerHTML = "You have no cat in slot 4"
    } else {
        document.getElementById("catown4").innerHTML = `You have a ${String(ctname[cats[3]])} Cat (+${String(mpcadd[cats[3]])} mpc\n+${String(catcps[cats[3]])} cps)`
        if (cps == 0) {
            console.log("Updating cps...")
            cps = catcps[cats[3]]
        }
    }
}


function updatebutton() {
    if (mpc < 50) {
        document.getElementById("yarnred").classList = ""
        document.getElementById("yarngreen").classList = "hidden"
        document.getElementById("yarnblue").classList = "hidden"
        document.getElementById("yarngray").classList = "hidden"
        document.getElementById("yarnorange").classList = "hidden"
    } else if (mpc < 200) {
        document.getElementById("yarnred").classList = "hidden"
        document.getElementById("yarngreen").classList = ""
        document.getElementById("yarnblue").classList = "hidden"
        document.getElementById("yarngray").classList = "hidden"
        document.getElementById("yarnorange").classList = "hidden"
    } else if (mpc < 2000) {
        document.getElementById("yarnred").classList = "hidden"
        document.getElementById("yarngreen").classList = "hidden"
        document.getElementById("yarnblue").classList = ""
        document.getElementById("yarngray").classList = "hidden"
        document.getElementById("yarnorange").classList = "hidden"
    } else if (mpc < 15000) {
        document.getElementById("yarnred").classList = "hidden"
        document.getElementById("yarngreen").classList = "hidden"
        document.getElementById("yarnblue").classList = "hidden"
        document.getElementById("yarngray").classList = ""
        document.getElementById("yarnorange").classList = "hidden"
    } else if (mpc < 50000) {
        document.getElementById("yarnred").classList = "hidden"
        document.getElementById("yarngreen").classList = "hidden"
        document.getElementById("yarnblue").classList = "hidden"
        document.getElementById("yarngray").classList = "hidden"
        document.getElementById("yarnorange").classList = ""
    }

    if (cps > 0) {
        document.getElementById("cpsdisp").classList = ""
    } else {
        document.getElementById("cpsdisp").classList = "hidden"
    }
}



function parseCommas(input) {
    let inputstr = String(input)
    let stringlength = String(input).length
    let output = ""
    let stringiter = 0
    let num = 0
    if (stringlength % 3 == 0){
        stringiter = stringlength/3
        for (let i=0;i<stringiter;i++) {
            if (output == "") {
                output = inputstr.substring(0, 3)
            } else {
                num = i*3
                output = output+ "," + inputstr.substring(num, num+3)
            }
        }
    } else if (stringlength % 3 == 1) {
        stringiter = (stringlength+2)/3
        for (let i=0;i<stringiter;i++) {
            if (output == "") {
                output = inputstr.substring(0, 1)
            } else {
                num = i*3
                output = output+ "," + inputstr.substring(num-2, num+1)
            }
        }
    } else if (stringlength % 3 == 2) {
        stringiter = (stringlength+1)/3
        for (let i=0;i<stringiter;i++) {
            if (output == "") {
                output = inputstr.substring(0, 2)
            } else {
                num = i*3
                output = output+ "," + inputstr.substring(num-1, num+2)
            }
        }
    }
    return output
}



function fastTickUpdate() {
    document.getElementById("totalyarntext").innerHTML = `You have made ${parseCommas(totalmade)} yarn ever`
}




function devReset() {
  inDevReset = 1
  console.log("Are you sure? This will completely wipe your save, with no hope of ever recovering it. It will be as if you have never opened this site. Run devResetConfirm() to confirm this action.")
}

function devResetConfirm() {
  if (inDevReset == 1) {
    localStorage.removeItem("money")
    localStorage.removeItem("mpc")
    localStorage.removeItem("bought")
    localStorage.removeItem("cats")
    localStorage.removeItem("cps")
    localStorage.removeItem("prestige")
    localStorage.removeItem("total")
    window.location.reload();
  } else {
    console.log("You are not in dev-reset mode.")
  }
}

function toggleChangelog() {
    if (changelogtoggle == 0) {
        document.getElementById("changelog").classList = "changelog"
        changelogtoggle = 1
    } else {
        document.getElementById("changelog").classList = "changelog hidden"
        changelogtoggle = 0
    }
}
