const textArea = document.querySelector(".texto-encriptado")
const mensaje = document.querySelector(".campo-mensaje")
const inst = document.querySelector(".instruccion")
const img = document.getElementById("imagen")
const header = document.querySelector(".ningun")
let btnCopy = document.querySelector(".copiar")
let texto = document.getElementById("texto-copiado")

function btnEncriptar() {
    if (textArea.value == "") {
        return
    } else {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = ""

        mensaje.style.display = "flex"
        btnCopy.style.display = "block"
        img.style.display = "none"
        header.style.display = "none"
        inst.style.display = "none";
    }
}

function btnDesencriptar() {
    if (textArea.value == "") {
        return
    } else {
        const textoDesencriptado = desencriptar(textArea.value)
        mensaje.value = textoDesencriptado
        textArea.value = ""
    }
}

function encriptar(stringEncriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            // Sustituye el valor de indice [i][0] por [i][1]
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado

}

function desencriptar(stringDesencriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
            // Sustituye el valor de indice [i][1] por [i][0]
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado

}

async function copy() {
    let txt = mensaje.value
    await navigator.clipboard.writeText(txt)
}

btnCopy.addEventListener('click', copy)