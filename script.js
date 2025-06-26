// Exemplo básico: exibir um alerta quando o formulário for enviado (isso precisa ser melhor implementado para envio real)
const formularioContato = document.querySelector('#contato form');

if (formularioContato) {
    formularioContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        alert('Mensagem enviada (funcionalidade real de envio precisaria ser implementada)');
    });
}