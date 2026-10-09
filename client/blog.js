const blogPosts = [
    {
        ts: 1791567330219,
        title: "a hop, a skip, and a complete rework",
        content: 
`well, it finally happened.
i got around to remaking my website. this is a complete redo, and i really hope that it looks much better than what i used to have. if you miss the old site, just check out my [github for this site](https://github.com/mango-kitten/mango-kitten.github.io) and uh mess around with that maybe? it wasnt very good.
a few notes about the site! this thing is completely clientside. i do not intend on creating a server for stuff like the login page, as that costs MONEY. and i do not have enough money. abstractors is already my money sink, and i plan on keeping it up for years to come.
i also have a bunch of secrets hidden around the site! there arent many right now but as i have more ideas i plan on adding them. its sort of meant to be a minigame which you can play, but there isnt much of a real reason to focus on them. it exists more as a reason for people to keep poking around and finding out what exactly the site does, instead of just loading it up, running 'bio', and then closing it again.
hmmmmm what else. if you made it this far, check out the other things i do! im not just a one trick pony working on websites, i also work in java {currently creating a minecraft mod}, and in my remaining free time i [stream](https://twitch.tv/mangokittengaming). if you want anything done by me {mostly coding}, please feel free to dm me on discord {@mangokitten}!
i think thats about all the yapping i have in me today!

mangokitten, signing off`
    }
]

const linkTextRegex = /\[(.*?)\]/
const linkLinkRegex = /(\()([^'])(.*?)([^'])(\))/
const fixAllText = (text = "") => {
    let iter = 0
    while (text.includes("[") && text.includes("]") && text.includes("(") && text.includes(")") && iter < 50) {
        const thelink = linkLinkRegex.exec(text)[0]
        const thetext = linkTextRegex.exec(text)[0]
        text = text.replace(`${thetext}${thelink}`, `<a onclick="linkClickRender('${thelink.replace("(", "").replace(")", "")}')" href="#">${thetext.replace("[", "").replace("]", "")}</a>`)
        iter++
    }
    return text.replaceAll("\n", "<br>").replaceAll("{","(").replaceAll("}",")")
}