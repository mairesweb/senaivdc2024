const express = require("express");
const bodyParser = require("body-parser");
const userService = require("./services/userService");

const app = express();
app.use(bodyParser.json());

// Rota para criar um novo usuário
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await userService.createUser({ name, email });
  res.status(201).json(user);
});

// Rota para listar todos os usuários
app.get("/users", async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
});

// Rota para atualizar um usuário
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedUser = await userService.updateUser(id, { name, email });
  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

// Rota para excluir um usuário
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await userService.deleteUser(id);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
});

module.exports = app;
