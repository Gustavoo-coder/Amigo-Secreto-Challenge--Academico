//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Entrada de dados/ input
let listaAmigos = [];


//Funções

// Função Adicionar amigo na lista, a partir do input
function adicionarAmigo(){
  
    // Captura o valor digitado pelo usuario pelo input
   let capturarNomeLista = document.getElementById("addUsuario").value;
  
    // trim remove espaços de um nome, ex:"Gustavo  " = "Gustavo"
    capturarNomeLista = capturarNomeLista.trim(); 
    
    // Regex verifica se há nome com carecteres estranhos ou numeros
    const verificarNomeValido = /^[A-Za-zÁ-ú\s]+$/.test(capturarNomeLista.trim());  //Arrumar o regex
   
    // Verificação de nome valido    
        if(capturarNomeLista.trim() === ""){
          alert("Campo vazio, adicione um nome");
        
        }else if(!verificarNomeValido){
          alert("Nome invalido, tente novamente");
        
        }else if(listaAmigos.includes(capturarNomeLista.trim())){
          alert("Esse nome ja existe");
        
        }else{
          listaAmigos.push(capturarNomeLista.trim());
          limparCampo()
          exibirListaTela();
          
        }     
}

// Função limpar Campo 
function limparCampo(){
  // limpa o input automaticamente quando o usuario adiciona um nome a lista  
  document.getElementById("addUsuario").value = ""; 
}


// Função Exibir array diretamente na tela
function exibirListaTela(){

  const ulLista = document.getElementById("listaAmigos"); //Seleciona a ul

  ulLista.innerHTML="";
   
  for(let i = 0; i < listaAmigos.length; i++){  // Forma manual de exibir um li dentro de uma ul em javascript

    const liLista = document.createElement("li"); // Cria uma nova li

    liLista.textContent = listaAmigos[i];

    ulLista.appendChild(liLista);
  }

}

function sortearAmigo(){

if(listaAmigos.length < 2){
  alert("Adicione pelo menos 2 amigos para sortear!");

  return; // Duvida: porque o uso do return?

}   

// metodo do sorteio:

const IndiceSorteado = Math.floor(Math.random() * listaAmigos.length);

const amigoSorteado = listaAmigos[IndiceSorteado];

// exibindo nome sorteado na tela
const ulSorteado= document.getElementById("resultado");
ulSorteado.innerHTML="";


const liNomeSorteado = document.createElement("li");
liNomeSorteado.textContent = "O amigo sorteado: " + amigoSorteado;
ulSorteado.appendChild(liNomeSorteado);


// Limpar a lista, quando o nome for sorteado
const ulAmigos = document.getElementById("listaAmigos");
ulAmigos.innerHTML = ""; 


listaAmigos = [];

// Teste do amigo sorteado
//console.log(`O amigo sorteado foi ${amigoSorteado}`);

}