//Desafio 1
//Utilzando uma função com passagem de parâmetros insira os números e operadores matemáticos no visor
//Voce pode se utilizar de eventos inline no html.

function insereNumeroNoVisor(botao,visor){
    if(botao.value == "+" || botao.value == "-" || botao.value == "+" || botao.value == "*" || botao.value == "/" ){
        if(visor.value[visor.value.length-1] == "+" || visor.value[visor.value])
    }
    visor.value += botao.value
}


//Desafio 2
//Utilizando a função eval(expressão) calcule o resultado do visor 
//Atrele o evento ao botão de IGUAL
//Crie uma função para executar este procedimento .
//Afunção deve ser do tipo ARROW e deve receber o parâmetro

//O FORMATO DA FUNÇÃO 

const calculoDoVisor = (visor)=>{
    visor.value = eval(visor.value)

}

//DESAFIO 3 
//Impeça a entrada de mais de uma vez do operador matemático