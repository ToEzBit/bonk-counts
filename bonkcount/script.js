const num = document.getElementById("num")
const count = document.getElementById("count")
const reset = document.getElementById("reset")
const img = document.getElementById("img")
const bonk =  new Audio("./bonksound.mp3")
const silence = new Audio("./silencesound.mp3")
const texthead = document.getElementById("texthead")
let clickcount = 0
count.addEventListener("click",countnum)

function countnum(){
    clickcount+=1
    num.innerText = clickcount
    img.setAttribute("src",'./bonk.png')
    setTimeout(i=()=>img.setAttribute("src",'./before.png'),150)
    document.body.style.backgroundColor = "white"
    count.style.backgroundColor = "#cb9800"
    reset.style.backgroundColor = "#cb9800"
    count.style.borderColor = "#cb9800"
    reset.style.borderColor = "#cb9800"
    texthead.innerHTML = "Bonk Count !!"
    texthead.style.color = "black"
    silence.pause()
    bonk.play()
}

reset.addEventListener("click",i = () => {
    clickcount = 0 
    num.innerText = clickcount
    document.body.style.backgroundColor = "black"
    img.setAttribute("src",'./silence.jpg')
    count.style.backgroundColor = "black"
    reset.style.backgroundColor = "black"
    count.style.borderColor = "black"
    reset.style.borderColor = "black"
    texthead.innerHTML = "No horny !!!!"
    texthead.style.color = "white"
    silence.load()
    silence.play()
})