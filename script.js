
function calcularimc(){
      let valoraltura = parseFloat(document.getElementById("InformacaoAltura").value);
      let valorpeso = parseFloat(document.getElementById("InformacaoPeso").value);
      let valorresultado = document.getElementById("Resultado");

      let altura = (valoraltura * valoraltura);
      let peso = valorpeso;
      valorresultado = (peso / altura);

      switch(conceito){

      }
      if(valorresultado >= 18.5 && valorresultado<= 24.9){
            conseito = "Normal";
      }
      Resultado.innerHTML = `<p>${Math.ceil(valorresultado)}</p>`
      
}