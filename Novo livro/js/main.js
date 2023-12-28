const fundo = document.getElementById("fundo")
const conteudo = document.getElementById("conteudo")
const menu = document.getElementById("menu")
const textoTrasicao = document.getElementById("texto-transicao")
let ultimoFundo  = "fundo-dia"
let isConteudoEscuro = false

function removeFundoAnterior(){
    fundo.classList.remove(ultimoFundo)
}

function mudarFundoDia() {
    removeFundoAnterior()
    fundo.classList.add("fundo-dia")
    menu.style.color = 'black'
    if (isConteudoEscuro){
        isConteudoEscuro = false
        conteudo.classList.remove("escuro-texto")
    }
    ultimoFundo = "fundo-dia"
}

function mudarFundoNoite() {
    removeFundoAnterior()
    menu.style.color = 'white'
    fundo.classList.add("fundo-noite")

    if (isConteudoEscuro === false ){
        isConteudoEscuro = true
        conteudo.classList.add("escuro-texto")
    }
    ultimoFundo = "fundo-noite"
}

function ativaModoClaro() {
    removeFundoAnterior()
    fundo.classList.add("modo-claro")
    menu.style.color = 'black'
    if (isConteudoEscuro){
        isConteudoEscuro = false
        conteudo.classList.remove("escuro-texto")
    }
    ultimoFundo = "modo-claro"
}

function ativarModoEscuro() {
    removeFundoAnterior()
    menu.style.color = 'white'
    fundo.classList.add("modo-escuro")
    if (isConteudoEscuro === false ){
        isConteudoEscuro = true
        conteudo.classList.add("escuro-texto")
    }
    ultimoFundo = "modo-escuro"
}

function mudarPagina() {
    window.location.href= "paginas.html"
}

function esperarAnimacao(){
    setTimeout(mudarPagina, 5000)
}

function voltaPaginaCapitulos(){
    window.location.href = "index.html"
}