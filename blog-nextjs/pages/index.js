import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData, currentPage, totalPages, total }) {
  const showPagination = totalPages > 1;
  const perPage = 10;
  const startPost = total > 0 ? (currentPage - 1) * perPage + 1 : 0;
  const endPost = Math.min(currentPage * perPage, total);
  
  return (
    <Layout>
      <SEO title={globalData.title} description={globalData.blogDescription} />
      <Header name={globalData.title} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        
        {posts.length > 0 ? (
          <>
            <ul className="w-full">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
                >
                  <Link
                    as={`/posts/${post.id}`}
                    href={`/posts/${post.id}`}
                  >
                    <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                      {post.created_at && (
                        <p className="uppercase mb-3 font-bold opacity-60">
                          {post.created_at}
                        </p>
                      )}
                      <h2 className="text-2xl md:text-3xl">{post.title}</h2>
                      {post.description && (
                        <p className="mt-3 text-lg opacity-60">
                          {post.description}
                        </p>
                      )}
                      <ArrowIcon className="mt-4" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Componente de Paginação */}
            {showPagination && (
              <div className="flex justify-center items-center gap-2 mt-12 mb-8 flex-wrap">
                {currentPage > 1 && (
                  <Link href={`/?page=${currentPage - 1}`}>
                    <a className="px-4 py-2 rounded-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10">
                      ← Anterior
                    </a>
                  </Link>
                )}

                {/* Números de página */}
                <div className="flex gap-2 flex-wrap justify-center">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <Link key={pageNum} href={`/?page=${pageNum}`}>
                        <a className={`px-3 py-2 rounded-lg transition border ${
                          currentPage === pageNum
                            ? 'bg-white dark:bg-white bg-opacity-20 dark:bg-opacity-20 border-gray-800 dark:border-white border-opacity-30 dark:border-opacity-30'
                            : 'bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10'
                        }`}>
                          {pageNum}
                        </a>
                      </Link>
                    );
                  })}
                </div>

                {currentPage < totalPages && (
                  <Link href={`/?page=${currentPage + 1}`}>
                    <a className="px-4 py-2 rounded-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10">
                      Próximo →
                    </a>
                  </Link>
                )}
              </div>
            )}

            {/* Informações de paginação */}
            {total > 0 && (
              <div className="text-center text-sm opacity-60 mb-8 mt-6">
                Mostrando {startPost} até {endPost} de {total} {total === 1 ? 'post' : 'posts'}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg opacity-60">Nenhum post encontrado.</p>
          </div>
        )}
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const perPage = 10;
  const globalData = getGlobalData();

  try {
    const { posts, total, totalPages } = await getPosts(page, perPage);

    if (page > totalPages && totalPages > 0) {
      return { notFound: true };
    }

    return {
      props: {
        posts,
        currentPage: page,
        totalPages,
        total: total,
        globalData
      }
    };
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return {
      props: {
        posts: [],
        currentPage: page,
        totalPages: 0,
        total: 0,
        globalData
      }
    };
  }
}