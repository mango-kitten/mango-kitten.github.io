// gambling - bell curves dropper stuff (done), slots (done), wheel o fortune (done) etc
// whack a mole? fishing?
// flappy bird using the sprites of your stuff?

// each total star in inventory = +0.1% katkoin, 5 star adds +0.5% katkoin


// below code from stack overflow, source: https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve answer 2
function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
    return num
}
// end of stack overflow code



function totalStars() {
    let inv = game.inventory
    let startotal = 0
    let fivestartotal = 0
    for (let i=0; i<inv.length; i++) {
        startotal = startotal + Number(getInvData(i)[0].stars)
        if (Number(getInvData(i)[0].stars) == 5) {
            fivestartotal = fivestartotal + 1
        }
    }
    return [startotal, fivestartotal]
}

function updateStars() {
    let staramntdiv = document.getElementById("staramnt")

    staramntdiv.innerHTML = `${totalStars()[0]} Stars (+${(totalStars()[0]+(totalStars()[1]*5))/10}% Game Rewards)`
}


function gamePayout(katkoin) {
    let earnings = Math.floor(katkoin * (1+ ((totalStars()[0]+(totalStars()[1]*5)) / 1000)))

    game.katkoin = game.katkoin + earnings
    throwKatKoin(earnings, 1)

    return earnings
}



// can spin wheel once every 15 mins
let wheelinterval
let wheeltimer = document.getElementById("wheeltimer")
let wheelresdiv = document.getElementById("wheelres")
function wheelSpin() {
    if (game.wheelready == 0) {
        let wheelres = Math.random()
        if (wheelres < 0.30) {
            let earnings = Math.floor(50 * (1+ ((totalStars()[0]+(totalStars()[1]*5)) / 1000)))
            wheelresdiv.innerHTML = `Got a ${Math.floor(wheelres*100)}<br>Won 50 (+${earnings-50}) KatKoin`
            gamePayout(50)
        } else if (wheelres < 0.55) {
            let earnings = Math.floor(75 * (1+ ((totalStars()[0]+(totalStars()[1]*5)) / 1000)))
            wheelresdiv.innerHTML = `Got a ${Math.floor(wheelres*100)}<br>Won 75 (+${earnings-75}) KatKoin`
            gamePayout(75)
        } else if (wheelres < 0.75) {
            let earnings = Math.floor(100 * (1+ ((totalStars()[0]+(totalStars()[1]*5)) / 1000)))
            wheelresdiv.innerHTML = `Got a ${Math.floor(wheelres*100)}<br>Won 100 (+${earnings-100}) KatKoin`
            gamePayout(100)
        } else if (wheelres < 0.90) {
            let earnings = Math.floor(125 * (1+ ((totalStars()[0]+(totalStars()[1]*5)) / 1000)))
            wheelresdiv.innerHTML = `Got a ${Math.floor(wheelres*100)}<br>Won 125 (+${earnings-125}) KatKoin`
            gamePayout(125)
        } else {
            let earnings = Math.floor(175 * (1+ ((totalStars()[0]+(totalStars()[1]*5)) / 1000)))
            wheelresdiv.innerHTML = `Got a ${Math.floor(wheelres*100)}<br>Won 175 (+${earnings-175}) KatKoin`
            gamePayout(175)
        }
        game.wheelready = 600
    }
}


// can do dropper every 4 minutes
let normdropinterval
let droptimer = document.getElementById("droptimer")
let dropresdiv = document.getElementById("dropres")
let dropearndiv = document.getElementById("dropearn")
let dropupgradediv = document.getElementById("dropupgrade")
function doDropper() {
    if (game.dropready == 0) {

        var old_element = dropresdiv
        var new_element = old_element.cloneNode(false);
        old_element.parentNode.replaceChild(new_element, old_element);

        dropresdiv = document.getElementById("dropres")

        let droppayout = 0
        let totaldist = 0
        for (let i=0; i<game.dropqty; i++) {
            let dropres = randn_bm()
            let dropdist = 0
            if (dropres < 0.499) {
                dropdist = 0.5-dropres
            } else if (dropres > 0.501) {
                dropdist = dropres-0.5
            } else {
                dropdist = 1
            }
            droppayout = droppayout + dropdist * 10
            totaldist = totaldist + dropdist

            let rgbcolor = randomRGB()

            newitem = document.createElement("div")
            newitem.style.height = "6px"
            newitem.style.width = "6px"
            newitem.style.top = "-100%"
            newitem.style.borderRadius = "3px"
            newitem.style.position = "absolute"
            newitem.style.backgroundColor = `rgb(${rgbcolor[0]}, ${rgbcolor[1]}, ${rgbcolor[2]})`
            newitem.style.zIndex = "10004"
            newitem.style.left = `${(dropres*100)}%`

            dropresdiv.appendChild(newitem)
        }
        droppayout = Math.floor(droppayout)

        gamePayout(droppayout)

        let earnings = Math.floor(droppayout * (1+ ((totalStars()[0]+(totalStars()[1]*5)) / 1000)))
        dropearndiv.innerHTML = `Total distance from center: ${Math.floor(totaldist*100)}<br>Won ${droppayout} (+${earnings-droppayout}) KatKoin`


        game.dropready = 240
    }
}

function upgradeDropper() {
    if (game.katkoin >= Math.pow(2, (game.dropqty/10)+1)) {
        game.dropqty = game.dropqty + 10
        game.katkoin = game.katkoin - Math.pow(2, (game.dropqty/10))
        throwKatKoin(Math.pow(2, (game.dropqty/10)), -1)
        dropupgradediv.innerHTML = `Upgrade for ${Math.pow(2, (game.dropqty/10)+1)} KatKoin (${game.dropqty} +10)`
    } else {
        throwError("Not enough KatKoin!")
    }
}


// can do slots every 30 seconds
let slotstimer = document.getElementById("slotstimer")
let slotinterval
let rgbcodes = ["rgb(0, 0, 255)", "rgb(188, 3, 255)", "rgb(255, 171, 220)", "rgb(173, 254, 255)", "rgb(255, 255, 255)", "rgb(255, 128, 0)"]
let allslots = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3"), document.getElementById("slot4"), document.getElementById("slot5"), document.getElementById("slot6"), document.getElementById("slot7"), document.getElementById("slot8"), document.getElementById("slot9"), document.getElementById("slot10"), document.getElementById("slot11"), document.getElementById("slot12")]
function slotMachine() {
    if (game.slotsready == 0) {
        for (let i=0; i<allslots.length; i++) {
            allslots[i].style.outline = "solid"
            allslots[i].style.outlineWidth = "0px"
            allslots[i].style.outlineColor = "rgb(250, 17, 0)"
        }
    
        let slotspots = [] // blue-0 purple-1 pink-2 lblue-3 white-4 orange-5 
        let colortotals = [0, 0, 0, 0, 0, 0]
        for (let i=0; i<allslots.length; i++) {
            let result = Math.floor(Math.random()*6)
            allslots[i].style.backgroundColor = rgbcodes[result]
            colortotals[result] = colortotals[result] + 1
            slotspots[i] = result
        }
    
        let threewins = 0
        let fivewins = 0
        let winnerslots = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (let i=0; i<6; i++) {
            if (colortotals[i] >= 3) {
                if (colortotals[i] >= 5) {
                    fivewins = fivewins + 1
                    for (let j=0; j<slotspots.length; j++) {
                        if (slotspots[j] == i) {
                            winnerslots[j] = 2
                        }
                    }
                } else {
                    threewins = threewins + 1
                    for (let j=0; j<slotspots.length; j++) {
                        if (slotspots[j] == i) {
                            winnerslots[j] = 1
                        }
                    }
                }
                
            }
        }
        let linewins = 0
        for (let i=0; i<3; i++) {
            let iindicator = i*4
            if (slotspots[iindicator] == slotspots[iindicator+1] && slotspots[iindicator] == slotspots[iindicator+2] && slotspots[iindicator] == slotspots[iindicator+3]) {
                winnerslots[iindicator] = 3
                winnerslots[iindicator+1] = 3
                winnerslots[iindicator+2] = 3
                winnerslots[iindicator+3] = 3
                linewins = linewins + 1
            }
        }
    
    
    
        for (let i=0; i<winnerslots.length; i++) {
            if (winnerslots[i] == 1) {
                allslots[i].style.outlineWidth = "2px"
                allslots[i].style.outlineColor = "rgb(250, 17, 0)"
            } else if (winnerslots[i] == 2) {
                allslots[i].style.outlineWidth = "2px"
                allslots[i].style.outlineColor = "rgb(0, 179, 21)"
            } else if (winnerslots[i] == 3) {
                allslots[i].style.outlineWidth = "2px"
                allslots[i].style.outlineColor = "rgb(255, 128, 0)"
            } else {
                allslots[i].style.outlineWidth = "0px"
            }
        }
        let totalearnings = (threewins * 5) + (fivewins * 20) + (linewins * 200)
    
        document.getElementById("slotpayout").innerHTML = totalearnings

        gamePayout(totalearnings)
    
        game.slotsready = 30
    }
}


function openGame() {
    document.getElementById("gamesupercontainer").style.display = "block"
    document.getElementById("pullgrey").style.display = "block"
}
function closeGame() {
    document.getElementById("gamesupercontainer").style.display = "none"
    document.getElementById("pullgrey").style.display = "none"
}

function randomRGB() {
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    return [red, green, blue]
}
