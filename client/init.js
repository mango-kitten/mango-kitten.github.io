const initializationts = Date.now()

document.addEventListener('DOMContentLoaded', () => {
    const token = document.cookie.split('; ').reduce((acc, cur) => {
        const [key, val] = cur.split('=');
        return key === "token" ? decodeURIComponent(val) : acc;
    }, '')

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
    // renderLine({ts: Date.now(), txt: `&gt; explorer "https://mangokitten.com"`})
    setTimeout(function () {
        renderLine({ts: Date.now(), txt: `&gt; data`})
        reqData()
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
