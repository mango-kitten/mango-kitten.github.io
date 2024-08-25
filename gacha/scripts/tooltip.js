let fullpos


// below lines are borrowed from stack overflow, not my own work
var mousePos;

document.onmousemove = handleMouseMove;
setInterval(getMousePosition, 100); // setInterval repeats every X ms

function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    mousePos = {
        x: event.pageX,
        y: event.pageY
    };
}

function getMousePosition() {
    var pos = mousePos;
    if (!fullpos) {
        fullpos = [-200, -200]
        return fullpos
    }
    else if (!pos) {
        return fullpos
    } 
    else {
        fullpos = [pos.x, pos.y]
        return fullpos
    }
}
// end of borrowed code


let currentpos
let tooltipheight = 50
let tooltipwidth = screen.width/10
tooltipdiv = document.getElementById("tooltip")
invdiv = document.getElementById("invcontainer")

tooltipcont = setInterval(function() { // runs the dynamic tooltip yay
    currentpos = getMousePosition()
    tooltipheight = tooltipdiv.clientHeight
    tooltipwidth = tooltipdiv.clientWidth
    invheight = invdiv.clientHeight

    if (1==1) {
        // if (document.getElementById("invsupercontainer").matches(':hover')) {

            let matchedelement = 0
            for (let i=0; i<invelements.length; i++) {
                if (window.isHover(invelements[i])) {
                    let invnum = Number(invelements[i].id.replace("inv", ""))
                    let invdata = getInvData(invnum-1)[0]
                    let htmlbuild = `Serial ${invnum}<br>${game.inventory[invnum-1].modifier} ${invdata.name}<br>`

                    if (invdata.stars == 1) {
                        htmlbuild = `${htmlbuild}<img src="../img/gacha/1star.png" class="tooltipg">`
                    } else if (invdata.stars == 2) {
                        htmlbuild = `${htmlbuild}<img src="../img/gacha/2star.png" class="tooltipg">`
                    } else if (invdata.stars == 3) {
                        htmlbuild = `${htmlbuild}<img src="../img/gacha/3star.png" class="tooltipg">`
                    } else if (invdata.stars == 4) {
                        htmlbuild = `${htmlbuild}<img src="../img/gacha/4star.png" class="tooltipg">`
                    } else if (invdata.stars == 5) {
                        htmlbuild = `${htmlbuild}<img src="../img/gacha/5star.png" class="tooltipg">`
                    }
                    htmlbuild = `${htmlbuild}<br>${invdata.flavor}`
                    tooltipdiv.innerHTML = htmlbuild
                    // tooltipdiv.innerHTML = `Serial ${i+1}<br>${invdata.name}<br>${invdata.stars} stars<br>${invdata.flavor}`
                    matchedelement = 1
                }

                if (window.isHover(document.getElementById("pixelvouch"))) {
                    tooltipdiv.innerHTML = `+1 Kat Voucher<br>-160 Pixels`
                    matchedelement = 1
                }
                if (window.isHover(document.getElementById("koinvouch"))) {
                    tooltipdiv.innerHTML = `+1 Kat Voucher<br>-130 KatKoin`
                    matchedelement = 1
                }
                if (window.isHover(document.getElementById("koinpixel"))) {
                    tooltipdiv.innerHTML = `+5 Pixels<br>-5 KatKoin`
                    matchedelement = 1
                }

                if (window.isHover(document.getElementById("serialsort"))) {
                    tooltipdiv.innerHTML = `Sort by Serial`
                    matchedelement = 1
                }
                if (window.isHover(document.getElementById("hisort"))) {
                    tooltipdiv.innerHTML = `Sort Hi-Lo Stars`
                    matchedelement = 1
                }
                if (window.isHover(document.getElementById("losort"))) {
                    tooltipdiv.innerHTML = `Sort Lo-Hi Stars`
                    matchedelement = 1
                }
                if (window.isHover(document.getElementById("modsort"))) {
                    tooltipdiv.innerHTML = `Sort by Modifier Stars`
                    matchedelement = 1
                }
                
                if (window.isHover(document.getElementById("uiddisp"))) {
                    tooltipdiv.innerHTML = `Your UID. This is unique to each person.`
                    matchedelement = 1
                }

                for (let i=0; i<tempshop.length; i++) {
                    if (window.isHover(document.getElementById(`${tempshop[i].id}shop`))) {
                        tooltipdiv.innerHTML = `${tempshop[i].html}`
                        matchedelement = 1
                        shopindic = i + itemsbefore
                    }
                }



            }

            if (matchedelement == 1) {
                tooltipdiv.style.display = "block"
            } else {
                tooltipdiv.style.display = "none"
                tooltipdiv.innerHTML = ""
            }
        // } else {
        //     tooltipdiv.style.opacity = "0"
        //     currentpos[1] = invheight - tooltipheight - 10
        // }

        if (currentpos[0] > screen.availWidth - tooltipwidth - 10 - 30) {
            currentpos[0] = screen.availWidth - tooltipwidth - 10 - 30
        }
        if (currentpos[1] > screen.availHeight - tooltipheight - 100 - 30) {
            currentpos[1] = screen.availHeight - tooltipheight - 100 - 30
        }
        if (currentpos[0] < 10) {
            currentpos[0] = 10
        }
        if (currentpos[1] < 10) {
            currentpos[1] = 10
        }
        tooltipdiv.style.left = `${currentpos[0] + 25}px`
        tooltipdiv.style.top = `${currentpos[1] + 25}px`
    }
}, 20);