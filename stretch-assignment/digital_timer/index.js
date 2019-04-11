const tens = document.getElementById('secondTens')
const ones = document.getElementById('secondOnes')
const hundredth = document.getElementById('msHundreds')
const tenth = document.getElementById('msTens')
const myButton = document.querySelector('.myButton')

var firstCounter = 1
var secondCounter = 1
var thirdCounter = 1

const digits = document.querySelector('.digits')

function timer(){
    // reset
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

    // 10 ms
    const tenMs = setInterval(() => {
        tenth.innerText = firstCounter++
        if (firstCounter == 10){
            firstCounter = 0
        }
    }, 10)

    // 100 ms
    const hundMs = setInterval(() => {
        hundredth.innerText = secondCounter++
        if (secondCounter == 10){
            secondCounter = 0
        }
    }, 100)

    // 1 second
    const oneSec = setInterval(() => {
        ones.innerText = thirdCounter++
        if (thirdCounter == 10){
            thirdCounter = 0
        }
    }, 1000)

    // 10 seconds
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