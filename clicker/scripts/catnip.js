if (game.catnip) {
    console.log("catnip exists")
} else {
    game.catnip = 0
}


let catnipsc = 0
let catnipmulti = 1
let catnipmax = 99999

function gaincatnip(sec = 1) {
    if (game.fishbones >= 999999) {
        catnipsc = 1
    }
    game.catnip = game.catnip + (catnipsc * sec)
    if (game.catnip > catnipmax) {
        game.catnip = catnipmax
    }

    if (game.catnip > 0) {
        catnipmulti = ((game.catnip-(0.0000050005*game.catnip*game.catnip))/100)+1
        document.getElementById("catnipbox").classList = "catnipbox"
    } else {
        catnipmulti = 1
        document.getElementById("catnipbox").classList = "catnipbox hidden"
    }
    document.getElementById("catnipdisp").innerHTML = `Catnip: ${game.catnip} (x${Math.round(catnipmulti*10000)/10000} yarn)`
}