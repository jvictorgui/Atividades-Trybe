let leitor = {
    nome: 'Julia ',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
  console.log(`o livro favorito de ${leitor.nome + leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo} `)
  
  
  leitor.livrosFavoritos.push({
    titulo: 'harry poter',
    autor: 'jk rowling',
    editora: 'rocco',
  }) 

  console.log(leitor.livrosFavoritos)
 