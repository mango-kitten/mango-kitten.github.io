let katkointhrow = document.getElementById("throwkoin")
let katvouchthrow = document.getElementById("throwvouch")
let pixelthrow = document.getElementById("throwpixel")
let koinint
let vouchint
let pixelint

function remPer(input) {
    return input.replace("%", "")
}


function throwKatKoin(amount, type) { // type is either -1 or 1, defines whether gaining or losing
    clearInterval(koinint)
    let stringbuild = ""
    if (type == 1) {
        stringbuild = "+"
    } else if (type == -1) {
        stringbuild = "-"
    } else {
        console.log("Improperly passed type arg, cancelling")
        return false
    }
    stringbuild = `${stringbuild}${amount}`

    
    katkointhrow.innerHTML = stringbuild
    katkointhrow.style.opacity = 1
    katkointhrow.style.bottom = "5.5%"
    koinint = setInterval(function () {
        if (Number(katkointhrow.style.opacity) <= 0) {
            clearInterval(koinint)
        } else {
            katkointhrow.style.opacity = Number(katkointhrow.style.opacity) - 0.025
            let currentper = Number(remPer(katkointhrow.style.bottom))
            katkointhrow.style.bottom = `${currentper+0.25}%`
        }
    }, 30)
}


function throwKatVoucher(amount, type) {
    clearInterval(vouchint)
    let stringbuild = ""
    if (type == 1) {
        stringbuild = "+"
    } else if (type == -1) {
        stringbuild = "-"
    } else {
        console.log("Improperly passed type arg, cancelling")
        return false
    }
    stringbuild = `${stringbuild}${amount}`

    
    katvouchthrow.innerHTML = stringbuild
    katvouchthrow.style.opacity = 1
    katvouchthrow.style.bottom = "13.5%"
    vouchint = setInterval(function () {
        if (Number(katvouchthrow.style.opacity) <= 0) {
            clearInterval(vouchint)
        } else {
            katvouchthrow.style.opacity = Number(katvouchthrow.style.opacity) - 0.025
            let currentper = Number(remPer(katvouchthrow.style.bottom))
            katvouchthrow.style.bottom = `${currentper+0.25}%`
        }
    }, 30)
}

function throwPixel(amount, type) {
    clearInterval(pixelint)
    let stringbuild = ""
    if (type == 1) {
        stringbuild = "+"
    } else if (type == -1) {
        stringbuild = "-"
    } else {
        console.log("Improperly passed type arg, cancelling")
        return false
    }
    stringbuild = `${stringbuild}${amount}`

    
    pixelthrow.innerHTML = stringbuild
    pixelthrow.style.opacity = 1
    pixelthrow.style.bottom = "21.5%"
    pixelint = setInterval(function () {
        if (Number(pixelthrow.style.opacity) <= 0) {
            clearInterval(pixelint)
        } else {
            pixelthrow.style.opacity = Number(pixelthrow.style.opacity) - 0.025
            let currentper = Number(remPer(pixelthrow.style.bottom))
            pixelthrow.style.bottom = `${currentper+0.25}%`
        }
    }, 30)
}