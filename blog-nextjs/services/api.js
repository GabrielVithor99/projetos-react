import axios from 'axios';

console.log('🔍 SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('🔍 API_KEY:', process.env.SUPABASE_SECRET_KEY ? 'CARREGADA' : 'NÃO ENCONTRADA');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const API_KEY = process.env.SUPABASE_SECRET_KEY;

if (!SUPABASE_URL || !API_KEY) {
  console.error('❌ Variáveis de ambiente não configuradas!');
}

const api = axios.create({
  baseURL: `${SUPABASE_URL}/rest/v1`,
  headers: {
    'apikey': API_KEY,
    'Content-Type': 'application/json'
  }
});

console.log('✅ Axios configurado com base URL:', `${SUPABASE_URL}/rest/v1`);

export { api };
