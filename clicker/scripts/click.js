var mouseIsDown = false;
let autoclick = 0
let e = 0

let moneybutton = document.getElementById("moneybutton")


moneybutton.addEventListener('mousedown', function() {
  mouseIsDown = true;
  setTimeout(function() {
    if(mouseIsDown) {
      autoclick = setInterval(function() {
        money()
      }, 150)
    }
  }, 1000);
});

window.addEventListener('mouseup', function() {
  mouseIsDown = false;
  moneyclicked = 0
  this.clearInterval(autoclick)
});
