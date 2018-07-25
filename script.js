let primeironome = document.querySelector('#input-nome');
let sobrenome = document.querySelector('#input-sobrenome');
let email = document.querySelector('#input-email');
let senha = document.querySelector('#senha');
let botao = document.querySelector('#botao');
let inputs = document.querySelectorAll('input');
let classmodal = document.querySelector('.modal');
let alert1 = document.querySelector('#alert1');
let alert2 = document.querySelector('#alert2');
let alert3 = document.querySelector('#alert3');



function modal(){
    classmodal.classList.add('modal');
}

botao.addEventListener('click', function(){
    let resultadoemail = email.value ;
    let arroba = resultadoemail.indexOf('@');
    if((primeironome.value == "") || (sobrenome.value =="")||(email.value == "")||(senha.value =="")){

         alert1.style.display = "block";

        setTimeout(function() {
            alert1.style.display = "none"
        }, 1500);

    } else if(arroba == -1){

         alert2.style.display = "block"

        setTimeout(function() {
            alert2.style.display = "none"
        }, 1500);

    } else if(senha.value.lenght <= 7){
         alert3.style.display = "block"

        setTimeout(function() {
            alert3.style.display = "none"
        }, 1500);
    } else {
        alert1.style.display = "block";

        setTimeout(function() {
            alert1.style.display = "none"
        }, 1500);
    }
    console.log( "Nome:"+ primeironome.value+"\nSobrenome:" + sobrenome.value+ "\nEmail:" + email.value+"\nSenha:" + senha.value);
    
});

