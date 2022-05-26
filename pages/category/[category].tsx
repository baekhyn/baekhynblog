import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostData } from '../../util/post'
import Container from '../../components/Container'
import Title from '../../components/Title'
import { Post } from '../../components/Post'
import { PostType } from '../../types/type'

export default function Category({ allData }: { allData: Array<PostType> }) {
    const { category } = allData[0]

    return (
        <Container>
            <Title name={category} />
            {allData.map((allData) => (
                <Post
                    title={allData.title}
                    subtitle={allData.subtitle}
                    date={allData.date}
                    category={allData.category}
                    slug={allData.slug}
                    key={allData.title}
                />
            ))}
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
