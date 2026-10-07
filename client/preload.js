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
    scrollToBottom()
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
    `links [page] - Gives a list of the operator's various links.<br>`,
    `kofi - Gives a list of the operator's kofi supporters.<br>`,
    `echo - Repeats the phrase that follows.<br>`,
    `dyslexia [mode] - Sets the dyslexia mode, to make reading text easier.<br>`,
    `stats - Toggles the Stats for Nerds popup, giving technical details about the site.<br>`,
    `user - Shows a little bit about you, the user. Yes, I mean you.<br>`
]
const operhelp_prealph = [
    `&amp;&amp; - Chains two commands together, waiting until the first is successfully finished before executing the next.<br>`,
    `&gt;&gt; [repeats] - Returns to the start of the previous chain, repeating a specified amount of times.<br>`,
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
    },
    {
        cmd: "user",
        execute: async function (remainder) {
            renderLine({ts: Date.now(), txt: "you really thought that the computer would not know who you were? please. let me show you."})
            await sleep(1500)
            const c0 = navigator.userAgentData
            const c05 = navigator.userAgent.toLowerCase()
            c0 ? renderLine({ts: Date.now(), txt: c0.platform === "Windows" ? `a windows user, eh? good ol reliable, even if it has way too much bloatware. at least it can run any game you want.` 
                : c0.platform === "Linux" ? `maybe you are more techy? linux is a good choice as long as you dont want to play any games ever.` 
                : c0.platform === "Android" ? `oh, an android phone user! those are few and far between, mangos android phone badly needs to be replaced.`
                : c0.platform === "iOS" ? `an apple phone i see, i hope that storage and camera make up for the steep price you paid. those things are expensive.`
                : c0.platform === "Mac OS" ? `i see macos on like every work laptop for some reason. i hope you dont get in trouble for visiting random website at work, and dont boot up abstractors.`
                : c0.platform === "CrOS" ? `a schoolkid on their chromebook i see? you better get off that abstractors right now.`
                : "your browser wont tell me what your operating system is, or i dont recognize it... oh well, ill figure it out eventually."})
                : c05 ? renderLine({ts: Date.now(), txt: c05.includes("windows") ? `a windows user, eh? good ol reliable, even if it has way too much bloatware. at least it can run any game you want.`
                    : c05.includes("linux") ? `maybe you are more techy? linux is a good choice as long as you dont want to play any games ever.`
                    : c05.includes("android") ? `oh, an android phone user! those are few and far between, mangos android phone badly needs to be replaced.` 
                    : c05.includes("ios") ? `an apple phone i see, i hope that storage and camera make up for the steep price you paid. those things are expensive.`
                    : c05.includes("mac os") ? `i see macos on like every work laptop for some reason. i hope you dont get in trouble for visiting random website at work, and dont boot up abstractors.`
                    : c05.includes("cros") ? `a schoolkid on their chromebook i see? you better get off that abstractors right now.`
                    : "your browser wont tell me what your operating system is, or i dont recognize it... oh well, ill figure it out eventually."})
                : renderLine({ts: Date.now(), txt: `your browser will not tell me anything about itself. isnt that just sad.`});
            await sleep(1200)
            const c1 = navigator.language.startsWith("en")
            const c2 = navigator.languages.length
            renderLine({ts: Date.now(), txt: 
                c1 && c2 > 2 ? `not only do you speak english, but you also speak some other languages! isnt that cool.` : 
                c1 ? "your browser tells me you only speak english, tu dit petit quand de lang or something like that." : 
                "wait... if you dont speak any english, how are you reading this site?"});
            await sleep(1200)
            renderLineBreak()
            renderLine({ts: Date.now(), txt: 
                navigator.hardwareConcurrency <= 6 ? `a mere ${navigator.hardwareConcurrency} cores would not be enough for most, but you make do.` : 
                navigator.hardwareConcurrency <= 10 ? `a respectable ${navigator.hardwareConcurrency} cores is plenty for you to work with, you should be able to run plenty of essential processes.` : 
                `${navigator.hardwareConcurrency} cores is a lot of cores. holy moly.`});
            navigator.deviceMemory ? renderLine({ts: Date.now(), txt: 
                navigator.deviceMemory <= 4 ? `a mere ${navigator.deviceMemory} gigs of memory is not much, but i hope it is working for you. i wish an upgrade upon you soon.` 
                : navigator.deviceMemory <= 8 ? `you have a decent ${navigator.deviceMemory} gigs of memory. i promise you, that amount of memory is usable but there are some games you can only wish to play.` 
                : navigator.deviceMemory <= 16 ? `you have a wonderful ${navigator.deviceMemory} gigs of memory. that's pretty close to what mango has, and she can run anything on that beast of a laptop.` 
                : navigator.deviceMemory <= 32 ? `${navigator.deviceMemory} gigs of memory?! thats a pretty good amount! can i have some?` 
                : `please speed, share some of your ${navigator.deviceMemory} gigs of memory. im kinda homeless.`})
                : renderLine({ts: Date.now(), txt: "i am unable to see your device memory, you must be on firefox or an outdated browser."});
            let sum = 0
            frameTimes.forEach((frame, index) => sum += frame);
            sum > 0 ? renderLine({ts: Date.now(), txt: `all that tech is making you run at ${Math.round(1000 / (sum / frameTimes.length)) || 0} fps. please do tell me about the experience.`}) : renderLine({ts: Date.now(), txt: "something went wrong with that framerate..."});
            await sleep(1500)
            renderLineBreak()
            try {
                const c3 = await navigator.getBattery()
                c3 ? renderLine({ts: Date.now(), txt: c3.charging ? 
                    (
                        c3.level < 0.2 ? `you barely saved your computer from the brink of death, charging it at a low low ${Math.round(c3.level * 100)}%! good for you~` : 
                        c3.level < 0.5 ? `you are at a solid ${Math.round(c3.level * 100)}% charge and on your way up. dont unplug your device too soon.` :
                        c3.level < 0.9 ? `you have a good ${Math.round(c3.level * 100)}% charge left on your device, and are potentially planning on getting it to a full charge.` :
                        `dont hog that outlet, with your device at ${Math.round(c3.level * 100)}%. please dont forget to unplug your device!`
                    ) : 
                    (
                        c3.level < 0.2 ? `woah buddy, please plug in your device as it is at ${Math.round(c3.level * 100)}%! dont let her die on you like this!` : 
                        c3.level < 0.5 ? `starting to get low on that charge, i see. plug it in before that ${Math.round(c3.level * 100)}% drops to 0%!` :
                        c3.level < 0.9 ? `i really hope you arent going to let your device run down too low, it quite likes being around ${Math.round(c3.level * 100)}% charge.` :
                        `oooooooh you just fully charged your device, and are still at a nice ${Math.round(c3.level * 100)}%...... i appreciate the hustle quite greatly.`
                    )}) : renderLine({ts: Date.now(), txt: "you are using a browser that does not allow me to see your battery. how sad."});
            } catch (e) {
                renderLine({ts: Date.now(), txt: "you are using a browser that does not allow me to see your battery. how sad."});
            }
            await sleep(1500)
            renderLineBreak()
            navigator.doNotTrack ? renderLine({ts: Date.now(), txt: navigator.doNotTrack == "1" ? "your browser told me not to track you, and trust me, i am listening. i am not saving your data on this website, its simply for fun." 
                : "oh. you like being tracked? thats so... fascinating. maybe its a new browser! who am i to judge. anyways, that stuff really doesnt matter all too much, as you might be able to tell."})
                : renderLine({ts: Date.now(), txt: "hmmmmm you might be a safari user, or you might be on an older browser. regardless, i can not see whether you want to be tracked."});
            await sleep(1200)
            renderLineBreak()
            renderLink({ts: Date.now(), txt: "this little bit was inspired by yhvr. go check him out.", ltxt: "yhvr's personal page", link: "https://yhvr.me/"})
            renderLineBreak()
            return "and there you have it. a little bit about you, in a site about me. arent i so kind."
        },
        help: "Shows a little bit about you, the user."
    }
]


const runThroughLogic = async (fullsplit) => {
    console.log(fullsplit)
    if (fullsplit.includes("&&")) {
        while (fullsplit.includes("&&")) {
            if (fullsplit[0] === "&&") fullsplit.splice(0, 1);
            const using = fullsplit.splice(0, (fullsplit.indexOf("&&") === -1 ? 999 : fullsplit.indexOf("&&")))
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
        const matchingcmd = consolecmds.find(c => c.cmd === fullsplit[0].toLowerCase())
        fullsplit.splice(0, 1)
        const initTimeAt = Date.now()
        const cmdresult = await matchingcmd.execute(fullsplit)
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
}

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
        if (cmdsplit.includes("<<")) {
            const doublesplit = []
            let singlesplit = []
            cmdsplit.forEach(cmd => {
                if (cmd === "<<") {
                    doublesplit.push(singlesplit)
                    singlesplit = []
                } else {
                    singlesplit.push(cmd)
                }
            })
            doublesplit.push(singlesplit)
            for (let iter=0;iter<doublesplit.length;iter++) {
                const fullsplit = doublesplit[iter]
                if (fullsplit.length < 1) {
                    break;
                }
                if (doublesplit.length > (iter + 1)) {
                    const potentialnum = doublesplit[iter+1][0]
                    if (!isNaN(Number(potentialnum))) {
                        for (let inner=0;inner<Number(potentialnum);inner++) {
                            await runThroughLogic(Array.from(fullsplit))
                        }
                        doublesplit[iter+1].shift()
                    } else {
                        renderLine({ts: Date.now(), txt: `"${escapeHTML(using[0].toLowerCase())}" is not a valid number`})
                        scrollToBottom()
                        break;
                    }
                } else {
                    await runThroughLogic(fullsplit)
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