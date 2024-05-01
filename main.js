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
        itemDiv.classList.add("concluido")
       //cria elemento <li>
       let li = document.createElement('li')
       //adicionar o texto ao li
       li.innerText = inputTarefa.value
       //adicionar a li a div
       itemDiv.appendChild(li)
       //criar um botao para feito
       let btFeito = document.createElement('button')
       let btExcluir = document.createElement('button')
        //adiciona um icone de "check" ao botao
        btFeito.classList.add("checked")
        btExcluir.classList.add("excluir")
        //adiciona o botão à div
        itemDiv.appendChild(btFeito)
        itemDiv.appendChild(btExcluir)
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
lista.addEventListener('click', marcaFeito)

//verifica se o que foi clicado dentro da lista foi um botão
function marcaFeito(evento){
    if(evento.target.nodeName =="BUTTON")
    {
        evento.target.parentElement.classList.toggle('completa')
    }
}