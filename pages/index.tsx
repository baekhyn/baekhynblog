import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllPostData } from '../util/post';
import Container from '../components/Container';
import Post from '../components/Post';
import PageLink from '../components/PagiNation';
import { POST_LENGTH } from '../constant/post.constant';
import { PostType } from '../types/type';

export default function Home({ postData }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container>
            <Post title="Latest Posts" length={POST_LENGTH} data={postData} />
            <PageLink />
        </Container>
    );
}

export const getStaticProps: GetStaticProps<{ postData: PostType[] }> = async () => {
    const postData = getAllPostData().slice(0, POST_LENGTH);

    return {
        props: {
            postData,
        },
    };
};
