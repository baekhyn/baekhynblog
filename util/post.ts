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
// root dir + 'posts'
const postFileNames = fs.readdirSync(postDirPath);
// post의 이름들(파일명)

export function getAllPostData() {
    const allPostData = postFileNames
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            // 확장자명 지우기
            const fileDirPath = path.join(postDirPath, fileName);
            // 개별 포스트 경로
            const postContents = fs.readFileSync(fileDirPath, 'utf-8');
            // 그 경로의 파일 인코딩하기
            const matterData = matter(postContents);
            // 메터 데이터 읽기
            console.log(matterData.data);
            return {
                slug,
                ...(matterData.data as PostType),
            };
        })
        .sort(({ date: a }, { date: b }): number => {
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
