let star1 = document.getElementById("star1")
let star2 = document.getElementById("star2")
let star3 = document.getElementById("star3")
let star4 = document.getElementById("star4")
let star5 = document.getElementById("star5")
let starsound = document.getElementById("starsound")
let dingsound = document.getElementById("dingsound")

let pullgetting = document.getElementById("pullgetting")
let pullgettinginterval

let pullbgitem = document.getElementById("pullbg")
let starsgot = 5
let starsinterval
let screeninterval
let repeats = 0


function showItem() {
    pullgettinginterval = setInterval(function () {
        if (Number(pullgetting.style.opacity) >= 1) {
            clearInterval(pullgettinginterval)
        } else {
            pullgetting.style.opacity = String(Number(pullgetting.style.opacity) + 0.1)
        }
    }, 30)
}


function openPull(amount) {
    if (game.katvouchers < amount) {
        document.getElementById("pullgrey").style.display = "block"
        document.getElementById("pullne").style.display = "block"
        
        document.getElementById("pullne1").innerHTML = `(this action will cost ${(amount-game.katvouchers)*130} KatKoin)`
        let pullbuttonno = document.getElementById("pullneno")
        let pullbuttonyes = document.getElementById("pullneyes")
        pullbuttonyes.addEventListener('mousedown', function() {
            continuePull(amount-game.katvouchers, amount)
        });
        pullbuttonno.addEventListener('mousedown', function() {
            cancelPull()
        });
    } else {
        if (amount == 1) {
            getItem(1)
        } else if (amount == 10) {
            getTen(1)
        }
        game.katvouchers = game.katvouchers - amount
    }
}


function continuePull(remaining, amount) {
    document.getElementById("pullgrey").style.display = "none"
    document.getElementById("pullne").style.display = "none"
    var old_element = document.getElementById("pullneno");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    old_element = document.getElementById("pullneyes");
    new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    

    if (game.katkoin >= remaining*130) {
        game.katkoin = game.katkoin - (remaining*130)
        game.katvouchers = game.katvouchers + remaining
        throwKatVoucher(10-remaining, -1)
        throwKatKoin(remaining*130, -1)
    } else {
        let errormessage = document.getElementById("errormessage")
        errormessage.style.opacity = "0.7"
        errormessage.innerHTML = `Not enough KatKoin (${game.katkoin}/${remaining*130})`
        setTimeout(function () {
            errormessage.style.opacity = "0"
        }, 3000)
    }
    
    if (game.katvouchers >= amount) {
        if (amount == 1) {
            getItem(1)
        } else if (amount == 10) {
            getTen(1)
        }
        game.katvouchers = game.katvouchers - amount
    }
}

function cancelPull() {
    document.getElementById("pullgrey").style.display = "none"
    document.getElementById("pullne").style.display = "none"
    var old_element = document.getElementById("pullneno");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    old_element = document.getElementById("pullneyes");
    new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}

let pullstar = document.getElementById("pullstartfull")
let pullstar2 = document.getElementById("pullstart2")
let pullstar3 = document.getElementById("pullstart3")
let pullstar4 = document.getElementById("pullstart4")
let pullstar5 = document.getElementById("pullstart5")
let pullstartint

function clearPullStart() {
    pullstar.style.display = "none"
    pullstar2.style.display = "none"
    pullstar3.style.display = "none"
    pullstar4.style.display = "none"
    pullstar5.style.display = "none"
    pullstar2.style.opacity = 0
    pullstar3.style.opacity = 0
    pullstar4.style.opacity = 0
    pullstar5.style.opacity = 0
    clearInterval(pullstartint)
}
function pullstart2() {
    pullstar.style.display = "block"
    pullstar2.style.display = "block"
    pullstar2.style.opacity = 0.02
    pullstar2.style.scale = 1
    pullstartint = setInterval(function () {
        let startopac = Number(pullstar2.style.opacity)
        if (startopac >= 1) {
            pullstar2.style.opacity = 1
            clearInterval(pullstartint)
        } else {
            pullstar2.style.opacity = startopac * 2
        }
    }, 100)
    setTimeout(function () {
        clearInterval(pullstartint)
        pullstar2.style.scale = 1.8
        pullstartint = setInterval(function () {
            let startopac = Number(pullstar2.style.opacity)
            if (startopac <= 0.1) {
                pullstar2.style.opacity = 0.1
                clearInterval(pullstartint)
            } else {
                pullstar2.style.opacity = startopac - 0.07
            }
        }, 100)
    }, 2000)
}

function pullstart3() {
    pullstar.style.display = "block"
    pullstar3.style.display = "block"
    pullstar3.style.opacity = 0.02
    pullstar3.style.scale = 1
    pullstartint = setInterval(function () {
        let startopac = Number(pullstar3.style.opacity)
        if (startopac >= 1) {
            pullstar3.style.opacity = 1
            clearInterval(pullstartint)
        } else {
            pullstar3.style.opacity = startopac * 2
        }
    }, 100)
    setTimeout(function () {
        clearInterval(pullstartint)
        pullstar3.style.scale = 1.8
        pullstartint = setInterval(function () {
            let startopac = Number(pullstar3.style.opacity)
            if (startopac <= 0.1) {
                pullstar3.style.opacity = 0.1
                clearInterval(pullstartint)
            } else {
                pullstar3.style.opacity = startopac - 0.07
            }
        }, 100)
    }, 2000)
}

function pullstart4() {
    pullstar.style.display = "block"
    pullstar4.style.display = "block"
    pullstar4.style.opacity = 0.02
    pullstar4.style.scale = 1
    pullstartint = setInterval(function () {
        let startopac = Number(pullstar4.style.opacity)
        if (startopac >= 1) {
            pullstar4.style.opacity = 1
            clearInterval(pullstartint)
        } else {
            pullstar4.style.opacity = startopac * 2
        }
    }, 100)
    setTimeout(function () {
        clearInterval(pullstartint)
        pullstar4.style.scale = 1.8
        pullstartint = setInterval(function () {
            let startopac = Number(pullstar4.style.opacity)
            if (startopac <= 0.1) {
                pullstar4.style.opacity = 0.1
                clearInterval(pullstartint)
            } else {
                pullstar4.style.opacity = startopac - 0.07
            }
        }, 100)
    }, 2000)
}

function pullstart5() {
    pullstar.style.display = "block"
    pullstar5.style.display = "block"
    pullstar5.style.opacity = 0.02
    pullstar5.style.scale = 1
    pullstartint = setInterval(function () {
        let startopac = Number(pullstar5.style.opacity)
        if (startopac >= 1) {
            pullstar5.style.opacity = 1
            clearInterval(pullstartint)
        } else {
            pullstar5.style.opacity = startopac * 2
        }
    }, 100)
    setTimeout(function () {
        clearInterval(pullstartint)
        pullstar5.style.scale = 1.8
        pullstartint = setInterval(function () {
            let startopac = Number(pullstar5.style.opacity)
            if (startopac <= 0.1) {
                pullstar5.style.opacity = 0.1
                clearInterval(pullstartint)
            } else {
                pullstar5.style.opacity = startopac - 0.07
            }
        }, 100)
    }, 2000)
}




function clearStars() {
    star1.style.opacity = 0
    star2.style.opacity = 0
    star3.style.opacity = 0
    star4.style.opacity = 0
    star5.style.opacity = 0
    document.getElementById("stars").style.display = "none"
}
clearStars()

function fadeStart(stars) {
    document.getElementById("stars").style.display = "block"
    pullbgitem.style.opacity = 0
    star1.style.opacity = 0
    star2.style.opacity = 0
    star3.style.opacity = 0
    star4.style.opacity = 0
    star5.style.opacity = 0
    pullgetting.style.opacity = 0
    starsgot = stars
    inprogress = 1

    screeninterval = setInterval(function () {
        if (Number(pullbgitem.style.opacity) >= 1.00) {
            clearInterval(screeninterval)
        } else {
            pullbgitem.style.opacity = Number(pullbgitem.style.opacity) + 0.05
        } 
    }, 30)

    fadeOne()
}

function fadeOne() { // 10 intervals of .05 scale and .1 opacity
    star1.style.scale = 1.5
    star1.style.opacity = 0
    repeats = 10
    starsinterval = setInterval(function () {
        star1.style.scale = star1.style.scale - 0.05
        star1.style.opacity = String(Number(star1.style.opacity) + 0.1)
        repeats = repeats - 1
        if (repeats == 7) {
            starsound.currenttime = 0
            starsound.pause();
            starsound.play();
        }
        if (repeats == 7 && starsgot < 2) {
            showItem()
        }
        if (repeats < 1) {
            clearInterval(starsinterval)
            star1.style.scale = 1
            star1.style.scale = 1 
            if (starsgot > 1) {
                fadeTwo()
            } else {
                setTimeout(function () {
                    inprogress = 0
                }, 500)
            }
        }
    }, 30)
}

function fadeTwo() { // 10 intervals of .05 scale and .1 opacity after 100ms delay
    setTimeout(function () {
        star2.style.scale = 1.5
        star2.style.opacity = 0
        repeats = 10
        starsinterval = setInterval(function () {
            star2.style.scale = star2.style.scale - 0.05
            star2.style.opacity = String(Number(star2.style.opacity) + 0.1)
            repeats = repeats - 1
            if (repeats == 2) {
                starsound.currenttime = 0
                starsound.pause();
                starsound.play();
            }
            if (repeats == 2 && starsgot < 3) {
                showItem()
            }
            if (repeats < 1) {
                clearInterval(starsinterval)
                star2.style.scale = 1
                star2.style.scale = 1
                if (starsgot > 2) {
                    fadeThree()
                } else {
                    setTimeout(function () {
                        inprogress = 0
                    }, 500)
                }
            }
        }, 30)
    }, 100)
}

function fadeThree() { // 20 intervals of .05 scale and .05 opacity after 300ms delay
    setTimeout(function () {
        star3.style.scale = 2
        star3.style.opacity = 0
        repeats = 20
        starsinterval = setInterval(function () {
            star3.style.scale = star3.style.scale - 0.05
            star3.style.opacity = String(Number(star3.style.opacity) + 0.05)
            repeats = repeats - 1
            if (repeats == 5) {
                starsound.currenttime = 0
                starsound.pause();
                starsound.play();
            }
            if (repeats == 5 && starsgot < 4) {
                showItem()
            }
            if (repeats < 1) {
                clearInterval(starsinterval)
                star3.style.scale = 1
                star3.style.scale = 1
                if (starsgot > 3) {
                    fadeFour()
                } else {
                    setTimeout(function () {
                        inprogress = 0
                    }, 500)
                }
            }
        }, 30)
    }, 300)
    
}

function fadeFour() {
    setTimeout(function () { // 25 intervals of .12 scale and .04 opacity after 600ms delay
        star4.style.scale = 4
        star4.style.opacity = 0
        repeats = 25
        starsinterval = setInterval(function () {
            star4.style.scale = star4.style.scale - 0.12
            star4.style.opacity = String(Number(star4.style.opacity) + 0.04)
            repeats = repeats - 1
            if (repeats == 5) {
                starsound.currenttime = 0
                starsound.pause();
                starsound.play();
            }
            if (repeats == 5 && starsgot < 5) {
                showItem()
            }
            if (repeats < 1) {
                clearInterval(starsinterval)
                star4.style.scale = 1
                star4.style.scale = 1
                if (starsgot > 4) {
                    fadeFive()
                } else {
                    setTimeout(function () {
                        dingsound.currenttime = 0
                        dingsound.pause()
                        dingsound.play()
                    }, 500)
                    setTimeout(function () {
                        inprogress = 0 
                    }, 1000)
                }
            }
        }, 30)
    }, 600)
}



function fadeFive() {
    setTimeout(function () { // 35 intervals of .17142857142 scale and .02857142857 opacity after 600ms delay
        star5.style.scale = 6
        star5.style.opacity = 0
        repeats = 31
        starsinterval = setInterval(function () {
            star5.style.scale = star5.style.scale - 0.17142857142
            star5.style.opacity = String(Number(star5.style.opacity) + 0.02857142857)
            repeats = repeats - 1
            if (repeats == 6) {
                starsound.currenttime = 0
                starsound.pause();
                starsound.play();
            }
            if (repeats == 6) {
                showItem()
            }
            if (repeats < 1) {
                clearInterval(starsinterval)
                star5.style.scale = 1
                star5.style.scale = 1
                setTimeout(function () {
                    dingsound.currenttime = 0
                    dingsound.pause()
                    dingsound.play()
                }, 500)
                setTimeout(function () {
                    inprogress = 0
                }, 1000)
            }
        }, 30)
    }, 900)
}