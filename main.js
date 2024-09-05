const form = document.getElementById('form-contato');
const listaContato = [];
const numerosContatos = [];
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');

let linhas = " ";


form.addEventListener('submit', function (e) {
    e.preventDefault(e);

    adicionaContato();
    atualizaTabela();
    limpaInput()
})

function adicionaContato() {
    listaContato.push(inputNomeContato.value);
    numerosContatos.push(inputNumeroContato.value);

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>'`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function limpaInput() {
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}