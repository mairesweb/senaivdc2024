const request = require("supertest");
const app = require("../app"); // Importa o app
const userService = require("../services/userService"); // Importa o serviço para mockar

// Mocka todas as funções do userService
jest.mock("../services/userService");

describe("Testes de integração com Mocking - CRUD de Usuários", () => {
  it("Deve criar um novo usuário com sucesso (usando mock)", async () => {
    // Define o comportamento do mock para createUser
    const mockUser = {
      id: 1,
      name: "Marcelo Vieira",
      email: "mvieira@example.com",
    };
    userService.createUser.mockResolvedValue(mockUser); // Simula o retorno da função createUser

    const response = await request(app)
      .post("/users")
      .send({ name: "Marcelo Vieira", email: "mvieira@example.com" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(mockUser); // Verifica se o retorno é o mockUser
  });

  it("Deve buscar a lista de usuários com sucesso (usando mock)", async () => {
    // Define o comportamento do mock para getUsers
    const mockUsers = [
      { id: 1, name: "Marcelo Vieira", email: "mvieira@example.com" },
    ];
    userService.getUsers.mockResolvedValue(mockUsers); // Simula o retorno da função getUsers

    const response = await request(app).get("/users");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUsers); // Verifica se o retorno é o mockUsers
  });
});
