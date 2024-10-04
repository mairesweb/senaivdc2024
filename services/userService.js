let users = []; // Simulação de banco de dados em memória
let idCounter = 1;

const createUser = async ({ name, email }) => {
  const newUser = { id: idCounter++, name, email };
  users.push(newUser);
  return newUser;
};

const getUsers = async () => {
  return users;
};

const updateUser = async (id, { name, email }) => {
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex !== -1) {
    users[userIndex] = { id: Number(id), name, email };
    return users[userIndex];
  }
  return null;
};

const deleteUser = async (id) => {
  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return true;
  }
  return false;
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
