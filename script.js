
function calcularimc(){
      let valoraltura = parseFloat(document.getElementById("InformacaoAltura").value);
      let valorpeso = parseFloat(document.getElementById("InformacaoPeso").value);
      let valorresultado = document.getElementById("Resultado");

      let altura = (valoraltura * valoraltura);
      let peso = valorpeso;
      valorresultado = (peso / altura);
      var conceito = "";
      var decisaoconceito = "";

      if (valorresultado < 18.5){
            conceito = "Abaixo do peso ideal"
            decisaoconceito = "Precisa ganhar massa magra. Clique em saúde já e te mostraremos como."
      }else if(valorresultado >= 18.5 && valorresultado <=24.9){
            conceito = "Peso ideal"
            decisaoconceito = "Está indo bem, mas sempre podemos melhorar. Clique em saúde já me te mostraremos como melhorar ainda mais."
      }else if(valorresultado >= 25 && valorresultado <=29.9){
            conceito = "Acima do peso Ideal"
            decisaoconceito = "Não demore mais. Clique em saúde já e fique saudável"
      }else{
            conceito = "Muito acima do peso ideal"
            decisaoconceito = "Precisa de ajuda urgentemente. Venha falar conosco, podemos te ajudar"
      }
      
      console.log(valorresultado);
      console.log(conceito);
      Resultado.innerHTML = `<p id ="conceito" >${conceito}</p>` 
      Resultado.innerHTML += `<p id ="decisaoconceito">${decisaoconceito}</p>`

}
