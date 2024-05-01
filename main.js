//seleciona os elementos do HTML
const botaoAdiciona = document.querySelector("button")
const inputTarefa = document.querySelector("#tarefa")
const lista = document.querySelector("#lista")


//cria um listener para monitorar o clique do botão
botaoAdiciona.addEventListener('click', adicionaTarefa)

//função que vai adicionar a tarefa à lista
function adicionaTarefa(){
   //tamanho mínimo de 3 caracteres
   if(inputTarefa.value.length > 3){
        //criar um elemento <div>
        let itemDiv = document.createElement('div')
        itemDiv.classList.add("divLista")

       //cria elemento <li>
       let li = document.createElement('li')

       //adicionar o texto ao li
       li.innerText = inputTarefa.value

       //adicionar a li a div
       itemDiv.appendChild(li)

       //criar um botao para feito
       let btFeito = document.createElement('button')
       btFeito.id("feito")
       //btFeito.innerHTML = '<i class="fa fa-check-circle fa-xs">V</i>'

       let btExcluir = document.createElement('button')
       btExcluir.id("excluir")
       //btExcluir.innerHTML = '<i class="fa fa-minus-circle fa-xs">X</i>'
           

        //adiciona o botão à div
        itemDiv.appendChild(btFeito)
        itemDiv.appendChild(btExcluir)

        //adicionar a <div> dentro da Lista
        lista.appendChild(itemDiv)
       
        //limpa o conteúdo do input
        inputTarefa.value = ''
   }

}

//capturar o evento para tecla enter
inputTarefa.addEventListener("keyup", (evento) =>{
    if(evento.key == "Enter")
    {
        adicionaTarefa()
    }
   })

//monitora cliques em qualquer local da lista
lista.addEventListener('click', concluirExcluir)

//monitorar clique no botão concluido
feito.addEventListener('click', marcaFeito)


//verifica se o que foi clicado dentro da lista foi um botão
function concluirExcluir(evento){
    if(evento.target.nodeName =="BUTTON" && evento.target.id == "feito")
    {
        evento.target.parentElement.classList.toggle('completa')
    }
    if(evento.target.nodeName == "BUTTON" && evento.target.id == "excluir"){
        let paiDoBotaoRemover = evento.target.parentElement;
        // Removemos o elemento pai do botão "Remover", que é o item a ser excluído
        paiDoBotaoRemover.remove();
    }
}