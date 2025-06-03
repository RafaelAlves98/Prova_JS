const alunos = [];

function add() {
const nome = document.getElementById("nome").value;
    if (nome) {
    alunos.push(nome);
    document.getElementById("nome").value = "";
    }
}
console.log(alunos)

function duplas() {
    const lista = [...alunos];
    lista.sort(() => Math.random() - 0.5);
    const saida = document.getElementById("saida");
    saida.innerHTML = "";
      for (let i = 0; i < lista.length; i += 2) {
        const a = lista[i];
        const b = lista[i + 1] || "(sozinho)";
        saida.innerHTML += `<li>${a} e ${b}</li>`;
    }
}