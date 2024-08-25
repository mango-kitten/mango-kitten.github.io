let tempshop = []

let shopindic = 2

function createTempShop(id, html) {

    let newitem = document.createElement("div")
    newitem.id = `${id}shop`
    newitem.innerHTML = `<img src="../img/gacha/${id}.jpg">`
    newitem.classList = "pixelvouch"

    document.getElementById("shoptier2").appendChild(newitem)

    document.getElementById(`${id}shop`).addEventListener('mousedown', function () {
        openBuy(shopindic)
    })

    // shopiteminc = shopiteminc + 1



    this.id = id
    this.html = html
    tempshop.push(this)
}

const special1i = new createTempShop("garf", "+1 Garfield (1 star)<br>-200 Pixels")
const special1 = new shopItem(3, 200, "Garfield", "garf")

const special2i = new createTempShop("microwave", "+1 Microwave (1 star)<br>-200 Pixels")
const special2 = new shopItem(3, 200, "Microwave", "microwave")

const special3i = new createTempShop("brick", "+1 Half-brick in a Sock (1 star)<br>-200 Pixels")
const special3 = new shopItem(3, 200, "Half-brick in a Sock", "brick")

const special4i = new createTempShop("sans", "+1 sans (2 star)<br>-400 Pixels")
const special4 = new shopItem(3, 400, "sans.", "sans")

const special5i = new createTempShop("mangofruit", "+1 Mango (fruit)<br>-1000 Pixels")
const special5 = new shopItem(3, 1000, "Mango (fruit)", "mangofruit")

const special6i = new createTempShop("biteofeightyseven", "+1 Springlock Suit<br>-1000 Pixels")
const special6 = new shopItem(3, 1000, "Springlock Suit", "biteofeightyseven")