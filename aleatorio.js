const nomes = ["Rebeca", "Emily", "Maria julia", "Vitor", "Eduarda", "Leonardo", "Rafeael"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)