// //var nome = "Ruan";

// //let nome2 = "Boris";




// //Regra 1 : INICIALIZAR NA DESCLARAÇÃO;

// //Regra 2 : NÃO ALTERAR O sSEU VALOR DURANTE O FLUXO DO PROGRAMA;




// //var nome1 = "Petroni";




// //if(nome1 != ""){

// //    let nome1 = "Geovana";

// //




// //console.log(nome1);





// let botao = document.getElementById("meu-btn");

// //console.log(botao.textContent);





// botao.addEventListener("click", function(){

//     // console.log(botao.textContent);

//     //Função matemática Math

//     //random  = Retorna um número aleatório entre 0 e 1 Ex: 0.2282632765;

//     //floor = Ela arredonda um número para baixo

//     // ceil = Ela arredonda um número para cima

//     //round = Ela arredonda um número para aleatoriamente.




//     let r=0,g=0,b=0;

//     r = Math.round(Math.random()*255);

//     g = Math.round(Math.random()*255);

//     b = Math.round(Math.random()*255);

//    

//     //this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");

// this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);




// } );





// //ESTUDAR

// //querySelector

// //querySelectorAll

// //Array

// //Estruturas de repetição




// //Declarar um Array

// let frutas = ["banana", "maçã","pêssego","laranja","limão","melÂncia","kiwi"];

// console.log(frutas);
// console.table(frutas);
// console.log(frutas[0]);
// console.log(frutas[6]);

// //Inserir um item ao final do array com o método push(NomeDoItem);
// frutas.push("manga");
// console.log(frutas);

// //Inserir um item no ínicio do array com o método unshift e NomeDoItem
// frutas.unshift("pitaya");
// console.log(frutas);

// //Remover um item ao final do array com o método pop();
// frutas.pop();
// console.log(frutas);

// //Remover um item no ínicio do array com o método shift();
// frutas.shift();
// console.log(frutas);

// //Localizar um item no array utilizando o método indexOf(NomeDoItem);
// //Obs: Este método retorna o índice do item encontrado.
// //let indice = frutas.indexOf("laranja");
// //console.log(`O índice encontrado foi : ${indice}`);
// //console.log(`O item buscado foi : ${frutas[indice]}`);

// //Realizando uma remoção de item utilizando o método splice().
// //O método splice() recebe dois paramêtros, o índice do item que será removido e
// //a quantidade de vezes que este mesmo índice será removido. Ex: splice(indice, 1);

// //Dica:Utilize o método indexOf() para buscar o índice do item no array.

// let indice = frutas.indexOf("melancia");
// console.log(`O item encontrado no índice antes da remoção foi: ${ frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(frutas);
// console.log(`O item encontrado no índice depois da remoção foi: ${ frutas[indice]}`);



// //Concatenando os dois arrays em um novo array.
// let nr3 = [nr1,nr2];
// console.log("Array 3 : " + nr3);

// nr3;forEach( (nr)=>{
//     nr.forEach((n)=>{
//         console.log("Itens do Array 3 : " + n);
//     });
 


// } );

//Concatenação de Arrays
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
// console.log("Array 1 : " + nr1);
// console.log("Array 2 : " + nr2);

//Concatenando os dois arrays em um novo array com SPREAD( ... )
//      
console.log("Array 3 : " + nr3);

// nr3.forEach( (nr)=>{
    
//         console.log("Itens do Array 3 : " + nr);
// } );
