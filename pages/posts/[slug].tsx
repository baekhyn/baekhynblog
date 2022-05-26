import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostData, getSinglePost } from '../../util/post'
import { getMDXComponent } from 'mdx-bundler/client'
import React from 'react'
import Container from '../../components/Container'
import { MdxContainer } from '../../components/MdxContainer'
import MdxTitle from '../../components/MdxTitle'
import { MDXType } from '../../types/type'

export default function Post({ postData }: { postData: MDXType }) {
    const { code, frontmatter } = postData
    const Component = React.useMemo(() => getMDXComponent(code), [code])
    return (
        <Container>
            <MdxTitle
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                date={frontmatter.date}
                category={frontmatter.category}
            />
            <MdxContainer>
                <Component />
            </MdxContainer>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getSinglePost(params?.slug as string)
    return {
        props: { postData },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allData = getAllPostData()
    const paths = allData.map(({ slug }) => ({ params: { slug } }))
    return {
        paths,
        fallback: false,
    }
}
