let catset = [0, 1,  1,     1,       1,       1,        2,       2,      2,      2,            3,      3,     3,     3,           3,      4,     4,    4,    4,       5,        5,      5,      5,     5,        5,       5,       5,        5,      5]
let weight = [0, 500,200,   150,     75,      25,       1000,    300,    50,     2,            500,    400,   100,   25,          1,      500,   500,  200,  20,      1500,     1000,   800,    600,   500,      300,     150,     75,       30,     1]
let mpcadd = [0, 5,  10,     20,     30,      50,       75,      200,    300,    1000,         1000,   1500,  3000,  5000,        10000,  7500,  7500, 10000,30000,   10000,    15000,  20000,  25000, 30000,    40000,   50000,   75000,    100000, 200000]
let catcps = [0, 0,  0,     0,       0,       0,        0,       0,      0,      0,            1,      1,     2,     2,           3,      2,     2,    4,    10,      10,       10,     15,     15,    20,       25,      30,      40,       50,     100]
let ctname = ["","","Tabby","Tuxedo","Calico","Siamese","Zombie","Demon","Angel","Shrodingers","Apple","Pear","Plum","Watermelon","Mango","HTML","CSS","JS", "Python","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto","Astronaut"]
let possibleids = []
let combpool = 0
let weightroll = 0
let rescheck = 0
let result = 0
let foundres = 0
let catgot1 = 0
let catgot2 = 0
let catgot3 = 0
let catgot4 = 0
let catgot5 = 0

let betterinfo = 0

function getCat(set, roll = 9999) { // DO NOT TOUCH THIS FUNCTION YOU FUCKING IDIOT IT ACTUALLY WORKS
  possibleids = [] // empty the possibilites and other stuff
  combpool = 0
  rescheck = 0
  result = 0
  foundres = 0
  for (let i=0; i<catset.length; i++) {
    if (parseInt(catset[i]) == parseInt(set)) {
      possibleids.splice(possibleids.length, 0, i) // get every cat from that set
    }
  }
  for (let i=0; i<possibleids.length; i++) {
    combpool = combpool + weight[possibleids[i]] // total up the weights
  }
  combpool = combpool + 1
  if (roll == 9999) {
    weightroll = Math.random() * combpool // roll, multiply by max weight
    weightroll = weightroll + rollboost // oooooo prestige 7500 stuff waow
  } else {
    weightroll = roll
  }
  console.log("Rolled ",weightroll," out of ",combpool)
  for (let i=0; i<possibleids.length; i++) {
    rescheck = rescheck + weight[possibleids[i]]
    if (rescheck >= weightroll && foundres == 0) {
      foundres = 1 // now it can only happen once
      result = possibleids[i]
    }
  }
  if (foundres == 0) {
    result = possibleids[possibleids.length-1]
  }
  return result
}



function buyCatSet1(id = 0) {
  if (id == 0) {
    if (dolor >= 500) {
        catgot1 = getCat(1)
        enterCat(catgot1)
        iscat1 = 1
        document.getElementById("catres1").innerHTML = `Got a ${String(ctname[catgot1])} Cat (+${String(mpcadd[catgot1])} ypc)`
        document.getElementById("cat1error").innerHTML = "---"
        dolor = dolor-500
        localsave();
        updatetext();
    } else {
        document.getElementById("cat1error").innerHTML = "Too poor!"
    }
  } else {
    catgot1 = getCat(1, id)
    enterCat(catgot1)
    iscat1 = 1
    document.getElementById("catres1").innerHTML = `Got a ${String(ctname[catgot1])} Cat (+${String(mpcadd[catgot1])} ypc)`
    document.getElementById("cat1error").innerHTML = "---"
    updatetext();
  }
}

function buyBetter1() {
  let catiter = 0
  if (cats[0] == 5) {
    console.log("You already have the best cat")
  } else {
    clearTimeout(betterinfo)
    while (catgot1 <= cats[0] && dolor >= 500 && catiter < buybetter) {
      catiter = catiter + 1
      buyCatSet1()
    }
    document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
    betterinfo = setTimeout(function () {
      document.getElementById("iterc").innerHTML = `---`
    }, 5000)
  }
}


function keepCat1() {
  if (iscat1 == 1) {
    mpc = mpc - mpcadd[cats[0]]
    cats.splice(0, 1, catgot1)
    mpc = mpc + mpcadd[catgot1]
    document.getElementById("catres1").innerHTML = `Search for a new cat...`
    document.getElementById("cat1error").innerHTML = "---"
    document.getElementById("catown1").innerHTML = `You have a ${String(ctname[cats[0]])} Cat (+${String(mpcadd[cats[0]])} ypc)`
    iscat1 = 0
    catgot1 = 0
    localsave();
    updatetext();
  } else {
    document.getElementById("cat1error").innerHTML = "There is no cat waiting!"
  }
}

function releaseCat1() {
  if (iscat1 == 1) {
    document.getElementById("catres1").innerHTML = `Search for a new cat...`
    document.getElementById("cat1error").innerHTML = "---"
    updatetext();
    iscat1 = 0
    catgot1 = 0
  } else {
    document.getElementById("cat1error").innerHTML = "There is no cat waiting!"
  }
}




function buyCatSet2(id = 0) {
    if (id == 0) {
        if (dolor >= 20000) {
            catgot2 = getCat(2)
            enterCat(catgot2)
            iscat2 = 1
            document.getElementById("catres2").innerHTML = `Got a ${String(ctname[catgot2])} Cat (+${String(mpcadd[catgot2])} ypc)`
            document.getElementById("cat2error").innerHTML = "---"
            dolor = dolor-20000
            localsave();
            updatetext();
            } else {
                document.getElementById("cat2error").innerHTML = "Too poor!"
            }
    } else {
        catgot2 = getCat(2, id)
        enterCat(catgot2)
        iscat2 = 1
        document.getElementById("catres2").innerHTML = `Got a ${String(ctname[catgot2])} Cat (+${String(mpcadd[catgot2])} ypc)`
        document.getElementById("cat2error").innerHTML = "---"
        updatetext();
    }
}
  
function buyBetter2() {
  let catiter = 0
  if (cats[1] == 9) {
    console.log("You already have the best cat")
  } else {
    clearTimeout(betterinfo)
    while (catgot2 <= cats[1] && dolor >= 20000 && catiter < buybetter) {
      catiter = catiter + 1
      buyCatSet2()
    }
    document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
    betterinfo = setTimeout(function () {
      document.getElementById("iterc").innerHTML = `---`
    }, 5000)
  }
}



function keepCat2() {
    if (iscat2 == 1) {
      mpc = mpc - mpcadd[cats[1]]
      cats.splice(1, 1, catgot2)
      mpc = mpc + mpcadd[catgot2]
      document.getElementById("catres2").innerHTML = `Summon a new cat...`
      document.getElementById("cat2error").innerHTML = "---"
      document.getElementById("catown2").innerHTML = `You have a ${String(ctname[cats[1]])} Cat (+${String(mpcadd[cats[1]])} ypc)`
      iscat2 = 0
      catgot2 = 0
      localsave();
      updatetext();
    } else {
      document.getElementById("cat2error").innerHTML = "There is no cat waiting!"
    }
  }
  
function releaseCat2() {
    if (iscat2 == 1) {
      document.getElementById("catres2").innerHTML = `Summon a new cat...`
      document.getElementById("cat2error").innerHTML = "---"
      updatetext();
      iscat2 = 0
      catgot2 = 0
    } else {
      document.getElementById("cat2error").innerHTML = "There is no cat waiting!"
    }
}








function buyCatSet3(id = 0) {
    if (id == 0) {
        if (dolor >= 500000) {
            catgot3 = getCat(3)
            enterCat(catgot3)
            iscat3 = 1
            document.getElementById("catres3").innerHTML = `Got a ${String(ctname[catgot3])} Cat (+${String(mpcadd[catgot3])} ypc, +${String(catcps[catgot3])} cps)`
            document.getElementById("cat3error").innerHTML = "---"
            dolor = dolor-500000
            localsave();
            updatetext();
        } else {
            document.getElementById("cat3error").innerHTML = "Too poor!"
        }
    } else {
        catgot3 = getCat(3, id)
        enterCat(catgot3)
        iscat3 = 1
        document.getElementById("catres3").innerHTML = `Got a ${String(ctname[catgot3])} Cat (+${String(mpcadd[catgot3])} ypc, +${String(catcps[catgot3])} cps)`
        document.getElementById("cat3error").innerHTML = "---"
        updatetext();
    }
}
  
function buyBetter3() {
  let catiter = 0
  if (cats[2] == 14) {
    console.log("You already have the best cat")
  } else {
    clearTimeout(betterinfo)
    while (catgot3 <= cats[2] && dolor >= 500000 && catiter < buybetter) {
      catiter = catiter + 1
      buyCatSet3()
    }
    document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
    betterinfo = setTimeout(function () {
      document.getElementById("iterc").innerHTML = `---`
    }, 5000)
  }
}

function keepCat3() {
    if (iscat3 == 1) {
      mpc = mpc - mpcadd[cats[2]]
      cps = cps - catcps[cats[2]]
      cats.splice(2, 1, catgot3)
      mpc = mpc + mpcadd[catgot3]
      cps = cps + catcps[cats[2]]
      document.getElementById("catres3").innerHTML = `Get a new bowl...`
      document.getElementById("cat3error").innerHTML = "---"
      document.getElementById("catown3").innerHTML = `You have a ${String(ctname[cats[2]])} Cat (+${String(mpcadd[cats[2]])} ypc, +${String(catcps[cats[2]])} cps)`
      iscat3 = 0
      catgot3 = 0
      localsave();
      updatetext();
    } else {
      document.getElementById("cat3error").innerHTML = "There is no cat waiting!"
    }
}
  
function releaseCat3() {
    if (iscat3 == 1) {
      document.getElementById("catres3").innerHTML = `Get a new bowl...`
      document.getElementById("cat3error").innerHTML = "---"
      updatetext();
      iscat3 = 0
      catgot3 = 0
    } else {
      document.getElementById("cat3error").innerHTML = "There is no cat waiting!"
    }
}




function buyCatSet4(id = 0) {
    if (id == 0) {
        if (dolor >= 100000000) {
            catgot4 = getCat(4)
            enterCat(catgot4)
            iscat4 = 1
            document.getElementById("catres4").innerHTML = `Got a ${String(ctname[catgot4])} Cat (+${String(mpcadd[catgot4])} ypc, +${String(catcps[catgot4])} cps)`
            document.getElementById("cat4error").innerHTML = "---"
            dolor = dolor-100000000
            localsave();
            updatetext();
        } else {
            document.getElementById("cat4error").innerHTML = "Too poor!"
        }
    } else {
        catgot4 = getCat(4, id)
        enterCat(catgot4)
        iscat4 = 1
        document.getElementById("catres4").innerHTML = `Got a ${String(ctname[catgot4])} Cat (+${String(mpcadd[catgot4])} ypc, +${String(catcps[catgot4])} cps)`
        document.getElementById("cat4error").innerHTML = "---"
        updatetext();
    }
}
  
function buyBetter4() {
  let catiter = 0
  if (cats[3] == 18) {
    console.log("You already have the best cat")
  } else {
    clearTimeout(betterinfo)
    while (catgot4 <= cats[3] && dolor >= 100000000 && catiter < buybetter) {
      catiter = catiter + 1
      buyCatSet4()
    }
    document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
    betterinfo = setTimeout(function () {
      document.getElementById("iterc").innerHTML = `---`
    }, 5000)
  }
}


function keepCat4() {
    if (iscat4 == 1) {
      mpc = mpc - mpcadd[cats[3]]
      cps = cps - catcps[cats[3]]
      cats.splice(3, 1, catgot4)
      mpc = mpc + mpcadd[catgot4]
      cps = cps + catcps[cats[3]]
      document.getElementById("catres4").innerHTML = `Run a new program...`
      document.getElementById("cat4error").innerHTML = "---"
      document.getElementById("catown4").innerHTML = `You have a ${String(ctname[cats[3]])} Cat (+${String(mpcadd[cats[3]])} ypc, +${String(catcps[cats[3]])} cps)`
      iscat4 = 0
      catgot4 = 0
      localsave();
      updatetext();
    } else {
      document.getElementById("cat4error").innerHTML = "There is no cat waiting!"
    }
}
  
function releaseCat4() {
    if (iscat4 == 1) {
      document.getElementById("catres4").innerHTML = `Run a new program...`
      document.getElementById("cat4error").innerHTML = "---"
      updatetext();
      iscat4 = 0
      catgot4 = 0
    } else {
      document.getElementById("cat4error").innerHTML = "There is no cat waiting!"
    }
}





function buyCatSet5(id = 0) {
  if (id == 0) {
      if (dolor >= 10000000000) {
          catgot5 = getCat(5)
          enterCat(catgot5)
          iscat5 = 1
          document.getElementById("catres5").innerHTML = `Got a ${String(ctname[catgot5])} Cat (+${String(mpcadd[catgot5])} ypc, +${String(catcps[catgot5])} cps)`
          document.getElementById("cat5error").innerHTML = "---"
          dolor = dolor-10000000000
          localsave();
          updatetext();
      } else {
          document.getElementById("cat5error").innerHTML = "Too poor!"
      }
  } else {
      catgot5 = getCat(5, id)
      enterCat(catgot5)
      iscat5 = 1
      document.getElementById("catres5").innerHTML = `Got a ${String(ctname[catgot5])} Cat (+${String(mpcadd[catgot5])} ypc, +${String(catcps[catgot5])} cps)`
      document.getElementById("cat5error").innerHTML = "---"
      updatetext();
  }
}

function buyBetter5() {
  let catiter = 0
  if (cats[4] == 28) {
    console.log("You already have the best cat")
  } else {
    clearTimeout(betterinfo)
    while (catgot5 <= cats[4] && dolor >= 10000000000 && catiter < buybetter) {
      catiter = catiter + 1
      buyCatSet5()
    }
    document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
    betterinfo = setTimeout(function () {
      document.getElementById("iterc").innerHTML = `---`
    }, 5000)
  }
}

function keepCat5() {
  if (iscat5 == 1) {
    mpc = mpc - mpcadd[cats[4]]
    cps = cps - catcps[cats[4]]
    cats.splice(4, 1, catgot5)
    mpc = mpc + mpcadd[catgot5]
    cps = cps + catcps[cats[4]]
    document.getElementById("catres5").innerHTML = `Observe a new system...`
    document.getElementById("cat5error").innerHTML = "---"
    document.getElementById("catown5").innerHTML = `You have a ${String(ctname[cats[4]])} Cat (+${String(mpcadd[cats[4]])} ypc, +${String(catcps[cats[4]])} cps)`
    iscat5 = 0
    catgot5 = 0
    localsave();
    updatetext();
  } else {
    document.getElementById("cat5error").innerHTML = "There is no cat waiting!"
  }
}

function releaseCat5() {
  if (iscat5 == 1) {
    document.getElementById("catres5").innerHTML = `Observe a new system...`
    document.getElementById("cat5error").innerHTML = "---"
    updatetext();
    iscat5 = 0
    catgot5 = 0
  } else {
    document.getElementById("cat5error").innerHTML = "There is no cat waiting!"
  }
}
