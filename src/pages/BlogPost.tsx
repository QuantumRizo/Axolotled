import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { getPostBySlug } from '../lib/blog';
import { Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = slug ? getPostBySlug(slug) : undefined;

    useEffect(() => {
        if (!post) {
            navigate('/blog');
        }
        window.scrollTo(0, 0);
    }, [post, navigate]);

    if (!post) return null;

    return (
        <HelmetProvider>
            <div className="min-h-screen bg-white">
                <Helmet>
                    <title>{post.title} | Axolotl._.ed</title>
                    <meta name="description" content={post.description} />
                    <meta property="og:title" content={post.title} />
                    <meta property="og:description" content={post.description} />
                    <meta property="og:image" content={post.cover} />
                </Helmet>

                <Navigation />

                {/* Hero Header */}
                <div className="relative h-[60vh] min-h-[400px]">
                    <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute inset-0 flex items-end">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full text-white">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Volver al Blog
                            </Link>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <time className="text-lg">
                                        {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
                                    </time>
                                </div>
                                {post.author && (
                                    <div className="flex items-center gap-2 border-l border-white/30 pl-6">
                                        <span className="text-lg font-medium">Por: {post.author}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <article className="prose prose-lg prose-slate max-w-none 
                        prose-headings:text-textMain prose-headings:font-bold
                        prose-p:text-textMuted prose-p:leading-relaxed
                        prose-a:text-brand-soft-blue prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-lg
                        prose-strong:text-textMain
                        prose-blockquote:border-l-brand-soft-blue prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                    ">
                        <Markdown>{post.body}</Markdown>
                    </article>

                    {/* Keywords Section */}
                    {post.keywords && post.keywords.length > 0 && (
                        <div className="mt-8 mb-12">
                            <h4 className="text-sm font-bold text-textMain uppercase tracking-wider mb-4 opacity-70">
                                Palabras Clave
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {post.keywords.slice(0, 3).map((keyword, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 text-textMuted px-3 py-1 rounded-full text-sm font-medium hover:bg-brand-soft-blue/10 hover:text-brand-deep transition-colors cursor-default"
                                    >
                                        #{keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <Link
                            to="/blog"
                            className="text-brand-soft-blue hover:text-brand-hover font-medium inline-flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Ver más artículos
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default BlogPost;
