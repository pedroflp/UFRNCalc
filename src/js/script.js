function calcularNotas(){
    var nota_1 = parseFloat(document.getElementById('nota-input-1').value);
    var nota_2 = parseFloat(document.getElementById('nota-input-2').value);
    var nota_3 = parseFloat(document.getElementById('nota-input-3').value);

    var nota_4 = parseFloat();

    var calcular = document.getElementById('calcular-nota-section');

    var reprovado = document.getElementById("calcular-nota-alert-reprovado");
    var aprovado = document.getElementById("calcular-nota-alert-aprovado");
    var recuperar = document.getElementById("calcular-nota-alert-recuperar");

    // NÃO CALCULAR n>10
    if (nota_1 > 10 || nota_2 > 10 || nota_3 > 10 || nota_1 < 0 || nota_2 < 0 || nota_3 < 0 || nota_1 == null || nota_2 == null || nota_3 == null){
        return
    }

    var nota_parcial = ((nota_1 + nota_2 + nota_3) / 3).toFixed(2);

    if (nota_parcial >= 3){
        if((nota_1 == nota_2) && (nota_1 == nota_3)){
            nota_4 = 15 - nota_2 - nota_3
            console.log('1')
        }else{
            if((nota_1 < nota_2) && (nota_1 < nota_3)){
                nota_4 = 15 - nota_2 - nota_3
                console.log('2')
            }else{
                if((nota_2 < nota_1) && (nota_2 < nota_3)){
                    nota_4 = 15 - nota_1 - nota_3
                    console.log('3')
                }else{
                    nota_4 = 15 - nota_1 - nota_2
                    console.log('4')
                }
            }
        }
        
        if (nota_4 < 3){
            nota_4 = 3;
            console.log('Sempre 3');
        }
    }
        
    // PODE FAZER P4 COM UMA NOTA ABAIXO DE 3
    if ((nota_1 < 3 && nota_2 >= 3 && nota_3 >= 3) || (nota_1 >= 3 && nota_2 < 3 && nota_3 >= 3) || (nota_1 >= 3 && nota_2 >= 3 && nota_3 < 3) || (nota_1 == 3 && nota_2 == 3 && nota_3 == 3) || (nota_1 >= 3 && nota_2 >= 3 && nota_3 > 3 && nota_parcial >= 3 && nota_parcial < 5)) {
        calcular.style.display = 'none';
            
        document.getElementById('nota-recuperar-value').innerHTML = nota_parcial;
        document.getElementById('nova-nota-recuperar-value').innerHTML = nota_4;
        document.getElementById('voltar-calcular-nota-button').style.display = 'flex';
        recuperar.style.display = 'flex'; 
        console.log(nota_parcial);
        console.log('p4'); 

    }else{
        // reprovado
        if ((nota_1 < 3 && nota_2 < 3 && nota_3 < 3)){
            calcular.style.display = 'none';
        
            document.getElementById('nota-reprovado-value').innerHTML = nota_parcial;
            document.getElementById('voltar-calcular-nota-button').style.display = 'flex';
            reprovado.style.display = 'flex'; 

            console.log('rep');  
        }else{
            if((nota_1 < 3 && nota_2 < 3) || (nota_1 < 3 && nota_3 < 3) || (nota_2 < 3 && nota_3 < 3 )) {
                calcular.style.display = 'none';
        
                document.getElementById('nota-reprovado-value').innerHTML = nota_parcial;
                document.getElementById('voltar-calcular-nota-button').style.display = 'flex';
                document.getElementById('message-reprovado-value').innerHTML = 'Você possui duas notas abaixo de 3.'; 
                reprovado.style.display = 'flex'; 

                console.log('rep2');  
            }
        } 
        // APRVD 
        if(nota_parcial >= 5 && nota_parcial <= 10){
            calcular.style.display = 'none';

            document.getElementById('nota-aprovado-value').innerHTML = nota_parcial;
            document.getElementById('voltar-calcular-nota-button').style.display = 'flex';
            aprovado.style.display = 'flex';

            console.log('apr');  
        } 
    }
    
}

// show clear
function showClear(){
    var in1 = document.getElementById("nota-input-1"); 
    var in2 = document.getElementById("nota-input-2"); 
    var in3 = document.getElementById("nota-input-3");
    
    var cBtn = document.getElementById("clear-nota-button");
    if (in1.value != "" || in2.value != "" || in3.value != "")
    {
        cBtn.style.display = "block";
    } else {
        cBtn.style.display = "none";
    }
    
    $(".inputs").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).next('.inputs').focus();
        }
    }); 
    
}


// clear
function clearNotas(){
    document.getElementById('nota-input-1').value = null;
    document.getElementById('nota-input-2').value = null;
    document.getElementById('nota-input-3').value = null;
    document.getElementById("clear-nota-button").style.display = 'none';

}

// voltar
function voltarCalcular(){
    document.getElementById("calcular-nota-alert-reprovado").style.display = 'none';
    document.getElementById("calcular-nota-alert-aprovado").style.display = 'none';
    document.getElementById("calcular-nota-alert-recuperar").style.display = 'none';
    document.getElementById('calcular-nota-section').style.display = 'block';
    document.getElementById('voltar-calcular-nota-button').style.display = 'none';

}



