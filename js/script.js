const button = document.querySelector(".button")
function calculo() {
    const name = document.querySelector(".name").value
    const height = document.querySelector(".height").value
    const weight = document.querySelector(".weight").value
    const IMC = document.querySelector(".IMC")
    const altura = height / 100

    let calculadora = weight / Math.pow(altura, 2)

    if (calculadora > 18) {
        IMC.textContent = `Olá ${name}
Seu IMC é ${calculadora.toFixed(0)}`
    }
}

button.onclick = calculo