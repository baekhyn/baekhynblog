import Container from '../components/Container'
import { GetStaticProps } from 'next'
import { getAllPostData } from '../util/post'
import Title from '../components/Title'
import CategoryBar from '../components/CategoryBar'
import { NextSeo } from 'next-seo'
import metadata from '../data/metadata'

export default function Category({ setArr }: { setArr: Array<string> }) {
    return (
        <Container>
            <NextSeo
                title="category"
                description="카테고리별 게시물을 모아 봅니다."
                canonical={`${metadata.cononical}/category`}
                openGraph={{ url: `${metadata.openGraph.url}/category` }}
            />
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
