let primeironome = document.querySelector('#input-nome');
let sobrenome = document.querySelector('#input-sobrenome');
let email = document.querySelector('#input-email');
let senha = document.querySelector('#senha');
let botao = document.querySelector('#botao');
let inputs = document.querySelectorAll('input');
let classmodal = document.querySelector('.modal');


// function validartodos(){
//     console.log("kkk")
//     if((primeironome.value == "") || (sobrenome.value =="")||(email.value == "")||(senha.value =="")){
//         console.log("Complete todas informações")
//     } else {
//         console.log( "Nome:"+ primeironome.value+"\nSobrenome:" + sobrenome.value+ "\nEmail:" + email.value+"\nSenha:" + senha.value);
//     }
// }
function modal(){
    classmodal.classList.add('modal');
}

botao.addEventListener('click', function(){
    let resultadoemail = email.value ;
    let arroba = resultadoemail.indexOf('@');
    if((primeironome.value == "") || (sobrenome.value =="")||(email.value == "")||(senha.value =="")){
        console.log("Complete todas informações")
    } else if(arroba == -1){
        alert("Email Inválido");
    } else if(senha.value.lenght <= 7){
        alert('Número de caracteres inválidos');
    }
        console.log( "Nome:"+ primeironome.value+"\nSobrenome:" + sobrenome.value+ "\nEmail:" + email.value+"\nSenha:" + senha.value);
    
});

// function validaremail(){
//     let resultadoemail = email.value.split(@); 
//     if( ){
//      ;
//     }
// }

// function validarsenha(){
//     if(){

//     } else {
//         ;
//     }
// }

