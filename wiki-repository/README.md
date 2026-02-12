# Wiki Repository

Um pequeno projeto em React que busca informações de repositórios no GitHub e permite adicioná-los a uma lista local.

## Visão geral

- Busca repositórios via API do GitHub .
- Armazena os repositórios buscados no estado local do React.
- Permite adicionar e remover repositórios da lista.

## Tecnologias

- React
- Axios
- styled-components (opcional)

## Instalação

1. Instale dependências:

```bash
npm install
```

2. Execute em modo de desenvolvimento:

```bash
npm start
```

3. Gerar build de produção:

```bash
npm run build
```

## Scripts úteis

- `npm start` — inicia o servidor de desenvolvimento em `http://localhost:3000`.
- `npm run build` — cria a versão otimizada para produção na pasta `build`.

## Estrutura principal

- `src/pages/App.js` — componente principal; busca e gerencia lista de repositórios.
- `src/services/api` — cliente `axios` configurado para a API do GitHub.
- `src/components` — componentes reutilizáveis (Input, Button, ItemRepo, etc.).
- `public/` — arquivos estáticos.

## Uso rápido

1. No campo de busca digite `<usuário>/<repositório>` (ex.: `facebook/react`) e clique em Buscar.
2. O repositório será adicionado à lista se encontrado.
3. Para remover um repositório, use o botão de remoção associado a cada item (isso chama `handleRemoveRepository(id)`).

## Observações e avisos

- O projeto usa importações dentro de `src/`; mover arquivos para fora dessa pasta pode causar erros com Create React App.
- Durante a última execução foram encontradas apenas mensagens do ESLint (warnings) —`src/components/ItemRepo` para ajustes de acessibilidade.

## Contribuição

1. Abra uma issue descrevendo a mudança proposta.
2. Abra um pull request com mudanças pequenas e focoado em uma tarefa.

## Licença

Licença conforme o repositório principal — adicione um `LICENSE` se necessário.
