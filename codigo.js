function calcular_imc(){

    var nome = document.getElementById("nome").value
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resp = document.getElementById("resposta")

    var imc = peso/altura
    
    resp.innerText='óla '+ nome + ', seu  imc é de '+imc


}