import { GetStaticPaths, GetStaticProps } from 'next';
import PageLink from '../../../components/PagiNation';
import Container from '../../../components/Container';
import Post from '../../../components/Post';
import { PostType, PostPageInter } from '../../../types/type';
import { getAllPostData } from '../../../util/post';

const POST_LENGTH = 6;

export default function Posts({
    posts,
    page,
    pageState,
    allPost,
}: {
    posts: Array<PostType>;
    page: number;
    pageState: PostPageInter;
    allPost: number;
}) {
    return (
        <Container>
            <Post title={'Posts'} length={allPost} data={posts} />
            <PageLink page={page} pageState={pageState} />
        </Container>
    );
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
    const page = parseInt(id);
    const allData = getAllPostData();

    const startPost = (page - 1) * POST_LENGTH;
    const endPost = page * POST_LENGTH;

    const posts = allData.slice(startPost, endPost);

    const pageState = { Prev: false, Next: false };
    const allPost = allData.length;

    if (startPost !== 0) pageState.Prev = true;
    if (endPost < allData.length) pageState.Next = true;

    return {
        props: {
            posts,
            pageState,
            page,
            allPost,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allData = getAllPostData();
    const size = Math.ceil(allData.length / POST_LENGTH);
    const paths = Array.from({ length: size }, (_, i) => i).map((num) => ({
        params: { id: `${num + 1}` },
    }));
    return {
        paths,
        fallback: false,
    };
};
