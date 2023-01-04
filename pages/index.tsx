import { GetStaticProps } from 'next';
import { getAllPostData } from '../util/post';
import Container from '../components/Container';
import Post from '../components/Post';
import { PostType } from '../types/type';
import Banner from '../components/Banner';
import PageLink from '../components/PagiNation';

const POST_LENGTH = 8;

export default function Home({ allData }: { allData: Array<PostType> }) {
    return (
        <Container>
            <Banner />
            <Post title={'Latest Posts'} length={POST_LENGTH} data={allData} />
            <PageLink />
        </Container>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allData = getAllPostData().slice(0, POST_LENGTH);
    return {
        props: {
            allData,
        },
    };
};
