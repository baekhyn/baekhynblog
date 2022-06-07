import { GetStaticProps } from 'next'
import { getAllPostData } from '../util/post'
import Title from '../components/Title'
import Container from '../components/Container'
import { Post } from '../components/Post'
import { PostType } from '../types/type'

export const Home = ({ allData }: { allData: Array<PostType> }) => {
    console.log(allData)
    return (
        <Container>
            <Title name={'Latest Posts'} />
            <Post data={allData} />
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
