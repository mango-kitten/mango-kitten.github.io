let catset = [1,  1,     1,       1,       1]
let weight = [500,200,   150,     75,      25]
let mpcadd = [5,  3,     3,       3,       4]
let catpsc = [0,  1,     3,       5,       10]
let ctname = ["","Tabby","Tuxedo","Calico","Siamese"]
let possibleids = []
let combpool = 0
let weightroll = 0
let rescheck = 0
let result = 0
let foundres = 0

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
  document.getElementById("catres1").innerHTML = `Got a ${String(ctname[result])} Cat`
}



function buyCatSet1() {
  if (dolor >= 500) {
    getCat(1)
    dolor = dolor-500
    updatetext();
  }
}
