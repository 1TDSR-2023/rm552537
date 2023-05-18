const inputEmail = document.querySelector("#idEmail");

    inputEmail.addEventListener("focus", ()=>{
    inputEmail.setAttribute("style","outline-color:#ff0000;");

})


inputEmail.addEventListener("keyup", ()=>{
   
    const lblEmail = document.querySelector("label[for='IdEmail']");


    if(inputEmail.value.lengt < 5){
        inputEmail.setAttribute("style","outline-color:#ff0000;");
        lblEmail.setAttribute("style","color:#ff0000;");
        
    }else{
        inputEmail.setAttribute("style","outline-color:#00ff00;");
        lblEmail.setAttribute("style","color:#00ff00;");
    } 

    const eyePass = document.querySelector(".fa-eye");

    eyePass.addEventListener("click", ()=>{

        const inputSenha = document.querySelector("#idPass");

        if(inputSenha.getAttribute("type") == "password"){
            inputSenha.setAttribute("type","text");
            eyePass.setAttribute("class", "fa fa-eye-slash")
        }else{
            inputSenha.setAttribute("type","password");
            eyePass.setAttribute("class", "fa fa-eye")

        }


    });


    const usuario = {
        nomeCompleto : "Lucas",
        emailUsuario : "lucas@gmail",
        senhaUsuario : "12345"
    }

    const usuario2 = {
        nomeCompleto : "Leo",
        emailUsuario : "leo@gmail",
        senhaUsuario : "54321"
    }

    let listadeUsuarios = [];
    listadeUsuarios.push(usuario1);
    listadeUsuarios.push(usuario2);


    const botaoSumit = document.querySelector("#btnSubmit");

    botaoSumit.addEventListener("click", ()=>{


        //Criando um Ojeto de Validação
        const userValidado = {
            emailUsuarioValidado : inputEmail.value,
            senhaUsuarioValidado : inputSenha.value
        }


        //Criando uma interação com a lista de objetos para realizar a validação com o usuárioValidado
        listadeUsuarios.forEach((usuario)=>{
            //Realizando a validação
            //Comparando cada objeto da lista com o objeto montado com os dados que vieram do formulário

            if(userValidado.emailUsuarioValidado == usuario.email && userValidado.senhaUsuarioValidado == usuario.senhaUsuario){
                userValidado = usuario 
                throw "VALIDADO";
            }

        });

        throw "SENHA OU USUARIO INVÁLIDOS!";

}   catch(msg){

        const msgStatus = document.querySelector("#msgStatus");

        if(msg == "VALIDADO"){
            msg.Status.setAttribute("style","color:#00ff00");
            msgStatus.innerHTML = "<span><strong>Usuário: ${userValidado.nomeCompleto}</strong></span>";
    

        //Redirect
        setTimeout(()=>{
            window.location.href = "../home.html";

        }, 3000);

        
    
    }else{
        msg.Status.setAttribute("style","color:#ff0000");
        msg.Status.innerHTML = "<span><strong>Nome de usuário ou senha inválidos</strong></span>";
    }


  
}

});