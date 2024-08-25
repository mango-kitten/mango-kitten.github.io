function throwError(error) {
    let errormessage = document.getElementById("errormessage")
    errormessage.style.opacity = "0.7"
    errormessage.innerHTML = `${error}`
    setTimeout(function () {
        errormessage.style.opacity = "0"
    }, 3000)
}

function genUID() {
    let uid = 0
    while (uid < 100000000) {
        uid = Math.floor(Math.random() * 1000000000)
    }
    return uid
}

function encrypt(string) {
    var post = CryptoJS.AES.encrypt(string, "mangosgachagame")
    return post.toString()
}
function decrypt(string) {
    var post = CryptoJS.AES.decrypt(string, "mangosgachagame")
    return post.toString(CryptoJS.enc.Utf8)
}

function postSaveGame() {
    var save = JSON.stringify(game)
    var saveenc = encrypt(save)

    return saveenc
}

function fullExport() {
    let encryptedsave = postSaveGame()
    if (confirm("This action will generate and download a file for save transfer! Please be sure you want to do this.")) {
        downloadSave(encryptedsave)
    } else {
        console.log("Canceled")
    }
}

function importSave(savestr) {
    try {
        var newsave = JSON.parse(savestr)

        if (newsave.inventory && newsave.accountcreated && newsave.uid) {
            return newsave
        } else {
            return 0
        }
    } catch (error) {
        return 0
    }
}

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}



function downloadSave(data) {
    var now = new Date().toLocaleString()
    now = now.replace(/\//g, "-")
    download(data, `MangosGachaSave${now}`, "text/plain")
}

let currentsavedata = ""
function uploadSave() {
    var file = document.getElementById("filesaveinput").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            currentsavedata = evt.target.result
            return evt.target.result
        }
        reader.onerror = function (evt) {
            return "Invalid file inputted"
        }
    } else {
        return "No file"
    }
}

function fullImport() {
    if (confirm("This will OVERWRITE your previous save in this browser! Are you sure you want to do this?")) {
        uploadSave()
        setTimeout(function () {
            let newsavedata = importSave(decrypt(currentsavedata))
            if (newsavedata == 0) {
                console.log("Failed Import (Invalid JSON)")
            } else {
                game = newsavedata
                saveGame()
                setTimeout(function () {
                    window.location.reload();
                }, 200)
            }
            console.log(newsavedata)
        }, 20)
        
    } else {
        console.log("Canceled action")
    }
}

function readSaveData() {
    uploadSave()
    setTimeout(function () {
        let newsavedata = importSave(decrypt(currentsavedata))
        if (newsavedata == 0) {
            document.getElementById("newsaveuid").innerHTML = "No valid save uploaded."
            document.getElementById("newsavelastsave").innerHTML = ""
            document.getElementById("newsavekatkoin").innerHTML = ""
            document.getElementById("newsavekvouch").innerHTML = ""
            document.getElementById("newsaveitems").innerHTML = ""

        } else {
            document.getElementById("newsaveuid").innerHTML = `UID: ${newsavedata.uid}`
            document.getElementById("newsavelastsave").innerHTML = `Saved at ${new Date(newsavedata.lastsave).toLocaleString()}`
            document.getElementById("newsavekatkoin").innerHTML = `${newsavedata.katkoin} KatKoin`
            document.getElementById("newsavekvouch").innerHTML = `${newsavedata.katvouchers} Kat Vouchers`
            document.getElementById("newsaveitems").innerHTML = `${newsavedata.inventory.length} Items`
        }
    }, 20)
}



function findObjectMod(modifier) {
    for (let i=0; i<game.inventory.length; i++) {
        if (game.inventory[i].modifier.includes(modifier)) {
            console.log(game.inventory[i].serial)
        }
    }
}

function findObjectName(name) {
    for (let i=0; i<game.inventory.length; i++) {
        if (game.inventory[i].link.includes(name)) {
            console.log(game.inventory[i].serial)
        }
    }
}


// from https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
function copyUidToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("uiddisp"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    document.getElementById("uiddisp").innerHTML = "Copied!"
}