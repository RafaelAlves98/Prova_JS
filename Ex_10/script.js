// Lista de frutas e seus respectivos caminhos de imagem
// @ts-ignore
let frutas = [
  { nome: 'Abacate', imagem: 'img/abacate.jpg' },
  { nome: 'Maçã', imagem: 'img/maca.png' },
  { nome: 'Pera', imagem: 'img/pera.jpg' },
  { nome: 'Laranja', imagem: 'img/laranja.jpg' },
];

function obterFrutaSelecionada() {
  let frutaSelecionada = document.getElementById('selecionaFruta');

  if (frutaSelecionada instanceof HTMLSelectElement) {
    return frutaSelecionada;
  } else {
    alert("Elemento com ID 'selecionaFruta' não encontrado!");
  }
}

// Inicializa o select com as opções de frutas
function inicializar() {
  let frutaEscolhida = obterFrutaSelecionada();

  if (!frutaEscolhida) {
    alert("Elemento 'selectFruta' não encontrado!");
    return;
  }

  frutas.forEach((fruta) => {
    let opcaoSelecionada = document.createElement('option');

    opcaoSelecionada.value = fruta.nome;
    opcaoSelecionada.textContent = fruta.nome;
    frutaEscolhida.appendChild(opcaoSelecionada);
  });
}

// Obtém a fruta selecionada com base no conteúdo do select
function obterFrutaSelecionadaValor() {
  let frutaEscolhida = obterFrutaSelecionada();

  if (frutaEscolhida instanceof HTMLSelectElement) {
    return frutaEscolhida.value;
  }
  return null;
}

// Encontra a fruta correspondente na lista de frutas
function encontrarFruta(nomeFruta) {
  return frutas.find((fruta) => fruta.nome === nomeFruta);
}

// Atualiza o texto e exibição da fruta selecionada
function exibirConteudo(fruta) {
  let nomeFruta = document.getElementById('nomeFruta');
  let exibeFruta = document.getElementById('exibeFruta');
  let imagemFruta = document.getElementById('imagemFruta');

  //prettier-ignore
  if ((exibeFruta instanceof HTMLDivElement) && (nomeFruta instanceof HTMLParagraphElement)
     && (imagemFruta instanceof HTMLDivElement)) {
    nomeFruta.textContent = `A fruta selecionada foi: ${fruta.nome}`;
    exibeFruta.style.display = 'block';

    // Limpa a imagem anterior
    //imagemFruta.innerHTML = '';
    while (imagemFruta.firstChild) {
      imagemFruta.removeChild(imagemFruta.firstChild);
    }

    // Adiciona a nova imagem
    let novaImagem = document.createElement('img');
    
    novaImagem.src = fruta.imagem;
    novaImagem.alt = fruta.nome;
    novaImagem.width = 600;
    novaImagem.height = 600;
    imagemFruta.appendChild(novaImagem);
  }
}

// Atualiza a fruta selecionada
function atualizarFrutaSelecionada() {
  let frutaSelecionada = obterFrutaSelecionadaValor();

  if (frutaSelecionada) {
    let fruta = encontrarFruta(frutaSelecionada);

    if (fruta) {
      exibirConteudo(fruta);
    }
  }
}

// Adiciona os eventos e inicializa
document.addEventListener('DOMContentLoaded', () => {
  inicializar();
  let selectFruta = obterFrutaSelecionada();
  if (selectFruta) {
    selectFruta.addEventListener('change', atualizarFrutaSelecionada);
  }
});

  // @ts-ignore
  const filtro = document.querySelector('.filtro-produtos');
  // @ts-ignore
  const produtos = document.querySelectorAll('.card');

  // @ts-ignore
  filtro.addEventListener('change', () => {
    // @ts-ignore
    const categoriaSelecionada = filtro.value;

    produtos.forEach(produto => {
      // @ts-ignore
      const categoria = produto.dataset.categoria;
      if (categoriaSelecionada === "" || categoria === categoriaSelecionada) {
        // @ts-ignore
        produto.style.display = "block";
      } else {
        // @ts-ignore
        produto.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const filtro = document.querySelector('.filtro-produtos');
  const produtos = document.querySelectorAll('.card');

  // @ts-ignore
  filtro.addEventListener('change', () => {
    // @ts-ignore
    const categoriaSelecionada = filtro.value;

    produtos.forEach(produto => {
      // @ts-ignore
      const categoria = produto.dataset.categoria;
      if (categoriaSelecionada === "" || categoria === categoriaSelecionada) {
        // @ts-ignore
        produto.style.display = "block";
        setTimeout(() => {
          // @ts-ignore
          produto.style.opacity = "1";
          // @ts-ignore
          produto.style.transform = "scale(1)";
          // @ts-ignore
          produto.style.pointerEvents = "auto";
        }, 10);
      } else {
        // @ts-ignore
        produto.style.opacity = "0";
        // @ts-ignore
        produto.style.transform = "scale(0.9)";
        // @ts-ignore
        produto.style.pointerEvents = "none";
        setTimeout(() => {
          // @ts-ignore
          produto.style.display = "none";
        }, 300);
      }
    });
  });

 
  // @ts-ignore
  document.body.appendChild(modalBg);

  // @ts-ignore
  modalBg.querySelector(".close-btn").addEventListener("click", () => {
    // @ts-ignore
    modalBg.classList.remove("active");
  });

  // Abrir modal ao clicar no botão comprar
  document.querySelectorAll(".card button").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      // @ts-ignore
      const title = card.querySelector(".card-title").textContent;
      // @ts-ignore
      const desc = card.querySelector(".card-text").textContent;
      // @ts-ignore
      const price = card.querySelector("span.fw-bold").textContent;
// @ts-ignore
      modalBg.querySelector("#modal-title").textContent = title;
      // @ts-ignore
      modalBg.querySelector("#modal-desc").textContent = desc;
      // @ts-ignore
      modalBg.querySelector("#modal-price").textContent = price;

      // @ts-ignore
      modalBg.classList.add("active");
    });
  });
});

document.querySelectorAll('.btn-comprar').forEach(botao => {
  botao.addEventListener('click', () => {
    const titulo = botao.getAttribute('data-titulo');
    const desc = botao.getAttribute('data-desc');
    const preco = botao.getAttribute('data-preco');
    const img = botao.getAttribute('data-img');
  // @ts-ignore
    document.getElementById('produtoModalLabel').textContent = titulo;
    const imgModal = document.getElementById('produtoModalImg');
      // @ts-ignore
    imgModal.src = img;
      // @ts-ignore
    imgModal.alt = titulo;
      // @ts-ignore
    document.getElementById('produtoModalDesc').textContent = desc;
      // @ts-ignore
    document.getElementById('produtoModalPrice').textContent = preco;
  // @ts-ignore
    const produtoModal = new bootstrap.Modal(document.getElementById('produtoModal'));
    produtoModal.show();
  });
});

document.querySelectorAll('.btn-comprar').forEach(botao => {
  botao.addEventListener('click', () => {
    const titulo = botao.getAttribute('data-titulo');
    const desc = botao.getAttribute('data-desc');
    const preco = botao.getAttribute('data-preco');
    const img = botao.getAttribute('data-img');

    // Preencher o modal com os dados do produto
    // @ts-ignore
    document.getElementById('produtoModalLabel').textContent = titulo;
    // @ts-ignore
    document.getElementById('produtoModalImg').src = img;
    // @ts-ignore
    document.getElementById('produtoModalImg').alt = titulo;
    // @ts-ignore
    document.getElementById('produtoModalDesc').textContent = desc;
    // @ts-ignore
    document.getElementById('produtoModalPrice').textContent = preco;
  });
});
