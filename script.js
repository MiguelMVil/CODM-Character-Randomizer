const imgHolder = document.querySelector(".imageHolder")
const charName = document.querySelector(".char")

const randNum = document.querySelector(".numContainer")
const countMethod = document.querySelector(".selType")

// update name array
const chars = ["Ghost", "Charly" , "etc"]
const charPic = []

function charSelect() {
    const chosenChar = (Math.random * chars.length)
    
    imgHolder.style.backgroundImage = 'url("charpic[chosenChar]")'

    charName.style.innerText = chars[chosenChar]
}