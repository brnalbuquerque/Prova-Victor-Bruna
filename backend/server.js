const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Todas as requisições feitas usarão o cors
app.use(cors());

// Rota para listar todas as empresas de dentro de dados.json
app.get('/empresas', (req, res) => {
    fs.readFile('dados.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao carregar as empresas');
      } else {
        const empresas = JSON.parse(data);
        res.status(200).json(empresas);
      }
    });
  });
  
// Rota para cadastrar empresas dentro do arquivo dados.json
  app.post('/empresas', (req, res) => {
    fs.readFile('dados.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao salvar os dados');
      } else {
        const empresas = JSON.parse(data);
        const novaEmpresa = {
          empresa: req.body.empresa,
          categoria: req.body.categoria
        };
        empresas.push(novaEmpresa);
  
        const newData = JSON.stringify(empresas, null, 2);
  
        fs.writeFile('dados.json', newData, err => {
          if (err) {
            console.error(err);
            res.status(500).send('Erro ao salvar os dados');
          } else {
            console.log('Dados salvos com sucesso');
            res.status(200).send('Dados salvos com sucesso');
          }
        });
      }
    });
  });
  
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
