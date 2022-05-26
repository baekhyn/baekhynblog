import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeToc from '@jsdevtools/rehype-toc'

const postDirPath = path.join(process.cwd(), 'posts')
const postFileNames = fs.readdirSync(postDirPath)

export function getAllPostData() {
    const allPostData = postFileNames
        .map((fileName: string) => {
            const slug = fileName.replace(/\.mdx$/, '')
            const postContents = fs.readFileSync(path.join(postDirPath, `${slug}.mdx`), 'utf-8')
            const matterData = matter(postContents)
            return {
                slug,
                ...(matterData.data as {
                    title: string
                    subtitle: string
                    date: string
                    category: string
                }),
            }
        })
        .sort(({ date: a }, { date: b }): number => {
            if (a < b) {
                return 1
            }
            if (a > b) {
                return -1
            }
            return 0
        })

    return allPostData
}

export async function getSinglePost(slug: string) {
    const source = fs.readFileSync(path.join(postDirPath, `${slug}.mdx`), 'utf8')
    const { code, frontmatter } = await bundleMDX({
        source,
        mdxOptions(options) {
            options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm]
            options.rehypePlugins = [
                ...(options?.recmaPlugins ?? []),
                rehypeCodeTitles,
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
            ]
            return options
        },
    })

    return {
        slug,
        code,
        frontmatter,
    }
}
