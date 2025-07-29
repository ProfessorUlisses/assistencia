# Sistema de Cadastro de Usuários

Um sistema completo para cadastro, edição, exclusão e pesquisa de usuários com interface web moderna e banco de dados MySQL.

## 🚀 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Banco de Dados:** MySQL
- **Estilização:** CSS com gradientes e animações

## 📋 Funcionalidades

- ✅ Cadastrar novos usuários (nome, endereço, cidade)
- ✅ Listar todos os usuários cadastrados
- ✅ Editar informações dos usuários
- ✅ Excluir usuários
- ✅ Pesquisar usuários por nome, endereço ou cidade
- ✅ Interface responsiva e moderna
- ✅ Dados persistidos em banco de dados MySQL

## 🛠️ Instalação

### Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando
- Navegador web moderno

### 1. Clone ou baixe o projeto

```bash
# Se estiver usando git
git clone [URL_DO_REPOSITORIO]

# Ou baixe os arquivos manualmente
```

### 2. Configure o banco de dados MySQL

Abra o MySQL e execute:

```sql
CREATE DATABASE usuariosdb;
USE usuariosdb;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  endereco VARCHAR(200),
  cidade VARCHAR(100)
);
```

### 3. Configure o backend

Na pasta do projeto, instale as dependências:

```bash
npm install express mysql2 cors
```

### 4. Configure a conexão com o banco

No arquivo `index.js`, altere as configurações do MySQL:

```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Seu usuário do MySQL
  password: '',        // Sua senha do MySQL
  database: 'usuariosdb',
  port: 3306
});
```

## 🚀 Como Executar

### 1. Inicie o backend

No terminal, na pasta do projeto:

```bash
node index.js
```

Você deve ver:
```
Conectado ao MySQL!
Servidor rodando na porta 3001
```

### 2. Abra o frontend

- **Opção 1:** Abra o arquivo `index.html` diretamente no navegador
- **Opção 2:** Use um servidor local (recomendado):
  - Instale a extensão Live Server no VSCode
  - Clique com o botão direito em `index.html` e escolha "Open with Live Server"

## 📁 Estrutura do Projeto

```
projeto/
├── index.html          # Interface do usuário
├── script.js           # Lógica do frontend
├── style.css           # Estilos da aplicação
├── index.js            # Backend (Node.js/Express)
├── package.json        # Dependências do projeto
└── README.md           # Este arquivo
```

## 🎯 Como Usar

1. **Cadastrar usuário:**
   - Preencha os campos Nome, Endereço e Cidade
   - Clique em "Adicionar"

2. **Visualizar usuários:**
   - Clique em "Mostrar Usuários"
   - A lista aparecerá centralizada na página

3. **Pesquisar usuários:**
   - Digite no campo de pesquisa
   - Clique em "Pesquisar"

4. **Editar usuário:**
   - Clique em "Editar" ao lado do usuário
   - Os dados aparecerão no formulário
   - Modifique e clique em "Adicionar"

5. **Excluir usuário:**
   - Clique em "Excluir" ao lado do usuário

## 🔧 Configurações Avançadas

### Usando nodemon (desenvolvimento)

Para reiniciar automaticamente o backend ao salvar alterações:

```bash
npm install -g nodemon
nodemon index.js
```

### Portas

- **Backend:** Porta 3001 (configurável no `index.js`)
- **MySQL:** Porta 3306 (padrão)
- **Frontend:** Porta 5500 (Live Server) ou 8080 (http-server)

## 🐛 Solução de Problemas

### Erro de conexão com MySQL
- Verifique se o MySQL está rodando
- Confirme usuário e senha no `index.js`
- Teste a conexão: `mysql -u root -p`

### Erro de CORS
- Certifique-se de que `app.use(cors());` está no `index.js`

### Frontend não carrega
- Use um servidor local (Live Server) em vez de abrir o arquivo diretamente
- Verifique se todos os arquivos estão na mesma pasta

### Backend não inicia
- Verifique se todas as dependências estão instaladas: `npm install`
- Confirme se o MySQL está rodando
- Verifique se a porta 3001 não está sendo usada por outro processo

## 📝 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 👨‍💻 Desenvolvido por

Sistema de Cadastro de Usuários - Projeto completo com frontend e backend integrados.
