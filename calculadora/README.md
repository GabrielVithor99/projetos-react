# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

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
