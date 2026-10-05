let ctrlDown = false
let terminalHistory = []
let terminalHistoryAt = 0
let terminalHistoryHolder = ""


const getEl = (id) => document.getElementById(id);
const getClassEl = (classname) => document.getElementsByClassName(classname)[0];
const sleep = (ms) => new Promise(resolve => {
    let listenController = new AbortController()
    const sleepTimeout = setTimeout(function () {
        resolve()
        listenController.abort()
    }, ms)
    document.body.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 67 && ctrlDown) {
            listenController.abort()
            renderLine({ts: Date.now(), txt: "^C"})
            resolve()
            clearTimeout(sleepTimeout)
        }
    }, {signal: listenController.signal})
});
const escapeHTML = text => text.replace(/[&<>"]/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
}[c]));

const formatMs = (ms) => {
    if (ms < 1e3) return `${ms}ms`;
    const years = Math.floor(ms/31536000000)
    ms = ms % 31536000000
    const days = Math.floor(ms/864e5)
    ms = ms % 864e5
    const hours = Math.floor(ms/36e5)
    ms = ms % 36e5
    const minutes = Math.floor(ms/6e4)
    ms = ms % 6e4
    const seconds = Math.floor(ms/1e3)

    return `${years > 0 ? `${years} years, ` : ""}${days > 0 ? `${days} days, ` : ""}${hours > 0 ? `${hours} hours, ` : ""}${minutes > 0 ? `${minutes} minutes, ` : ""}${seconds} seconds`
}
const scrollToBottom = () => {
    const container = document.getElementById('sim-data-full')
    container.scrollTop = container.scrollHeight
}


const renderBlock = ({ts, top, txt}) => {
    const dateobj = new Date(ts)
    const newEl = document.createElement("div")
    newEl.innerHTML = `<span class="datablock-top">${top}</span><br><span class="datablock-txt">${txt}</span> <span class="datablock-ts">${dateobj.toLocaleTimeString().slice(0, -3).length < 8 ? `0${dateobj.toLocaleTimeString().slice(0, -3)}` : dateobj.toLocaleTimeString().slice(0, -3)}.${dateobj.getMilliseconds() < 100 ? `0${dateobj.getMilliseconds()}` : dateobj.getMilliseconds()}</span>`
    getEl("sim-data-block").appendChild(newEl)
}
const renderLine = ({ts, txt}) => {
    const dateobj = new Date(ts)
    const newEl = document.createElement("div")
    newEl.innerHTML = `<span class="datablock-txt">${txt}</span> <span class="datablock-ts">${dateobj.toLocaleTimeString().slice(0, -3).length < 8 ? `0${dateobj.toLocaleTimeString().slice(0, -3)}` : dateobj.toLocaleTimeString().slice(0, -3)}.${dateobj.getMilliseconds() < 100 ? `0${dateobj.getMilliseconds()}` : dateobj.getMilliseconds()}</span>`
    getEl("sim-data-block").appendChild(newEl)
}
const renderHead = ({ts, txt}) => {
    const dateobj = new Date(ts)
    const newEl = document.createElement("div")
    newEl.innerHTML = `<span class="datablock-head">${txt}</span> <span class="datablock-ts">${dateobj.toLocaleTimeString().slice(0, -3).length < 8 ? `0${dateobj.toLocaleTimeString().slice(0, -3)}` : dateobj.toLocaleTimeString().slice(0, -3)}.${dateobj.getMilliseconds() < 100 ? `0${dateobj.getMilliseconds()}` : dateobj.getMilliseconds()}</span>`
    getEl("sim-data-block").appendChild(newEl)
}
const renderImageLine = ({ts, url, size}) => {
    const dateobj = new Date(ts)
    const newEl = document.createElement("div")
    newEl.innerHTML = `<img src="${url}" style="width: ${size}px; height: ${size}px; display: inline-block;"> <span class="datablock-ts">${dateobj.toLocaleTimeString().slice(0, -3).length < 8 ? `0${dateobj.toLocaleTimeString().slice(0, -3)}` : dateobj.toLocaleTimeString().slice(0, -3)}.${dateobj.getMilliseconds() < 100 ? `0${dateobj.getMilliseconds()}` : dateobj.getMilliseconds()}</span>`
    getEl("sim-data-block").appendChild(newEl)
}
const renderLineBreak = () => {
    const newEl = document.createElement("br")
    getEl("sim-data-block").appendChild(newEl)
}
const renderLink = ({ts, txt, ltxt, link}) => {
    const dateobj = new Date(ts)
    const newEl = document.createElement("div")
    newEl.innerHTML = `<span class="datablock-txt">${txt}<br><a onclick="linkClickRender('${link}')" href="#">${ltxt}</a></span> <span class="datablock-ts">${dateobj.toLocaleTimeString().slice(0, -3).length < 8 ? `0${dateobj.toLocaleTimeString().slice(0, -3)}` : dateobj.toLocaleTimeString().slice(0, -3)}.${dateobj.getMilliseconds() < 100 ? `0${dateobj.getMilliseconds()}` : dateobj.getMilliseconds()}</span>`
    getEl("sim-data-block").appendChild(newEl)
}
const linkClickRender = (link) => {
    getEl("terminal-input").value = `explorer ${link}`
    getEl("terminal-input").focus()
}

const adjustHistoryCheck = (dir) => {
    if (terminalHistory.length == 0) return getEl("terminal-input").value = terminalHistoryHolder;
    terminalHistoryAt += dir
    if (terminalHistoryAt > 0) {
        terminalHistoryAt = 0
        return
    } else if (terminalHistoryAt === 0) {
        getEl("terminal-input").value = terminalHistoryHolder
    } else if (terminalHistoryAt < 0) {
        if (terminalHistory.at(terminalHistoryAt)) {
            getEl("terminal-input").value = terminalHistory.at(terminalHistoryAt)
        } else {
            terminalHistoryAt -= dir
            getEl("terminal-input").value = terminalHistory.at(terminalHistoryAt)
        }
    } else {
        console.error("Something went wrong with adjustHistoryCheck.")
    }
}


let terminalLoadingDelay = 125

let terminalLoadingState = false
let terminalLoadingFrame = 0
let terminalLoadingLastF = Date.now()
let terminalLoadingChars = [`|`,`/`,`-`,`\\`,`|`,`/`,`-`,`\\`]
const loadTerminalFocus = () => {
    if (terminalLoadingState === true) {
        const curd = Date.now()
        if ((curd - terminalLoadingLastF) > terminalLoadingDelay) {
            getEl("terminal-loady").textContent = `${terminalLoadingChars[terminalLoadingFrame]}`
            terminalLoadingFrame++
            terminalLoadingLastF = curd
            if (terminalLoadingFrame > 7) terminalLoadingFrame = 0;
        }
    } else {
        getEl("terminal-loady").textContent = ``
    }
    requestAnimationFrame(loadTerminalFocus)
}

const generalhelp_prealph = [
    `bio - Gives a bio of the operator.<br>`,
    `explorer &lt;url&gt; - Opens a url.<br>`,
    `help [cmd] - Shows the available commands, if cmd is supplied provides detailed information on the command.<br>`,
    `help oper - Shows the available operators.<br>`,
    `sleep &lt;ms&gt; - Waits the designated amount of milliseconds.<br>`,
    `uptime - Returns the amount of time the server has been up for.<br>`,
    `clear - Clears the console.<br>`,
    `logo - Shows the website logo.<br>`,
    `sound &lt;url&gt; - Plays a given sound.<br>`,
    `bio [part] - Provides a short description of the lead operator.<br>`,
    `meow - Prints a kitty to the console.<br>`,
    `exit, logout - Logs out of the system and returns to the Auth page.<br>`,
    `data - Fetches data about current logged in user.<br>`,
    `links [page] - Gives a list of the operator's various links.<br>`,
    `kofi - Gives a list of the operator's kofi supporters.<br>`,
    `echo - Repeats the phrase that follows.<br>`,
    `dyslexia [mode] - Sets the dyslexia mode, to make reading text easier.<br>`,
    `stats - Toggles the Stats for Nerds popup, giving technical details about the site.<br>`
]
const operhelp_prealph = [
    `&& - Chains two commands together, waiting until the first is successfully finished before executing the next.<br>`,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
]

const operlinks_preformat = [
    {
        link: "https://abstractors.mangokitten.com",
        ltxt: "Open Abstractors in Explorer",
        txt: "Abstractors, an online game where you collect cards and chat with others about said cards. Mango's first big success."
    },
    {
        link: "/clicker",
        ltxt: "Open Clicker in Explorer",
        txt: "Cat Clicker, a short game of a similar style to Cookie Clicker with its own mechanics. The first game Mango developed."
    },
    {
        link: "/gacha",
        ltxt: "Open Gacha in Explorer",
        txt: "Mangos Gacha Game, a technically infinite game designed to fill the gacha void in ones life. The precursor to Abstractors."
    }
]
const opersocials_preformat = [
    {
        link: "https://ko-fi.com/mangokitten",
        ltxt: "Open Ko-fi in Explorer",
        txt: "Mangos Kofi page, support here is greatly appreciated. Use 'kofi' to view a full list of supporters."
    },
    {
        link: "https://twitch.tv/mangokittengaming",
        ltxt: "Open Twitch in Explorer",
        txt: "Mangos Twitch page, she occasionally streams here when having free time."
    },
    {
        link: "https://github.com/mango-kitten",
        ltxt: "Open GitHub in Explorer",
        txt: "Mangos GitHub page. Most projects on here are private for the sake of security."
    },
    {
        link: "https://steamcommunity.com/profiles/76561199415611477/",
        ltxt: "Open Steam Community in Explorer",
        txt: "Mangos Steam page. She spends a lot of money and time on various games."
    }
]

const consolecmds = [
    {
        cmd: "help",
        execute: function (remainder) {
            if (remainder[0]) {
                if (remainder[0] === "oper") {
                    return `Operator HELP<br>${operhelp_prealph.sort().join(" ")}`
                }
                const matchingcmd = consolecmds.find(c => c.cmd === remainder[0].toLowerCase())
                if (matchingcmd) {
                    return matchingcmd.help
                } else {
                    return "Command not found."
                }
            } else {
                return `General HELP<br>
${generalhelp_prealph.sort().join(" ")}
`
            }
        },
        help: "..."
    },
    {
        cmd: "sleep",
        execute: async function (remainder) {
            if (remainder[0]) {
                if (isNaN(remainder[0])) return "Please input a numerical duration.";
                await sleep(Number(remainder[0]))
                return "Finished!"
            } else {
                return "Please input a duration in ms to wait."
            }
        },
        help: "Waits the given duration, then returns Finished!. Press Ctrl+C to cancel operation."
    },
    {
        cmd: "explorer",
        execute: async function (remainder) {
            if (remainder[0]) {
                window.open(remainder[0], "_blank");
                return "Opening..."
            } else {
                return "Please supply a link to open."
            }
        },
        help: "Opens the given link in a new tab in your web browser."
    },
    {
        cmd: "init",
        execute: async function (remainder) {
            return "Already initialized this instance!"
        },
        help: "Initializes the instance."
    },
    {
        cmd: "uptime",
        execute: async function (remainder) {
            return (await reqUptime())
        },
        help: "Queries the uptime of the server."
    },
    {
        cmd: "clear",
        execute: async function (remainder) {
            getEl("sim-data-block").innerHTML = ``
            return "Console cleared!"
        },
        help: "Clears the console of all blocks. Does not clear command usage history."
    },
    {
        cmd: "logo",
        execute: async function (remainder) {
            return {type: "img", data: "../assets/logo.ico", size: 24}
        },
        help: "Returns the website's .ico logo."
    },
    {
        cmd: "bio",
        execute: async function (remainder) {
            if (!remainder[0]) {
                renderBlock({ts: Date.now(), top: "About operator user MANGOKITTEN", txt: "A short summary of the operator of this system."})
                return `
Name: MangoKitten<br>
Pronouns: she/her<br>
Gender Orientation: Transgender female<br>
Age: Undisclosed<br>
Favorite Animal: Cat<br>
Favorite Food: Chocolate (pho for the candy-as-a-food haters)<br>
Favorite Game: Zenless Zone Zero<br>
Favorite Content Creators: josh_lain, hermestheflyingpug, sunflowersmith<br>
Hobbies: Game development, game playing, game streaming<br>
Do Not Interact List: Transphobes/homophobes/racists/etc, NSFW, LLM users<br>
Claim To Fame: abstractors.mangokitten.com, ttv/mangokittengaming<br>
`
            } else {
                switch (remainder[0]) {
                    case "status":
                        return (await reqMangoStatus())
                    case "name":
                        return "MangoKitten is her online name, it has no relation to her irl name (which is not disclosed). She is a big fan of cats, given the second portion. You can just call her Mango if you don't want to type the full username."
                    case "gender":
                        return "MangoKitten exclusively identifies as female. Please avoid referring to her with gender neutral pronouns."
                    case "age":
                        return "MangoKitten's age will not be disclosed online for the sake of keeping her privacy."
                    case "faves":
                        return "MangoKitten quite likes cats, greatly preferring them as a pet.<br>Chocolate is an amazing food, and cannot be denied, although she also enjoys various food from around the world, especially Pho and Ethiopian.<br>Zenless Zone Zero has been her fixation for a very long time, with somewhere near 700 login days as of writing this.<br>Run 'bio favecc' to learn about the content creators."
                    case "favecc":
                        renderLink({ts: Date.now(), txt: "Josh Lain is an FPS streamer, doing streams to record games like Overwatch and Escape from Tarkov.", ltxt: "Josh_Lain's YouTube channel", link: "https://www.youtube.com/@JoshLain"})
                        renderLink({ts: Date.now(), txt: "Hermestheflyingpug is a TetrIO streamer, who also streams games that follow similar mechanics, like Lumines Arise.", ltxt: "Hermes' Twitch channel", link: "https://www.twitch.tv/hermestheflyingpug"})
                        renderLink({ts: Date.now(), txt: "SunflowerSmith is a variety streamer, who is an angel VTuber.", ltxt: "SunflowerSmith's Twitch channel", link: "https://www.twitch.tv/sunflowersmith"})
                        return "Finished logging."
                    case "hobby":
                        return "MangoKitten greatly enjoys anything to do with computers, and creating things is her passion."
                    case "dni":
                        return "MangoKitten's DNI list is very simple, and mainly surrounds bigots."
                    case "fame":
                        renderLink({ts: Date.now(), txt: "MangoKitten has created several games, the most popular of which is Abstractors. Go play it now via web!", ltxt: "Open Abstractors in Explorer", link: "https://abstractors.mangokitten.com/chat/"})                        
                        renderLink({ts: Date.now(), txt: "MangoKitten streams occasionally, creating general content on a variety of games. She is not very good at any of these games.", ltxt: "Open Twitch in Explorer", link: "https://twitch.tv/mangokittengaming"})      
                        return "Finished logging."                  
                    default:
                        return "Error with argument 'part'."
                }
            }
            
        },
        help: "Gives a short bio of the current system operator. Supply with 'name', 'gender', 'age', 'faves', 'favecc', 'hobby', 'dni', or 'fame' for more detailed information."
    },
    {
        cmd: "sound",
        execute: async function (remainder) {
            if (!remainder[0]) return "Please supply a sound to play.";
            if (remainder[0].startsWith("/")) {
                new Audio(".."+remainder[0]).play()
            } else {
                new Audio(remainder[0]).play()
            }
            return "Playing sound..."
        },
        help: "Plays a sound from the given url. Must be a direct link to the sound, or '/assets/audio/meow.mp3'"
    },
    {
        cmd: "meow",
        execute: async function (remainder) {
            new Audio('../assets/audio/meow.mp3').play()
            return `<pre style="line-height: 1em;">
 _._     _,-'""\`-._
(,-.\`._,'(       |\\\`-/|
    \`-.-' \\ )-\`( , . .)
          \`-    \\\`_ ⩊'-        <:3  )~
</pre>`
        },
        help: "Magical terminal cat."
    },
    {
        cmd: "exit",
        execute: async function (remainder) {
            logOut()
            return "Logging out..."
        },
        help: "Logs out, returning to the authorization page."
    },
    {
        cmd: "logout",
        execute: async function (remainder) {
            logOut()
            return "Logging out..."
        },
        help: "Logs out, returning to the authorization page."
    },
    {
        cmd: "links",
        execute: async function (remainder) {
            if (!remainder[0]) {
                operlinks_preformat.forEach(linkf => {
                    renderLink({ts: Date.now(), txt: linkf.txt, ltxt: linkf.ltxt, link: linkf.link})
                })
            } else {
                if (remainder[0] === "insite") {
                    operlinks_preformat.forEach(linkf => {
                        renderLink({ts: Date.now(), txt: linkf.txt, ltxt: linkf.ltxt, link: linkf.link})
                    })
                } else if (remainder[0] === "social") {
                    opersocials_preformat.forEach(linkf => {
                        renderLink({ts: Date.now(), txt: linkf.txt, ltxt: linkf.ltxt, link: linkf.link})
                    })
                } else {
                    return "Error with argument 'page'."
                }
            }
            return "Finished logging."
        },
        help: "Gives a list of the operator's links - inputting '' or 'insite' for [page] returns insite links, 'social' returns socials."
    },
    {
        cmd: "kofi",
        execute: async function (remainder) {
            return `
Tuxedo Cats - aleicht, uselessentity<br>
Angel Cats -<br>
Kittens - Yellosuu<br>
One Time - saderen, muninn`
        },
        help: "Gives a list of Mangos kofi supporters."
    },
    {
        cmd: "echo",
        execute: async function (remainder) {
            return remainder.join(" ")
        },
        help: "Echoes the next argument supplied, logging it to this console."
    },
    {
        cmd: "dyslexia",
        execute: async function (remainder) {
            if (remainder[0] === "off") {
                setCookie("dyslexiaMode", "noneRestriction")
                dyslexiaMode = "noneRestriction"
            } else if (remainder[0] === "light") {
                setCookie("dyslexiaMode", "baseRestriction")
                dyslexiaMode = "baseRestriction"
            } else if (remainder[0] === "heavy") {
                setCookie("dyslexiaMode", "fullRestriction")
                dyslexiaMode = "fullRestriction"
            } else {
                return "Error with argument 'mode'."
            }
            updateDyslexiaMode()
            return "Updated dyslexia mode."
        },
        help: "Sets the dyslexia mode, disabling a lot of animations. Supply with 'off' to disable, 'light' to remove some animations, and 'heavy' to remove all animations."
    },
    {
        cmd: "graphics",
        execute: async function (remainder) {
            if (remainder[0] === "default") {
                setCookie("graphicsMode", "default")
                graphicsMode = "default"
            } else if (remainder[0] === "low") {
                setCookie("graphicsMode", "low")
                graphicsMode = "low"
            } else if (remainder[0] === "high") {
                setCookie("graphicsMode", "high")
                graphicsMode = "high"
            } else {
                return "Error with argument 'mode'."
            }
            updateGraphicsMode()
            return "Updated graphics mode."
        },
        help: "Adjusts the graphics level, determining how much happens on the page. 'default' is the normal setting, 'low' removes almost all animation, 'high' ."
    },
    {
        cmd: "stats",
        execute: async function (remainder) {
            return getEl("stats-holder").classList.toggle("hidden") === true ? "Hiding Stats for Nerds" : "Showing Stats for Nerds";
        },
        help: "Toggles the visibility of the Stats for Nerds popup."
    }
]


const consoleEvent = async (value) => {
    if (typeof value !== "string") return;
    if (value.replaceAll(" ", "") === "") return false;
    renderLine({ts: Date.now(), txt: `&gt; ${value}`})
    getEl("terminal-input").value = ""
    getEl("terminal-input").blur()
    terminalLoadingState = true
    terminalLoadingFrame = 0
    const cmdsplit = value.split(" ")
    const matchingcmd = consolecmds.find(c => c.cmd === cmdsplit[0].toLowerCase())
    if (matchingcmd) {
        if (cmdsplit.includes("&&")) {
            while (cmdsplit.includes("&&")) {
                if (cmdsplit[0] === "&&") cmdsplit.splice(0, 1);
                const using = cmdsplit.splice(0, (cmdsplit.indexOf("&&") === -1 ? 999 : cmdsplit.indexOf("&&")))
                if (using.length === 0) break;
                let matchingcmd2 = consolecmds.find(c => c.cmd === using[0].toLowerCase())
                if (matchingcmd2) {
                    const initTimeAt = Date.now()
                    const cmdresult = await matchingcmd2.execute(using.slice(1))
                    responseTimes.push(Date.now() - initTimeAt)
                    if (responseTimes.length > responseHeldDuration) responseTimes.shift();
                    if (cmdresult !== false) {
                        if (typeof cmdresult === "object") {
                            if (cmdresult.type === "img") {
                                renderImageLine({ts: Date.now(), url: cmdresult.data, size: cmdresult.size})
                            }
                        } else {
                            renderLine({ts: Date.now(), txt: cmdresult})
                        }
                        scrollToBottom()
                    } else {
                        renderLine({ts: Date.now(), txt: `Something went wrong executing command "${escapeHTML(using[0].toLowerCase())}"`})
                        scrollToBottom()
                        break;
                    }
                } else {
                    renderLine({ts: Date.now(), txt: `Could not find command "${escapeHTML(using[0].toLowerCase())}"`})
                    scrollToBottom()
                    break;
                }
                
            }
        } else {
            cmdsplit.splice(0, 1)
            const initTimeAt = Date.now()
            const cmdresult = await matchingcmd.execute(cmdsplit)
            responseTimes.push(Date.now() - initTimeAt)
            if (responseTimes.length > responseHeldDuration) responseTimes.shift();
            if (cmdresult !== false) {
                if (typeof cmdresult === "object") {
                    if (cmdresult.type === "img") {
                        renderImageLine({ts: Date.now(), url: cmdresult.data, size: cmdresult.size})
                    }
                } else {
                    renderLine({ts: Date.now(), txt: cmdresult})
                }
            }
        }
        
    } else {
        renderLine({ts: Date.now(), txt: `Could not find command "${escapeHTML(cmdsplit[0].toLowerCase())}"`})
        terminalLoadingState = false
    }
    getEl("terminal-input").focus()
    terminalLoadingState = false
    renderLineBreak()
    scrollToBottom()
}