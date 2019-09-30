const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const { models: { Prof, Thomas, Matt, Jonathan } } = require('./db');

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/prof', async ( req, res, next ) => {
  try {
    res.send(await Prof.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/thomas', async ( req, res, next ) => {
  try {
    res.send(await Thomas.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/matt', async ( req, res, next ) => {
  try {
    res.send(await Matt.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/jonathan', async ( req, res, next ) => {
  try {
    res.send(await Jonathan.findAll());
  }
  catch(ex) {
    next(ex);
  }
});

// app.post('/prof', async () => {

// });

app.delete('/prof/:id', async ( req, res, next ) => {
  try {
    await Prof.destroy({ where: {id: req.params.id} });
    res.sendStatus(201);
  }
  catch(ex) {
    next(ex);
  }
});

app.delete('/thomas/:id', async ( req, res, next ) => {
  try {
    await Thomas.destroy({ where: {id: req.params.id} });
    res.sendStatus(201);
  }
  catch(ex) {
    next(ex);
  }
});

app.delete('/matt/:id', async ( req, res, next ) => {
  try {
    await Matt.destroy({ where: {id: req.params.id} });
    res.sendStatus(201);
  }
  catch(ex) {
    next(ex);
  }
});

app.delete('/jonathan/:id', async ( req, res, next ) => {
  try {
    await Jonathan.destroy({ where: {id: req.params.id} });
    res.sendStatus(201);
  }
  catch(ex) {
    next(ex);
  }
});

db.sync()
  .then(() => {
      app.listen(port, () => console.log(`listening on port ${port}`));
  })