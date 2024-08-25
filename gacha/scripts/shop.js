let sliderright = document.getElementById("sliderright")
let buyslider = document.getElementById("buyslider")

let shoptype = 3 // 1=koin 2=vouch 3=pixel
let shopamount = 160 // cost per exchange
let shopin = 0 // the i-index of the shop you are currently in (refers to the same item in allshopitems)

let shoptitlebuild = ""

let allshopitems = []

function shopItem(type1, amount1, type2, amount2) {
    this.type1 = type1 // spend type1
    this.amount1 = amount1
    this.type2 = type2 // get type2
    this.amount2 = amount2
    allshopitems.push(this)
}

const pixeltovouch = new shopItem(3, 160, 2, 1)
const kointovouch = new shopItem(1, 130, 2, 1)
const kointopixel = new shopItem(1, 5, 3, 5)

let itemsbefore = 3






setInterval(function () {
    shoptype = allshopitems[shopin].type1
    shopamount = allshopitems[shopin].amount1

    shoptitlebuild = "You are buying"
    let specialcase = 0

    if (allshopitems[shopin].type2 == 1) {
        shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount2} KatKoin for`
    } else if (allshopitems[shopin].type2 == 2) {
        shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount2} Kat Vouchers for`
    } else if (allshopitems[shopin].type2 == 3) {
        shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount2} Pixels for`
    } else {
        specialcase = 1
        shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].type2} for`
    }


    if (specialcase == 1) {
        buyslider.max = 1
        sliderright.innerHTML = "1"
        if (shoptype == 1) {
            document.getElementById("buycost").innerHTML = `Buying x${buyslider.value}, costs ${shopamount*buyslider.value} KatKoin`
            shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount1} KatKoin each`
        } else if (shoptype == 2) {
            document.getElementById("buycost").innerHTML = `Buying x${buyslider.value}, costs ${shopamount*buyslider.value} Kat Vouchers`
            shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount1} Kat Vouchers each`
        } else if (shoptype == 3) {
            document.getElementById("buycost").innerHTML = `Buying x${buyslider.value}, costs ${shopamount*buyslider.value} Pixels`
            shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount1} Pixels each`
        }
    } else {





        if (shoptype == 1) {
            let slideramnt = Math.floor(game.katkoin/shopamount)
            if (slideramnt < 1) {
                slideramnt = 1
            }
            buyslider.max = slideramnt
            sliderright.innerHTML = `${slideramnt}`
            document.getElementById("buycost").innerHTML = `Buying x${buyslider.value}, costs ${shopamount*buyslider.value} KatKoin`
            shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount1} KatKoin each`
        } else if (shoptype == 2) {
            let slideramnt = Math.floor(game.katvouchers/shopamount)
            if (slideramnt < 1) {
                slideramnt = 1
            }
            buyslider.max = slideramnt
            sliderright.innerHTML = `${slideramnt}`
            document.getElementById("buycost").innerHTML = `Buying x${buyslider.value}, costs ${shopamount*buyslider.value} Kat Vouchers`
            shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount1} Kat Vouchers each`
        } else if (shoptype == 3) {
            let slideramnt = Math.floor(game.pixels/shopamount)
            if (slideramnt < 1) {
                slideramnt = 1
            }
            buyslider.max = slideramnt
            sliderright.innerHTML = `${slideramnt}`
            document.getElementById("buycost").innerHTML = `Buying x${buyslider.value}, costs ${shopamount*buyslider.value} Pixels`
            shoptitlebuild = `${shoptitlebuild} ${allshopitems[shopin].amount1} Pixels each`
        }
    }
   

    document.getElementById("buytop").innerHTML = shoptitlebuild
}, 50)


function confirmBuy() {
    setTimeout(function () {
        let lostqty = allshopitems[shopin].amount1 * buyslider.value
        let gainqty = allshopitems[shopin].amount2 * buyslider.value
        let gaintype = allshopitems[shopin].type2
        let failure = 0
    
        if (shoptype == 1) {
            if (game.katkoin >= lostqty) {
                game.katkoin = game.katkoin - lostqty
                throwKatKoin(lostqty, -1)
            } else {
                console.log("You dont have enough, nice try though")
                failure = 1
            }
        } else if (shoptype == 2) {
            if (game.katvouchers >= lostqty) {
                game.katvouchers = game.katvouchers - lostqty
                throwKatVoucher(lostqty, -1)
            } else {
                console.log("You dont have enough, nice try though")
                failure = 1
            }
        } else if (shoptype == 3) {
            if (game.pixels >= lostqty) {
                game.pixels = game.pixels - lostqty
                throwPixel(lostqty, -1)
            } else {
                console.log("You dont have enough, nice try though")
                failure = 1
            }
        }
    
        if (failure == 0) {
            if (gaintype == 1) {
                game.katkoin = game.katkoin + gainqty
                throwKatKoin(gainqty, 1)
            } else if (gaintype == 2) {
                game.katvouchers = game.katvouchers + gainqty
                throwKatVoucher(gainqty, 1)
            } else if (gaintype == 3) {
                game.pixels = game.pixels + gainqty
                throwPixel(gainqty, 1)
            } else {
                getSpecial(allshopitems[shopin].amount2)
            }
        }
        document.getElementById("buysupercontainer").style.display = "none"
        document.getElementById("pullgrey").style.display = "none"
    }, 100)
}

function cancelBuy() {
    document.getElementById("buysupercontainer").style.display = "none"
    document.getElementById("pullgrey").style.display = "none"
}

function openBuy(shop) {
    shopin = shop
    document.getElementById("buysupercontainer").style.display = "block"
    document.getElementById("pullgrey").style.display = "block"
    buyslider.value = 1
}