import { GetStaticProps } from 'next'
import { getAllPostData } from '../util/post'
import Title from '../components/Title'
import Container from '../components/Container'
import { Post } from '../components/Post'
import { PostType } from '../types/type'

export const Home = ({ allData }: { allData: Array<PostType> }) => {
    return (
        <Container>
            <Title name={'Latest Posts'} />
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
    const allData = await getAllPostData().slice(0, 4)

    return {
        props: {
            allData,
        },
    }
}

export default Home
