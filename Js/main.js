function efeitoMatrix(neo) {
  var runas = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛇ', 'ᛉ', 'ᛋ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'];
  var caracteres = [];

  function iniciarCaracteres() {
      caracteres = Array(Math.floor(window.innerWidth / 20) + 1).fill(0).map(function (_, index) {
          return {
              x: index * 20,
              y: Math.floor(Math.random() * window.innerHeight),
              tamanho: Math.floor(Math.random() * 15) + 15,
              velocidade: Math.random() * 15 + 10, // Ajuste a velocidade vertical aqui
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

  iniciarCaracteres();
  setInterval(desenhaMatrix, 50); // Ajusta a velocidade de atualização
}

window.onload = function () {
  var canvas = document.getElementById('canvas');
  efeitoMatrix(canvas);
};

window.addEventListener('resize', function () {
  var canvas = document.getElementById('canvas');
  efeitoMatrix(canvas);
});
