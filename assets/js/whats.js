// Abrir e fechar o modal
const modal = document.getElementById('whatsappModal');
const whatsappIcon = document.querySelector('.whatsapp-link');
const closeBtn = document.querySelector('.close');

// Quando clicar no ícone do WhatsApp, abre o modal
whatsappIcon.onclick = function(event) {
    event.preventDefault();
    modal.style.display = 'block';
}

// Quando clicar no botão "X" de fechar, esconde o modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Quando clicar fora do modal, esconde o modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Submeter o formulário para abrir o WhatsApp com a mensagem personalizada
const form = document.getElementById('whatsappForm');
form.onsubmit = function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const preferencia = document.querySelector('input[name="preferencia"]:checked').value;

    const mensagem = `Olá, meu nome é ${nome}, meu e-mail é ${email}. Prefiro uma viagem ${preferencia}.`;

    // Detecta se é desktop ou mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappURL = isMobile 
        ? `https://api.whatsapp.com/send?phone=5511977222061&text=${encodeURIComponent(mensagem)}`  // URL para mobile
        : `https://web.whatsapp.com/send?phone=5511977222061&text=${encodeURIComponent(mensagem)}`; // URL para desktop

    window.open(whatsappURL, '_blank'); // Abre o WhatsApp Web ou WhatsApp Mobile
    modal.style.display = 'none'; // Fecha o modal
}
