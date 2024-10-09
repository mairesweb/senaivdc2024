# Situação de Aprendizagem 01

Você é um analista de testes e foi contratado para trabalhar em uma empresa que fabrica softwares para clientes de diversos segmentos do mercado. Como seu primeiro desafio, seu gestor pediu que você **analisasse o caso de um software** recentemente desenvolvido e entregue para um cliente, que é uma **empresa de logística**.

Seu gestor explicou que, no ato de entrega, os clientes reclamaram muito, dizendo que o **software não tinha relação com o que eles haviam pedido** e também que **algumas funcionalidades solicitadas não haviam sido implementadas**. Ele informou também que a realização de testes é uma prática na empresa e que foram realizados alguns ciclos de testes com testadores, assim que o desenvolvimento foi finalizado.

---

### Os requisitos do software são:

- Ter uma tela de login para múltiplos utilizadores;
- O sistema deve ter sessões que devem durar 4 horas a partir do login;
- Ser possível cadastrar e gerenciar produtos;
- Cada produto terá nome, quantidade, custo de compra e preço de venda e o sistema deve calcular o lucro em reais e em porcentagem;
- Solicitar os dados do produto ao usuário da forma mais amigável possível;
- Para o lucro em porcentagem, acrescentar cores para indicar níveis de lucro, sendo lucro < 20% baixo, 21% < lucro < 70% médio e lucro > 71% bom;
- O sistema deve calcular o lucro bruto considerando preço e custo;
- O sistema deve conectar a um banco de dados local para armazenar as informações;
- É importante garantir que os dados sejam gravados de forma consistente;
- Um funcionalidade desejada é um destaque nos produtos que estão com quantidade menor que 10.

---

Com base na situação apresentada, qual você acredita ser o problema causador da insatisfação dos clientes na entrega do produto?

⚠️ **Dicas Importantes** ⚠️:

Para garantir uma melhor qualidade do software, crie:

- Testes unitários e de integração com Jest;
- Testes de Sistema com Cypress.
