const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset="UTF-8"' });
  res.end("<h1>Hello Fer</h1>");
});

// puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto http://localhost:${PORT}`);
});
