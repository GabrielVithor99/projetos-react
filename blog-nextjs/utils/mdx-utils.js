import { api } from '../services/api'

/**
 * Busca todos os posts do Supabase (sem paginação)
 * Útil para quando precisa-se de todos os posts de uma vez
 * @returns {Promise<Array>} Array de todos os posts
 */
export const getAllPosts = async () => {
    try {
        const { data } = await api.get('/post?select=*&order=created_at.desc');

        if (Array.isArray(data)) {
            return data.map(post => ({
                ...post,
                created_at: post.created_at ? new Date(post.created_at).toLocaleDateString('pt-BR') : ''
            }));
        }

        return [];
    } catch (error) {
        console.error('Erro ao buscar todos os posts:', error.response?.data || error.message);
        return [];
    }
}

/**
 * Busca posts do Supabase com paginação
 * @param {number} page - Número da página (começa em 1)
 * @param {number} perPage - Quantidade de posts por página
 * @returns {Promise<{posts: Array, total: number, page: number, totalPages: number}>} Posts e informações de paginação
 */
export const getPosts = async (page = 1, perPage = 10) => {
    try {
        const offset = (page - 1) * perPage;

        console.log('🔍 Iniciando busca de posts...');
        console.log('Página:', page, 'Offset:', offset, 'PerPage:', perPage);

        // Buscar posts com paginação - IMPORTANTE: incluir Prefer: count=exact para obter o total
        const { data, headers } = await api.get(
            `/post?select=*&order=created_at.desc&limit=${perPage}&offset=${offset}`,
            {
                headers: {
                    'Prefer': 'count=exact'
                }
            }
        );
        console.log('📮 Posts retornados:', data);
        console.log('📮 Headers completos:', headers);

        // Pegar o total do header content-range
        const contentRange = headers['content-range'];
        console.log('📊 Content-Range:', contentRange);
        
        // O content-range vem no formato: "0-9/100" onde 100 é o total
        const total = contentRange ? parseInt(contentRange.split('/')[1]) : data.length;
        console.log('📊 Total de posts:', total);

        const posts = Array.isArray(data)
            ? data.map(post => ({
                ...post,
                created_at: post.created_at ? new Date(post.created_at).toLocaleDateString('pt-BR') : ''
            }))
            : [];

        const totalPages = Math.ceil(total / perPage);

        console.log('✅ Retornando:', { posts: posts.length, total, totalPages });

        return {
            posts,
            total,
            page,
            totalPages,
        };
    } catch (error) {
        console.error('❌ Erro ao buscar posts:', error.response?.data || error.message);
        return {
            posts: [],
            total: 0,
            page: 1,
            totalPages: 0,
        };
    }
}

/**
 * Busca um post específico pelo ID
 * @param {string|number} id - ID do post
 * @returns {Promise<Object|null>} Post encontrado ou null
 */
export const getPostBySlug = async (id) => {
    if (!id) {
        console.warn('ID do post não fornecido');
        return null;
    }

    try {
        const { data } = await api.get(`/post?id=eq.${id}&select=*`);

        if (Array.isArray(data) && data.length > 0) {
            const post = data[0];
            return {
                ...post,
                created_at: post.created_at ? new Date(post.created_at).toLocaleDateString('pt-BR') : ''
            };
        }

        console.warn(`Post com ID ${id} não encontrado`);
        return null;
    } catch (error) {
        console.error(`Erro ao buscar post ${id}:`, error.response?.data || error.message);
        return null;
    }
}

/**
 * Busca todos os IDs de posts para geração estática
 * @returns {Promise<Array>} Array de IDs
 */
export const getAllPostIds = async () => {
    try {
        const { data } = await api.get('/post?select=id');

        if (Array.isArray(data)) {
            return data.map(post => ({
                params: {
                    id: String(post.id)
                }
            }));
        }

        return [];
    } catch (error) {
        console.error('Erro ao buscar IDs dos posts:', error.response?.data || error.message);
        return [];
    }
}