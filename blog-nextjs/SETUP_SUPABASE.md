# 🚀 Novo Modelo de Blog Supabase - Instruções

## ✅ O que foi reformulado

1. **API Supabase** - Agora usa corretamente `/rest/v1` na URL
2. **Funções de dados** - Melhorado tratamento de erros e formatação de datas
3. **Renderização estática** - Pages agora usam `getStaticProps` e `getStaticPaths` para melhor performance
4. **Arquivo de teste** - Novo endpoint para testar conexão com Supabase

## 📋 Pré-requisitos

### 1. Variáveis de Ambiente (`.env.local`)

Crie o arquivo `c:\workspace\REACT\projetos-react\blog-nextjs\.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=sua-chave-aqui
```

**Como obter?**
- Acesse [supabase.com](https://supabase.com)
- Vá a Settings > API
- Copie a URL do projeto
- Copie a chave pública (anon/public)

### 2. Tabela no Supabase

Você precisa ter uma tabela `posts` com os seguintes campos:

```
- id (bigint, primary key, auto-increment)
- title (text) - Título do post
- description (text) - Descrição curta
- body (text ou longtext) - Conteúdo do post
- created_at (timestamp) - Data de criação
```

## 🧪 Testes

### 1. Teste a conexão
```bash
# No terminal, navegue até blog-nextjs
cd c:\workspace\REACT\projetos-react\blog-nextjs

# Teste a API
npm run dev

# Abra em outro terminal
curl http://localhost:3000/api/test-supabase
```

Você deve receber uma resposta assim:
```json
{
  "success": true,
  "message": "Conexão com Supabase OK",
  "postsCount": 5,
  "data": [...]
}
```

### 2. Acesse a página no navegador
```
http://localhost:3000
```

Deve mostrar a lista de posts automaticamente!

## 🔧 Estrutura de Dados

Os dados vindos do Supabase são automaticamente formatados:
- Datas são convertidas para formato `pt-BR` (ex: `25/02/2026`)
- Posts retornam com todos os campos originais

## 📝 Para adicionar novos posts

No Supabase, insira registros na tabela `posts`:

```sql
INSERT INTO posts (title, description, body, created_at) VALUES
('Meu Primeiro Post', 'Descrição do post', 'Conteúdo completo do post', NOW());
```

## 🐛 Troubleshooting

### Página em branco?
1. Abra F12 > Console no navegador
2. Procure por erros
3. Verifique terminal do VS Code
4. Teste endpoint `/api/test-supabase`

### Erro "requested path is invalid"?
- Verifique `.env.local`
- Confirme que a URL não tem `/rest/v1` duplicada

### Posts não aparecem?
- Verifique se há dados na tabela `posts` no Supabase
- Teste o endpoint de teste
- Verifique as variáveis de ambiente

## 🚀 Próximas funcionalidades

Para adicionar:
- Busca de posts
- Paginação
- Categorias
- Comentários

## 📚 Arquivos modificados

- `services/api.js` - Configuração corrigida
- `utils/mdx-utils.js` - Funções de fetch melhoradas
- `pages/index.js` - Use getStaticProps
- `pages/posts/[id].js` - Use getStaticProps e getStaticPaths
- `pages/api/test-supabase.js` - Novo endpoint de teste
