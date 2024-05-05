function efeitoMatrix(neo) {
  var runas = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛇ', 'ᛉ', 'ᛋ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'];
  var caracteres = [];
  var intervalo; // Variável para armazenar o intervalo de atualização

  function iniciarCaracteres() {
      var tamanhoFonte = 20; // Tamanho da fonte base
      if (window.innerWidth < 768) {
          tamanhoFonte = 10; // Reduz o tamanho da fonte para dispositivos móveis
      }
      caracteres = Array(Math.floor(window.innerWidth / tamanhoFonte) + 1).fill(0).map(function (_, index) {
          return {
              x: index * tamanhoFonte,
              y: Math.floor(Math.random() * window.innerHeight),
              tamanho: Math.floor(Math.random() * 15) + 15,
              velocidade: Math.random() * 5 + 5, // Ajuste a velocidade vertical aqui
              runa: runas[Math.floor(Math.random() * runas.length)]
          };
      });
  }

  function desenhaMatrix() {
      neo.width = window.innerWidth;
      neo.height = window.innerHeight;
      var largura = neo.width;
      var altura = neo.height;
      var ctx = neo.getContext('2d');
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, largura, altura);
      ctx.fillStyle = '#FFF';

      caracteres.forEach(function (caractere) {
          ctx.font = caractere.tamanho + 'px Courier New';
          ctx.fillText(caractere.runa, caractere.x, caractere.y);
          caractere.y = (caractere.y > altura + 100) ? -100 : caractere.y + caractere.velocidade; // Aumenta a velocidade vertical
      });
  }

  function iniciarIntervalo() {
      intervalo = setInterval(desenhaMatrix, 50); // Ajusta a velocidade de atualização
  }

  function limparIntervalo() {
      clearInterval(intervalo);
  }

  iniciarCaracteres();
  iniciarIntervalo();

  window.addEventListener('resize', function () {
      limparIntervalo();
      iniciarCaracteres();
      iniciarIntervalo();
  });
}

window.onload = function () {
  var canvas = document.getElementById('canvas');
  efeitoMatrix(canvas);
};
