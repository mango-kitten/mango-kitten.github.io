let pfpstate = 0


function swapPfp() {
    if (pfpstate == 0) {
        document.getElementById("mainsitepfpimg").src = "img/mangopfpalt.png"
        pfpstate = 1
    } else if (pfpstate == 1) {
        document.getElementById("mainsitepfpimg").src = "img/mangopfpbasic.png"
        pfpstate = 0
    }
}

function toHome() {
    document.getElementById("mainsitehome").classList = ""
    document.getElementById("mainsitelinktree").classList = "hidden"
}
function toLinktree() {
    document.getElementById("mainsitehome").classList = "hidden"
    document.getElementById("mainsitelinktree").classList = ""        
}
