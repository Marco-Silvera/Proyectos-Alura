const textArea = document.querySelector(".texto-encriptado")
const mensaje = document.querySelector(".campo-mensaje")
const inst = document.querySelector(".instruccion")
const img = document.getElementById("imagen")
const header = document.querySelector(".ningun")
let btnCopy = document.querySelector(".copiar")
let texto = document.getElementById("texto-copiado")

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

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

        mensaje.style.display = "flex"
        btnCopy.style.display = "block"
        img.style.display = "none"
        header.style.display = "none"
        inst.style.display = "none";
    }
}

function encriptar(stringEncriptado) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado) {
    for (let i = 0; i < stringDesencriptado.length; i++) {
        for (let j = 0; j < matrizCodigo.length; j++) {
            const codigo = matrizCodigo[j];
            if (stringDesencriptado.substring(i).startsWith(codigo[1])) {
                stringDesencriptado = stringDesencriptado.substring(0, i) + codigo[0] + stringDesencriptado.substring(i + codigo[1].length);
                break; // Salir del bucle interno una vez que se haya encontrado y reemplazado el código
            }
        }
    }
    return stringDesencriptado;
}

async function copy() {
    let txt = mensaje.value
    await navigator.clipboard.writeText(txt)
}

btnCopy.addEventListener('click', copy)