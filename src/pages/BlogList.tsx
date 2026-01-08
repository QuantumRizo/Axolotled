import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/blog';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogList: React.FC = () => {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navigation />
            <div className="pt-24 pb-12 flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-textMain mb-4">Blog</h1>
                        <p className="text-xl text-textMuted max-w-2xl mx-auto">
                            Noticias, tutoriales y actualizaciones sobre impresión 3D y diseño.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                                <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={post.cover}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-sm text-brand-soft-blue mb-3">
                                            <Calendar className="w-4 h-4" />
                                            <time dateTime={post.date}>
                                                {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
                                            </time>
                                        </div>

                                        <h2 className="text-xl font-bold text-textMain mb-3 group-hover:text-brand-soft-blue transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-textMuted text-sm line-clamp-3 mb-4 flex-1">
                                            {post.description}
                                        </p>

                                        <div className="text-brand-soft-blue font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                                            Leer más →
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-textMuted text-lg">No hay publicaciones disponibles por el momento.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogList;
