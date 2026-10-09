const frameTimes = []
const frameHeldDuration = 30
let lastTiming = Date.now()
let frameLoopState = false

const responseTimes = []
const responseHeldDuration = 20

const frameLoop = () => {
    frameLoopState = true
    const dateUsed = Date.now()
    frameTimes.push(dateUsed - lastTiming)
    lastTiming = dateUsed
    if (frameTimes.length > frameHeldDuration) frameTimes.shift();
    let dateobj = new Date()
    if (getEl("currenttime-counter")) getEl("currenttime-counter").textContent = `${dateobj.toLocaleTimeString().slice(0, -3).length < 8 ? `0${dateobj.toLocaleTimeString().slice(0, -3)}` : dateobj.toLocaleTimeString().slice(0, -3)}.${dateobj.getMilliseconds() < 10 ? `00${dateobj.getMilliseconds()}` : dateobj.getMilliseconds() < 100 ? `0${dateobj.getMilliseconds()}` : dateobj.getMilliseconds()}`;
    requestAnimationFrame(frameLoop);
}

setInterval(() => {
    if (frameLoopState === false) requestAnimationFrame(frameLoop);
    if (getEl("fps-counter")) {
        let sum = 0
        frameTimes.forEach((frame, index) => sum += frame);
        getEl("fps-counter").textContent = `${Math.round(1000 / (sum / frameTimes.length)) || 0} FPS`
    }
    if (getEl("responsetime-counter")) {
        let sum = 0
        responseTimes.forEach((frame, index) => sum += frame);
        const timingdone = Math.round(sum / responseTimes.length) || 0
        getEl("responsetime-counter").textContent = `ART: ${timingdone === Infinity ? 0 : timingdone}ms`
    }
}, 500)

const themePresets = [
    {
        name: ["green", "default"],
        fade: "rgba(61, 125, 66, 0.5)",
        pale: "rgb(206, 255, 206)",
        base: "rgb(22, 204, 22)",
        dark: "rgb(6, 21, 7)",
        time: "rgb(70, 99, 70)",
        none: "rgb(138, 152, 138)"
    },
    {
        name: ["red"],
        fade: "rgba(125, 61, 61, 0.5)",
        pale: "rgb(255, 206, 206)",
        base: "rgb(204, 22, 22)",
        dark: "rgb(21, 6, 6)",
        time: "rgb(99, 70, 70)",
        none: "rgb(152, 138, 138)"
    },
    {
        name: ["blue"],
        fade: "rgba(61, 63, 125, 0.5)",
        pale: "rgb(215, 206, 255)",
        base: "rgb(43, 22, 204)",
        dark: "rgb(6, 9, 21)",
        time: "rgb(70, 70, 99)",
        none: "rgb(138, 138, 152)"
    },
    {
        name: ["terminal", "mono", "dark"],
        fade: "rgba(127, 127, 127, 0.5)",
        pale: "rgb(200, 200, 200)",
        base: "rgb(255, 255, 255)",
        dark: "rgb(0, 0, 0)",
        time: "rgb(105, 105, 105)",
        none: "rgb(137, 137, 137)"
    },
    {
        name: ["mango", "orange"],
        fade: "rgba(125, 98, 61, 0.5)",
        pale: "rgb(255, 233, 206)",
        base: "rgb(204, 134, 22)",
        dark: "rgb(21, 13, 6)",
        time: "rgb(99, 83, 70)",
        none: "rgb(152, 145, 138)"
    }
]

const changeTheme = (tid = "default") => {
    if (tid === "random" || tid === "rand") {
        const found = themePresets[Math.floor(Math.random() * themePresets.length)]
        setCookie("innerStaticTheme", found.name[0])
        theme = found.name[0]
        document.body.style.setProperty("--primary-color-faded", found.fade)
        document.body.style.setProperty("--primary-color-pale", found.pale)
        document.body.style.setProperty("--primary-color", found.base)
        document.body.style.setProperty("--primary-color-dark", found.dark)
        document.body.style.setProperty("--primary-color-ts", found.time)
        document.body.style.setProperty("--primary-color-disabled", found.none)
        return "Updated theme."
    }
    const found = themePresets.find(int => int.name.includes(tid))
    if (found) {
        setCookie("innerStaticTheme", tid)
        theme = tid
        document.body.style.setProperty("--primary-color-faded", found.fade)
        document.body.style.setProperty("--primary-color-pale", found.pale)
        document.body.style.setProperty("--primary-color", found.base)
        document.body.style.setProperty("--primary-color-dark", found.dark)
        document.body.style.setProperty("--primary-color-ts", found.time)
        document.body.style.setProperty("--primary-color-disabled", found.none)
        return "Updated theme."
    } else {
        return "Could not find matching theme."
    }
}