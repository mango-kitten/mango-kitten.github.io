document.addEventListener("click", e => {
  if (e.target !== getEl("guestbutton")) {
    e.stopPropagation();
    e.preventDefault();
  }
}, true)

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById("identity").focus()
  }, 500)
  elsAvail.push(document.getElementById("auth-form").getElementsByTagName("button")[0])
  elsAvail.push(document.getElementById("guestbutton"))
  elSelected = document.getElementById("auth-form").getElementsByTagName("button")[0];
  elSelected.classList.add("arrow-selected");
})

const guestButtonClickE = () => {
  location.href = '/client';
}

document.getElementById("guestbutton").addEventListener("click", async function () {
  guestButtonClickE()
})

let elsAvail = [
]
let elSelected;
let selectnum = 0;

const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    elsAvail.forEach(el => el.classList.remove("arrow-selected"));
    selectnum = clamp(selectnum-1, 0, elsAvail.length - 1);
    elSelected = elsAvail[selectnum];
    elSelected.classList.add("arrow-selected");
  }
  if (e.key === "ArrowDown") {
    elsAvail.forEach(el => el.classList.remove("arrow-selected"));
    selectnum = clamp(selectnum+1, 0, elsAvail.length - 1);
    elSelected = elsAvail[selectnum];
    elSelected.classList.add("arrow-selected");
  }
  if (e.key === "Enter" || e.keyCode === 13) {
    if (elSelected == document.getElementById("guestbutton")) guestButtonClickE();
  }
})