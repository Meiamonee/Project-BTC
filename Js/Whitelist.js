function checkWallet() {
    // Array simulado de endereços na lista branca
    var whitelist = ['1234', 'address2', 'address3']; // Substitua com os endereços reais
  
    // Obtendo o valor do campo de entrada
    var walletAddress = document.getElementById('walletAddress').value;
  
    // Verificando se o endereço está na lista branca
    var isWhitelisted = whitelist.includes(walletAddress);
  
    // Exibindo um alerta com base no resultado da verificação
    if (isWhitelisted) {
        // Alerta verde se o endereço estiver na lista branca
        showAlert('Wallet address whitelisted', 'green');
    } else {
        // Alerta vermelho se o endereço não estiver na lista branca
        showAlert('Wallet not whitelisted', 'red');
    }
  
    // Limpar o campo de entrada
    document.getElementById('walletAddress').value = '';
  }
  
  function showAlert(message, color) {
    // Criando o alerta
    var alertElement = document.createElement('div');
    alertElement.textContent = message;
    alertElement.style.backgroundColor = color;
    alertElement.style.color = 'white';
    alertElement.style.padding = '10px';
    alertElement.style.borderRadius = '5px';
    alertElement.style.position = 'fixed';
    alertElement.style.top = '50%';
    alertElement.style.left = '50%';
    alertElement.style.transform = 'translate(-50%, -50%)';
  
    // Adicionando o alerta ao corpo da página
    document.body.appendChild(alertElement);
  
    // Removendo o alerta após alguns segundos
    setTimeout(function() {
      document.body.removeChild(alertElement);
    }, 3000); // 3000 milissegundos = 3 segundos
  }
  