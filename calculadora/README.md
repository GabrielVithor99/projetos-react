# Calculadora (Projeto de Introdução ao React)

Projeto simples de calculadora realizado como exercício introdutório ao React. O objetivo principal é apresentar, de forma prática, os conceitos de componentização, estado e eventos em React.

## Objetivos de aprendizagem
- Entender a estrutura básica de um app React.
- Componentizar a UI (Display, Teclado, Botões).
- Gerenciar estado com hooks (useState).
- Tratar entrada do usuário e avaliar expressões simples.
- Estilizar componentes com CSS inline ou styled-components.

## Funcionalidades
- Operações básicas: soma, subtração, multiplicação e divisão.
- Percentual, troca de sinal, deletar último dígito e limpar.
- Interface responsiva simples com formato semelhante a calculadoras modernas.

## Estrutura do projeto
- src/
  - App.js — componente principal (layout e lógica básica).
  - components/ — componentes reutilizáveis (Display, Button, Keypad, etc).
  - styles/ — estilos (CSS ou styled-components).
- package.json — dependências e scripts.

## Como executar
1. Instale as dependências:
4backticks
// Use o terminal na pasta do projeto
cd c:\workspace\REACT\projetos-react\calculadora
npm install
4backticks

2. Inicie a aplicação:
4backticks
npm start
4backticks

(Obs.: se usar styled-components, assegure que está instalado: `npm install styled-components`)

## Uso
- Clique nos botões para montar a expressão.
- `=` para avaliar.
- `C` para limpar, `⌫` para apagar o último dígito.

## Contribuições
Contribuições são bem-vindas — abra issues ou pull requests com melhorias na UI, correções de bugs ou refatorações.

## Licença
Projeto livre para estudo e aprendizado.
