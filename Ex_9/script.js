const regexTelefone = /^(?:\+55\s?)?\(\d{2}\)\s?(?:\d{4}-\d{4}|\d{5}-\d{4}|\d{8}|\d{9})$/;

const telefoneInput = document.getElementById('telefoneInput');
const btnValidar = document.getElementById('btnValidar');
const resultadoParagrafo = document.getElementById('resultado');

btnValidar.addEventListener('click', () => {
    const telefone = telefoneInput.value.trim();

    if (telefone === '') {
        resultadoParagrafo.textContent = 'Por favor, digite um número de telefone.';
        resultadoParagrafo.className = 'invalido';
        resultadoParagrafo.style.display = 'block';
        return;
    }

    if (regexTelefone.test(telefone)) {
        resultadoParagrafo.textContent = `"${telefone}" é um número de telefone VÁLIDO.`;
        resultadoParagrafo.className = 'valido';
    } else {
        resultadoParagrafo.textContent = `"${telefone}" é um número de telefone INVÁLIDO.`;
        resultadoParagrafo.className = 'invalido';
    }
        resultadoParagrafo.style.display = 'block';
    });

    telefoneInput.addEventListener('input', () => {
        resultadoParagrafo.style.display = 'none';
        resultadoParagrafo.textContent = '';
    });