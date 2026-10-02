const reqUptime = async () => {
    const cur = Date.now()
    const unpacked = {
        start: initializationts
    }
    renderLine({ts: unpacked.start, txt: "Server Initialized"})
    renderLine({ts: cur, txt: `Request sent after ${cur - unpacked.start}ms`})
    const fcur = Date.now()
    renderLine({ts: fcur, txt: `Request finished after ${fcur - cur}ms`})
    return `Server has been up for ${formatMs(fcur - unpacked.start)}.`
}

const reqMangoStatus = async () => {
    return "Instance is currently in offline mode."
}

const logOut = async () => {
    location.href = '/auth';
}