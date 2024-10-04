const request = require("supertest");
const app = require("../app"); // Importa o app

describe("Testes de integração - CRUD de Usuários", () => {
  beforeEach(() => {
    // Reseta o "banco de dados" em memória antes de cada teste
    jest.resetModules();
    require("../services/userService").users = [];
    require("../services/userService").idCounter = 1;
  });

  it("Deve criar um novo usuário", async () => {
    const response = await request(app)
      .post("/users")
      .send({ name: "Marcelo Vieira", email: "mvieira@example.com" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Marcelo Vieira");
    expect(response.body.email).toBe("mvieira@example.com");
  });

  it("Deve atualizar um usuário existente", async () => {
    // Criar um usuário antes de atualizar
    const newUser = await request(app)
      .post("/users")
      .send({ name: "Marcelo Vieira", email: "mvieira@example.com" });

    const updatedUser = { name: "Maria Vieira", email: "mavieira@example.com" };

    const response = await request(app)
      .put(`/users/${newUser.body.id}`)
      .send(updatedUser);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("Maria Vieira");
    expect(response.body.email).toBe("mavieira@example.com");
  });

  it("Deve retornar 404 ao tentar atualizar um usuário inexistente", async () => {
    const updatedUser = { name: "Maria Vieira", email: "mavieira@example.com" };
    const response = await request(app)
      .put("/users/999") // ID inexistente
      .send(updatedUser);

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("Usuário não encontrado");
  });

  it("Deve excluir um usuário existente", async () => {
    // Criar um usuário antes de excluir
    const newUser = await request(app)
      .post("/users")
      .send({ name: "Marcelo Vieira", email: "mvieira@example.com" });

    const response = await request(app).delete(`/users/${newUser.body.id}`);

    expect(response.statusCode).toBe(204); // Sem conteúdo ao excluir
  });

  it("Deve retornar 404 ao tentar excluir um usuário inexistente", async () => {
    const response = await request(app).delete("/users/999"); // ID inexistente

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe("Usuário não encontrado");
  });
});
