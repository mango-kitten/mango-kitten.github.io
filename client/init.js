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

let theme

document.addEventListener('DOMContentLoaded', () => {
    const achs = JSON.parse(atob(document.cookie.split('; ').reduce((acc, cur) => {
        const [key, val] = cur.split('=');
        return key === "innerStaticAch" ? decodeURIComponent(val) : acc;
    }, '')) || '{}')
    for (const key in Object.keys(achs)) {
        userach[key] = achs[key]
    }

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
    theme = document.cookie.split('; ').reduce((acc, cur) => {
        const [key, val] = cur.split('=');
        return key === "innerStaticTheme" ? decodeURIComponent(val) : acc;
    }, '')
    if (theme === "" || theme === undefined || theme === null) {
        changeTheme()
    } else {
        changeTheme(theme)
    }

    document.body.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 17 || evt.keyCode === 91) {
            ctrlDown = true
        }
        if (evt.keyCode === 16 || evt.keyCode === 13) {
            shiftDown = true
        }
        if (ctrlDown && shiftDown && evt.keyCode === 73 && !consoleBeenOpened) {
            console.log('%cSTOP!', 'background: #000; color: #ff0000; font-size: 35px')
            console.log('%cPart of the fun of this site is poking around! If you want to spoil the fun, then please feel free to mess around in here. Otherwise, close the console! You will find a lot more value if you let the site play out. ', 'background: #000; color: #ff0000')
            if (!userach['3']) {userach['3'] = true; renderWarn({ts: 253392527349999 + (new Date().getTimezoneOffset() * 60 * 1000), txt: "And something glittered back."})}
            consoleBeenOpened = true
        }
    })
    document.body.addEventListener("keyup", function (evt) {
        if (evt.keyCode === 17 || evt.keyCode === 91) {
            ctrlDown = false
        }
        if (evt.keyCode === 16 || evt.keyCode === 13) {
            shiftDown = false
        }
    })
    window.oncontextmenu = function () {
        return false
    }
    

    getEl("terminal-input").addEventListener("keydown", function (event) {
        if (event.code === "Enter" || event.keyCode === 13) {
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
    setTimeout(function () {
        if (navigator.maxTouchPoints > 1 && window.innerHeight > window.innerWidth) {
            renderLine({ts: Date.now(), txt: "Using a mobile device is not recommended! For the best experience, please use a computer."})
        }
    }, 750)
    
    // renderLine({ts: Date.now(), txt: `&gt; search`})
    // renderLine({ts: Date.now(), txt: ``})
    setTimeout(function () {
        renderLine({ts: Date.now(), txt: "Type 'help' to get started..."})
        renderLineBreak()
        getEl("terminal-input").focus()
    }, 1200)
})

let personal_id
