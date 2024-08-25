let newthing
let newbuild
let serial = 0
let entry
let inprogress = 0
let conf
let inpull
let tenpullinterval

let invelements = []

let newpixels = 0


let invtier = 0


function StaticObj(link, serial, modifier, modstars) {
    this.link = link
    this.serial = serial
    this.modifier = modifier
    this.modstars = modstars
}

// below lines are borrowed from stack overflow, not my own work
(function() {
    var matchfunc = null, prefixes = ["","ms","moz","webkit","o"], i, m;
    for(i=0; i<prefixes.length; i++) {
        m = prefixes[i]+(prefixes[i] ? "Matches" : "matches");
        if( document.documentElement[m]) {matchfunc = m; break;}
        m += "Selector";
        if( document.documentElement[m]) {matchfunc = m; break;}
    }
    if( matchfunc) window.isHover = function(elem) {return elem[matchfunc](":hover");};
    else {
        window.onmouseover = function(e) {
            e = e || window.event;
            var t = e.srcElement || e.target;
            while(t) {
                t.hovering = true;
                t = t.parentNode;
            }
        };
        window.onmouseout = function(e) {
            e = e || window.event;
            var t = e.srcElement || e.target;
            while(t) {
                t.hovering = false;
                t = t.parentNode;
            }
        };
        window.isHover = function(elem) {return elem.hovering;};
   }
})();
// end of borrowed code


function loadSerial() {
    serial = game.inventory.length
}

function getPixels(stars){
    if (stars == 1) {
        newpixels = newpixels + 10
    } else if (stars == 2) {
        newpixels = newpixels + 15
    } else if (stars == 3) {
        newpixels = newpixels + 25
    } else if (stars == 4) {
        newpixels = newpixels + 50
    } else if (stars == 5) {
        newpixels = newpixels + 250
    }
}

function getItem(set) {
    if (inprogress == 0) {
        conf = 0
        newpixels = 0
        document.getElementById("invsupercontainer").style.display = "none"
        document.getElementById("pullbuttons").style.display = "none"
        document.getElementById("shopsupercontainer").style.display = "none"
        document.getElementById("savesupercontainer").style.display = "none"
        inpull = 1
        
        newthing = pullItem(set)
        serial = serial + 1
        let itemmod = rollModifier()
        newbuild = new StaticObj(newthing.id, serial, itemmod[0], itemmod[1])
        inprogress = 1
        if (newthing.stars < 5) {
            game.since5star = game.since5star + 1
        } else {
            game.since5star = 0
        }


        let starsmax = checkStar(newthing)

        if (starsmax == 5) {
            pullstart5()
        } else if (starsmax == 4) {
            pullstart4()
        } else if (starsmax == 3) {
            pullstart3()
        } else {
            pullstart2()
        }



        setTimeout(function () {
            clearInterval(pullstartint)
            clearPullStart()
            fadeStart(newthing.stars)
            document.getElementById("pullgot").innerHTML = `${newthing.name}`
            document.getElementById("pullgotimg").src = `../img/gacha/${newthing.id}.jpg`
            document.getElementById("pullmodifier").innerHTML = itemmod[0]
            getPixels(newthing.stars)
            game.inventory.push(newbuild)
            buildInv(newbuild)

            tenpullinterval = setInterval(function () {
                if (conf == 1) {
                    if (inprogress == 0) {
                        clearInterval(tenpullinterval)
                        clearStars()

                        game.pixels = game.pixels + newpixels
                        throwPixel(newpixels, 1)
                        
                        document.getElementById("invsupercontainer").style.display = "block"
                        document.getElementById("pullbuttons").style.display = "block"
                        document.getElementById("shopsupercontainer").style.display = "block"
                        document.getElementById("savesupercontainer").style.display = "block"
                        document.getElementById("pullbg").style.opacity = 0
                        document.getElementById("sincefive").innerHTML = `${game.since5star} Pity`
                    }
                }
            }, 50)
        }, 4000)
    }
}






function getSpecial(id) {
    if (inprogress == 0) {
        conf = 0
        newpixels = 0
        document.getElementById("invsupercontainer").style.display = "none"
        document.getElementById("pullbuttons").style.display = "none"
        document.getElementById("shopsupercontainer").style.display = "none"
        document.getElementById("savesupercontainer").style.display = "none"
        inpull = 1
        
        for (let i=0; i<allitems.length; i++) {
            if (allitems[i].id == id) {
                newthing = allitems[i]
            }
        }

        let starsmax = checkStar(newthing)

        if (starsmax == 5) {
            pullstart5()
        } else if (starsmax == 4) {
            pullstart4()
        } else if (starsmax == 3) {
            pullstart3()
        } else {
            pullstart2()
        }


        setTimeout(function () {
            clearInterval(pullstartint)
            clearPullStart()
            serial = serial + 1
            newbuild = new StaticObj(newthing.id, serial, "", 0)
            inprogress = 1
            fadeStart(newthing.stars)
            document.getElementById("pullgot").innerHTML = `${newthing.name}`
            document.getElementById("pullgotimg").src = `../img/gacha/${newthing.id}.jpg`
            // getPixels(newthing.stars)
            game.inventory.push(newbuild)
            buildInv(newbuild)

            tenpullinterval = setInterval(function () {
                if (conf == 1) {
                    if (inprogress == 0) {
                        clearInterval(tenpullinterval)
                        clearStars()

                        // game.pixels = game.pixels + newpixels
                        // throwPixel(newpixels, 1)
                        
                        document.getElementById("invsupercontainer").style.display = "block"
                        document.getElementById("pullbuttons").style.display = "block"
                        document.getElementById("shopsupercontainer").style.display = "block"
                        document.getElementById("savesupercontainer").style.display = "block"
                        document.getElementById("pullbg").style.opacity = 0
                    }
                }
            }, 50)
        }, 4000)
    }
}



function checkStars(newthing) {
    let threestar = 0
    let fourstar = 0
    let fivestar = 0
    for (let i=0; i<newthing.length; i++) {
        if (newthing[i].stars == 3) {
            threestar = 1
        } else if (newthing[i].stars == 4) {
            fourstar = 1
        } else if (newthing[i].stars == 5) {
            fivestar = 1
        }
    }

    if (fivestar == 1) {
        return 5
    } else if (fourstar == 1) {
        return 4
    } else if (threestar == 1) {
        return 3
    } else {
        return 1
    }
}
function checkStar(newthing) {
    let threestar = 0
    let fourstar = 0
    let fivestar = 0
    if (newthing.stars == 3) {
        threestar = 1
    } else if (newthing.stars == 4) {
        fourstar = 1
    } else if (newthing.stars == 5) {
        fivestar = 1
    }

    if (fivestar == 1) {
        return 5
    } else if (fourstar == 1) {
        return 4
    } else if (threestar == 1) {
        return 3
    } else {
        return 1
    }
}


function getTen(set) {
    if (inprogress == 0) {
        newpixels = 0
        document.getElementById("pullbg").style.opacity = 0
        document.getElementById("invsupercontainer").style.display = "none"
        document.getElementById("pullbuttons").style.display = "none"
        document.getElementById("shopsupercontainer").style.display = "none"
        document.getElementById("savesupercontainer").style.display = "none"
        inpull = 1
        newthing = tenPull(set)

        let starsmax = checkStars(newthing)

        if (starsmax == 5) {
            pullstart5()
        } else if (starsmax == 4) {
            pullstart4()
        } else if (starsmax == 3) {
            pullstart3()
        } else {
            pullstart2()
        }

        setTimeout(function () {
            clearInterval(pullstartint)
            clearPullStart()
            conf = 1
            tenpullinterval = setInterval(function () {
                
                if (conf == 1) {
                    if (inprogress == 0) {
                        if (newthing.length == 1) {
                            clearInterval(tenpullinterval)
                            clearStars()

                            game.pixels = game.pixels + newpixels
                            throwPixel(newpixels, 1)

                            document.getElementById("invsupercontainer").style.display = "block"
                            document.getElementById("pullbuttons").style.display = "block"
                            document.getElementById("shopsupercontainer").style.display = "block"
                            document.getElementById("savesupercontainer").style.display = "block"
                            document.getElementById("pullbg").style.opacity = 0

                            document.getElementById("sincefive").innerHTML = `${game.since5star} Pity`
                        } else {
                            inprogress = 1
                            serial = serial + 1
                            fadeStart(newthing[0].stars)
                            if (newthing[0].stars < 5) {
                                game.since5star = game.since5star + 1
                            } else {
                                game.since5star = 0
                            }
                            document.getElementById("pullgot").innerHTML = `${newthing[0].name}`
                            document.getElementById("pullgotimg").src = `../img/gacha/${newthing[0].id}.jpg`
                            getPixels(newthing[0].stars)
                            
                            let itemmod = rollModifier()
                            document.getElementById("pullmodifier").innerHTML = itemmod[0]
                            newbuild = new StaticObj(newthing[0].id, serial, itemmod[0], itemmod[1])
                            game.inventory.push(newbuild)
                            buildInv(newbuild)
                            conf = 0
                            newthing.shift()
                        }   
                    }  
                }
            }, 50)
        }, 4000)
    }
}


function recallObj(link) {
    return eval(link)
}

function getInvData(slot) {
    entry = game.inventory[slot]
    let returndata = recallObj(entry.link)
    let totalreturn = [returndata, entry.serial]
    return totalreturn
}


let dynamicinv = []

function hiloinv() {
    dynamicinv = []
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 5) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 4) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 3) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 2) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 1) {
            dynamicinv.push(game.inventory[i])
        }
    }
}

function lohiinv() {
    dynamicinv = []
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 1) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 2) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 3) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 4) {
            dynamicinv.push(game.inventory[i])
        }
    }
    for (let i=0; i<game.inventory.length; i++) {
        if (getInvData(i)[0].stars == 5) {
            dynamicinv.push(game.inventory[i])
        }
    }
}

function modhiinv() {
    dynamicinv = []
    let maxmodstars = 0
    for (let i=0; i<game.inventory.length; i++) {
        if (game.inventory[i].modstars) {
            if (game.inventory[i].modstars > maxmodstars) {
                maxmodstars = game.inventory[i].modstars
            }
        } else {
            game.inventory[i].modstars = 0
        }
    }
    for (let i=0; i<maxmodstars+1; i++) {
        for (let j=0; j<game.inventory.length; j++) {
            if (game.inventory[j].modstars == (maxmodstars)-i) {
                dynamicinv.push(game.inventory[j])
            }
        }
        
    }
}

function loadInv(type) {
    // type 0 = default
    // type 1 = hi-lo stars
    // type 2 = lo-hi stars

    clearInv()
    if (type == 0) {
        for (let i=0; i<game.inventory.length;i++) {
            buildInv(game.inventory[i])
        }
    } else if (type == 1) {
        hiloinv()
        for (let i=0; i<dynamicinv.length; i++) {
            buildInv(dynamicinv[i])
        }
    } else if (type == 2) {
        lohiinv()
        for (let i=0; i<dynamicinv.length; i++) {
            buildInv(dynamicinv[i])
        }
    } else if (type == 3) {
        modhiinv()
        for (let i=0; i<dynamicinv.length; i++) {
            buildInv(dynamicinv[i])
        }
    } else {
        console.log("Improper 'type' passed, returning to default sort.")
        for (let i=0; i<game.inventory.length;i++) {
            buildInv(game.inventory[i])
        }
    }
    
}

function buildInv(item) {
    if (document.getElementById(`invtier${invtier}`)) {

    } else {
        invtier = invtier + 1
        const newitem = document.createElement("div")
        newitem.style.height = screen.availWidth / 10
        newitem.id = `invtier${invtier}`
        newitem.classList = "invtier"
        document.getElementById("invcontainer").appendChild(newitem)
    }

    if (document.getElementById(`invtier${invtier}`).childElementCount > 9) {
        invtier = invtier + 1
        const newitem = document.createElement("div")
        newitem.style.height = screen.availWidth / 10
        newitem.id = `invtier${invtier}`
        newitem.classList = "invtier"
        document.getElementById("invcontainer").appendChild(newitem)
    }
    const newitem = document.createElement("div")
    newitem.id = `inv${item.serial}`
    newitem.classList = "invitem"
    document.getElementById(`invtier${invtier}`).appendChild(newitem)
    const newimg = document.createElement("img")
    newimg.id = `invimg${item.serial}`
    newimg.src = `../img/gacha/${item.id}.jpg`
    newimg.classList = "invimg"
    document.getElementById(`inv${item.serial}`).appendChild(newimg)
    invelements.push(document.getElementById(`inv${item.serial}`))



    if (item.modifier.includes("Holy")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/jesus.jpg`
        newimgtwo.classList = "invimgoverlaylow"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    } 
    if (item.modifier.includes("Solid Gold")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/gold.png`
        newimgtwo.classList = "invimgoverlaymid"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    } 
    if (item.modifier.includes("Fire")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/fire.gif`
        newimgtwo.classList = "invimgoverlaylow"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }
    if (item.modifier.includes("Explosive")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/explosive.gif`
        newimgtwo.classList = "invimgoverlaylow"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    } 
    if (item.modifier.includes("Glowing")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/light.png`
        newimgtwo.classList = "invimgoverlaylow"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    } 
    if (item.modifier.includes("Dim")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/dark.png`
        newimgtwo.classList = "invimgoverlaymid"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    } 
    if (item.modifier.includes("New")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/new.png`
        newimgtwo.classList = "invimgoverlaymax"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    } 
    if (item.modifier.includes("Many-Legged")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/legged.png`
        newimgtwo.classList = "invimgoverlaymax"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }
    if (item.modifier.includes("Low Quality")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/lowq.png`
        newimgtwo.classList = "invimgoverlaymin"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }
    if (item.modifier.includes("Catty")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/catty.png`
        newimgtwo.classList = "invimgoverlaymax"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }
    if (item.modifier.includes("Gigachad")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/gigachad.jpg`
        newimgtwo.classList = "invimgoverlaymid"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }
    if (item.modifier.includes("Organic")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/organic.png`
        newimgtwo.classList = "invimgoverlaymax"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }
    if (item.modifier.includes("Girly")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/girly.png`
        newimgtwo.classList = "invimgoverlaymax"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }
    if (item.modifier.includes("Manly")) {
        const newimgtwo = document.createElement("img")
        newimgtwo.src = `../img/gacha/manly.png`
        newimgtwo.classList = "invimgoverlaymax"
        document.getElementById(`inv${item.serial}`).appendChild(newimgtwo)
    }

    updateInv(item.serial)
}



function updateInv(serial) {
    let invdata = getInvData(serial-1)[0]
    let upditem = document.getElementById(`inv${serial}`)
    let updimg = document.getElementById(`invimg${serial}`)
    // upditem.innerHTML = `Serial ${serial} <br> ${invdata.name} <br> ${invdata.stars} stars`

    updimg.src = `../img/gacha/${invdata.id}.jpg`
}



function clearInv() {
    invtier = 0
    invelements = []
    let newitem = document.createElement("div")
    newitem.id = "invcontainer"
    newitem.classList = "invcontainer"
    var old_element = document.getElementById("invcontainer");
    // var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(newitem, old_element);
}