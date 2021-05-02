




var resultadoDolar = document.querySelector(".resultado")

function converterDollar() {

    valorEmDolarNumero = parseFloat(document.querySelector(".quantidadeEUA").value)

    var valorEmReal = valorEmDolarNumero * 5.44
    var valorEmRealFixado = valorEmReal.toFixed(2)

    document.querySelector("h2").innerHTML = "="

    resultadoDolar.innerHTML = valorEmRealFixado
}








