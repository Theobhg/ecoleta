import express, { response } from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('listagem de usuarios');

  res.json([
    'Diego',
    'Cleiton',
    'Robson'
  ]);
});

app.listen(3333);