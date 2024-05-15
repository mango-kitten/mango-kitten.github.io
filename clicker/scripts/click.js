var mouseIsDown = false;
let autoclick = 0
let e = 0
let hold = 0


let moneybutton = document.getElementById("moneybutton")


moneybutton.addEventListener('mousedown', function() {
  clearTimeout(hold)
  clearInterval(autoclick)
  mouseIsDown = true;
  hold = setTimeout(function() {
    if(mouseIsDown) {
      autoclick = setInterval(function() {
        if (mouseIsDown) {
            money()
        }
      }, 150)
    }
  }, 1000);
});

window.addEventListener('mouseup', function() {
  mouseIsDown = false;
  moneyclicked = 0
  this.clearInterval(autoclick)
});
