function calcular_imc(){

    var nome = document.getElementById("nome").value
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var resp = document.getElementById("resposta")
    

    if (peso.value !== '' || altura.value !== ''){
        resp.innerText='preencha todos os campos'
    }
    else{
        var imc = Math.round(peso/altura)
        resp.innerText='óla '+ nome + ', seu  imc é de '+imc
    }

    
    
    


}