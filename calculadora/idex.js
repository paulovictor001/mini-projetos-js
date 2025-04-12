function calcular(tipo,valor){

    var valor_compo = document.getElementById('visor').value

    if (tipo==="acao"){
        console.log('aaa')

        if(valor==='c'){
            valor_compo = document.getElementById('visor').value =''
        }

        if(valor==="/" || valor==="*" || valor==="+" || valor==="-" ){
            document.getElementById("visor").value += valor
            console.log('aaa')
        }
        if(valor==="="){
            var valor_compo = eval(document.getElementById('visor').value) 
            document.getElementById('visor').value = valor_compo
        }
    }
    else if (tipo==="valor"){
       var valor_compo = document.getElementById('visor').value += valor
    }
}