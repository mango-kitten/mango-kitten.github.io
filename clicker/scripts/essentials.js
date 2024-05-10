let tickLevel = 0
let tickRemain = 0


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
    if (prestigeMulti == 1) {
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click ${parseCommas(mpc)}`
    } else {
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click ${parseCommas(mpc/prestigeMulti)} x ${prestigeMulti}`
    }
    document.getElementById("mpc1").innerHTML = `Increase ypc $50 (${String(bought[1])}/3)`
    document.getElementById("mpc2").innerHTML = `Ypc lv2 $1000 (${String(bought[2])}/8)`
    document.getElementById("mpc3").innerHTML = `Ypc lv3 $10000 (${String(bought[3])}/8)`

    if (prestigeCps == 0) {
        document.getElementById("cpsdisp").innerHTML = `Clicks per Second: ${String(cps)}`
    } else {
        document.getElementById("cpsdisp").innerHTML = `Clicks per Second: ${String(cps-prestigeCps)} + ${prestigeCps}`
    }


    if (bought[4]) {
        document.getElementById("mpc4").innerHTML = `Ypc lv4 $100000 (${String(bought[4])}/10)`
    } else {
        document.getElementById("mpc4").innerHTML = `Ypc lv4 $100000 (0/10)`
    }
    if (cats[0] == 0) {
        document.getElementById("catown1").innerHTML = "You have no cat in slot 1"
    } else {
        if (strayMulti == 1) {
            document.getElementById("catown1").innerHTML = `You have a ${String(ctname[cats[0]])} Cat <br>+${String(mpcadd[cats[0]])} ypc`
        } else {
            document.getElementById("catown1").innerHTML = `You have a ${String(ctname[cats[0]])} Cat <br>+${String(mpcadd[cats[0]])} x ${strayMulti} ypc`
        }
    }
    if (cats[1] == 0) {
        document.getElementById("catown2").innerHTML = "You have no cat in slot 2"
    } else {
        if (magicMulti == 1) {
            document.getElementById("catown2").innerHTML = `You have a ${String(ctname[cats[1]])} Cat <br>+${String(mpcadd[cats[1]])} ypc`
        } else {
            document.getElementById("catown2").innerHTML = `You have a ${String(ctname[cats[1]])} Cat <br>+${String(mpcadd[cats[1]])} x ${magicMulti} ypc`
        }
    }
    if (cats[2] == 0) {
        document.getElementById("catown3").innerHTML = "You have no cat in slot 3"
    } else {
        if (fruitMulti == 1) {
            document.getElementById("catown3").innerHTML = `You have a ${String(ctname[cats[2]])} Cat <br>+${String(mpcadd[cats[2]])} ypc<br>+${String(catcps[cats[2]])} cps`
        } else {
            document.getElementById("catown3").innerHTML = `You have a ${String(ctname[cats[2]])} Cat <br>+${String(mpcadd[cats[2]])} x ${fruitMulti} ypc<br>+${String(catcps[cats[2]])} x ${fruitMulti} cps`
        }
        if (cps == 0) {
            console.log("Updating cps...")
            cps = catcps[cats[2]]
        }
    }
    if (cats[3] == 0) {
        document.getElementById("catown4").innerHTML = "You have no cat in slot 4"
    } else {
        if (programMulti == 1) {
            document.getElementById("catown4").innerHTML = `You have a ${String(ctname[cats[3]])} Cat <br>+${String(mpcadd[cats[3]])} ypc<br>+${String(catcps[cats[3]])} cps`
        } else {
            document.getElementById("catown4").innerHTML = `You have a ${String(ctname[cats[3]])} Cat <br>+${String(mpcadd[cats[3]])} x ${programMulti} ypc<br>+${String(catcps[cats[3]])} x ${programMulti} cps`
        }
        if (cps == 0) {
            console.log("Updating cps...")
            cps = catcps[cats[3]]
        }
    }
    if (cats[4] == 0) {
        document.getElementById("catown5").innerHTML = "You have no cat in slot 5"
    } else {
        if (planetMulti == 1) {
            document.getElementById("catown5").innerHTML = `You have a ${String(ctname[cats[4]])} Cat <br>+${String(mpcadd[cats[4]])} ypc<br>+${String(catcps[cats[4]])} cps`
        } else {
            document.getElementById("catown5").innerHTML = `You have a ${String(ctname[cats[4]])} Cat <br>+${String(mpcadd[cats[4]])} x ${planetMulti} ypc<br>+${String(catcps[cats[4]])} x ${planetMulti} cps`
        }
        if (cps == 0) {
            console.log("Updating cps...")
            cps = catcps[cats[4]]
        }
    }
}


function updatebutton() {
    if (mpc < 50) {
        document.getElementById("yarnred").classList = "moneybutton"
        document.getElementById("yarngreen").classList = "hidden moneybutton"
        document.getElementById("yarnblue").classList = "hidden moneybutton"
        document.getElementById("yarngray").classList = "hidden moneybutton"
        document.getElementById("yarnorange").classList = "hidden moneybutton"
    } else if (mpc < 200) {
        document.getElementById("yarnred").classList = "hidden moneybutton"
        document.getElementById("yarngreen").classList = "moneybutton"
        document.getElementById("yarnblue").classList = "hidden moneybutton"
        document.getElementById("yarngray").classList = "hidden moneybutton"
        document.getElementById("yarnorange").classList = "hidden moneybutton"
    } else if (mpc < 2000) {
        document.getElementById("yarnred").classList = "hidden moneybutton"
        document.getElementById("yarngreen").classList = "hidden moneybutton"
        document.getElementById("yarnblue").classList = "moneybutton"
        document.getElementById("yarngray").classList = "hidden moneybutton"
        document.getElementById("yarnorange").classList = "hidden moneybutton"
    } else if (mpc < 15000) {
        document.getElementById("yarnred").classList = "hidden moneybutton"
        document.getElementById("yarngreen").classList = "hidden moneybutton"
        document.getElementById("yarnblue").classList = "hidden moneybutton"
        document.getElementById("yarngray").classList = "moneybutton"
        document.getElementById("yarnorange").classList = "hidden moneybutton"
    } else {
        document.getElementById("yarnred").classList = "hidden moneybutton"
        document.getElementById("yarngreen").classList = "hidden moneybutton"
        document.getElementById("yarnblue").classList = "hidden moneybutton"
        document.getElementById("yarngray").classList = "hidden moneybutton"
        document.getElementById("yarnorange").classList = "moneybutton"
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
    if (String(input).includes("e") || String(input).includes("Infinity")) {
        output = input
    } else {
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
    }
    return output
}



function fastTickUpdate() {
    document.getElementById("totalyarntext").innerHTML = `You have made ${parseCommas(totalmade)} yarn ever`
    tickLevel = prestigeLevel(totalmade)[0]
    tickRemain = Math.floor(prestigeLevel(totalmade)[1])
    tickMax = Math.floor(prestigeLevel(totalmade)[2])
    document.getElementById("prestigecurrent").innerHTML = `You are prestige level ${prestigelevel}`
    document.getElementById("prestigelevel").innerHTML = `You will be prestige level ${tickLevel} (+${tickLevel-prestigelevel})<br>${parseCommas(tickRemain)} to next level`
    document.getElementById("prestigeprogress").value = ((totalmade-tickMax)/((totalmade+tickRemain)-tickMax))*1000
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
    localStorage.removeItem("catgot")
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

function updateCatalogue() {
    for (let i=0;i<catgot.length;i++) {
        if (catgot[i] > 0) {
            cataUnlock(i)
        } else {
            cataLock(i)
        }
    }
}


// function toStore(num) {
//     let numparse = []
//     let numlen = String(num).length
//     console.log(Math.ceil(numlen/15))
//     let res = ""
//     for (let i=0;i<Math.ceil(numlen/15);i++) {
//         numparse.push(String(num).substring(i*15, (i*15)+14))
//         console.log(numparse)
//     }
//     for (let i=0;i<numparse.length;i++) {
//         res = res + Number(numparse[i]).toString(36)
//     }
//     return res
// }

// function fromStore(str) {
//     return parseInt(str, 36)
// }

function buildYpc() {
    let mpca = 1

    mpca = mpca + (mpcadd[cats[0]]*strayMulti)
    mpca = mpca + (mpcadd[cats[1]]*magicMulti)
    mpca = mpca + (mpcadd[cats[2]]*fruitMulti)
    mpca = mpca + (mpcadd[cats[3]]*programMulti)
    mpca = mpca + (mpcadd[cats[4]]*planetMulti)


    mpca = mpca + (1*bought[1])
    mpca = mpca + (2*bought[2])
    mpca = mpca + (10*bought[3])
    mpca = mpca + (100*bought[4])

    mpca = mpca * prestigeMulti
    return mpca
}

function buildCps() {
    let cpsa = 0
    
    cpsa = cpsa + (catcps[cats[2]]*fruitMulti)
    cpsa = cpsa + (catcps[cats[3]]*programMulti)
    cpsa = cpsa + (catcps[cats[4]]*planetMulti)


    cpsa = cpsa + prestigeCps

    return cpsa
}

function buildPrestige() {
    if (prestigelevel >= 2) {
        prestigeMulti = 2
    } else {
        prestigeMulti = 1
    }
    if (prestigelevel >= 4) {
        mpc5 = 1
    } else {
        mpc5 = 0
    }
    if (prestigelevel >= 10) {
        strayMulti = 9
    } else {
        strayMulti = 1
    }
    if (prestigelevel >= 20) {
        prestigeCps = 1
    } else {
        prestigeCps = 0
    }
    if (prestigelevel >= 50) {
        prestigeMulti = 4
    }
    if (prestigelevel >= 100) {
        magicMulti = 9
    } else {
        magicMulti = 1
    }
    if (prestigelevel >= 150) {
        prestigeMulti = 8
    }
    if (prestigelevel >= 200) {
        prestigeCps = 6
    }
    if (prestigelevel >= 300) {
        fruitMulti = 9
    } else {
        fruitMulti = 1
    }
    if (prestigelevel >= 400) {
        prestigeMulti = 16
    }
    if (prestigelevel >= 500) {
        strayMulti = 81
    }
    if (prestigelevel >= 550) {
        programMulti = 9
    }
    if (prestigelevel >= 600) {
        prestigeMulti = 32
    }
    if (prestigelevel >= 650) {
        magicMulti = 81
    }
    if (prestigelevel >= 700) {
        prestigeMulti = 64
    }
}
