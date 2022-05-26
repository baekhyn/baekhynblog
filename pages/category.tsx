import Container from '../components/Container'
import { GetStaticProps } from 'next'
import { getAllPostData } from '../util/post'
import Title from '../components/Title'
import CategoryBar from '../components/CategoryBar'

export default function Category({ setArr }: { setArr: Array<string> }) {
    return (
        <Container>
            <Title name={'Category'} />
            <CategoryBar name={setArr} />
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const allData = await getAllPostData()
    const categoryData = allData.map(({ category }) => category)
    const setArr = Array.from(new Set(categoryData))
    return {
        props: { setArr },
    }
}
