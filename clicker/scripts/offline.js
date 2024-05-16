let moneynow = 0

function calcOffline(duration) {
    if (prestigelevel >= 500) {
        
        var earnings = duration * mpc
        var efficency = 0
        if (prestigelevel < 10000) {
          efficency = 25
          earnings = Math.round(earnings * 0.25)
        } else {
          efficency = 50
          earnings = Math.round(earnings * 0.50)
        }
        console.log(`Earned ${earnings} yarn while offline for ${duration} seconds (${efficency}% efficency)`)
        document.getElementById("offltop").innerHTML = `You were offline for ${parseSeconds(duration)}`
        document.getElementById("offlbot").innerHTML = `You made ${parseCommas(earnings)} yarn.`
        document.getElementById("offlper").innerHTML = `${efficency}% efficency`

        document.getElementById("mainpage").classList = "mainpage hidden"
        document.getElementById("prestigepage").classList = "prestigepage hidden"
        document.getElementById("adoptpage").classList = "adoptpage hidden"
        document.getElementById("cataloguepage").classList = "cataloguepage hidden"
        document.getElementById("changelog").classList = "changelog hidden"
        document.getElementById("resetpage").classList = "resetpage hidden"
        document.getElementById("tutorial").classList = "tutorialpage hidden"
        document.getElementById("offlinepage").classList = "offlinescreen"

        moneynow = dolor + earnings
    }
    return moneynow
}
