const express = require("express");
const app = express();
const { getUsers } = require("./users");

app.get("/", (req, res) => {
  res.send(`
    <h1>Home</h1>
    <nav>
        <a href="/specialty/developers">Developers</a> |
        <a href="/specialty/marketing">Marketing</a> |
        <a href="/specialty/ventas">Ventas</a> |
        <a href="/specialty/qas">QAs</a>
    </nav>
  `);
});

app.get("/developers", (req, res) => {
  const developers = getUsers("developers");
  const usersList = developers
    .map((u) => `<li>${u.name}, ${u.age}</li>`)
    .join("");
  res.send(`
        <h1>Developers</h1>
        <a href="/">Home</a>
        <ul>${usersList}</ul>
        `);
});

// ruta dinamica
app.get("/specialty/:type", (req, res) => {
  const type = req.params.type;
  const filteredUsers = getUsers(type);

  if (filteredUsers.length === 0) {
    return res
      .status(404)
      .send('<h1>Especialidad no encontrada</h1><a href="/">Home</a>');
  }

  const usersList = filteredUsers
    .map((u) => `<li>${u.name} (${u.age} años)</li>`)
    .join(""); // Importante: añade .join("") para evitar las comas del array

  res.send(`
    <h1>Especialidad: ${type.toUpperCase()}</h1>
    <a href="/">Volver a la Home</a>
    <ul>${usersList}</ul>
  `);
});

// manejo de errores
app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1><a href="/">Home</a>');
});

// puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto http://localhost:${PORT}`);
});
