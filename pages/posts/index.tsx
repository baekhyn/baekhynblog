import Container from '../../components/Container';
import { GetStaticProps } from 'next';
import { getAllPostData } from '../../util/post';
import Title from '../../components/Title';
import { Post } from '../../components/Post';
import { PostType } from '../../types/type';
import { NextSeo } from 'next-seo';
import metadata from '../../data/metadata';

export default function Posts({ allData }: { allData: Array<PostType> }) {
    return (
        <Container>
            <NextSeo
                title="posts"
                description="공부한 내용들을 정리합니다."
                canonical={`${metadata.cononical}/posts`}
                openGraph={{ url: `${metadata.openGraph.url}/posts` }}
            />
            <Title name={'Posts'} />
            <Post title={'Posts'} length={allData.length} data={allData} />
        </Container>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allData = await getAllPostData();

    return {
        props: {
            allData,
        },
    };
};
