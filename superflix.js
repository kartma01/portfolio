const listaFilmes = [];
const arrayAnalise = [];
const containerAdd = document.getElementById("listaFilmes");

function callback(element, indice) {
  containerAdd.innerHTML += `<img id="${indice}" src=${element}>`;
}

function addFilmeFavorito() {
  //pegar o valor do filme para adicionar
  let filme = document.getElementById("addFilme").value;

  //colocar dentro do array
  listaFilmes.push(filme);

  //fazer a filtragem para ver se o valor adicionado já está na página
  let filtragem = arrayAnalise.filter((element) => element == filme);

  //exibir na tela caso não seja igual ao filtragem e repitir na tela nenhum filme
  if (listaFilmes[0] != filtragem[0]) {
    //verificar se é uma imagem JPG
    if (listaFilmes[0].endsWith(".jpg")) {
      listaFilmes.forEach(callback);
    } else {
      alert("Link não compátivel");
    }
  } else {
    arrayAnalise.pop();
  }

  //atribuir a arrayAnalise o valor de filme
  arrayAnalise.push(filme);

  //deletar o item da lista
  listaFilmes.pop();

  //retornar a variavel para proxima function
  return arrayAnalise;
}

//
function removerFilmeFavorito() {
  //capturar o que está escrito no input
  const valueRemoveFilme = document.getElementById("removerFilme").value;

  // atribuir o arrayAnalise para o return
  const arrayReturn = addFilmeFavorito();

  // pegar o ID do elemento que queremos
  const identificar = arrayReturn.indexOf(valueRemoveFilme);

  //identificar o elemento para deletar da página
  const variavelParaDeletar = document.getElementById(`${identificar}`);

  // deletar elemento do array que vamos deletar da pagina
  arrayAnalise.splice(identificar, 1);

  // deletar a tag img da página
  variavelParaDeletar.parentNode.removeChild(variavelParaDeletar);
}
