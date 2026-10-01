var mouseIsDown = false;
let autoclick = 0
let e = 0
let hold = 0
let moneyclicked = 0

let manualclicks = 0

let moneybutton = document.getElementById("moneybutton")


moneybutton.addEventListener('mousedown', function() {
  clearTimeout(hold)
  clearInterval(autoclick)
  mouseIsDown = true;
  hold = setTimeout(function() {
    if(mouseIsDown) {
      autoclick = setInterval(function() {
        if (mouseIsDown) {
          console.log("mouse is really down")
          money()
        }
      }, 150)
    }
  }, 150);
});

window.addEventListener('mouseup', function() {
  mouseIsDown = false;
  moneyclicked = 0
  clearInterval(autoclick)
});


// window.addEventListener('mousemove', function() {
//   mouseIsDown = false;
//   moneyclicked = 0
//   clearInterval(autoclick)
// });
