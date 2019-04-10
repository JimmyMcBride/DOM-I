const tens = document.getElementById("secondTens")
const ones = document.getElementById("secondOnes")
const hundredth = document.getElementById("msHundreds")
const tenth = document.getElementById("msTens")

let firstCounter = 0
let secondCounter = 1
let thirdCounter = 1
let forthCounter = 0

let digits = document.querySelector(".digits")

function timer(){
    const tenMs = setInterval(() => {
        tenth.innerText = firstCounter++
        if (firstCounter == 10){
            firstCounter = 0
        }
    }, 10)

    const hundMs = setInterval(() => {
        hundredth.innerText = secondCounter++
        if (secondCounter == 10){
            secondCounter = 0
        }
    }, 100)

    const oneSec = setInterval(() => {
        ones.innerText = thirdCounter++
        if (thirdCounter == 10){
            thirdCounter = 0
        }
    }, 1000)

    const tenSec = setInterval(() => {
        tens.innerText = 1
        tenth.innerText = 0
        clearInterval(tenMs)
        clearInterval(hundMs)
        clearInterval(oneSec)
        clearInterval(tenSec)
        digits.classList.add("redDigit")
    }, 10000)

}

timer()
