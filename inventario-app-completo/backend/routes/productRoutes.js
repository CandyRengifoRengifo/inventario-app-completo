
const express = require('express');
const router = express.Router();

let products = []; // Simulado

router.get('/', (req, res) => res.json(products));

router.post('/', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  products[id] = req.body;
  res.json(products[id]);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  products.splice(id, 1);
  res.sendStatus(204);
});

module.exports = router;
