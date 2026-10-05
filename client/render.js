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