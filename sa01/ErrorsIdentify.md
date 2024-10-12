# Erros identificados

### LOG_ERRO_001
- Título: Não há multiplos usuários
- Descrição: Está usando dados via hardcoded não possibilitando criar usuários
- Passos para reprodução: Via gestor
- Resultado esperado: Criar sistema de cadastro de usuários
- Resultado observado: Somente uma credencial valida
- Evidências: Print do gestor
- Ambiente de teste: máquina local
- Gravidade: média
- Impacto no negócio: médio
- Status: aberta
- Prioridade: média



### LOG_ERRO_002
- Título: Sessão encerrando rapidamente
- Descrição: Após logar na plataforma e feito refresh a sessão é perdida
- Passos para reprodução: (i) logar; (ii) esperar alguns minutos; (iii) dar refresh;
- Resultado esperado: Sessão durar 4 horas
- Resultado observado: Sessão durando alguns minutos
- Evidências: Print do Cypress
- Ambiente de teste: máquina local
- Gravidade: média
- Impacto no negócio: médio
- Status: aberta
- Prioridade: alta

### LOG_ERRO_003
- Título: Não é possível editar produtos
- Descrição: É importante oferecer a opção de editar produtos para acelerar o dia a dia.
- Passos para reprodução: Observar lista de produtos
- Resultado esperado: Botão de edição de produto
- Resultado observado: Não há opção de editar produto
- Evidências: Print da tela
- Ambiente de teste: máquina local
- Gravidade: baixa
- Impacto no negócio: baixo
- Status: aberta
- Prioridade: baixa

### LOG_ERRO_003
- Título: Não é possível editar produtos
- Descrição: É importante oferecer a opção de editar produtos para acelerar o dia a dia.
- Passos para reprodução: Observar lista de produtos
- Resultado esperado: Botão de edição de produto
- Resultado observado: Não há opção de editar produto
- Evidências: Print da tela
- Ambiente de teste: máquina local
- Gravidade: baixa
- Impacto no negócio: baixo
- Status: aberta
- Prioridade: baixa

### LOG_ERRO_004
- Título: A experiência de cadastrar o produto está ruim
- Descrição: Seria interessante não usar prompt e abrir um formulário
- Passos para reprodução: Apertar no botão de adicionar produto
- Resultado esperado: Formulário solicitando os dados
- Resultado observado: Vários prompts solicitando os dados
- Evidências: Print da tela
- Ambiente de teste: máquina local
- Gravidade: baixa
- Impacto no negócio: baixo
- Status: aberta
- Prioridade: média

### LOG_ERRO_005
- Título: Não está colocando identificadores corretos no lucro em porcentagem
- Descrição: Está ficando amarelo em vários níveis no lucro
- Passos para reprodução: Adicionar produto com custo 100 e preço 120, custo 100 e preço 200.
- Resultado esperado: Diferentes identificadores de lucro (cores)
- Resultado observado: Mesma cor para vários níveis de lucro
- Evidências: Print da tela
- Ambiente de teste: máquina local
- Gravidade: baixa
- Impacto no negócio: baixo
- Status: aberta
- Prioridade: alta

### LOG_ERRO_006
- Título: Não há destaque em quantidade
- Descrição: A quantidade maior que 10 ou menor está sendo mostrada da mesma forma
- Passos para reprodução: Adicionar produtos com quantidades diferentes dentro dos limites
- Resultado esperado: Apresentar os produtos com quantidade menor que 10 diferente dos demais
- Resultado observado: Produtos iguais em todas as quantidades
- Evidências: Print da tela
- Ambiente de teste: máquina local
- Gravidade: média
- Impacto no negócio: média
- Status: aberta
- Prioridade: alta