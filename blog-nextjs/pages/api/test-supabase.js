import { api } from '../../services/api';

export default async function handler(req, res) {
  try {
    console.log('Testando conexão com Supabase...');
    
    const { data } = await api.get('/post?select=*');
    
    res.status(200).json({
      success: true,
      message: 'Conexão com Supabase OK',
      postsCount: data ? data.length : 0,
      data: data || []
    });
  } catch (error) {
    console.error('Erro ao conectar com Supabase:', error);
    
    res.status(500).json({
      success: false,
      message: 'Erro ao conectar com Supabase',
      error: error.response?.data || error.message,
      headers: error.response?.config?.headers
    });
  }
}
