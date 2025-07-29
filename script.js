// Função para carregar os usuários do backend e exibir na tela
function carregarUsuarios(filtro = "") {
    fetch('http://localhost:3001/usuarios')
        .then(res => res.json())
        .then(usuarios => {
            // Filtra no frontend, se necessário
            if (filtro) {
                usuarios = usuarios.filter(usuario =>
                    usuario.nome.toLowerCase().includes(filtro.toLowerCase()) ||
                    usuario.endereco.toLowerCase().includes(filtro.toLowerCase()) ||
                    usuario.cidade.toLowerCase().includes(filtro.toLowerCase())
                );
            }
            const listaUsuarios = document.getElementById('listaUsuarios');
            listaUsuarios.innerHTML = '';
            usuarios.forEach((usuario) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>Nome:</strong> ${usuario.nome} |
                    <strong>Endereço:</strong> ${usuario.endereco} |
                    <strong>Cidade:</strong> ${usuario.cidade}
                    <button onclick="removerUsuario(${usuario.id})">Excluir</button>
                    <button onclick="prepararEdicao(${usuario.id}, '${usuario.nome.replace(/'/g, "\\'")}', '${usuario.endereco.replace(/'/g, "\\'")}', '${usuario.cidade.replace(/'/g, "\\'")}')">Editar</button>
                `;
                listaUsuarios.appendChild(li);
            });
        });
}


// Variáveis de controle de edição
let editando = false;
let idEditando = null;

// Adicionar ou editar usuário
// Adapta o submit do formulário
const form = document.getElementById('formCadastro');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    if (editando) {
        fetch(`http://localhost:3001/usuarios/${idEditando}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, endereco, cidade })
        })
        .then(() => {
            mostrarMensagem("Usuário editado!");
            editando = false;
            idEditando = null;
            form.reset();
            carregarUsuarios(document.getElementById('pesquisa').value);
        });
    } else {
        fetch('http://localhost:3001/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, endereco, cidade })
        })
        .then(() => {
            mostrarMensagem("Usuário cadastrado!");
            form.reset();
            carregarUsuarios(document.getElementById('pesquisa').value);
        });
    }
});

// Remover usuário
function removerUsuario(id) {
    fetch(`http://localhost:3001/usuarios/${id}`, { method: 'DELETE' })
        .then(() => carregarUsuarios(document.getElementById('pesquisa').value));
}

// Preparar edição (preenche o formulário)
function prepararEdicao(id, nome, endereco, cidade) {
    document.getElementById('nome').value = nome;
    document.getElementById('endereco').value = endereco;
    document.getElementById('cidade').value = cidade;
    editando = true;
    idEditando = id;
}

// Mensagem de feedback
function mostrarMensagem(msg) {
    alert(msg);
}

// Mostrar/Ocultar lista de usuários
const btnMostrar = document.getElementById('mostrarUsuarios');
const listaUsuarios = document.getElementById('listaUsuarios');
let listaVisivel = false;

btnMostrar.addEventListener('click', function() {
    listaVisivel = !listaVisivel;
    if (listaVisivel) {
        listaUsuarios.style.display = 'block';
        btnMostrar.textContent = 'Ocultar Usuários';
        carregarUsuarios(document.getElementById('pesquisa').value);
    } else {
        listaUsuarios.style.display = 'none';
        btnMostrar.textContent = 'Mostrar Usuários';
    }
});

// Botão Pesquisar: mostra a lista apenas com o filtro
const btnPesquisar = document.getElementById('btnPesquisar');
btnPesquisar.addEventListener('click', function() {
    listaUsuarios.style.display = 'block';
    btnMostrar.textContent = 'Ocultar Usuários';
    listaVisivel = true;
    carregarUsuarios(document.getElementById('pesquisa').value);
});

// Carrega usuários ao iniciar
carregarUsuarios(); 