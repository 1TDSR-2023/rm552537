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



    console.log(inputEmail.value.lengt);
   
   
   
    // inputEmail.setAttribute("style","outline-color:#ff0000;");

})