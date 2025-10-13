// Definir um array de objetos representando os livros no estoque
const estoque = [
  { id: 2035, titulo: 'Harry Potter', autor: 'Maria Silva', quantidade: 12 },
  { id: 3547, titulo: 'Senhor dos Anéis', autor: 'José Souza', quantidade: 15 },
  { id: 4426, titulo: 'O Livro das Fadas', autor: 'Mario Santos', quantidade: 20 },
  { id: 9139, titulo: 'O Programador Pragmático', autor: 'João Lima', quantidade: 7 },
  { id: 3437, titulo: 'Código Limpo', autor: 'Tio Bob', quantidade: 18 }
];

// Função para adicionar um novo livro ao estoque
const adicionarLivro = (id, titulo, autor, quantidade) => {
  // Verifica se já existe um livro com o mesmo título
  const existe = estoque.find(livro => livro.titulo === titulo);

  if (existe) {
    console.log(`O livro "${titulo}" já existe no estoque.`);
  } else {
    estoque.push({ id, titulo, autor, quantidade });
    console.log(`Livro "${titulo}" adicionado com sucesso!`);
  }
};

// Função para remover um livro pelo título
const removerLivro = (titulo) => {
  const indice = estoque.findIndex(livro => livro.titulo === titulo);

  if (indice !== -1) {
    estoque.splice(indice, 1);
    console.log(`Livro "${titulo}" removido do estoque.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado.`);
  }
};

// Função para atualizar a quantidade de um livro
const atualizarQuantidade = (titulo, novaQuantidade) => {
  const livro = estoque.find(livro => livro.titulo === titulo);

  if (livro) {
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
  } else {
    console.log(`Livro "${titulo}" não encontrado.`);
  }
};

// Função para listar todos os livros
const listarLivros = () => {
  if (estoque.length === 0) {
    console.log("Nenhum livro no estoque.");
  } else {
    console.log("Lista de livros no estoque:");
    // Usa um laço for...of para percorrer o array
    for (let livro of estoque) {
      console.log(`ID: ${livro.id} | Título: ${livro.titulo} | Autor: ${livro.autor} | Quantidade: ${livro.quantidade}`);
    }
  }
};

// --------------------
// Testando as funções
// --------------------
listarLivros();
adicionarLivro(5555, "As Crônicas de Nárnia", "C.S. Lewis", 10);
atualizarQuantidade("Harry Potter", 20);
removerLivro("O Livro das Fadas");
listarLivros();