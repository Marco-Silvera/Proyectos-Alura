function cuatro() {
    console.log("cuatro")
}

function tres() {
    console.log("tres")
    cuatro()
}

function dos() {
    console.log("dos")
    tres()
}

function uno() {
    console.log("uno")
    dos()
}

uno()



