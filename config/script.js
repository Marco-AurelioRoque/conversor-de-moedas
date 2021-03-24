var valorEmDolarTexto = prompt("valor em dolar")

valorEmDolarNumero = parseFloat(valorEmDolarTexto)  

var valorEmReal = valorEmDolarNumero * 5.52
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

//Comentarios sobre a 1 aula

 //parseInt é uma funçao para trasformar strings (textos) em number (numeros inteiros).
 //parseFloat é uma funçao para trasformar a strings (texto) em number (numero) OBS: ele mostra numeros com os decimais.

 //toFixed é uma funçao para fixar dois ou mais numeros, ou seja, se eu tiver o numero 299,99999999 e eu colocar o comando toFixed(2) por exemplo ele ficará 299,99