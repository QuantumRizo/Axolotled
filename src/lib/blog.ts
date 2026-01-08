import frontMatter from 'front-matter';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    cover: string;
    tags?: string[];
    author?: string;
    keywords?: string[];
    body: string;
}

export function getAllPosts(): BlogPost[] {
    const modules = import.meta.glob('/src/content/blog/*.md', { eager: true, as: 'raw' });

    const posts: BlogPost[] = Object.keys(modules).map((path) => {
        const content = modules[path];
        const { attributes, body } = frontMatter<Omit<BlogPost, 'slug' | 'body'>>(content);
        const slug = path.split('/').pop()?.replace('.md', '') || '';

        return {
            slug,
            body,
            ...attributes,
        };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
}
