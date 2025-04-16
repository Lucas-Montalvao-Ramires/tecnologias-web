// Array para armazenar os itens em memória
const itens = [];

// Função para alternar entre as seções
function mostrarSecao(secao) {
  document.querySelectorAll('.secao').forEach(s => s.style.display = 'none');
  document.getElementById(secao).style.display = 'block';
}

// Evento de envio do formulário
document.getElementById('form-cadastro').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const descricao = document.getElementById('descricao').value.trim();
  const erro = document.getElementById('erro');

  if (!nome || !descricao) {
    erro.textContent = 'Preencha todos os campos!';
    return;
  }

  erro.textContent = '';

  // Adiciona novo item ao array
  itens.push({ nome, descricao });

  atualizarLista();
  this.reset(); // limpa os campos do formulário
});

// Atualiza a lista na tela
function atualizarLista() {
  const lista = document.getElementById('lista-itens');
  lista.innerHTML = '';

  itens.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${item.nome}</strong>: ${item.descricao}</span>
      <button onclick="removerItem(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });
}

// Remove item pelo índice
function removerItem(index) {
  itens.splice(index, 1);
  atualizarLista();
}