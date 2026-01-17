const express = require("express");
const app     = express();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": 'text/html; charset="UTF-8"' });
  res.end(
    '<h1>Home</h1><a href="/developers">Developers</a> | <a href="/marketing">Marketing</a> | <a href="/ventas">Ventas</a> | <a href="/qas">QAs</a>'
  );
});

app.get("/developers", (req, res) => {
    res.end('<h1>Developers</h1><a href="/">Home</a>');
});

app.get("/marketing", (req, res) => {
  res.end('<h1>Marketing</h1><a href="/">Home</a>');
});

app.get("/ventas", (req, res) => {
  res.end('<h1>Ventas</h1><a href="/">Home</a>');
});

app.get("/qas", (req, res) => {
  res.end('<h1>QAs</h1><a href="/">Home</a>');
});

// manejo de errores
app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1><a href="/">Home</a>');
});

// puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});
