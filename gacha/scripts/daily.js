// daily checkins ooooooo

// i dont want people waiting forever so you can get em every 6 hours ------- this was scrapped due to a poll on 7/24/24 and is now 18 hours

let alldailies = []


// type 1 = katkoin
// type 2 = katvouchers
// type 3 = pixels

function daily(type, amount, day) {
    this.type = type
    this.amount = amount
    this.day = day
    alldailies.push(this)
}


const dayi = new daily(1, 1300, 1)
const dayii = new daily(1, 1300, 2)
const dayiii = new daily(3, 200, 3)
const dayiv = new daily(2, 10, 4)
const dayv = new daily(1, 1300, 5)
const dayvi = new daily(3, 300, 6)
const dayvii = new daily(1, 2600, 7)
const dayviii = new daily(2, 15, 8)
const dayix = new daily(3, 300, 9)
const dayx = new daily(1, 2600, 10)
const dayxi = new daily(1, 1300, 11)
const dayxii = new daily(2, 15, 12)
const dayxiii = new daily(1, 1300, 13)
const dayxiv = new daily(3, 300, 14)
const dayxv = new daily(1, 1300, 15)
const dayxvi = new daily(1, 1300, 16)
const dayxvii = new daily(1, 2600, 17)
const dayxviii = new daily(1, 1950, 18)
const dayxix = new daily(1, 1950, 19)
const dayxx = new daily(2, 20, 20)
const dayxxi = new daily(3, 400, 21)
const dayxxii = new daily(1, 1950, 22)
const dayxxiii = new daily(2, 20, 23)
const dayxxiv = new daily(1, 1950, 24)
const dayxxv = new daily(3, 400, 25)
const dayxxvi = new daily(1, 2600, 26)
const dayxxvii = new daily(1, 1950, 27)
const dayxxviii = new daily(1, 1950, 28)
const dayxxix = new daily(2, 20, 29)
const dayxxx = new daily(2, 30, 30)
const dayxxxi = new daily(1, 1300, 31)

function checkDaily() {
    var now = new Date();
    now = Number(now.getTime())
    console.log(`timesincecheckin = ${now - game.lastcheckin}`)
    if (now - game.lastcheckin >= 64800000) {
        console.log("Remember to set me back to 64800000 after testing!")
        
        getDaily(game.checkindays)
    }
}

function getDaily(day) {
    let dailyoutput = alldailies[day]
    let dailygot = ""

    if (dailyoutput.type == 1) {
        dailygot = "KatKoin"
    } else if (dailyoutput.type == 2) {
        dailygot = "Kat Vouchers"
    } else if (dailyoutput.type == 3) {
        dailygot = "Pixels"
    }

    document.getElementById("dailytop").innerHTML = `You claimed your day ${dailyoutput.day} daily reward!`
    document.getElementById("dailymiddle").innerHTML = `+${dailyoutput.amount} ${dailygot}`

    document.getElementById("pullgrey").style.display = "block"
    document.getElementById("dailysupercontainer").style.display = "block"

    let dailycont = document.getElementById("dailyokay")
    dailycont.addEventListener('mousedown', function() {
        dailyOkay(dailyoutput.type, dailyoutput.amount)
    });


}

function dailyOkay(type, amount) {
    document.getElementById("pullgrey").style.display = "none"
    document.getElementById("dailysupercontainer").style.display = "none"
    var old_element = document.getElementById("dailyokay");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);


    if (type == 1) {
        game.katkoin = game.katkoin + amount
        throwKatKoin(amount, 1)
    } else if (type == 2) {
        game.katvouchers = game.katvouchers + amount
        throwKatVoucher(amount, 1)
    } else if (type == 3) {
        game.pixels = game.pixels + amount
        throwPixel(amount, 1)
    }
    var now = new Date();
    now = Number(now.getTime())
    game.lastcheckin = now
    game.checkindays = game.checkindays + 1 // moved these to the end of the process so refreshing the page doesnt get rid of daily rewards
}