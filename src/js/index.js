const listaSelecaoCardPyxis = document.querySelectorAll(".card");

listaSelecaoCardPyxis.forEach(card => {
    card.addEventListener("click", () => {
        desativarCartao();

        const idPySelecionado = ativarCartao(card);

        desativarLista();
        ativarLista(idPySelecionado);
    })
})

function ativarLista(idPySelecionado) {
    const pySeleLista = document.getElementById(idPySelecionado);
    pySeleLista.classList.add("ativo");
}

function desativarLista() {
    const pyListaAtivo = document.querySelector(".ativo");
    pyListaAtivo.classList.remove("ativo");
}

function ativarCartao(card) {
    const idPySelecionado = card.attributes.id.value;
    const idCartaoPAbrir = "i-" + idPySelecionado;
    const cartaoPAbrir = document.getElementById(idCartaoPAbrir);
    cartaoPAbrir.classList.add("aberto");
    return idPySelecionado;
}


function desativarCartao() {
    const cartaoPyAberto = document.querySelector(".aberto");
    cartaoPyAberto.classList.remove("aberto");
}

