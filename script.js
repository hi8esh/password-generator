const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let lengthEl = document.getElementById("lenght-el")
let copiedText = ""

function increment(){
    let currVal = lengthEl.textContent
    if(currVal < 20 ) {
        lengthEl.textContent = Number(lengthEl.textContent) + 1
    }
}

function decrement(){
    let currVal = lengthEl.textContent
    if(currVal >10 ) {
        lengthEl.textContent -= 1
    }
}

function getPassword() {
    let passLen = lengthEl.textContent
    let currPassword = ""
    for (let i=0; i<passLen; i+=1) {
        currPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    return currPassword
}

function generatePasswords() {
    let passLeftEl = document.getElementById("pass-left")
    let passRightEl = document.getElementById("pass-right")
    let passLeft = getPassword()
    let passRight = getPassword()
    while( passLeft === passRight){
        passRight = getPassword()
    }
    passLeftEl.textContent = passLeft
    passLeftEl.style.padding = "10px 0px 10px 0px"
    passRightEl.textContent = passRight
    passRightEl.style.padding = "10px 0px 10px 0px"
}

function copyLeft() {
    copiedText = document.getElementById("pass-left").innerHTML;
    if (copiedText.length === 0) return;
    navigator.clipboard.writeText(copiedText);
    document.getElementById("pass-left").innerHTML = "Copied to Clipboard!!"
    setTimeout("showbackLeft(copiedText)", 300);
}

function showbackLeft(copiedText) {
    // let copiedText = document.getElementById("pass-left").innerHTML;
    setTimeout(() => {

    }, 1000);
    document.getElementById("pass-left").innerHTML = copiedText
}

function showbackRight(copiedText) {
    setTimeout(() => {

    }, 500);
    document.getElementById("pass-right").innerHTML = copiedText
} 

function copyRight() {
    copiedText = document.getElementById("pass-right").innerHTML;
    if (copiedText.length === 0) return;
    navigator.clipboard.writeText(copiedText);
    document.getElementById("pass-right").innerHTML = "Copied to Clipboard!!"
    setTimeout("showbackRight(copiedText)", 300);
}