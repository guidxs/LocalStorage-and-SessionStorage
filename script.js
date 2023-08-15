// let chave="chave"
// sessionStorage.setItem(chave,"Gui");

// let codigo = "chave1"
// sessionStorage.setItem(codigo,'senha')

// let leritem = sessionStorage.getItem(chave);
// console.log(leritem)

// localStorage.removeItem(chave)
// localStorage.clear()

//LISTA DE USUARIOS TESTANDO ARRAY
// let listaDados = [1,2,3,4,5]
// localStorage.setItem("lista",JSON.stringify(listaDados))


//LISTA DE USUARIOS
let listaDados = [];

//CRIANDO A BASE (CONSTRUTOR)

function Campos(campo1, campo2){
    this.campo1 = campo1
    this.campo2 = campo2
}

//DISPARAR O BOTÃO COM O DOM
const btnEnviar = document.querySelector('#btnSubmit')

//EVENTO DO CLICK
btnEnviar.addEventListener('click',()=>{
    const inputCampo1 = document.querySelector('#campo1');
    const inputCampo2 = document.querySelector('#campo2');

    //INSTANCIANDO O OBJETO PARA RECEBER NO CAMPO
    let info = new Campos(inputCampo1.value, inputCampo2.value)

    //PEGA TUDO QUE ESTIVER DENTRO DA LISTA DADOS
    listaDados.push(info);

    //ARMAZENA TUDO QUE FOI ADICIONADO NA LISTA DADOS CONVERTIDO COM JSON
    localStorage.setItem("dados",JSON.stringify(listaDados))
})