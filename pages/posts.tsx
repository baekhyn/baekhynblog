import Container from '../components/Container'
import { GetStaticProps } from 'next'
import { getAllPostData } from '../util/post'
import Title from '../components/Title'
import { Post } from '../components/Post'
import { PostType } from '../types/type'

export default function Posts({ allData }: { allData: Array<PostType> }) {
    return (
        <Container>
            <Title name={'Posts'} />
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

export const getStaticProps: GetStaticProps = async () => {
    const allData = await getAllPostData()

    return {
        props: {
            allData,
        },
    }
}
