// Funções gerais
function togglePopup(input, label) {
}

function estilizarInputCorreto(input, helper) {
    helper.classList.remove('visible')
    input.classList.remove('error');
    input.classList.add('correct');
    
}

function estilizarInputIncorreto(input, Helper) {
    Helper.classList.add('visible')
    input.classList.remove('correct')
    input.classList.add('error')
    
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");


togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener('change', (event) => {
    let value = event.target.value;

    if(value.length <= 3) {
        //Adicionar estilo dinâmico se o valor tiver menos que 3 caracteres
        usernameHelper.innerText = 'O username precisa ter mais de 3 caracteres!'
        
        estilizarInputIncorreto(usernameInput, usernameHelper)
        inputsCorretos.username = false
    } else {
        // Adicionar estilo dinâmico se o valor estiver correto
        estilizarInputCorreto(usernameInput, usernameHelper);
        inputsCorretos.username = true
    }
})

// validação email

let emailInput  = document.getElementById('email')
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput,emailLabel)

emailInput.addEventListener('change', (event)=>{
    let value = event.target.value;

    if(value.includes('@') && value.includes('.com')){
        estilizarInputCorreto(emailInput,emailHelper);
        inputsCorretos.email = true
    } else{
        emailHelper.innerText = "Você precisa inserir um email válido"
        estilizarInputIncorreto(emailInput,emailHelper);
        inputsCorretos.email = false
    }
})    

// validação senha

let senhaInput  = document.getElementById('senha')
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

togglePopup(senhaInput,senhaLabel)

senhaInput.addEventListener('change', (event)=>{
    let value = event.target.value;

    if(value.length > 7 ) {
        estilizarInputCorreto(senhaInput,senhaHelper);
        inputsCorretos.senha = true
    } else{
        senhaHelper.innerText = "A senha precisa no mínimo 8 caracteres"
        estilizarInputIncorreto(senhaInput,senhaHelper);
        inputsCorretos.senha = false
    }
}) 
// validação da confirmação da senha

let confirmaSenhaInput  = document.getElementById('confirma-senha')
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

togglePopup(confirmaSenhaInput,confirmaSenhaLabel)

confirmaSenhaInput.addEventListener('change', (event)=>{
    let value = event.target.value;

    if(value == senhaInput.value ) {
        estilizarInputCorreto(confirmaSenhaInput,confirmaSenhaHelper);
        inputsCorretos.confirmaSenha = true
    } else{
        confirmaSenhaHelper.innerText = "A confirmação da senha precisa ser igual a senha"
        estilizarInputIncorreto(confirmaSenhaInput,confirmaSenhaHelper);
        inputsCorretos.confirmaSenha = false
    }
})     

// Evitar envio do formulário
let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
    username:false,
    email:false,
    senha:false,
    confirmaSenha:false
}
btnSubmit.addEventListener("click", (e)=>{
    if(inputsCorretos.username == false ||
        inputsCorretos.email == false ||
        inputsCorretos.senha == false ||
        inputsCorretos.confirmaSenha == false){
        e.preventDefault()
    }  else{
        alert("Formulário enviado com sucesso")
    }
})