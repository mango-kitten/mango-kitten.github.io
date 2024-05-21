let achievementamnt = 100
let storeamnt = 15
let achrecent = 0
let achlog = ""

function getAchievement(id) {
    achievements.splice(id, 1, 1)
    let achnamea = `a${id}a`
    let achnameb = `a${id}b`
    document.getElementById(achnamea).classList = "achimg hidden"
    document.getElementById(achnameb).classList = "achimg"
}


function buildAch() {
    if (achstore.length < storeamnt) {
        while (achstore.length < storeamnt) {
            achstore = `${achstore}0`
        }
        achstore = String(achstore)
        console.log(achstore)
    }
}


function updateAchievements() {
    achlog = ""
    achrecent = 0
    if (Number(totalmade) >= 1000 && achievements[1] == 0) {
        getAchievement(1)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "A Start"
        }
    }
    if (Number(totalmade) >= 100000 && achievements[2] == 0) {
        getAchievement(2)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Makin that Yarn"
        } else {
            achlog = `${achlog}, Makin that Yarn`
        }
    }
    if (Number(totalmade) >= 10000000 && achievements[3] == 0) {
        getAchievement(3)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Go Big - no - Bigger"
        } else {
            achlog = `${achlog}, Go Big - no - Bigger`
        }
    }
    if (Number(totalmade) >= 1000000000 && achievements[4] == 0) {
        getAchievement(4)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "No End"
        } else {
            achlog = `${achlog}, No End`
        }
    }
    if (Number(totalmade) >= 1000000000000 && achievements[5] == 0) {
        getAchievement(5)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Yarn the World 'Round"
        } else {
            achlog = `${achlog}, Yarn the World 'Round`
        }
    }
    if (Number(totalmade) >= 1000000000000000 && achievements[6] == 0) {
        getAchievement(6)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Why stop?"
        } else {
            achlog = `${achlog}, Why Stop?`
        }
    }
    if (Number(totalmade) >= 1000000000000000000 && achievements[7] == 0) {
        getAchievement(7)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Toying with you"
        } else {
            achlog = `${achlog}, Toying with you`
        }
    }
    if (Number(totalmade) >= 1000000000000000000000 && achievements[8] == 0) {
        getAchievement(8)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Overachieving"
        } else {
            achlog = `${achlog}, Overachieving`
        }
    }
    if (Number(totalmade) >= 1000000000000000000000000 && achievements[9] == 0) {
        getAchievement(9)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Its in the works"
        } else {
            achlog = `${achlog}, Its in the works`
        }
    }
    if (Number(totalmade) >= 1000000000000000000000000000 && achievements[10] == 0) {
        getAchievement(10)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "And none for you"
        } else {
            achlog = `${achlog}, And none for you`
        }
    }
    if (Number(totalmade) >= 1000000000000000000000000000000 && achievements[11] == 0) {
        getAchievement(11)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Magical Number Nine"
        } else {
            achlog = `${achlog}, Magical Number Nine`
        }
    }
    if (Number(totalmade) >= 1000000000000000000000000000000000 && achievements[12] == 0) {
        getAchievement(12)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "All of the above"
        } else {
            achlog = `${achlog}, All of the above`
        }
    }






    if (catgot[1] > 0 && catgot[2] > 0 && catgot[3] > 0 && catgot[4] > 0 && catgot[5] > 0 && achievements[14] == 0) {
        getAchievement(14)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Stray Cataloguist"
        } else {
            achlog = `${achlog}, Stray Cataloguist`
        }
    }
    if (catgot[6] > 0 && catgot[7] > 0 && catgot[8] > 0 && catgot[9] > 0 && achievements[15] == 0) {
        getAchievement(15)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Ritualized Cataloguist"
        } else {
            achlog = `${achlog}, Ritualized Cataloguist`
        }
    }
    if (catgot[10] > 0 && catgot[11] > 0 && catgot[12] > 0 && catgot[13] > 0 && catgot[14] > 0 && achievements[16] == 0) {
        getAchievement(16)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Fruity Cataloguist"
        } else {
            achlog = `${achlog}, Fruity Cataloguist`
        }
    }
    if (catgot[15] > 0 && catgot[16] > 0 && catgot[17] > 0 && catgot[18] > 0 && achievements[17] == 0) {
        getAchievement(17)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Programming Cataloguist"
        } else {
            achlog = `${achlog}, Programming Cataloguist`
        }
    }
    if (catgot[18] > 0 && catgot[19] > 0 && catgot[20] > 0 && catgot[21] > 0 && catgot[22] > 0 && catgot[23] > 0 && catgot[24] > 0 && catgot[25] > 0 && catgot[26] > 0 && catgot[27] > 0 && achievements[18] == 0) {
        getAchievement(18)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Planetary Cataloguist"
        } else {
            achlog = `${achlog}, Planetary Cataloguist`
        }
    }


    if (Number(prestigelevel) >= 1 && achievements[27] == 0) {
        getAchievement(27)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Fish Bones, Fish Bones"
        } else {
            achlog = `${achlog}, Fish Bones, Fish Bones`
        }
    }
    if (Number(prestigelevel) >= 20 && achievements[28] == 0) {
        getAchievement(28)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Yummy yummy fish bones"
        } else {
            achlog = `${achlog}, Yummy yummy fish bones`
        }
    }
    if (Number(prestigelevel) >= 150 && achievements[29] == 0) {
        getAchievement(29)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Eat them up!"
        } else {
            achlog = `${achlog}, Eat them up!`
        }
    }
    if (Number(prestigelevel) >= 1000 && achievements[30] == 0) {
        getAchievement(30)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "All Mine"
        } else {
            achlog = `${achlog}, All Mine`
        }
    }
    if (Number(prestigelevel) >= 10000 && achievements[31] == 0) {
        getAchievement(31)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Are you sure youre not a grizzly?"
        } else {
            achlog = `${achlog}, Are you sure youre not a grizzly?`
        }
    }
    if (Number(prestigelevel) >= 50000 && achievements[32] == 0) {
        getAchievement(32)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Why? Because why not."
        } else {
            achlog = `${achlog}, Why? Because why not.`
        }
    }
    if (Number(prestigelevel) >= 100000 && achievements[33] == 0) {
        getAchievement(33)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "In such a world, what isnt fish?"
        } else {
            achlog = `${achlog}, In such a world, what isnt fish?`
        }
    }
    if (Number(prestigelevel) >= 500000 && achievements[34] == 0) {
        getAchievement(34)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "If you square a fish, what is there to eat"
        } else {
            achlog = `${achlog}, If you square a fish, what is there to eat`
        }
    }






    if (achstore[0] == "1" && achievements[40] == 0) {
        getAchievement(40)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Scammed"
        } else {
            achlog = `${achlog}, Scammed`
        }
    }
    if (achstore[1] == "1" && achievements[41] == 0) {
        getAchievement(41)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Mango Clicker"
        } else {
            achlog = `${achlog}, Mango Clicker`
        }
    }
    if (achstore[2] == "1" && achievements[42] == 0) {
        document.getElementById("9acati").classList = "catimg hidden"
        document.getElementById("9ccati").classList = "catimg"
        document.getElementById("murdera").classList = "tooltipbot hidden"
        document.getElementById("murderb").classList = "tooltipbot"
        getAchievement(42)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "MURDERER"
        } else {
            achlog = `${achlog}, MURDERER`
        }
    }
    if (achstore[3] == "1" && achievements[43] == 0) {
        getAchievement(43)
        document.getElementById("wastea").classList = "tooltipbot hidden"
        document.getElementById("wasteb").classList = "tooltipbot"
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Why waste time?"
        } else {
            achlog = `${achlog}, Why waste time?`
        }
    }
    if (achstore[4] == "1" && achievements[44] == 0) {
        getAchievement(44)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Clicky"
        } else {
            achlog = `${achlog}, Clicky`
        }
    }
    if (achstore[5] == "1" && achievements[45] == 0) {
        getAchievement(45)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "That's Handy"
        } else {
            achlog = `${achlog}, That's Handy`
        }
    }
    if (achstore[6] == "1" && achievements[46] == 0) {
        getAchievement(46)
        document.getElementById("reala").classList = "tooltipbot hidden"
        document.getElementById("realb").classList = "tooltipbot"
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Get Real"
        } else {
            achlog = `${achlog}, Get Real`
        }
    }
    if (achstore[7] == "1" && achievements[47] == 0) {
        getAchievement(47)
        document.getElementById("betraya").classList = "tooltipbot hidden"
        document.getElementById("betrayb").classList = "tooltipbot"
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Betrayal"
        } else {
            achlog = `${achlog}, Betrayal`
        }
    }
    if (catgot[7] >= 666 && achievements[48] == 0) {
        getAchievement(48)
        document.getElementById("demona").classList = "tooltipbot hidden"
        document.getElementById("demonb").classList = "tooltipbot"
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Summoning Ritual"
        } else {
            achlog = `${achlog}, Summoning Ritual`
        }
    }
    if (catgot[23] >= 1047 && achievements[49] == 0) {
        getAchievement(49)
        document.getElementById("suna").classList = "tooltipbot hidden"
        document.getElementById("sunb").classList = "tooltipbot"
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "One Sun"
        } else {
            achlog = `${achlog}, One Sun`
        }
    }
    if (catgot[27] >= 1 && achievements[50] == 0) {
        getAchievement(50)
        document.getElementById("plutoa").classList = "tooltipbot hidden"
        document.getElementById("plutob").classList = "tooltipbot"
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "That doesnt belong?"
        } else {
            achlog = `${achlog}, That doesnt belong?`
        }
    }

    if (loader == 1 && achrecent > 0) {
        if (achrecent > 1) {
            document.getElementById("achtop").innerHTML = `You got ${achrecent} new achievements!`
        } else {
            document.getElementById("achtop").innerHTML = "You got a new achievement!"
        }
        document.getElementById("achbot").innerHTML = achlog
        document.getElementById("achtoast").classList = "achget achgot"
        setTimeout(function () {
            document.getElementById("achtoast").classList = "achget"
        }, 5000)
    }
    achrecent = 0
}
