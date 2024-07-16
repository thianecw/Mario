const form = document.querySelector('.fale-conosco')
const background = document.querySelector('.mascara-form')

function sendForm(event) {
    event.preventDefault(); // Previne o envio imediato do formulário
    
    const form = document.getElementById('form');
    
    // Verifica se os campos obrigatórios estão preenchidos
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    
    if (name === '' || email === '' || message === '') {
        mostrarAviso('Por favor, preencha todos os campos.', 'erro');
        return; // Interrompe a função se algum campo estiver vazio
    }
    
    // Verifica se o e-mail é válido
    if (!isValidEmail(email)) {
        mostrarAviso('Por favor, insira um e-mail válido.', 'erro');
        return;
    }
    
    // Se chegou aqui, o formulário está válido
    mostrarAviso('Enviando orçamento...', 'info');
    
    // Simula um breve delay antes de enviar o formulário
    setTimeout(() => {
        form.submit(); // Envia o formulário
        
        mostrarAviso('Orçamento enviado com sucesso!', 'sucesso');
        
        setTimeout(() => {
            closeForm();
            form.reset();
        }, 1000);
    }, 1000);
}

// Função para validar o formato do e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function mostrarAviso(mensagem = 'Orçamento solicitado com sucesso!', tipo = 'sucesso') {
    const aviso = document.getElementById('aviso');
    aviso.textContent = mensagem;
    aviso.className = 'aviso ' + tipo;
    aviso.classList.add('mostrar');
    
    setTimeout(function() {
        aviso.classList.remove('mostrar');
    }, 3000);
}

function showForm() {
    form.style.opacity = '1';
    form.style.visibility = 'visible';
    background.style.opacity = '1';
    background.style.visibility = 'visible';
}

function hideForm() {
    form.style.opacity = '0';
    form.style.visibility = 'hidden';
    background.style.opacity = '0';
    background.style.visibility = 'hidden';
}

function closeForm() {
    document.getElementById('form').style.display = 'none';

}

function closeForm() {
    hideForm();  // Reutiliza a função hideForm
}

function hideForm() {
    form.style.opacity = '0';
    form.style.visibility = 'hidden';
    background.style.opacity = '0';
    background.style.visibility = 'hidden';
}

function limparFormulario() {
    document.getElementById('form').reset();
}