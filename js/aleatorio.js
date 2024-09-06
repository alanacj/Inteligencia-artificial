const nomes = ["Alana", "Ana", "Gian", "Sabrina"];
export function aleatorio (Lista) {
    const posicao = Math.floor(Math.random()* Lista.length);
    return Lista[posicao]
}

const nome = aleatorio(nomes);
