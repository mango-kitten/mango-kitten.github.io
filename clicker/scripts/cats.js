let catset = [0, 1,  1,     1,       1,       1]
let weight = [0, 500,200,   150,     75,      25]
let mpcadd = [0, 5,  10,     20,       30,       50]
let catpsc = [0, 0,  1,     3,       5,       10]
let ctname = ["","","Tabby","Tuxedo","Calico","Siamese"]
let possibleids = []
let combpool = 0
let weightroll = 0
let rescheck = 0
let result = 0
let foundres = 0
let catgot1 = 0

function getCat(set) { // DO NOT TOUCH THIS FUNCTION YOU FUCKING IDIOT IT ACTUALLY WORKS
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
  weightroll = Math.random() * combpool // roll, multiply by max weight
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
