let catset = [0, 1,  1,     1,       1,       1,        2,       2,      2,      2,            3,      3,     3,     3,           3]
let weight = [0, 500,200,   150,     75,      25,       1000,    300,    50,     2,            500,    400,   100,   25,          1]
let mpcadd = [0, 5,  10,     20,     30,      50,       30,      75,     100,    500,          1000,   1500,  3000,  5000,        10000]
let catcps = [0, 0,  0,     0,       0,       0,        0,       0,      0,      1,            1,      1,     2,     2,           3]
let ctname = ["","","Tabby","Tuxedo","Calico","Siamese","Zombie","Demon","Angel","Shrodingers","Apple","Pear","Plum","Watermelon","Mango"]
let possibleids = []
let combpool = 0
let weightroll = 0
let rescheck = 0
let result = 0
let foundres = 0
let catgot1 = 0
let catgot2 = 0
let catgot3 = 0

function getCat(set) { // DO NOT TOUCH THIS FUNCTION YOU FUCKING IDIOT IT ACTUALLY WORKS
  possibleids = [] // empty the possibilites and other stuff
  combpool = 0
  rescheck = 0
  result = 0
  foundres = 0
  console.log("Getting cats with id",set)
  for (let i=0; i<catset.length; i++) {
    if (parseInt(catset[i]) == parseInt(set)) {
      possibleids.splice(possibleids.length, 0, i) // get every cat from that set
    }
  }
  for (let i=0; i<possibleids.length; i++) {
    combpool = combpool + weight[possibleids[i]] // total up the weights
  }
  combpool = combpool + 1
  weightroll = Math.random() * combpool // roll, multiply by max weight
  console.log("Rolled ",weightroll," out of ",combpool)
  for (let i=0; i<possibleids.length; i++) {
    rescheck = rescheck + weight[possibleids[i]]
    if (rescheck >= weightroll && foundres == 0) {
      foundres = 1 // now it can only happen once
      result = possibleids[i]
    }
  }
  return result
}



function buyCatSet1() {
  if (dolor >= 500) {
    catgot1 = getCat(1)
    iscat1 = 1
    document.getElementById("catres1").innerHTML = `Got a ${String(ctname[catgot1])} Cat (+${String(mpcadd[catgot1])} mpc)`
    document.getElementById("cat1error").innerHTML = "---"
    dolor = dolor-500
    updatetext();
  } else {
    document.getElementById("cat1error").innerHTML = "Too poor!"
  }
}

function keepCat1() {
  if (iscat1 == 1) {
    mpc = mpc - mpcadd[cats[0]]
    cats.splice(0, 1, catgot1)
    mpc = mpc + mpcadd[catgot1]
    document.getElementById("catres1").innerHTML = `Search for a new cat...`
    document.getElementById("cat1error").innerHTML = "---"
    document.getElementById("catown1").innerHTML = `You have a ${String(ctname[cats[0]])} Cat (+${String(mpcadd[cats[0]])} mpc)`
    iscat1 = 0
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
  } else {
    document.getElementById("cat1error").innerHTML = "There is no cat waiting!"
  }
}




function buyCatSet2() {
    if (dolor >= 20000) {
      catgot2 = getCat(2)
      iscat2 = 1
      document.getElementById("catres2").innerHTML = `Got a ${String(ctname[catgot2])} Cat (+${String(mpcadd[catgot2])} mpc)`
      document.getElementById("cat2error").innerHTML = "---"
      dolor = dolor-20000
      updatetext();
    } else {
        document.getElementById("cat2error").innerHTML = "Too poor!"
    }
  }
  
function keepCat2() {
    if (iscat2 == 1) {
      mpc = mpc - mpcadd[cats[1]]
      cats.splice(1, 1, catgot2)
      mpc = mpc + mpcadd[catgot2]
      document.getElementById("catres2").innerHTML = `Summon a new cat...`
      document.getElementById("cat2error").innerHTML = "---"
      document.getElementById("catown2").innerHTML = `You have a ${String(ctname[cats[1]])} Cat (+${String(mpcadd[cats[1]])} mpc)`
      iscat2 = 0
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
    } else {
      document.getElementById("cat2error").innerHTML = "There is no cat waiting!"
    }
}








function buyCatSet3() {
    if (dolor >= 1000000) {
        catgot3 = getCat(3)
        iscat3 = 1
        document.getElementById("catres3").innerHTML = `Got a ${String(ctname[catgot3])} Cat (+${String(mpcadd[catgot3])} mpc, +${String(catcps[catgot3])} cps)`
        document.getElementById("cat3error").innerHTML = "---"
        dolor = dolor-1000000
        updatetext();
    } else {
        document.getElementById("cat3error").innerHTML = "Too poor!"
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
      document.getElementById("catown3").innerHTML = `You have a ${String(ctname[cats[2]])} Cat (+${String(mpcadd[cats[2]])} mpc, +${String(catcps[catgot3])} cps)`
      iscat3 = 0
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
    } else {
      document.getElementById("cat3error").innerHTML = "There is no cat waiting!"
    }
}
