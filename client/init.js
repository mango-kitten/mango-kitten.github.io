const initializationts = Date.now()
const setCookie = (name, value, days = 365) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=None; Secure`;
};

let dyslexiaMode = "noneRestriction";
const updateDyslexiaMode = () => {
    if (dyslexiaMode === "fullRestriction") {
        getClassEl("overlay").classList.add("hidden")
        getClassEl("computer-overlay").classList.add("hidden")
    } else if (dyslexiaMode === "baseRestriction") {
        getClassEl("overlay").classList.remove("hidden")
        getClassEl("computer-overlay").classList.add("hidden")
    } else {
        getClassEl("overlay").classList.remove("hidden")
        getClassEl("computer-overlay").classList.remove("hidden")
    }
}
let graphicsMode = "default";
const updateGraphicsMode = () => {
    if (graphicsMode === "default") {
        getClassEl("computer-overlay").style.backgroundImage = "repeating-radial-gradient(#888888,var(--dist),#888888,0,#88888800,calc(var(--dist) * 5),#88888800 0)"
        getClassEl("computer-overlay").style.animation = "none"
    } else if (graphicsMode === "low") {
        getClassEl("computer-overlay").style.backgroundImage = "none"
        getClassEl("computer-overlay").style.animation = "none"   
    } else {
        getClassEl("computer-overlay").style.backgroundImage = "repeating-radial-gradient(#888888,var(--dist),#888888,0,#88888800,calc(var(--dist) * 5),#88888800 0)"
        getClassEl("computer-overlay").style.animation = "staticMove 0.1s linear infinite alternate"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    dyslexiaMode = document.cookie.split('; ').reduce((acc, cur) => {
        const [key, val] = cur.split('=');
        return key === "dyslexiaMode" ? decodeURIComponent(val) : acc;
    }, '')
    if (dyslexiaMode === "" || dyslexiaMode === undefined || dyslexiaMode === null) dyslexiaMode = "noneRestriction";
    updateDyslexiaMode()
    graphicsMode = document.cookie.split('; ').reduce((acc, cur) => {
        const [key, val] = cur.split('=');
        return key === "graphicsMode" ? decodeURIComponent(val) : acc;
    }, '')
    if (graphicsMode === "" || graphicsMode === undefined || graphicsMode === null) graphicsMode = "default";
    updateGraphicsMode()

    document.body.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 17 || evt.keyCode === 91) {
            ctrlDown = true
        }
    })
    document.body.addEventListener("keyup", function (evt) {
        if (evt.keyCode === 17 || evt.keyCode === 91) {
            ctrlDown = false
        }
    })

    getEl("terminal-input").addEventListener("keydown", function (event) {
        if (event.code === "Enter") {
            scrollToBottom()
            terminalHistory.push(event.target.value)
            consoleEvent(event.target.value)
            terminalHistoryAt = 0
        }
        if (terminalHistoryAt === 0) {
            terminalHistoryHolder = event.target.value
        }
        if (event.keyCode === 38) {
            event.preventDefault()
            adjustHistoryCheck(-1)
        }
        if (event.keyCode === 40) {
            event.preventDefault()
            adjustHistoryCheck(1)
        }
    });
    requestAnimationFrame(loadTerminalFocus)
    renderLine({ts: Date.now(), txt: "&gt; init"})
    setTimeout(function () {
        renderLine({ts: Date.now(), txt: `&gt; explorer https://mangokitten.com`})
    }, 250)
    setTimeout(function () {
        renderLine({ts: Date.now(), txt: `&gt; data`})
        renderLine({ts: Date.now(), txt: "Data not found: in offline mode"})
        // reqData()
    }, 500)
    // renderLine({ts: Date.now(), txt: `&gt; search`})
    // renderLine({ts: Date.now(), txt: ``})
    setTimeout(function () {
        renderLine({ts: Date.now(), txt: "Type 'help' to get started..."})
        renderLineBreak()
        getEl("terminal-input").focus()
    }, 1200)
})

let personal_id
