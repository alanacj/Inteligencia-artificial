const nomes = ["Alana", "Ana", "Gian", "Sabrina"];

 function aleatorio (Lista) {
    const posicao = Math.floor(Math.random() * Lista.length);
    return Lista[posicao];
}

const nome = aleatorio(nomes)
