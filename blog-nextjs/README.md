# 📝 Blog Next.js com Supabase

> **Projeto Introdutório ao Next.js** - Uma aplicação de blog moderna com integração ao Supabase, paginação dinâmica e design responsivo.

## 📚 Sobre o Projeto

Este projeto é uma evolução do desafio da **Digital Innovation One (DIO)** focado em ensinar os fundamentos do **Next.js** através da construção de um blog dinâmico. A aplicação foi expandida para incluir integração com banco de dados Supabase e sistema de paginação.

### 🎯 Objetivos de Aprendizado

- Entender a estrutura e funcionamento do **Next.js**
- Trabalhar com **Server-Side Rendering (SSR)**
- Integrar aplicação com banco de dados **Supabase**
- Implementar sistema de **paginação dinâmica**
- Utilizar **Tailwind CSS** para estilização
- Gerenciar **rotas dinâmicas** no Next.js

### 🔗 Projeto Original

Este projeto é baseado no desafio da DIO:
- **Repositório Original**: [trilha-react-desafio-5](https://github.com/digitalinnovationone/trilha-react-desafio-5.git)
- **Plataforma**: [Digital Innovation One](https://www.dio.me/)

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para SSR e SSG
- **[React 18](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Supabase](https://supabase.com/)** - Backend as a Service (PostgreSQL)
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[MDX](https://mdxjs.com/)** - Markdown com JSX

---

## 🚀 Funcionalidades

### ✅ Implementadas

- **Listagem de Posts**: Exibe posts do banco de dados Supabase
- **Paginação Dinâmica**: 10 posts por página com navegação
- **Páginas Individuais**: Cada post possui sua própria rota `/posts/[id]`
- **Design Responsivo**: Adaptável para mobile, tablet e desktop
- **Modo Claro/Escuro**: Suporte a temas
- **SEO Otimizado**: Meta tags configuradas
- **Server-Side Rendering**: Conteúdo renderizado no servidor

### 📊 Sistema de Paginação

- Navegação entre páginas (Anterior/Próxima)
- Números de páginas visíveis (até 5 páginas)
- Indicador da página atual
- Contador de posts: "Mostrando X até Y de Z posts"
- URLs amigáveis: `/?page=1`, `/?page=2`, etc.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**
- Conta no **[Supabase](https://supabase.com/)** (gratuita)

---

## ⚙️ Configuração do Projeto

### 1️⃣ Clone o Repositório

```bash
git clone <seu-repositorio>
cd blog-nextjs
```

### 2️⃣ Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3️⃣ Configure o Supabase

#### a) Crie um Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com/)
2. Crie uma nova conta ou faça login
3. Clique em "New Project"
4. Preencha os dados e aguarde a criação

#### b) Crie a Tabela de Posts

Execute o SQL abaixo no **SQL Editor** do Supabase:

```sql
CREATE TABLE post (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE post ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura públicaCREATE POLICY "Permitir leitura pública de posts"
ON post
FOR SELECT
USING (true);

-- Inserir alguns posts de exemplo
INSERT INTO post (title, description, body) VALUES
('Bem-vindo ao Blog Next.js', 'Primeiro post do nosso blog', 'Este é o conteúdo completo do primeiro post...'),
('Aprendendo Next.js', 'Conceitos fundamentais', 'Next.js é um framework React poderoso...'),
('Integração com Supabase', 'Como conectar ao banco de dados', 'Supabase facilita o desenvolvimento backend...');
```

#### c) Configure as Variáveis de Ambiente

1. Na pasta raiz do projeto, crie um arquivo `.env.local`
2. Adicione as credenciais do Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sua_chave_publica
SUPABASE_SECRET_KEY=sua_chave_secreta
```

**Onde encontrar as chaves:**
- Acesse seu projeto no Supabase
- Vá em **Settings → API**
- Copie a **URL** e a **anon key** (chave pública)
- Cole no arquivo `.env.local`

### 4️⃣ Execute o Projeto

```bash
npm run dev
# ou
yarn dev
```

Acesse: **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Estrutura do Projeto

```
blog-nextjs/
├── components/          # Componentes React reutilizáveis
│   ├── ArrowIcon.js    # Ícone de seta
│   ├── CustomLink.js   # Link customizado
│   ├── Footer.js       # Rodapé
│   ├── Header.js       # Cabeçalho
│   ├── Layout.js       # Layout principal
│   └── SEO.js          # Meta tags SEO
├── pages/              # Páginas do Next.js (rotas)
│   ├── _app.js         # Configuração global
│   ├── _document.js    # Estrutura HTML
│   ├── index.js        # Página inicial (lista de posts)
│   └── posts/
│       └── [id].js     # Página dinâmica de post individual
├── services/           # Serviços e APIs
│   └── api.js          # Configuração Axios + Supabase
├── styles/             # Arquivos de estilo
│   └── globals.css     # Estilos globais
├── utils/              # Funções utilitárias
│   ├── global-data.js  # Dados globais do blog
│   └── mdx-utils.js    # Funções para buscar posts
├── .env.local          # Variáveis de ambiente (não commitado)
├── next.config.js      # Configuração do Next.js
├── package.json        # Dependências
├── postcss.config.js   # Configuração PostCSS
├── tailwind.config.js  # Configuração Tailwind
└── README.md           # Este arquivo
```

---

## 🔧 Principais Arquivos

### 📄 `pages/index.js`
Página inicial que lista os posts com paginação usando `getServerSideProps()`.

```javascript
export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const { posts, total, totalPages } = await getPosts(page, 10);
  
  return {
    props: { posts, total, totalPages, currentPage: page }
  };
}
```

### 📄 `pages/posts/[id].js`
Página dinâmica que exibe um post específico usando rotas dinâmicas do Next.js.

### 📄 `utils/mdx-utils.js`
Contém as funções para buscar dados do Supabase:

- `getPosts(page, perPage)` - Busca posts com paginação
- `getPostBySlug(id)` - Busca post por ID
- `getAllPostIds()` - Lista todos os IDs (para SSG)

### 📄 `services/api.js`
Configuração do cliente Axios para a REST API do Supabase.

---

## 🎓 Conceitos do Next.js Abordados

### 1. **Server-Side Rendering (SSR)**
A função `getServerSideProps()` executa no servidor a cada requisição, buscando dados frescos do banco.

```javascript
export async function getServerSideProps({ query }) {
  // Código executado no servidor
  const data = await fetchData();
  return { props: { data } };
}
```

### 2. **Rotas Dinâmicas**
Arquivos entre colchetes `[id].js` criam rotas dinâmicas:
- `pages/posts/[id].js` → `/posts/1`, `/posts/2`, etc.

### 3. **Static Site Generation (SSG)**
A função `getStaticProps()` gera páginas estáticas em build time.

### 4. **API Routes**
Next.js permite criar APIs serverless em `pages/api/`.

### 5. **Image Optimization**
O componente `next/image` otimiza imagens automaticamente.

---

## 📖 Como Usar

### Adicionar Novos Posts

Execute o SQL no Supabase:

```sql
INSERT INTO post (title, description, body) 
VALUES (
  'Título do Post',
  'Descrição curta',
  'Conteúdo completo do post aqui...'
);
```

Os posts aparecerão automaticamente na aplicação!

### Personalizar o Blog

Edite `utils/global-data.js`:

```javascript
export const getGlobalData = () => {
  return {
    name: 'Seu Nome',
    blogTitle: 'Título do Blog',
    footerText: 'Todos os direitos reservados.',
  };
};
```

Ou configure via variáveis de ambiente no `.env.local`:

```env
BLOG_NAME=Seu Nome
BLOG_TITLE=Título do Blog
BLOG_FOOTER_TEXT=© 2026 Todos os direitos reservados
```

---

## 🐛 Solução de Problemas

### Erro: "Invalid value undefined for header apikey"

**Solução**: Verifique se o `.env.local` está configurado e reinicie o servidor.

### Erro: "Use of aggregate functions is not allowed"

**Solução**: Use o header `Prefer: count=exact` nas requisições (já implementado).

### Posts não aparecem

**Solução**: 
1. Verifique se a tabela `post` tem dados
2. Confirme as credenciais do Supabase
3. Verifique se RLS está configurado corretamente

---

## 🚀 Deploy

### Netlify

```bash
npm run build
netlify deploy --prod
```

### Vercel

```bash
npm install -g vercel
vercel --prod
```

**Não esqueça de adicionar as variáveis de ambiente no painel do serviço de deploy!**

---

## 📚 Recursos de Aprendizado

- **[Documentação Next.js](https://nextjs.org/docs)**
- **[Tutorial Next.js](https://nextjs.org/learn)**
- **[Documentação Supabase](https://supabase.com/docs)**
- **[Curso DIO - React](https://www.dio.me/)**
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)**

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto é open source e está sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido como parte do aprendizado da trilha React da **[Digital Innovation One](https://www.dio.me/)**.

### 🙏 Créditos

- **Projeto Base**: [DIO - trilha-react-desafio-5](https://github.com/digitalinnovationone/trilha-react-desafio-5.git)
- **Template Original**: [Netlify Next.js Blog Theme](https://github.com/netlify-templates/nextjs-blog-theme)
- **Plataforma de Ensino**: [Digital Innovation One](https://www.dio.me/)

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. Consulte a [documentação do Next.js](https://nextjs.org/docs)
2. Verifique as [issues do projeto original](https://github.com/digitalinnovationone/trilha-react-desafio-5/issues)
3. Leia a [documentação do Supabase](https://supabase.com/docs)

---

**⭐ Se este projeto te ajudou, deixe uma estrela no repositório!**

**💻 Bons estudos e feliz codificação!**
