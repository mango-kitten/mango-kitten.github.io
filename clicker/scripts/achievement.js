let achievementamnt = 100
let storeamnt = 15
let achrecent = 0
let achlog = ""

// if (game.achievements.length < achievementamnt) {
//     while (game.achievements.length < achievementamnt) {
//         game.achievements.push(1)
//     }
//     console.log("added more lines to 'achievements'")
// } else {
//     console.log("enough lines")
// }



// preloading
function achLoad() {
    i = 1
    while (i < game.achievements.length) {
        if (game.achievements[i] == 1) {
            try {
                let achnamea = `a${i}a`
                let achnameb = `a${i}b`
                document.getElementById(achnamea).classList = "achimg hidden"
                document.getElementById(achnameb).classList = "achimg"

                if (i == 42) {
                    document.getElementById("9acati").classList = "catimg hidden"
                    document.getElementById("9ccati").classList = "catimg"
                    document.getElementById("murdera").classList = "tooltipbot hidden"
                    document.getElementById("murderb").classList = "tooltipbot"
                }
                if (i == 43) {
                    document.getElementById("wastea").classList = "tooltipbot hidden"
                    document.getElementById("wasteb").classList = "tooltipbot"
                }
                if (i == 46) {
                    document.getElementById("reala").classList = "tooltipbot hidden"
                    document.getElementById("realb").classList = "tooltipbot"
                }
                if (i == 47) {
                    document.getElementById("betraya").classList = "tooltipbot hidden"
                    document.getElementById("betrayb").classList = "tooltipbot"
                }
                if (i == 48) {
                    document.getElementById("demona").classList = "tooltipbot hidden"
                    document.getElementById("demonb").classList = "tooltipbot"
                }
                if (i == 49) {
                    document.getElementById("suna").classList = "tooltipbot hidden"
                    document.getElementById("sunb").classList = "tooltipbot"
                }
                if (i == 50) {
                    document.getElementById("plutoa").classList = "tooltipbot hidden"
                    document.getElementById("plutob").classList = "tooltipbot"
                }
            } catch (error) {

            }
        } else {
            try {
            let achnamea = `a${i}a`
            let achnameb = `a${i}b`
            document.getElementById(achnamea).classList = "achimg"
            document.getElementById(achnameb).classList = "achimg hidden"
            } catch (error) {

            }
        }
        i = i+1
    }
}


function getAchievement(id) {
    // achievements.splice(id, 1, 1)
    let achnamea = `a${id}a`
    let achnameb = `a${id}b`
    document.getElementById(achnamea).classList = "achimg hidden"
    document.getElementById(achnameb).classList = "achimg"
    game.achievements[id]= 1
}


function buildAch() {
    if (achstore == null) {
        achstore = ""
    }
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
    if (Number(game.totalyarn) >= 1000 && game.achievements[1]== 0) {
        getAchievement(1)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "A Start"
        }
    }
    if (Number(game.totalyarn) >= 100000 && game.achievements[2]== 0) {
        getAchievement(2)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Makin that Yarn"
        } else {
            achlog = `${achlog}, Makin that Yarn`
        }
    }
    if (Number(game.totalyarn) >= 10000000 && game.achievements[3]== 0) {
        getAchievement(3)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Go Big - no - Bigger"
        } else {
            achlog = `${achlog}, Go Big - no - Bigger`
        }
    }
    if (Number(game.totalyarn) >= 1000000000 && game.achievements[4]== 0) {
        getAchievement(4)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "No End"
        } else {
            achlog = `${achlog}, No End`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000 && game.achievements[5]== 0) {
        getAchievement(5)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Yarn the World 'Round"
        } else {
            achlog = `${achlog}, Yarn the World 'Round`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000000 && game.achievements[6]== 0) {
        getAchievement(6)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Why stop?"
        } else {
            achlog = `${achlog}, Why Stop?`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000000000 && game.achievements[7]== 0) {
        getAchievement(7)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Toying with you"
        } else {
            achlog = `${achlog}, Toying with you`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000000000000 && game.achievements[8]== 0) {
        getAchievement(8)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Overachieving"
        } else {
            achlog = `${achlog}, Overachieving`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000000000000000 && game.achievements[9]== 0) {
        getAchievement(9)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Its in the works"
        } else {
            achlog = `${achlog}, Its in the works`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000000000000000000 && game.achievements[10]== 0) {
        getAchievement(10)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "And none for you"
        } else {
            achlog = `${achlog}, And none for you`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000000000000000000000 && game.achievements[11]== 0) {
        getAchievement(11)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Magical Number Nine"
        } else {
            achlog = `${achlog}, Magical Number Nine`
        }
    }
    if (Number(game.totalyarn) >= 1000000000000000000000000000000000 && game.achievements[12]== 0) {
        getAchievement(12)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "All of the above"
        } else {
            achlog = `${achlog}, All of the above`
        }
    }






    if (game.catgot[1]> 0 && game.catgot[2]> 0 && game.catgot[3]> 0 && game.catgot[4]> 0 && game.catgot[5]> 0 && game.achievements[14]== 0) {
        getAchievement(14)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Stray Cataloguist"
        } else {
            achlog = `${achlog}, Stray Cataloguist`
        }
    }
    if (game.catgot[6]> 0 && game.catgot[7]> 0 && game.catgot[8]> 0 && game.catgot[9]> 0 && game.achievements[15]== 0) {
        getAchievement(15)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Ritualized Cataloguist"
        } else {
            achlog = `${achlog}, Ritualized Cataloguist`
        }
    }
    if (game.catgot[10]> 0 && game.catgot[11]> 0 && game.catgot[12]> 0 && game.catgot[13]> 0 && game.catgot[14]> 0 && game.achievements[16]== 0) {
        getAchievement(16)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Fruity Cataloguist"
        } else {
            achlog = `${achlog}, Fruity Cataloguist`
        }
    }
    if (game.catgot[15]> 0 && game.catgot[16]> 0 && game.catgot[17]> 0 && game.catgot[18]> 0 && game.achievements[17]== 0) {
        getAchievement(17)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Programming Cataloguist"
        } else {
            achlog = `${achlog}, Programming Cataloguist`
        }
    }
    if (game.catgot[19]> 0 && game.catgot[20]> 0 && game.catgot[21]> 0 && game.catgot[22]> 0 && game.catgot[23]> 0 && game.catgot[24]> 0 && game.catgot[25]> 0 && game.catgot[26]> 0 && game.catgot[27]> 0 && game.catgot[28]> 0 && game.achievements[18]== 0) {
        getAchievement(18)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Planetary Cataloguist"
        } else {
            achlog = `${achlog}, Planetary Cataloguist`
        }
    }
    if (game.catgot[29]> 0 && game.catgot[30]> 0 && game.catgot[31]> 0 && game.catgot[32]> 0 && game.catgot[33]> 0 && game.catgot[34]> 0 && game.achievements[19] == 0) {
        getAchievement(19)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Gardening Cataloguist"
        } else {
            achlog = `${achlog}, Gardening Cataloguist`
        }
    }
    if (game.catgot[35]> 0 && game.catgot[36]> 0 && game.catgot[37]> 0 && game.catgot[38]> 0 && game.catgot[39]> 0 && game.catgot[40]> 0 && game.achievements[20] == 0) {
        getAchievement(20)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Mythological Cataloguist"
        } else {
            achlog = `${achlog}, Mythological Cataloguist`
        }
    }


    if (game.fishbones >= 1 && game.achievements[27]== 0) {
        getAchievement(27)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Fish Bones, Fish Bones"
        } else {
            achlog = `${achlog}, Fish Bones, Fish Bones`
        }
    }
    if (game.fishbones >= 20 && game.achievements[28]== 0) {
        getAchievement(28)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Yummy yummy fish bones"
        } else {
            achlog = `${achlog}, Yummy yummy fish bones`
        }
    }
    if (game.fishbones >= 150 && game.achievements[29]== 0) {
        getAchievement(29)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Eat them up!"
        } else {
            achlog = `${achlog}, Eat them up!`
        }
    }
    if (game.fishbones >= 1000 && game.achievements[30]== 0) {
        getAchievement(30)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "All Mine"
        } else {
            achlog = `${achlog}, All Mine`
        }
    }
    if (game.fishbones >= 10000 && game.achievements[31]== 0) {
        getAchievement(31)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Are you sure youre not a grizzly?"
        } else {
            achlog = `${achlog}, Are you sure youre not a grizzly?`
        }
    }
    if (game.fishbones >= 50000 && game.achievements[32]== 0) {
        getAchievement(32)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Why? Because why not."
        } else {
            achlog = `${achlog}, Why? Because why not.`
        }
    }
    if (game.fishbones >= 100000 && game.achievements[33]== 0) {
        getAchievement(33)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "In such a world, what isnt fish?"
        } else {
            achlog = `${achlog}, In such a world, what isnt fish?`
        }
    }
    if (game.fishbones >= 500000 && game.achievements[34]== 0) {
        getAchievement(34)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "If you square a fish, what is there to eat"
        } else {
            achlog = `${achlog}, If you square a fish, what is there to eat`
        }
    }






    if (achstore[0] == "1" && game.achievements[40]== 0) {
        getAchievement(40)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Scammed"
        } else {
            achlog = `${achlog}, Scammed`
        }
    }
    if (achstore[1] == "1" && game.achievements[41]== 0) {
        getAchievement(41)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Mango Clicker"
        } else {
            achlog = `${achlog}, Mango Clicker`
        }
    }
    if (achstore[2] == "1" && game.achievements[42]== 0) {
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
    if (achstore[3] == "1" && game.achievements[43]== 0) {
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
    if (achstore[4] == "1" && game.achievements[44]== 0) {
        getAchievement(44)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "Clicky"
        } else {
            achlog = `${achlog}, Clicky`
        }
    }
    if (achstore[5] == "1" && game.achievements[45]== 0) {
        getAchievement(45)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "That's Handy"
        } else {
            achlog = `${achlog}, That's Handy`
        }
    }
    if (achstore[6] == "1" && game.achievements[46]== 0) {
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
    if (achstore[7] == "1" && game.achievements[47]== 0) {
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
    if (catgot[7] >= 666 && game.achievements[48]== 0) {
        game.achievements[48] = 1
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
    if (catgot[23] >= 1047 && game.achievements[49]== 0) {
        game.achievements[49] = 1
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
    if (catgot[27] >= 1 && game.achievements[50]== 0) {
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
    if (game.catnip >= 3600 && game.achievements[51]== 0) {
        getAchievement(51)
        achrecent = achrecent + 1
        if (achrecent == 1) {
            achlog = "A nip in time"
        } else {
            achlog = `${achlog}, A nip in time`
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
