let allgifts = []


function createGiftObject(recipient, id, type1, amount1, type2, amount2) {
    this.recipient = recipient
    this.id = id
    this.type1 = type1
    this.amount1 = amount1
    this.type2 = type2
    this.amount2 = amount2

    allgifts.push(this)
}



function displayGifts() {
    for (let i=0; i<allgifts.length; i++) {
        if (game.uid == allgifts[i].recipient && eval(`game.gift${allgifts[i].id}`)) {

        }
    }
}
function redeemGift(id) {
    
}


const konGift = new createGiftObject(123456789, 0, 1, 1000, 0, 0)