const tens = document.getElementById('secondTens')
const ones = document.getElementById('secondOnes')
const hundredth = document.getElementById('msHundreds')
const tenth = document.getElementById('msTens')
const myButton = document.querySelector('.myButton')

let firstCounter = 1
let secondCounter = 1
let thirdCounter = 1

let digits = document.querySelector('.digits')

function timer(){
    myButton.addEventListener('click', function(){
        clearInterval(tenMs)
        clearInterval(hundMs)
        clearInterval(oneSec)
        clearInterval(tenSec)
        firstCounter = 1
        secondCounter = 1
        thirdCounter = 1
    })
    tenth.innerText = 0
    hundredth.innerText = 0
    ones.innerText = 0
    tens.innerText = 0
    digits.classList.remove('redDigit')

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
        digits.classList.add('redDigit')
    }, 10000)

}

myButton.addEventListener('click', timer)