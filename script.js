// Pra calcularmos o índice de massa corporal devemos multiplicar a altura ao quadrado e em seguida dividirmos o peso pelo altura.



function calcular(){
         var inputaltura = parseFloat(document.getElementById("dadoaltura").value);
         var inputpeso = parseFloat(document.getElementById("dadopeso").value);     
         var altura = inputaltura;
         var peso = inputpeso;       
         var resultado = peso / (altura *2);       
           
         var conceito= ""

         if(resultado <= 17){
                conceito = "Muinto abaixo do ideal"
         }
         else if(resultado > 17 && resultado < 18.5){
                         conceito = "Abaixo do peso ideal";
         }
         else if(resultado > 18.5 && resultado < 24.9){
                         conceito = "Peso ideal (normal)";
         }
         else if(resultado >= 25 && resultado < 29.9){
                conceito = "Acima do peso ideal";
         }
         else if(resultado >= 30 && resultado < 34.9){
              conceito = "0besidade 1";
         }
         else if(resultado > 35 && resultado < 39.9){
                conceito = "Obesidade 2";
         } else{ 
                conceito = "Obesidade 3";
         }

         console.log(resultado);
         console.log(conceito);

         resultcalc.innerHTML = `<p>${resultado}</p>`
         resultconceito.innerHTML = `<p>${conceito}</p>`

         
}



