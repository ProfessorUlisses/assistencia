import express, { json } from 'express';
import cors from 'cors';
import { createConnection } from 'mysql2';

const app = express();
app.use(json());
app.use(cors());

// Configuração do MySQL
const db = createConnection({
  host: 'localhost',
  user: 'root',        // Altere para seu usuário do MySQL
  password: '1805',        // Altere para sua senha do MySQL
  database: 'usuariosdb',
  port: 3306           // Porta padrão do MySQL
});

// Teste de conexão
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

// Rota para listar usuários
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Rota para adicionar usuário
app.post('/usuarios', (req, res) => {
  const { nome, endereco, cidade } = req.body;
  db.query(
    'INSERT INTO usuarios (nome, endereco, cidade) VALUES (?, ?, ?)',
    [nome, endereco, cidade],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, nome, endereco, cidade });
    }
  );
});

// Rota para remover usuário
app.delete('/usuarios/:id', (req, res) => {
  db.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

// Rota para editar usuário
app.put('/usuarios/:id', (req, res) => {
  const { nome, endereco, cidade } = req.body;
  db.query(
    'UPDATE usuarios SET nome = ?, endereco = ?, cidade = ? WHERE id = ?',
    [nome, endereco, cidade, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: req.params.id, nome, endereco, cidade });
    }
  );
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));