import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeToc from '@jsdevtools/rehype-toc';
import { PostType } from '../types/type';

const postDirPath = path.join(process.cwd(), 'posts');
const postFileNames = fs.readdirSync(postDirPath);

export function getAllPostData() {
    const allPostData = postFileNames
        .map((fileName) => {
            const fileDirPath = path.join(postDirPath, fileName);
            const postContents = fs.readFileSync(fileDirPath, 'utf-8');
            const matterData = matter(postContents);

            const slug = fileName.replace(/\.mdx$/, '');

            return {
                slug,
                ...(matterData.data as PostType),
            };
        })
        .sort(({ date: a }, { date: b }) => {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }
            return 0;
        });

    return allPostData;
}

export async function getSinglePost(slug: string) {
    const source = fs.readFileSync(path.join(postDirPath, `${slug}.mdx`), 'utf8');

    const { code, frontmatter } = await bundleMDX({
        source,
        mdxOptions(options) {
            options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
            options.rehypePlugins = [
                ...(options?.recmaPlugins ?? []),
                rehypePrism,
                rehypeSlug,
                rehypeToc,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: { className: ['headings'] },
                        behavior: 'wrap',
                    },
                ],
                [
                    rehypeExternalLinks,
                    {
                        target: '_blank',
                        rel: ['nofollow', 'noreferrer'],
                    },
                ],
            ];
            return options;
        },
    });

    return {
        slug,
        code,
        frontmatter,
    };
}

export function getCategoryData(data: Array<PostType>) {
    const categories = data
        .map(({ category }) => {
            return category;
        })
        .flat();

    return Array.from(new Set(categories));
}
