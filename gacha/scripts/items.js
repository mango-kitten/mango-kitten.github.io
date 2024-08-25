let allitems = []
let allmods = []
let availableitems = []
let newitem
let result
let stars

function Item(name, stars, set, flavortext, id, image) { // using these "constructors" (i think theyre called that) was inspired by ccc!
    this.name = name
    this.stars = stars
    this.set = set
    this.flavor = flavortext
    this.id = id
    this.image = image
    allitems.push(this)
}

function Modifier(name, stars) {
    let nametwo
    if (stars == 1) {
        nametwo = `<font color='#bf3921'>${name}</font>`
    } else if (stars == 2) {
        nametwo = `<font color='#1fff0f'>${name}</font>`
    } else if (stars == 3) {
        nametwo = `<font color='#2f0fff'>${name}</font>`
    } else if (stars == 4) {
        nametwo = `<font color='#8f02a8'>${name}</font>`
    } else if (stars == 5) {
        nametwo = `<font color='#f7a602'>${name}</font>`
    } else {
        nametwo = name
    }
    this.name = nametwo
    this.stars = stars
    allmods.push(this)
}


// 1star 65%, drops 10 pixels
// 2star 20%, drops 15 pixels
// 3star 10%, drops 25 pixels
// 4star 4.5%, drops 50 pixels
// 5star 0.5%, drops 250 pixels

function pullItem(set) {
    let drop = Math.random()

    if (game.since5star < 50) {
        fivestarrar = 0.995
    } else if (game.since5star < 70) {
        fivestarrar = 0.9925
    } else if (game.since5star <= 80) {
        fivestarrar = 0.99
    } else {
        fivestarrar = 0.9875
    }


    if (drop < 0.65) {
        stars = 1
    } else if (drop < 0.85) {
        stars = 2
    } else if (drop < 0.95) {
        stars = 3
    } else if (drop < fivestarrar) {
        stars = 4
    } else if (drop < 0.9999999999999) {
        stars = 5
    } else {
        stars = 6
    }

    availableitems = []
    for (let i=0;i<allitems.length;i++) {
        if (allitems[i].set == set && allitems[i].stars == stars) {
            availableitems.push(allitems[i])
        } 
    }

    var result = availableitems[Math.floor(Math.random()*availableitems.length)];

    return result
}

function pullBoosts(set, min) {
    let drop = Math.random()

    if (game.since5star < 50) {
        fivestarrar = 0.995
    } else if (game.since5star < 70) {
        fivestarrar = 0.9925
    } else if (game.since5star <= 80) {
        fivestarrar = 0.99
    } else {
        fivestarrar = 0.9875
    }

    if (min == 1) {

    } else if (min == 2) {
        while (drop < 0.65) {
            drop = Math.random()
        }
    } else if (min == 3) {
        while (drop < 0.85) {
            drop = Math.random()
        }
    } else if (min == 4) {
        while (drop < 0.95) {
            drop = Math.random()
        }
    } else if (min == 5) {
        while (drop < fivestarrar) {
            drop = Math.random()
        }
    } else {

    }
    if (drop < 0.65) {
        stars = 1
    } else if (drop < 0.85) {
        stars = 2
    } else if (drop < 0.95) {
        stars = 3
    } else if (drop < fivestarrar) {
        stars = 4
    } else if (drop < 0.9999999999999) { // please let this be an impossible drop i dont wanna remove support
        stars = 5
    } else {
        stars = 6
    }

    availableitems = []
    for (let i=0;i<allitems.length;i++) {
        if (allitems[i].set == set && allitems[i].stars == stars) {
            availableitems.push(allitems[i])
        } 
    }

    var result = availableitems[Math.floor(Math.random()*availableitems.length)];

    return result
}

function tenPull(set) {
    let items = []
    let threetally = 0
    let staramts = [0, 0, 0, 0, 0]
    for (let i=0;i<9;i++) {
        newitem = pullItem(set)
        if (newitem.stars >= 3) {
            threetally = 1
        }
        staramts[newitem.stars-1] = staramts[newitem.stars-1]+1
        items.push(newitem)
    }
    if (game.since5star >= 90) { // since .since5star is added when getting the item itself, needs to be 90 to guarantee it on the 100th pull (bad design)
        newitem = pullBoosts(set, 5)
        staramts[newitem.stars-1] = staramts[newitem.stars-1]+1
        items.push(newitem)
        game.since5star
    } else if (threetally == 0) {
        console.log("No 3 star items, getting guarantee!")
        newitem = pullBoosts(set, 3)
        staramts[newitem.stars-1] = staramts[newitem.stars-1]+1
        items.push(newitem)
    } else {
        newitem = pullItem(set)
        staramts[newitem.stars-1] = staramts[newitem.stars-1]+1
        items.push(newitem)
    }
    items.push(staramts)
    
    return items
}


// 1 star items
const shampoo = new Item("Shampoo Bottle", 1, 1, "there is only one of you that would get it but if you don't, klapollo", "shampoo") //
const computer = new Item("Computer", 1, 1, "waowowoww keys go clicky", "computer") //
const mouse = new Item("Mouse", 1, 1, "What kind?", "mouse") //
const allergy = new Item("Allergen Marker", 1, 1, "the allergy was totally real and not just from a kid who hates tomato sauce", "allergy") //
const burger = new Item("Burger", 1, 1, "american core", "burger") //
const omorwatermelon = new Item("Watermelon", 1, 1, "Hungy boi, but there may be something inside", "omorwatermelon") //
const falconi = new Item("Falcon IX", 1, 1, "...", "falconi") //
const falconii = new Item("Falcon Heavy", 1, 1, "car taxi", "falconii") //
const starship = new Item("Starship", 1, 1, "see also: fireworks", "starship") //
const tnt = new Item("TNT", 1, 1, "kaboommmmmm", "tnt") //
const brick = new Item("Half-brick in a Sock", 1, 1, "One of those must-need things on the street", "brick") //
const carebear = new Item("Broken Care Bear Keychain", 1, 1, "a valentines day gift lost to time", "carebear") //
const omoriknif = new Item("Steak Knife", 1, 1, "i omor", "omoriknif") //
const garf = new Item("Garfield", 1, 1, "12/20/1996", "garf") //
const beans = new Item("Can of Baked Beans", 1, 1, "mmmmmm", "beans")
const secret = new Item("a Secret", 1, 1, "the next mw era", "secret") //
const crab = new Item("crab", 1, 1, "crabby boi", "crab") //
const spaghet = new Item("Dry Sphagetti", 1, 1, "cronchy ooo", "spaghet") //
const microwave = new Item("Microwave", 1, 1, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "microwave") //
const monica = new Item("Monica Morrison", 1, 1, "ok Monica MORRISON", "monica") //
const cat = new Item("Cat", 1, 1, "It entered a portal and is here from Cat Clicker!", "cat") //
const bridge = new Item("Bridge", 1, 1, "Why is a bridge a collectible?", "bridge") //
const herobrine = new Item("herobrine", 1, 1, "herobrine", "herobrine") //
const lua = new Item("Lua", 1, 1, "Causing pain to kids young and old", "lua") //
const cplusplus = new Item("C++", 1, 1, "code must be PERFECT", "cplusplus") //
const java = new Item("Java", 1, 1, "Famously vulnerable", "java") //
const sailboat = new Item("Sailboat", 1, 1, "well its a boat", "sailboat") //
const smores = new Item("S'mores", 1, 1, "Perfect for camping!", "smores")
const grass = new Item("Grass", 1, 1, "Good ol gamer repellent", "grass") //
const tree = new Item("Tree", 1, 1, "What a nice tree. I love trees.", "tree") // fun fact this used to not have an id which completely broke the inventory slot any time it was pulled
const mercury = new Item("Mercury", 1, 1, "Closest to the Sun, art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "mercury") //
const venus = new Item("Venus", 1, 1, "Hell. art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "venus") //
const earth = new Item("Earth", 1, 1, "home sweet home, art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "earth") //
const mars = new Item("Mars", 1, 1, "Watch out for Martians, art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "mars") //
const poyo = new Item("poyo!", 1, 1, "#chain s one contestant that still stands", "poyo") //

// 2 star items
const snail = new Item("Snail", 2, 1, "Dont make it mad, itll get hungry", "snail") //
const mangocraft = new Item("MangoCraft", 2, 1, "Providing many hours of entertainment and even more bugs.", "mangocraft") //
const horse = new Item("Horse", 2, 1, ">Horse walks in", "horse") //
const lethalcompany = new Item("HUUUUUUUUUUUUU", 2, 1, "#chain", "lethalcompany") //
const roblox = new Item("Roblox", 2, 1, "Life. Is Roblox.", "roblox") //
const watermeloni = new Item("Blue Watermelon", 2, 1, "Ooooh is there something good?", "watermeloni") //
const cheeseburger = new Item("Cheeseburger", 2, 1, "cheebsurger", "cheeseburger") //
const saturnv = new Item("Saturn V", 2, 1, "to the moooonnnnnnn", "saturnv") //
const tivii = new Item("TIV-2", 2, 1, "peak interception", "tivii") //
const clippy = new Item("Paper Clip", 2, 1, "Its just sitting there. Menacingly.", "clippy") //
const worm = new Item("Worm", 2, 1, "worm", "worm") //
const sans = new Item("sans.", 2, 1, "ketchup eater", "sans") //
const papyrus = new Item("Papyrus", 2, 1, "TRY MY PUZZLE, HUMAN", "papyrus") //
const flowercrown = new Item("Flower Crown", 2, 1, "oh,,,,,", "flowercrown") //
const orngcat = new Item("Orange Cat", 2, 1, "Offbrand.", "orngcat") //
const what = new Item("what", 2, 1, "Confuse speedrun any% complete", "what") //
const html = new Item("HTML", 2, 1, "The backbone of the digital world", "html") //
const javascript = new Item("JavaScript", 2, 1, "weeeee site go brrrrrr", "javascript")  // these two were NOT intended to have the same desc oops
const motorboat = new Item("Motor Boat", 2, 1, "motor go brr", "motorboat") //
const pratchettluggage = new Item("The Luggage", 2, 1, "That's a lot of legs.", "pratchettluggage") //
const jupiter = new Item("Jupiter", 2, 1, "hecking massive, art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "jupiter") //
const saturn = new Item("Saturn", 2, 1, "ooooooo fancy rings, art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "saturn") //
const uranus = new Item("Uranus", 2, 1, "please dont say it, art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "uranus") //
const neptune = new Item("Neptune", 2, 1, "pretty colors, art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "neptune") //
const oldgethechameleon = new Item("Oldge", 2, 1, "Beloved chameleon mascot", "oldgethechameleon") //
const genderfluidcan = new Item("Gender Fluid", 2, 1, "pure concentrated gender", "genderfluidcan") //

// 3 star items
const maiddress = new Item("Maid Dress", 3, 1, "An era feared by many, loved by more.", "maiddress") //
const mangofruit = new Item("Mango (Fruit)", 3, 1, "tastey mangoes", "mangofruit") //
const mangobot = new Item("MangoBot", 3, 1, "Classified as an item, not a member, as it lives in the basement on a raspberry pi", "mangobot") //
const forbidden = new Item("cco", 3, 1, "The forbidden phrase", "forbidden") //
const wormii = new Item("Worm on a String", 3, 1, "Objectively superior", "wormii") //
const sands = new Item("Sand Undertale", 3, 1, "Hes just standing there. Smiling.", "sands") //
const patternrecog = new Item("&#3486", 3, 1, "Eldritch Pattern Recognition", "patternrecog") //
const gnomehat = new Item("Red Gnome Hat", 3, 1, "probably belongs to some poetic trans guy I dunno", "gnomehat") //
const basil = new Item("Basil", 3, 1, "please no pesto or watermelon", "basil") //
const yacht = new Item("Yacht", 3, 1, "Yacht - Travel in style (while polluting the environment!)", "yacht") //
const pluto = new Item("Pluto", 3, 1, "Still a planet in our hearts. art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "pluto") //
const biteofeightyseven = new Item("Springlock Suit", 3, 1, "Literally 1987", "biteofeightyseven") //
const jschlattclassic = new Item("Jschlatt", 3, 1, "not responsible for the crimes committed in '99", "jschlattclassic") //

// 3 star characters
const juneclassic = new Item("June", 3, 1, "pedro pascals number 1 fan but not in a gay way (at least that's what she says)", "juneclassic") //
const muffinclassic = new Item("Muffin", 3, 1, "there aren't any who call them tim", "muffinclassic") //
const huskyclassic = new Item("Husky", 3, 1, "proclaims to be dum, is eepy", "huskyclassic") //
const chaosclassic = new Item("Chaosmachine", 3, 1, "", "chaosclassic") //
const ooshclassic = new Item("Ioosh", 3, 1, "Can u make a description for me", "ooshclassic") //
const jemclassic = new Item("Jem", 3, 1, "The comic nerd who needs to read more often", "jemclassic") //
const bennyclassic = new Item("Bennyther", 3, 1, "Big Stronk Boi", "bennyclassic") //
const boredclassic = new Item("JustBored", 3, 1, "i can't finish a drawing", "boredclassic") //
const repeteclassic = new Item("Repete", 3, 1, "mmmmm spaghetti", "repeteclassic") //
const snoopyclassic = new Item("Snoopy", 3, 1, "in fact not the dog", "snoopyclassic") //
const anaclassic = new Item("Ana", 3, 1, "apple fanatic", "anaclassic") //
const biggieclassic = new Item("Briged", 3, 1, "a weird creature from another realm", "biggieclassic") //

// 4 star items
const funkopop = new Item("Wallace wells funko pop", 4, 1, "Found in the depths of the server.", "funkopop") //
const freighter = new Item("Freighter", 4, 1, "Transport cargo from sea to sea (and hopefully not loose any containers)", "freighter") //
const forklift = new Item("Forklift", 4, 1, "Are you forklift certified?", "forklift") //
const blackhole = new Item("Black Hole", 4, 1, "This little item is gonna cost us 58 years..., art by <a href=\"https://www.europa-productions.com/profile\">@floridakingdom</a>", "blackhole")
const hitchikermeaning = new Item("The meaning of life.", 4, 2, "42", "hitchikermeaning") // currently impossible to get muahahahahahahaah 4, 2
const annoyingmango = new Item("Annoying Mango", 4, 1, "HEY HEY HEY HEY", "annoyingmango") //

const alphasupporter = new Item("Alpha Release Supporter", 4, 0, "I played this game back in its Original Release!", "alphasupporter") //


// 4 star characters
const europaclassic = new Item("Europa", 4, 1, "Wants to be Patrick Star (lives under rock)", "europaclassic") //
const goobclassic = new Item("Goob", 4, 1, "trezi pyrop", "goobclassic") //
const connorclassic = new Item("Connor", 4, 1, "the REAL producer of hit album grace by jeff buckley", "connorclassic") //
const konclassic = new Item("Kon", 4, 1, "silly metalhead guy", "konclassic") //
const ghostyclassic = new Item("Ghosty", 4, 1, "chaotic ghost man", "ghostyclassic") //
const spookyclassic = new Item("Spooky Ghost", 4, 1, "a ghost that might or might not be spooky...", "spookyclassic") //

// 5 star characters
const aquaclassic = new Item("Aqua", 5, 1, "sleepy kitty mrowwwwwwww", "aquaclassic") //
const apolloclassic = new Item("Apollo", 5, 1, "#1 goob and klapollo fan, little fish guy", "apolloclassic") //
const mangoclassic = new Item("Mango", 5, 1, "mewo", "mangoclassic") //

const royalmangocat = new Item("Royal Mango", 5, 0, "All dressed up!", "royalmangocat") //

// 6 stars?????? (actually impossible to get rn)
const mangocat = new Item("MangoCat", 6, 1, "The Original.", "mangocat")



function getModStars() {
    let modifierroll = Math.random()
    let modstars
    if (modifierroll < 0.65) {
        modstars = 1
    } else if (modifierroll < 0.85) {
        modstars = 2
    } else if (modifierroll < 0.95) {
        modstars = 3
    } else if (modifierroll < 0.985) {
        modstars = 4
    } else {
        modstars = 5
    }
    return modstars
}

function getModifier(stars) {
    let possiblemods = []
    for (let i=0; i<allmods.length; i++) {
        if (allmods[i].stars == stars) {
            possiblemods.push(allmods[i].name)
        }
    }
    let modifiergot = possiblemods[Math.floor(Math.random()*possiblemods.length)];
    return modifiergot
}



let modchance = 0.15 // default 0.15
let stackmodchance = 0.25 // default 0.25


function rollModifier() {
    let modifiergot = ""
    let modifierroll = Math.random()
    let totalmodstars = 0
    if (modifierroll <= modchance) {
        let modstars = getModStars()
        
        totalmodstars = modstars

        modifiergot = getModifier(modstars)

        while (modifierroll <= stackmodchance) {
            modifierroll = Math.random()
            if (modifierroll <= stackmodchance) {
                modstars = getModStars()
                totalmodstars = totalmodstars + modstars
                modifiergot = `${modifiergot}, ${getModifier(modstars)}`
            }
        }

        
    }

    return [modifiergot, totalmodstars]
}



// modifiers

const newmod = new Modifier("New", 1) // has img
const oldmod = new Modifier("Old", 1)
const glowingmod = new Modifier("Glowing", 1) // has img
const shoddymod = new Modifier("Low Quality", 1) // has img
const oddmod = new Modifier("Odd", 1)
const fearmod = new Modifier("Phobiaphobic", 1)
const spidermod = new Modifier("Many-Legged", 1) // has img
const tastymod = new Modifier("Tasty", 1)
const excessmod = new Modifier("Excessive", 1)
const slowmod = new Modifier("Slow", 1)
const impmod = new Modifier("Imperfect", 1)
const fuzzymod = new Modifier("Fuzzy", 1)
const starrymod = new Modifier("Starry", 1)
const fakemod = new Modifier("Fake", 1)
const crazymod = new Modifier("Crazy", 1)
const catmod = new Modifier("Catty", 1) // has img
const infmod = new Modifier("Inferior", 1)
const heromod = new Modifier("Heroic", 1)
const yarnmod = new Modifier("Crocheted", 1)
const treemod = new Modifier("All-Natural", 1)
const organicmod = new Modifier("Organic", 1) // has img
const dimmod = new Modifier("Dim", 1) // has img

const tntmod = new Modifier("Explosive", 2)
const emomod = new Modifier("Emo", 2)
const gildedmod = new Modifier("Gilded", 2)
const sillymod = new Modifier("Silly", 2)
const manlymod = new Modifier("Manly", 2) // has img
const girlymod = new Modifier("Girly", 2) // has img
const hqmod = new Modifier("High Quality", 2)
const knightmod = new Modifier("Knightly", 2)
const catmodi = new Modifier("Cat Loving", 2)
const recmod = new Modifier("Recursive", 2)
const supmod = new Modifier("Superior", 2)
const firemod = new Modifier("Fire", 2) // has img
const chadmod = new Modifier("Gigachad", 2) // has img

const fursuitmod = new Modifier("Fursuited", 3)
const shinymod = new Modifier("Shiny", 3)
const silymod = new Modifier("sily", 3)
const fracmod = new Modifier("Fractalized", 3)
const goldmod = new Modifier("Solid Gold", 3) // has img

const maidlymod = new Modifier("Maid", 4)
const destmod = new Modifier("Destructive", 4)
// const holymod = new Modifier("<img src='../img/gacha/jesus.jpg' height='20px' width='fit-content'>", 4)
const holymod = new Modifier("Holy", 4) // has img
const paramod = new Modifier("Paradoxical", 4)

const nullmod = new Modifier("null", 5)
const mangosmod = new Modifier("Mango's", 5)