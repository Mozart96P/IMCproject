
function calcularimc(){
      let valoraltura = parseFloat(document.getElementById("InformacaoAltura").value);
      let valorpeso = parseFloat(document.getElementById("InformacaoPeso").value);

      let altura = (valoraltura * valoraltura);
      let peso = valorpeso;

      let resultado = (peso / altura);
      console.log(resultado);
}