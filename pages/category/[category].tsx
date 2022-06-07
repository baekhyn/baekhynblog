import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostData } from '../../util/post'
import Container from '../../components/Container'
import Title from '../../components/Title'
import { Post } from '../../components/Post'
import { PostType } from '../../types/type'
import { NextSeo } from 'next-seo'
import metadata from '../../data/metadata'

export default function Category({ allData }: { allData: Array<PostType> }) {
    const { category } = allData[0]

    return (
        <Container>
            <NextSeo
                title={category}
                description={`${category}와 관련된 게시물`}
                canonical={`${metadata.cononical}/category/${category}`}
                openGraph={{ url: `${metadata.openGraph.url}/category/${category}` }}
            />
            <Title name={category} />
            <Post data={allData} />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const allData = await getAllPostData().filter((el) => el.category === params?.category)
    return {
        props: {
            allData,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allData = getAllPostData()
    const paths = allData.map(({ category }) => ({ params: { category } }))
    return {
        paths,
        fallback: false,
    }
}
