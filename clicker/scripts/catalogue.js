let mangocat = document.getElementById("14acati")
let schcat = document.getElementById("9acati")
let schclick = 0



let rustle = document.getElementById("cardrustle")


mangocat.addEventListener('click', function () {
    achstore = `${achstore.substring(0, 1)}1${achstore.substring(2)}`
    game.achievements[41] = 1
})

schcat.addEventListener('click', function () {
    schclick = Math.random() * 5
    rustle.play();
    if (schclick < 4) {

    } else {
        achstore = `${achstore.substring(0, 2)}1${achstore.substring(3)}`
        game.achievements[42] = 1
        document.getElementById("murdera").classList = "tooltipbot hidden"
        document.getElementById("murderb").classList = "tooltipbot"
    }
})

function enterCat(id) {
    // while (catgot.length < id) {
    //     catgot.push(0)
    // }
    // if (isNaN(Number(catgot[id]))) {
    //     catgot.splice(id, 1, 0)
    // }
    currentamnt = game.catgot[id]
    cataUnlock(id)
    // catgot.splice(id, 1, currentamnt+1)
    amtid = `${String(id)}bcata`
    document.getElementById(amtid).innerHTML = `Obtained: ${String(game.catgot[id])}`
}
function cataUnlock(id) {
    // while (catgot.length < id) {
    //     catgot.push(0)
    // }
    // if (isNaN(Number(catgot[id]))) {
    //     catgot.splice(id, 1, 0)
    // }
    topida = `${String(id)}acatt`
    topidb = `${String(id)}bcatt`
    botida = `${String(id)}acatd`
    botidb = `${String(id)}bcatd`
    imgida = `${String(id)}acati`
    imgidb = `${String(id)}bcati`

    if (document.getElementById(topida)) {
        document.getElementById(topida).classList = "cattext"
        document.getElementById(topidb).classList = "cattext hidden greytext"
        document.getElementById(botida).classList = "cattext2"
        document.getElementById(botidb).classList = "cattext2 hidden greytext"
        document.getElementById(imgida).classList = "catimg"
        document.getElementById(imgidb).classList = "catimg hidden"
        if (id == 9 && game.achievements[42]== 1) {
            document.getElementById("9acati").classList = "catimg hidden"
            document.getElementById("9ccati").classList = "catimg"
        }
        amtid = `${String(id)}bcata`
        document.getElementById(amtid).innerHTML = `Obtained: ${String(game.catgot[id])}`
    } else {
        console.log("Error: Catalogue Entry not found")
    }
}

function cataLock(id) {
    topida = `${String(id)}acatt`
    topidb = `${String(id)}bcatt`
    botida = `${String(id)}acatd`
    botidb = `${String(id)}bcatd`
    imgida = `${String(id)}acati`
    imgidb = `${String(id)}bcati`

    if (document.getElementById(topida)) {
        document.getElementById(topida).classList = "cattext hidden"
        document.getElementById(topidb).classList = "cattext greytext"
        document.getElementById(botida).classList = "cattext2 hidden"
        document.getElementById(botidb).classList = "cattext2 greytext"
        document.getElementById(imgida).classList = "catimg hidden"
        document.getElementById(imgidb).classList = "catimg"
        amtid = `${String(id)}bcata`
        document.getElementById(amtid).innerHTML = `Obtained: ${String(game.catgot[id])}`
    }
}

function resetCatalogue() {
    // catgot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // localStorage.setItem("catgot",[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    for (let i=0; i<game.catgot.length; i++) {
        game.catgot[i] = 0
    }
    updateCatalogue();
}

function loadCatalogue() {
    if (game.cats.length > 0) {
        for (let i=0;i<game.catgot.length;i++) {
            if (game.catgot[i] > 0) {
                enterCat(i)
                // catgot.splice(cats[i], 1, 1)
            } else {
            }
        }
    }
}
