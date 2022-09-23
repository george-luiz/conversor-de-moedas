function Converter() {
  // O button já espera uma função com o nome Converter pelo onclick
  let valorElemento = document.querySelector("#valor");
  let valor = valorElemento.value; // value: pegando o valor do input
  let valorEmDolarNumerico = parseFloat(valor); // parseFloat: transformando em números com ponto flutuante

  let valorEmReal = valorEmDolarNumerico * 5.22;
  let valorConvertido = document.querySelector("#valorConvertido");

  valorConvertido.textContent = `O resultado em Real é R$: ${valorEmReal.toFixed(2)}`;
}


