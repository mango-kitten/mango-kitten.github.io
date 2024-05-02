function updatetext() {
    if (!Number.isInteger(dolor)) {
        dolor = 0;
    }
    if (!Number.isInteger(mpc)) {
        mpc = 1;
    }
    document.getElementById("moneydisp").innerHTML = `Money: ${String(dolor)}`
    document.getElementById("mpcdisp").innerHTML = `Money per Click ${String(mpc)}`
    document.getElementById("cat1").innerHTML = `Buy a Cat $2000 (${String(bought[0])}/1)`
    document.getElementById("mpc1").innerHTML = `Increase mpc $50 (${String(bought[1])}/6)`
    document.getElementById("mpc2").innerHTML = `Mpc lv2 $1000 (${String(bought[2])}/8)`
    document.getElementById("mpc3").innerHTML = `Mpc lv3 $10000 (${String(bought[3])}/8)`
}
