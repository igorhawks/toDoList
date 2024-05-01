const main = document.querySelector("main")
//quando a página estiver Carregada
window.onload = (event)=>{
    fetch('meusdados.json')
    .then(response => response.json())
    .then(dados => {
        let h2 = document.createElement("h2")
        h2.innerText = dados.descricao
        main.appendChild(h2)

        let paragrafo = document.createElement("p")
        let txt = "Atividade desenvolvida para o curso de " + dados.curso + " no ano de " + dados.ano + "."
        paragrafo.innerText = txt
        main.appendChild(paragrafo)
        paragrafo = document.createElement("p")
        txt = "Aluno " + dados.autor +"."
        paragrafo.innerText = txt
        main.appendChild(paragrafo)
    })
}