let catset = [0, 1,  1,     1,       1,       1,        2,       2,      2,      2,            3,      3,     3,     3,           3,      4,     4,    4,    4,       5,        5,      5,      5,     5,        5,       5,       5,        5,      5,          6,       6,     6,     6,       6,      6,         7,      7,      7,      7,       7,      7]
let weight = [0, 500,200,   150,     75,      25,       1000,    300,    50,     2,            500,    400,   100,   25,          1,      500,   500,  200,  20,      1500,     1000,   800,    600,   500,      300,     150,     75,       30,     1,          5000,    3000,  1000,  500,     250,    10,        10000,  5000,   2000,   750,     250,    9]
let mpcadd = [0, 5,  10,     20,     30,      50,       75,      200,    300,    1000,         1000,   1500,  3000,  5000,        10000,  7500,  7500, 10000,30000,   10000,    15000,  20000,  25000, 30000,    40000,   50000,   75000,    100000, 200000,     50000,   75000, 100000,200000,  300000, 500000,    143143, 333333, 666666, 765240,  888888, 1048576]
let catcps = [0, 0,  0,     0,       0,       0,        0,       0,      0,      0,            1,      1,     2,     2,           3,      2,     2,    4,    10,      10,       10,     15,     15,    20,       25,      30,      40,       50,     100,        40,      60,    80,    100,     150,    200,       100,    150,    225,    300,     400,    500]
let ctname = ["","","Tabby","Tuxedo","Calico","Siamese","Zombie","Demon","Angel","Shrodingers","Apple","Pear","Plum","Watermelon","Mango","HTML","CSS","JS", "Python","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto","Astronaut","Flower","Tree","Rock","Cactus","Spore","Mushroom","Ghost","Pixie","Devil","Sphinx","Death","Ȧ̶̤̣b̸͍̈́̔ŷ̴͍s̵̞̅͝s̶̢̆a̷̬͋l̴̹̓"]
let possibleids = []
let combpool = 0
let weightroll = 0
let rescheck = 0
let result = 0
let foundres = 0
// let catgot1 = 0
// let catgot2 = 0
// let catgot3 = 0
// let catgot4 = 0
// let catgot5 = 0


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
  if (weightroll-rollboost < 5) {
    achstore = `1${achstore.substring(1)}`
    game.achievements[40] = 1
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

let setprices = [0, 500, 20000, 500000, 100000000, 10000000000, 100000000000000, 50000000000000000]
let iscat = [0, 0, 0, 0, 0, 0, 0, 0]
let bestcat = [0, 5, 9, 14, 18, 28, 34, 40]
let catsgot = [0, 0, 0, 0, 0, 0, 0, 0]


function buyCatSet(id) {
  if (game.yarn > setprices[id]) {
    catsgot[id] = getCat(id)
    game.catgot[catsgot[id]] = game.catgot[catsgot[id]] + 1
    enterCat(catsgot[id])
    iscat[id] = 1
    idbuild = `catres${id}`
    if (id < 3) {
      document.getElementById(idbuild).innerHTML = `Got a ${String(ctname[catsgot[id]])} Cat (+${String(mpcadd[catsgot[id]])} ypc)`
    } else {
      document.getElementById(idbuild).innerHTML = `Got a ${String(ctname[catsgot[id]])} Cat (+${String(mpcadd[catsgot[id]])} ypc, +${String(catcps[catsgot[id]])} cps)`
    }
    errbuild = `cat${id}error`
    document.getElementById(errbuild).innerHTML = "---"
    game.yarn = game.yarn - setprices[id]
    localsave()
    updatetext()
  }
}

function buyBetterSet(id) {
  let catiter = 0
  if (game.cats[id-1] == bestcat[id]) {
    console.log("You already have the best cat")
  } else {
    clearTimeout(betterinfo)
    while (catsgot[id] <= game.cats[id-1] && game.yarn >= setprices[id] && catiter < buybetter) {
      catiter = catiter + 1
      buyCatSet(id)
    }
    document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
    betterinfo = setTimeout(function () {
      document.getElementById("iterc").innerHTML = `---`
    }, 5000)
  }
}

function keepCatSet(id) {
  errbuild = `cat${id}error`
  if (iscat[id] == 1) {
    if (catsgot[id] < bestcat[id] && game.cats[id-1] == bestcat[id]) {
      achstore = `${achstore.substring(0, 7)}1${achstore.substring(8)}` // betrayal ach
      game.achievements[47] = 1
    }
    game.cats[id-1] = catsgot[id]
    resbuild = `catres${id}`
    document.getElementById(resbuild).innerHTML = `Search for a new cat...`
    document.getElementById(errbuild).innerHTML = "---"
    idbuild = `catres${id}`
    // if (id < 3) {
    //   document.getElementById(idbuild).innerHTML = `Search for a new cat`
    // } else {
    //   document.getElementById(idbuild).innerHTML = `Search for a new cat...`
    // }
    iscat[id] = 0
    catsgot[id] = 0
    localsave()
    updatetext()
  } else {
    document.getElementById(errbuild).innerHTML = "There is no cat waiting!"
  }
}

function releaseCatSet(id) {
  errbuild = `cat${id}error`
  if (iscat[id] == 1) {
    resbuild = `catres${id}`
    document.getElementById(resbuild).innerHTML = `Search for a new cat...`
    document.getElementById(errbuild).innerHTML = "---"
    updatetext();
    iscat[id] = 0
    catsgot[id] = 0
  } else {
    document.getElementById(errbuild).innerHTML = "There is no cat waiting!"
  }
}




// function buyCatSet1(id = 0) {
//   if (id == 0) {
//     if (game.yarn >= 500) {
//         catgot1 = getCat(1)
//         game.catgot[catgot1] = game.catgot[catgot1] + 1
//         enterCat(catgot1)
//         iscat1 = 1
//         document.getElementById("catres1").innerHTML = `Got a ${String(ctname[catgot1])} Cat (+${String(mpcadd[catgot1])} ypc)`
//         document.getElementById("cat1error").innerHTML = "---"
//         game.yarn = game.yarn-500
//         localsave();
//         updatetext();
//     } else {
//         document.getElementById("cat1error").innerHTML = "Too poor!"
//     }
//   } else {
//     catgot1 = getCat(1, id)
//     game.catgot[catgot1] = game.catgot[catgot1] + 1
//     enterCat(catgot1)
//     iscat1 = 1
//     document.getElementById("catres1").innerHTML = `Got a ${String(ctname[catgot1])} Cat (+${String(mpcadd[catgot1])} ypc)`
//     document.getElementById("cat1error").innerHTML = "---"
//     updatetext();
//   }
// }

// function buyBetter1() {
//   let catiter = 0
//   if (game.cats[0] == 5) {
//     console.log("You already have the best cat")
//   } else {
//     clearTimeout(betterinfo)
//     while (catgot1 <= game.cats[0] && game.yarn >= 500 && catiter < buybetter) {
//       catiter = catiter + 1
//       buyCatSet1()
//     }
//     document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
//     betterinfo = setTimeout(function () {
//       document.getElementById("iterc").innerHTML = `---`
//     }, 5000)
//   }
// }

// function keepCat1() {
//   if (iscat1 == 1) {
//     if (game.cats[0] == 5 && catgot1 < 5) {
//       achstore = `${achstore.substring(0, 7)}1${achstore.substring(8)}`
//       game.achievements[47] = 1
//     }
//     game.cats[0] = catgot1
//     // cats.splice(0, 1, catgot1)
//     document.getElementById("catres1").innerHTML = `Search for a new cat...`
//     document.getElementById("cat1error").innerHTML = "---"
//     document.getElementById("catown1").innerHTML = `You have a ${String(ctname[game.cats[0]])} Cat (+${String(mpcadd[game.cats[0]])} ypc)`
//     iscat1 = 0
//     catgot1 = 0
//     localsave();
//     updatetext();
//   } else {
//     document.getElementById("cat1error").innerHTML = "There is no cat waiting!"
//   }
// }

// function releaseCat1() {
//   if (iscat1 == 1) {
//     document.getElementById("catres1").innerHTML = `Search for a new cat...`
//     document.getElementById("cat1error").innerHTML = "---"
//     updatetext();
//     iscat1 = 0
//     catgot1 = 0
//   } else {
//     document.getElementById("cat1error").innerHTML = "There is no cat waiting!"
//   }
// }




// function buyCatSet2(id = 0) {
//     if (id == 0) {
//         if (game.yarn >= 20000) {
//             catgot2 = getCat(2)
//             game.catgot[catgot2] = game.catgot[catgot2] + 1
//             enterCat(catgot2)
//             iscat2 = 1
//             document.getElementById("catres2").innerHTML = `Got a ${String(ctname[catgot2])} Cat (+${String(mpcadd[catgot2])} ypc)`
//             document.getElementById("cat2error").innerHTML = "---"
//             game.yarn = game.yarn-20000
//             localsave();
//             updatetext();
//             } else {
//                 document.getElementById("cat2error").innerHTML = "Too poor!"
//             }
//     } else {
//         catgot2 = getCat(2, id)
//         game.catgot[catgot2] = game.catgot[catgot2] + 1
//         enterCat(catgot2)
//         iscat2 = 1
//         document.getElementById("catres2").innerHTML = `Got a ${String(ctname[catgot2])} Cat (+${String(mpcadd[catgot2])} ypc)`
//         document.getElementById("cat2error").innerHTML = "---"
//         updatetext();
//     }
// }
  
// function buyBetter2() {
//   let catiter = 0
//   if (game.cats[1] == 9) {
//     console.log("You already have the best cat")
//   } else {
//     clearTimeout(betterinfo)
//     while (catgot2 <= game.cats[1] && game.yarn >= 20000 && catiter < buybetter) {
//       catiter = catiter + 1
//       buyCatSet2()
//     }
//     document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
//     betterinfo = setTimeout(function () {
//       document.getElementById("iterc").innerHTML = `---`
//     }, 5000)
//   }
// }

// function keepCat2() {
//     if (iscat2 == 1) {
//       if (game.cats[1] == 9 && catgot2 < 9) {
//         achstore = `${achstore.substring(0, 7)}1${achstore.substring(8)}`
//         game.achievements[47] = 1
//       }
//       game.cats[1] = catgot2
//       // cats.splice(1, 1, catgot2)
//       document.getElementById("catres2").innerHTML = `Summon a new cat...`
//       document.getElementById("cat2error").innerHTML = "---"
//       document.getElementById("catown2").innerHTML = `You have a ${String(ctname[game.cats[1]])} Cat (+${String(mpcadd[game.cats[1]])} ypc)`
//       iscat2 = 0
//       catgot2 = 0
//       localsave();
//       updatetext();
//     } else {
//       document.getElementById("cat2error").innerHTML = "There is no cat waiting!"
//     }
// }
  
// function releaseCat2() {
//     if (iscat2 == 1) {
//       document.getElementById("catres2").innerHTML = `Summon a new cat...`
//       document.getElementById("cat2error").innerHTML = "---"
//       updatetext();
//       iscat2 = 0
//       catgot2 = 0
//     } else {
//       document.getElementById("cat2error").innerHTML = "There is no cat waiting!"
//     }
// }








// function buyCatSet3(id = 0) {
//     if (id == 0) {
//         if (game.yarn >= 500000) {
//             catgot3 = getCat(3)
//             game.catgot[catgot3] = game.catgot[catgot3] + 1
//             enterCat(catgot3)
//             iscat3 = 1
//             document.getElementById("catres3").innerHTML = `Got a ${String(ctname[catgot3])} Cat (+${String(mpcadd[catgot3])} ypc, +${String(catcps[catgot3])} cps)`
//             document.getElementById("cat3error").innerHTML = "---"
//             game.yarn = game.yarn-500000
//             localsave();
//             updatetext();
//         } else {
//             document.getElementById("cat3error").innerHTML = "Too poor!"
//         }
//     } else {
//         catgot3 = getCat(3, id)
//         game.catgot[catgot3] = game.catgot[catgot3] + 1
//         enterCat(catgot3)
//         iscat3 = 1
//         document.getElementById("catres3").innerHTML = `Got a ${String(ctname[catgot3])} Cat (+${String(mpcadd[catgot3])} ypc, +${String(catcps[catgot3])} cps)`
//         document.getElementById("cat3error").innerHTML = "---"
//         updatetext();
//     }
// }
  
// function buyBetter3() {
//   let catiter = 0
//   if (game.cats[2] == 14) {
//     console.log("You already have the best cat")
//   } else {
//     clearTimeout(betterinfo)
//     while (catgot3 <= game.cats[2] && game.yarn >= 500000 && catiter < buybetter) {
//       catiter = catiter + 1
//       buyCatSet3()
//     }
//     document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
//     betterinfo = setTimeout(function () {
//       document.getElementById("iterc").innerHTML = `---`
//     }, 5000)
//   }
// }

// function keepCat3() {
//     if (iscat3 == 1) {
//       if (game.cats[2] == 14 && catgot3 < 14) {
//         achstore = `${achstore.substring(0, 7)}1${achstore.substring(8)}`
//         game.achievements[47] = 1
//       }
//       game.cats[2] = catgot3
//       // cats.splice(2, 1, catgot3)
//       document.getElementById("catres3").innerHTML = `Get a new bowl...`
//       document.getElementById("cat3error").innerHTML = "---"
//       document.getElementById("catown3").innerHTML = `You have a ${String(ctname[game.cats[2]])} Cat (+${String(mpcadd[game.cats[2]])} ypc, +${String(catcps[game.cats[2]])} cps)`
//       iscat3 = 0
//       catgot3 = 0
//       localsave();
//       updatetext();
//     } else {
//       document.getElementById("cat3error").innerHTML = "There is no cat waiting!"
//     }
// }
  
// function releaseCat3() {
//     if (iscat3 == 1) {
//       document.getElementById("catres3").innerHTML = `Get a new bowl...`
//       document.getElementById("cat3error").innerHTML = "---"
//       updatetext();
//       iscat3 = 0
//       catgot3 = 0
//     } else {
//       document.getElementById("cat3error").innerHTML = "There is no cat waiting!"
//     }
// }




// function buyCatSet4(id = 0) {
//     if (id == 0) {
//         if (game.yarn >= 100000000) {
//             catgot4 = getCat(4)
//             game.catgot[catgot4] = game.catgot[catgot4] + 1
//             enterCat(catgot4)
//             iscat4 = 1
//             document.getElementById("catres4").innerHTML = `Got a ${String(ctname[catgot4])} Cat (+${String(mpcadd[catgot4])} ypc, +${String(catcps[catgot4])} cps)`
//             document.getElementById("cat4error").innerHTML = "---"
//             game.yarn = game.yarn-100000000
//             localsave();
//             updatetext();
//         } else {
//             document.getElementById("cat4error").innerHTML = "Too poor!"
//         }
//     } else {
//         catgot4 = getCat(4, id)
//         game.catgot[catgot4] = game.catgot[catgot4] + 1
//         enterCat(catgot4)
//         iscat4 = 1
//         document.getElementById("catres4").innerHTML = `Got a ${String(ctname[catgot4])} Cat (+${String(mpcadd[catgot4])} ypc, +${String(catcps[catgot4])} cps)`
//         document.getElementById("cat4error").innerHTML = "---"
//         updatetext();
//     }
// }
  
// function buyBetter4() {
//   let catiter = 0
//   if (game.cats[3] == 18) {
//     console.log("You already have the best cat")
//   } else {
//     clearTimeout(betterinfo)
//     while (catgot4 <= game.cats[3] && game.yarn >= 100000000 && catiter < buybetter) {
//       catiter = catiter + 1
//       buyCatSet4()
//     }
//     document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
//     betterinfo = setTimeout(function () {
//       document.getElementById("iterc").innerHTML = `---`
//     }, 5000)
//   }
// }

// function keepCat4() {
//     if (iscat4 == 1) {
//       if (game.cats[3] == 18 && catgot4 < 18) {
//         console.log("betrayal")
//         achstore = `${achstore.substring(0, 7)}1${achstore.substring(8)}`
//         game.achievements[47] = 1
//       }
//       game.cats[3] = catgot4
//       // cats.splice(3, 1, catgot4)
//       document.getElementById("catres4").innerHTML = `Run a new program...`
//       document.getElementById("cat4error").innerHTML = "---"
//       document.getElementById("catown4").innerHTML = `You have a ${String(ctname[game.cats[3]])} Cat (+${String(mpcadd[game.cats[3]])} ypc, +${String(catcps[game.cats[3]])} cps)`
//       iscat4 = 0
//       catgot4 = 0
//       localsave();
//       updatetext();
//     } else {
//       document.getElementById("cat4error").innerHTML = "There is no cat waiting!"
//     }
// }
  
// function releaseCat4() {
//     if (iscat4 == 1) {
//       document.getElementById("catres4").innerHTML = `Run a new program...`
//       document.getElementById("cat4error").innerHTML = "---"
//       updatetext();
//       iscat4 = 0
//       catgot4 = 0
//     } else {
//       document.getElementById("cat4error").innerHTML = "There is no cat waiting!"
//     }
// }





// function buyCatSet5(id = 0) {
//   if (id == 0) {
//       if (game.yarn >= 10000000000) {
//           catgot5 = getCat(5)
//           game.catgot[catgot5] = game.catgot[catgot5] + 1
//           enterCat(catgot5)
//           iscat5 = 1
//           document.getElementById("catres5").innerHTML = `Got a ${String(ctname[catgot5])} Cat (+${String(mpcadd[catgot5])} ypc, +${String(catcps[catgot5])} cps)`
//           document.getElementById("cat5error").innerHTML = "---"
//           game.yarn = game.yarn-10000000000
//           localsave();
//           updatetext();
//       } else {
//           document.getElementById("cat5error").innerHTML = "Too poor!"
//       }
//   } else {
//       catgot5 = getCat(5, id)
//       game.catgot[catgot5] = game.catgot[catgot5] + 1
//       enterCat(catgot5)
//       iscat5 = 1
//       document.getElementById("catres5").innerHTML = `Got a ${String(ctname[catgot5])} Cat (+${String(mpcadd[catgot5])} ypc, +${String(catcps[catgot5])} cps)`
//       document.getElementById("cat5error").innerHTML = "---"
//       updatetext();
//   }
// }

// function buyBetter5() {
//   let catiter = 0
//   if (game.cats[4] == 28) {
//     console.log("You already have the best cat")
//   } else {
//     clearTimeout(betterinfo)
//     while (catgot5 <= game.cats[4] && game.yarn >= 10000000000 && catiter < buybetter) {
//       catiter = catiter + 1
//       buyCatSet5()
//     }
//     document.getElementById("iterc").innerHTML = `Bought ${catiter} cats`
//     betterinfo = setTimeout(function () {
//       document.getElementById("iterc").innerHTML = `---`
//     }, 5000)
//   }
// }

// function keepCat5() {
//   if (iscat5 == 1) {
//     if (game.cats[4] == 27 && catgot5 < 27) {
//       achstore = `${achstore.substring(0, 7)}1${achstore.substring(8)}`
//       game.achievements[47] = 1
//     }
//     game.cats[4] = catgot5
//     // cats.splice(4, 1, catgot5)
//     document.getElementById("catres5").innerHTML = `Observe a new system...`
//     document.getElementById("cat5error").innerHTML = "---"
//     document.getElementById("catown5").innerHTML = `You have a ${String(ctname[game.cats[4]])} Cat (+${String(mpcadd[game.cats[4]])} ypc, +${String(catcps[game.cats[4]])} cps)`
//     iscat5 = 0
//     catgot5 = 0
//     localsave();
//     updatetext();
//   } else {
//     document.getElementById("cat5error").innerHTML = "There is no cat waiting!"
//   }
// }

// function releaseCat5() {
//   if (iscat5 == 1) {
//     document.getElementById("catres5").innerHTML = `Observe a new system...`
//     document.getElementById("cat5error").innerHTML = "---"
//     updatetext();
//     iscat5 = 0
//     catgot5 = 0
//   } else {
//     document.getElementById("cat5error").innerHTML = "There is no cat waiting!"
//   }
// }



