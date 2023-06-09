document.getElementById("botao").addEventListener("click", function() {
    var cor = gerarCorAleatoria();
    document.body.style.backgroundColor = cor;
  });
  
  function gerarCorAleatoria() {
    var letras = "0123456789ABCDEF";
    var cor = "#";
    for (var i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  }

