export type PostType = {
    title: string
    subtitle: string
    date: string
    category: string
    slug?: string
}

export type MDXType = {
    slug: string
    code: string
    frontmatter: PostType
}

export type ProjectItem = {
    title: string
    src: string
    alt: string
    href: string
}

export type NavItem = {
    href: string
    title: string
}
