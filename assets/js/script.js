/* uma constante
const email = 'gilmar@';
/* let é uma variável reservada, é mais utilizada que o var 
let email2 = 'carlos@';
/* variável 
var email3 = 'jose@';*/

/* concatenação 
console.log('O email digitado é: ' + email);
/* template string, não precisa usar concatenação 
console.log(`O email digitado é: ${email2}`);*/

/*----------------------------*/
/* esse método recupera o elemento pelo seu Id */
document.getElementById('btn-submit').addEventListener('click', e =>{
    console.log('O botão foi clicado');
});

/* ----- estava testando eventos */
document.getElementById('form-login').addEventListener('mouseenter', e => {
    //console.log('O mouse está sobre o formulário');
});
/* o querySelector faz o mesmo só que é mais "poderoso" */
document.querySelector('#form-login').addEventListener('mouseleave', e => {
    //console.log('O mouse está fora do formulario');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    console.log('----------------');
    console.log('Formulário enviado!');
    console.log(email, password);

    console.log('----------------');
    /* --------- trabalhando com JSON ------------ */
    let json = {
        /*propriedade = variável*/
        email: email,
        /*se for do mesmo nome pode só colocar a propriedade*/
        password
    };
    console.log(json);

    let stringJSON = JSON.stringify(json);
    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);
    console.log(jsonParse);
    console.log(jsonParse.email);

    console.log('----------------');
    /* ----- validação ----- */
    /* o usuário consegue através do dev tools do navegador, desativar a obrigação de digitar um email, mas podemos criar mais de uma camada de segurança */
    if(!json.email){
        console.error("O campo email deve ser preenchido!");
    }else if(!json.password){
        console.error("O campo password deve ser preenchido!");
    }else{
        console.info("Dados validados com sucesso!");
    }
});