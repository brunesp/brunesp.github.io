var idade = document.getElementById("idade");
var altura = document.getElementById("altura");
var peso = document.getElementById("peso");
var radios = document.getElementsByName("sexo");   
var resultado = document.querySelector('#txtIMC');
var resultIdeal = document.querySelector('#txtIdeal')

function calcular(){
   
    //Peso ideal
    if (radios[0].checked){
        var IdealF =  (altura.value - 100) * 0.85;   
        IdealF = ((Math.round(IdealF*100))/100);     
        resultIdeal.innerHTML = IdealF;
     }
     else if(radios[1].checked){
        var IdealM = (altura.value - 100) * 0.90;
        IdealM = ((Math.round(IdealM*100))/100);
        resultIdeal.innerHTML = IdealM;
     }

     //IMC
    altura = altura.value * 0.01;
    var IMC = peso.value / (Math.pow(altura,2)) ;
    IMC = ((Math.round(IMC*100))/100);

    txtIMC = IMC;
  
            if(idade.value >= 20 && idade.value <= 65){
                if (IMC < 16.0){
                    resultado.innerHTML = ('Muito abaixo do peso grave'); 
                } else if (IMC >= 16.0 && IMC <= 16.99){
                    resultado.innerHTML = ('Muito abaixo do peso'); 
                } else if (IMC >= 17 && IMC <= 18.49){
                    resultado.innerHTML = ('Abaixo do peso'); 
                }else if (IMC >= 18.50 && IMC <= 24.99){
                    resultado.innerHTML = ('Peso Normal'); 
                }else if (IMC >= 25 && IMC <= 29.99){
                    resultado.innerHTML =  ('Sobrepeso');
                }else if(IMC >= 30 && IMC <= 34.99){
                    resultado.innerHTML =  ('Obesidade Grau I');
                }else if (IMC >= 35 && IMC <= 39.99){
                    resultado.innerHTML =('Obesidade Grau II');
                }else{
                    resultado.innerHTML = ('Obesidade Mórbida');
                }
            }
//Mulher idosa
            if (radios[0].checked) {
             if(idade.value > 65){
                if (IMC <= 21.9){
                    resultado.innerHTML = ('Abaixo do peso'); 
                }else if (IMC >= 22 && IMC <= 27){
                    resultado.innerHTML = ('Peso Normal'); 
                }else if (IMC >= 27.1 && IMC <= 32){
                    resultado.innerHTML = ('Sobrepeso');
                }else if(IMC >= 32.1 && IMC <= 37){
                    resultado.innerHTML = ('Obesidade Grau I');
                }else if (IMC >= 37.1 && IMC <= 41.9){
                    resultado.innerHTML = ('Obesidade Grau II');
                }else{
                    resultado.innerHTML = ('Obesidade Mórbida');
                }
            }

        }
            //homem idoso
            else if (radios[1].checked){
                if(idade.value > 65){
                    if (IMC <= 21.9){
                        resultado.innerHTML = ('Abaixo do peso'); 
                    }else if (IMC >= 22 && IMC <= 27){
                        resultado.innerHTML = ('Peso Normal'); 
                    }else if (IMC >= 27.1 && IMC <= 30){
                        resultado.innerHTML = ('Sobrepeso');
                    }else if(IMC >= 30.1 && IMC <= 35){
                        resultado.innerHTML = ('Obesidade Grau I');
                    }else if (IMC >= 35.1 && IMC <= 39.9){
                        resultado.innerHTML = ('Obesidade Grau II');
                    }else{
                        resultado.innerHTML = ('Obesidade Mórbida');
                    }
        }    
}



}




  


 
