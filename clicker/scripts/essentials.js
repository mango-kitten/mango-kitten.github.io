let tickLevel = 0
let tickRemain = 0


function updatetext() {
    document.getElementById("moneydisp").innerHTML = `Yarn: ${parseCommas(Number(game.yarn))}`
    if (prestigeMulti == 1) {
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click ${parseCommas(Number(mpc))}`
    } else {
        document.getElementById("mpcdisp").innerHTML = `Yarn per Click ${parseCommas(Number(mpc)/prestigeMulti)} x ${prestigeMulti}`
    }
    document.getElementById("mpc1").innerHTML = `Increase ypc ¥50 (${String(game.bought[1])}/3)`
    document.getElementById("mpc2").innerHTML = `Ypc lv2 ¥1000 (${String(game.bought[2])}/8)`
    document.getElementById("mpc3").innerHTML = `Ypc lv3 ¥10000 (${String(game.bought[3])}/8)`

    if (prestigeCps == 0) {
        document.getElementById("cpsdisp").innerHTML = `Clicks per Second: ${String(Number(cps))}`
    } else {
        document.getElementById("cpsdisp").innerHTML = `Clicks per Second: ${String(Number(cps)-Number(prestigeCps))} + ${prestigeCps}`
    }


    if (buybetter > 0) {
        document.getElementById("betc1").classList = "buybutton"
        document.getElementById("betc2").classList = "buybutton"
        document.getElementById("betc3").classList = "buybutton"
        document.getElementById("betc4").classList = "buybutton"
        document.getElementById("betc5").classList = "buybutton"
        document.getElementById("betc1").innerHTML = `Buy until better x${buybetter}`
        document.getElementById("betc2").innerHTML = `Buy until better x${buybetter}`
        document.getElementById("betc3").innerHTML = `Buy until better x${buybetter}`
        document.getElementById("betc4").innerHTML = `Buy until better x${buybetter}`
        document.getElementById("betc5").innerHTML = `Buy until better x${buybetter}`
    } else {
        document.getElementById("betc1").classList = "buybutton hidden"
        document.getElementById("betc2").classList = "buybutton hidden"
        document.getElementById("betc3").classList = "buybutton hidden"
        document.getElementById("betc4").classList = "buybutton hidden"
        document.getElementById("betc5").classList = "buybutton hidden"
    }


    if (bought[4]) {
        document.getElementById("mpc4").innerHTML = `Ypc lv4 ¥100000 (${String(game.bought[4])}/10)`
    } else {
        document.getElementById("mpc4").innerHTML = `Ypc lv4 ¥100000 (0/10)`
    }
    if (game.cats[0] == 0) {
        document.getElementById("catown1").innerHTML = "You have no cat in slot 1"
    } else {
        if (strayMulti == 1) {
            document.getElementById("catown1").innerHTML = `You have a ${String(ctname[game.cats[0]])} Cat <br>+${String(mpcadd[game.cats[0]])} ypc`
        } else {
            document.getElementById("catown1").innerHTML = `You have a ${String(ctname[game.cats[0]])} Cat <br>+${String(mpcadd[game.cats[0]])} x ${strayMulti} ypc`
        }
    }
    if (game.cats[1] == 0) {
        document.getElementById("catown2").innerHTML = "You have no cat in slot 2"
    } else {
        if (magicMulti == 1) {
            document.getElementById("catown2").innerHTML = `You have a ${String(ctname[game.cats[1]])} Cat <br>+${String(mpcadd[game.cats[1]])} ypc`
        } else {
            document.getElementById("catown2").innerHTML = `You have a ${String(ctname[game.cats[1]])} Cat <br>+${String(mpcadd[game.cats[1]])} x ${magicMulti} ypc`
        }
    }
    if (game.cats[2] == 0) {
        document.getElementById("catown3").innerHTML = "You have no cat in slot 3"
    } else {
        if (fruitMulti == 1) {
            document.getElementById("catown3").innerHTML = `You have a ${String(ctname[game.cats[2]])} Cat <br>+${String(mpcadd[game.cats[2]])} ypc<br>+${String(catcps[game.cats[2]])} cps`
        } else {
            document.getElementById("catown3").innerHTML = `You have a ${String(ctname[game.cats[2]])} Cat <br>+${String(mpcadd[game.cats[2]])} x ${fruitMulti} ypc<br>+${String(catcps[game.cats[2]])} x ${fruitMulti} cps`
        }
        if (cps == 0) {
            cps = catcps[game.cats[2]]
        }
    }
    if (game.cats[3] == 0) {
        document.getElementById("catown4").innerHTML = "You have no cat in slot 4"
    } else {
        if (programMulti == 1) {
            document.getElementById("catown4").innerHTML = `You have a ${String(ctname[game.cats[3]])} Cat <br>+${String(mpcadd[game.cats[3]])} ypc<br>+${String(catcps[game.cats[3]])} cps`
        } else {
            document.getElementById("catown4").innerHTML = `You have a ${String(ctname[game.cats[3]])} Cat <br>+${String(mpcadd[game.cats[3]])} x ${programMulti} ypc<br>+${String(catcps[game.cats[3]])} x ${programMulti} cps`
        }
        if (cps == 0) {
            cps = catcps[game.cats[3]]
        }
    }
    if (game.cats[4] == 0) {
        document.getElementById("catown5").innerHTML = "You have no cat in slot 5"
    } else {
        if (planetMulti == 1) {
            document.getElementById("catown5").innerHTML = `You have a ${String(ctname[game.cats[4]])} Cat <br>+${String(mpcadd[game.cats[4]])} ypc<br>+${String(catcps[game.cats[4]])} cps`
        } else {
            document.getElementById("catown5").innerHTML = `You have a ${String(ctname[game.cats[4]])} Cat <br>+${String(mpcadd[game.cats[4]])} x ${planetMulti} ypc<br>+${String(catcps[game.cats[4]])} x ${planetMulti} cps`
        }
        if (cps == 0) {
            cps = catcps[game.cats[4]]
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
    } else if (mpc < 500) {
        document.getElementById("yarnred").classList = "hidden moneybutton"
        document.getElementById("yarngreen").classList = "moneybutton"
        document.getElementById("yarnblue").classList = "hidden moneybutton"
        document.getElementById("yarngray").classList = "hidden moneybutton"
        document.getElementById("yarnorange").classList = "hidden moneybutton"
    } else if (mpc < 10000) {
        document.getElementById("yarnred").classList = "hidden moneybutton"
        document.getElementById("yarngreen").classList = "hidden moneybutton"
        document.getElementById("yarnblue").classList = "moneybutton"
        document.getElementById("yarngray").classList = "hidden moneybutton"
        document.getElementById("yarnorange").classList = "hidden moneybutton"
    } else if (mpc < 100000) {
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
    let eint = 0
    let stringlength = String(input).length
    let output = ""
    let stringiter = 0
    let num = 0
    let esplit = ""
    let erem = 0
    let iterate = 0
    if (String(input).includes("e")) {
        eint = Number(inputstr.split('+')[1]);
        if (eint % 3 == 0) {
            erem = 0
        } else if (eint % 3 == 1) {
            erem = 1
        } else if (eint % 3 == 2) {
            erem = 2
        }
        esplit = inputstr.split("e")[0]
        if (esplit.length == 1) {
            output = `${esplit}`
        } else if (esplit.length == 3) {
            if (erem == 0) {
                output = esplit
            } else if (erem == 1) {
                output = `${esplit}0`
            } else {
                output = `${esplit}00`
            }
        } else if (esplit.length == 4) {
            output = `${esplit}0`
        } else {
            output = esplit.substring(0, 5+erem)
        }

        if (erem == 1) {
            output = Number(output)*10
        } else if (erem == 2) {
            output = Number(output)*100
        }

        if (String(output).length < 4) {
            output = `${output}.000`
        } else {
            output = Math.floor(Number(output)*1000)/1000
        }


        if (eint < 24) {
            output = `${output} sextillion`
        } else if (eint < 27) {
            output = `${output} septillion`
        } else if (eint < 30) {
            output = `${output} octillion`
        } else if (eint < 33) {
            output = `${output} nonillion`
        } else if (eint < 36) {
            output = `${output} decillion`
        } else if (eint < 39) {
            output = `${output} undecillion`
        } else if (eint < 42) {
            output = `${output} duodecillion`
        } else if (eint < 45) {
            output = `${output} tredecillion`
        } else if (eint < 48) {
            output = `${output} quaturodecillion`
        } else if (eint < 51) {
            output = `${output} quindecillion`
        } else if (eint < 54) {
            output = `${output} sedecillion`
        } else if (eint < 57) {
            output = `${output} septendecillion`
        } else if (eint < 60) {
            output = `${output} octodecillion`
        } else {
            output = `${output} too much :(`
        }
    } else if (String(input).includes("Infinity")) {
        output = input  
    } else if (stringlength < 10) {
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
    } else {
        if (stringlength % 3 == 0) {
            output = `${inputstr.substring(0, 3)}.${inputstr.substring(3, 6)}`
        } else if (stringlength % 3 == 1) {
            output = `${inputstr.substring(0, 1)}.${inputstr.substring(1, 4)}`
        } else if (stringlength % 3 == 2) {
            output = `${inputstr.substring(0, 2)}.${inputstr.substring(2, 5)}`
        }
        if (stringlength < 13) {
            output = `${output} billion`
        } else if (stringlength < 16) {
            output = `${output} trillion`
        } else if (stringlength < 19) {
            output = `${output} quadrillion`
        } else if (stringlength < 22) {
            output = `${output} quintillion`
        } else if (stringlength < 25) {
            output = `${output} sextillion`
        }
    }
    return output
}




function parseSeconds(seconds) {
    let output = ""
    let days = 0
    let hours = 0
    let minutes = 0
    let secondmod = seconds
    while (secondmod >= 86400) {
        secondmod = secondmod - 86400
        days = days + 1
    }
    while (secondmod >= 3600) {
        secondmod = secondmod - 3600
        hours = hours + 1
    }
    while (secondmod >= 60) {
        secondmod = secondmod - 60
        minutes = minutes + 1
    }
    output = `${days} days, ${hours} hours, ${minutes} minutes, ${secondmod} seconds`
    return output
}





function fastTickUpdate() {
    document.getElementById("totalyarntext").innerHTML = `You have made ${parseCommas(game.totalyarn)} yarn ever`
    tickLevel = Math.round(prestigeLevel(game.totalyarn)[0])
    tickRemain = Math.round(prestigeLevel(game.totalyarn)[1])
    tickMax = Math.round(prestigeLevel(game.totalyarn)[2])
    if (totalmade > 1000000) {
        document.getElementById("prestigecurrent").innerHTML = `You have ${game.fishbones} fish bones`
        document.getElementById("prestigelevel").innerHTML = `You will have ${tickLevel} fish bones (+${tickLevel-game.fishbones})<br>${parseCommas(tickRemain)} to next level`
        document.getElementById("prestigeprogress").value = ((game.totalyarn-tickMax)/((game.totalyarn+tickRemain)-tickMax))*1000
    }
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
    localStorage.removeItem("json")
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
    for (let i=0;i<game.catgot.length;i++) {
        if (game.catgot[i] > 0) {
            cataUnlock(i)
        } else {
            cataLock(i)
        }
    }
}


function buildYpc() {
    let mpca = 1

    mpca = mpca + (mpcadd[game.cats[0]]*strayMulti)
    mpca = mpca + (mpcadd[game.cats[1]]*magicMulti)
    mpca = mpca + (mpcadd[game.cats[2]]*fruitMulti)
    mpca = mpca + (mpcadd[game.cats[3]]*programMulti)
    mpca = mpca + (mpcadd[game.cats[4]]*planetMulti)


    mpca = mpca + (1*game.bought[1])
    mpca = mpca + (2*game.bought[2])
    mpca = mpca + (10*game.bought[3])
    mpca = mpca + (100*game.bought[4])

    mpca = mpca * prestigeMulti
    return mpca
}

function buildCps() {
    let cpsa = 0
    
    cpsa = cpsa + (catcps[game.cats[2]]*fruitMulti)
    cpsa = cpsa + (catcps[game.cats[3]]*programMulti)
    cpsa = cpsa + (catcps[game.cats[4]]*planetMulti)


    cpsa = cpsa + prestigeCps

    return cpsa
}


function unlockbuybetter() {
    document.getElementById("betc1").classList = "buybutton"
    document.getElementById("betc2").classList = "buybutton"
    document.getElementById("betc3").classList = "buybutton"
    document.getElementById("betc4").classList = "buybutton"
    document.getElementById("betc5").classList = "buybutton"
}
function lockbuybetter() {
    document.getElementById("betc1").classList = "buybutton hidden"
    document.getElementById("betc2").classList = "buybutton hidden"
    document.getElementById("betc3").classList = "buybutton hidden"
    document.getElementById("betc4").classList = "buybutton hidden"
    document.getElementById("betc5").classList = "buybutton hidden"
}

function buildPrestige() {
    if (game.fishbones >= 2) {
        prestigeMulti = 2
        document.getElementById("p1").classList = "prestigeyes"
    } else {
        prestigeMulti = 1
        document.getElementById("p1").classList = "prestigeno"
    }
    if (game.fishbones >= 4) {
        buybetter = 10
        unlockbuybetter()
        document.getElementById("p2").classList = "prestigeyes"
    } else {
        buybetter = 0
        lockbuybetter()
        document.getElementById("p2").classList = "prestigeno"
    }
    if (game.fishbones >= 10) {
        strayMulti = 9
        document.getElementById("p3").classList = "prestigeyes"
    } else {
        strayMulti = 1
        document.getElementById("p3").classList = "prestigeno"
    }
    if (game.fishbones >= 20) {
        prestigeCps = 1
        document.getElementById("p4").classList = "prestigeyes"
    } else {
        prestigeCps = 0
        document.getElementById("p4").classList = "prestigeno"
    }
    if (game.fishbones >= 50) {
        prestigeMulti = 4
        document.getElementById("p5").classList = "prestigeyes"
    } else {
        document.getElementById("p5").classList = "prestigeno"
    }
    if (game.fishbones >= 100) {
        magicMulti = 9
        document.getElementById("p6").classList = "prestigeyes"
    } else {
        magicMulti = 1
        document.getElementById("p6").classList = "prestigeno"
    }
    if (game.fishbones >= 150) {
        prestigeMulti = 8
        document.getElementById("p7").classList = "prestigeyes"
    } else {
        document.getElementById("p7").classList = "prestigeno"
    }
    if (game.fishbones >= 200) {
        prestigeCps = 6
        document.getElementById("p8").classList = "prestigeyes"
    } else {
        document.getElementById("p8").classList = "prestigeno"

    }
    if (game.fishbones >= 300) {
        fruitMulti = 9
        document.getElementById("p9").classList = "prestigeyes"
    } else {
        fruitMulti = 1
        document.getElementById("p9").classList = "prestigeno"
    }
    if (game.fishbones >= 350) {
        prestigeMulti = 16
        document.getElementById("p10").classList = "prestigeyes"
    } else {
        document.getElementById("p10").classList = "prestigeno"
    }
    if (game.fishbones >= 400) {
        strayMulti = 81
        document.getElementById("p11").classList = "prestigeyes"
    } else {
        document.getElementById("p11").classList = "prestigeno"
    }
    if (game.fishbones >= 500) {
        programMulti = 9
        document.getElementById("p12").classList = "prestigeyes"
    } else {
        document.getElementById("p12").classList = "prestigeno"
    }
    if (game.fishbones >= 550) {
        prestigeMulti = 32
        document.getElementById("p13").classList = "prestigeyes"
    } else {
        document.getElementById("p13").classList = "prestigeno"
    }
    if (game.fishbones >= 600) {
        magicMulti = 81
        document.getElementById("p14").classList = "prestigeyes"
    } else {
        document.getElementById("p14").classList = "prestigeno"
    }
    if (game.fishbones >= 650) {
        prestigeMulti = 64
        document.getElementById("p15").classList = "prestigeyes"
    } else {
        document.getElementById("p15").classList = "prestigeno"
    }
    if (game.fishbones >= 700) {
        prestigeMulti = 128
        document.getElementById("p16").classList = "prestigeyes"
    } else {
        document.getElementById("p16").classList = "prestigeno"
    }
    if (game.fishbones >= 1000) {
        prestigeCps = 21
        document.getElementById("p17").classList = "prestigeyes"
    } else {
        document.getElementById("p17").classList = "prestigeno"
    }
    if (game.fishbones >= 2000) {
        prestigeMulti = 256
        document.getElementById("p18").classList = "prestigeyes"
    } else {
        document.getElementById("p18").classList = "prestigeno"
    }
    if (game.fishbones >= 3000) {
        prestigeCps = 51
        document.getElementById("p19").classList = "prestigeyes"
    } else {
        document.getElementById("p19").classList = "prestigeno"
    }
    if (game.fishbones >= 4000) {
        strayMulti = 729
        document.getElementById("p20").classList = "prestigeyes"
    } else {
        document.getElementById("p20").classList = "prestigeno"
    }
    if (game.fishbones >= 5000) {
        buybetter = 100
        document.getElementById("p21").classList = "prestigeyes"
    } else {
        document.getElementById("p21").classList = "prestigeno"
    }
    if (game.fishbones >= 7500) {
        rollboost = 1
        document.getElementById("p22").classList = "prestigeyes"
    } else {
        rollboost = 0
        document.getElementById("p22").classList = "prestigeno"
    }
    if (game.fishbones >= 10000) {
        manualclick = 25
        document.getElementById("p23").classList = "prestigeyes"
    } else {
        manualclick = 1
        document.getElementById("p23").classList = "prestigeno"
    }
    if (game.fishbones >= 12500) {
        prestigeMulti = 512
        document.getElementById("p24").classList = "prestigeyes"
    } else {
        document.getElementById("p24").classList = "prestigeno"
    }
    if (game.fishbones >= 15000) {
        magicMulti = 729
        document.getElementById("p25").classList = "prestigeyes"
    } else {
        document.getElementById("p25").classList = "prestigeno"
    }
    if (game.fishbones >= 17500) {
        planetMulti = 2
        document.getElementById("p26").classList = "prestigeyes"
    } else {
        document.getElementById("p26").classList = "prestigeno"
    }
    if (game.fishbones >= 20000) {
        rollboost = 3
        document.getElementById("p27").classList = "prestigeyes"
    } else {
        document.getElementById("p27").classList = "prestigeno"
    }
    if (game.fishbones >= 25000) {
        prestigeMulti = 1024
        document.getElementById("p28").classList = "prestigeyes"
    } else {
        document.getElementById("p28").classList = "prestigeno"
    }
    if (game.fishbones >= 30000) {
        prestigeCps = 100
        document.getElementById("p29").classList = "prestigeyes"
    } else {
        document.getElementById("p29").classList = "prestigeno"
    }
    if (game.fishbones >= 40000) {
        manualclick = 50
        document.getElementById("p30").classList = "prestigeyes"
    } else {
        document.getElementById("p30").classList = "prestigeno"
    }
    if (game.fishbones >= 50000) {
        rollboost = 6
        document.getElementById("p31").classList = "prestigeyes"
    } else {
        document.getElementById("p31").classList = "prestigeno"
    }
}





function expandNum(x) {
    let num = x.toLocaleString('fullwide', {useGrouping:false})
    return num
}



function encrypt(string) {
    var post = CryptoJS.AES.encrypt(string, "catclickeryay")
    return post.toString()
}
function decrypt(string) {
    var post = CryptoJS.AES.decrypt(string, "catclickeryay")
    return post.toString(CryptoJS.enc.Utf8)
}
