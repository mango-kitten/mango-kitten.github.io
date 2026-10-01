let moneynow = 0

function calcOffline(duration) {
    if (game.fishbones >= 500) {
      var earnings = duration * (mpc * cps)
      var efficency = 0
      if (game.fishbones > 1500000 && duration < 3600) {
        efficency = 100
      } else {
        if (game.fishbones < 10000) {
          efficency = 25
          earnings = earnings / 4
        } else {
          efficency = 50
          earnings = earnings / 2
        }
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


      if (earnings > 1000000000000) {
        achstore = `${achstore.substring(0, 5)}1${achstore.substring(6)}`
        game.achievements[45] = 1
      }

      moneynow = game.yarn + earnings
      totalnow = game.totalyarn + earnings
    } else {
      moneynow = game.yarn
      totalnow = game.totalyarn
    }
    return [moneynow, totalnow]
}
