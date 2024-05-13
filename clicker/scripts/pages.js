function homepage() {
    document.getElementById("mainpage").classList = "mainpage"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
}

function prestigepage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
}

function adoptpage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog hidden"
}

function catapage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage"
    document.getElementById("changelog").classList = "changelog hidden"
}


function changepage() {
    document.getElementById("mainpage").classList = "mainpage hidden"
    document.getElementById("prestigepage").classList = "prestigepage hidden"
    document.getElementById("adoptpage").classList = "adoptpage hidden"
    document.getElementById("cataloguepage").classList = "cataloguepage hidden"
    document.getElementById("changelog").classList = "changelog"
}
