# 🚀 Projetos React - Portfólio de Desenvolvimento

[![React](https://img.shields.io/badge/React-19.2+-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-Latest-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

Uma coleção de **projetos React de produção** desenvolvidos durante a Formação React Developer da **DIO**, destacando arquitetura escalável, boas práticas de desenvolvimento e integração full-stack. Este repositório demonstra domínio em construção de interfaces modernas, gerenciamento de estado, autenticação e consumo de APIs.

---

## ⭐ Projetos em Destaque

### 📰 **Next.js Blog** 
Plataforma de blog moderna construída com Next.js e Tailwind CSS, demonstrando expertise em:
- **SSG/SSR** com Next.js para otimização SEO
- **MDX** para conteúdo dinâmico e escalável
- **Tailwind CSS** com temas personalizáveis (light/dark)
- **Cypress** para testes end-to-end
- **Responsive Design** otimizado para todas as plataformas
- **Integração com Netlify** para deploy contínuo

**Tecnologias:** `Next.js` `React 18` `Tailwind CSS` `MDX` `Cypress` `PostCSS` `Netlify`

---

### 🎓 **DIO Replica**
Réplica completa e funcional da plataforma Digital Innovation One, exemplificando um projeto **production-ready** com:
- **Arquitetura componentizada** e reutilizável
- **React Router v7** para navegação SPA eficiente
- **TypeScript** para type-safety em todo o projeto
- **React Hook Form + Yup** para validação robusta de formulários
- **Styled Components** para CSS-in-JS escalável
- **JSON Server** como API Mock para backend simulado
- **Axios** para requisições HTTP estruturadas
- **Context API + Hooks** para gerenciamento de estado
- **Sistema de autenticação** com persistência de sessão
- **Testes automatizados** com React Testing Library

**Tecnologias:** `React 19` `TypeScript` `React Router v7` `Styled Components` `React Hook Form` `Yup` `Axios` `JSON Server` `React Icons`

---

## 🛠️ Stack Tecnológico Consolidado

### Frontend
- **React** (v18+, v19) - Biblioteca UI moderna
- **Next.js** - Framework React com SSG/SSR e otimizações
- **TypeScript** - Type safety e melhor DX
- **React Router** - Roteamento single-page
- **Styled Components** - CSS-in-JS escalável
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Gerenciamento eficiente de formulários
- **Yup** - Validação de schemas
- **Axios** - Cliente HTTP
- **React Icons** - Biblioteca de ícones SVG

### Testing & Quality
- **Cypress** - Testes end-to-end
- **React Testing Library** - Testes unitários
- **Jest** - Test runner padrão

### Tooling & Build
- **PostCSS** - Processamento CSS avançado
- **ESLint** - Linting de código
- **JSON Server** - API Mock para desenvolvimento
- **Netlify** - Deploy e CI/CD

---

## 📂 Estrutura do Repositório

```
projetos-react/
├── blog-nextjs/          ⭐ Plataforma de Blog (Next.js + MDX)
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Rotas e páginas
│   ├── styles/           # Estilos globais
│   ├── utils/            # Utilitários e helpers
│   └── tailwind.config.js # Configuração Tailwind
│
├── dio-replica/          ⭐ Plataforma DIO (React + TypeScript)
│   ├── src/
│   │   ├── components/   # Componentes React
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── context/      # Context API
│   │   ├── hooks/        # Custom hooks
│   │   ├── services/     # Chamadas de API
│   │   ├── styles/       # Styled Components
│   │   └── types/        # Tipos TypeScript
│   ├── public/           # Ativos estáticos
│   └── db.json           # Base de dados JSON Server
│
├── hookforms/            # Desafio React Hook Form
├── calculadora/          # Calculadora com React
├── gitfind/              # Buscador de repositórios GitHub
├── wiki-repository/      # Wiki com consumo de API
└── next-app/             # Projeto Next.js inicial
```

---

## 🚀 Como Executar os Projetos

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Blog Next.js
```bash
cd blog-nextjs
npm install
npm run dev
# Acesse http://localhost:3000
```

### DIO Replica (com API Mock)
```bash
cd dio-replica
npm install

# Terminal 1 - Backend Mock
npm run api
# API disponível em http://localhost:3001

# Terminal 2 - Frontend
npm start
# Acesse http://localhost:3000
```

### Outros Projetos
```bash
cd <nome-do-projeto>
npm install
npm start
# Acesse http://localhost:3000
```

---

## 📋 Descrição dos Projetos

| Projeto | Descrição | Tecnologias |
|---------|-----------|-------------|
| **blog-nextjs** | Plataforma de blog escalável com MDX | Next.js, Tailwind, MDX, Cypress |
| **dio-replica** | Réplica funcional da plataforma DIO | React, TypeScript, Router, Styled Components |
| **hookforms** | Desafio de formulário com validação | React Hook Form, Yup, Validação |
| **calculadora** | Calculadora interativa | React, CSS Modules |
| **gitfind** | Buscador de repositórios GitHub | React, Axios, GitHub API |
| **wiki-repository** | Enciclopédia com busca de dados | React, Consumo de API |
| **next-app** | Introdução a Next.js | Next.js, React, ESLint |

---

## 💡 Conceitos & Práticas Aplicadas

### Arquitetura
✅ **Componentização** modular e reutilizável  
✅ **Separação de responsabilidades** (containers vs presentacionais)  
✅ **DRY** (Don't Repeat Yourself)  
✅ **SOLID principles** aplicados em componentes  

### Performance & SEO
✅ **Code splitting** automático  
✅ **Lazy loading** de componentes  
✅ **Otimização de imagens**  
✅ **Server-side rendering** (Next.js)  
✅ **Meta tags** dinâmicas para SEO  

### Segurança & Qualidade
✅ **Type safety** com TypeScript  
✅ **Validação de formulários** robusto  
✅ **Tratamento de erros** adequado  
✅ **Testes automatizados** e end-to-end  
✅ **Linting & Code formatting**  

### UX/UI
✅ **Design responsivo** mobile-first  
✅ **Temas personalizáveis** (light/dark)  
✅ **Acessibilidade** (WCAG)  
✅ **Feedback visual** de interações  
✅ **Tratamento de estados** (loading, erro, sucesso)  

---

## 🎯 O que Você Encontrará

Este repositório é ideal para:
- 👔 **Avaliadores Técnicos**: Demonstração de expertise em React, TypeScript e full-stack
- 🎓 **Estudantes**: Referência de boas práticas e padrões de projeto
- 💼 **Recrutadores**: Portfolio com projetos production-ready
- 🔍 **Code Review**: Exemplos de código limpo e bem estruturado

---

## 📈 Evolução & Aprendizado

Este repositório reflete a progressão através da **Formação React Developer da DIO**, desde projetos iniciais até arquiteturas completas e escaláveis. Cada projeto representa um milestone no domínio de:

- React fundamentals e hooks avançados
- TypeScript para segurança de tipos
- Roteamento e navegação (React Router)
- Integração com APIs e back-end
- Validação e gerenciamento de estado
- Testes automatizados
- Deploy e CI/CD

---

## 📝 Licença

Este projeto está sob a licença [MIT](LICENSE). Sinta-se livre para usar como referência em seus próprios projetos.

---

## 🔗 Links Importantes

- **GitHub**: https://github.com/GabrielVithor99
- **LinkedIn**: [Gabriel Vithor](https://linkedin.com)
- **Formação DIO**: https://www.dio.me/

---

## 👨‍💻 Autor

**Gabriel Vithor** 🚀  
Full-stack developer apaixonado por React e JavaScript moderno.

---

<div align="center">

**Desenvolvido com ❤️ durante a Formação React Developer da DIO**

Se este repositório foi útil, dê uma ⭐ para apoiar o trabalho!

</div>