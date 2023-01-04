import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostData, getCategoryData } from '../../../../util/post';
import Container from '../../../../components/Container';
import Post from '../../../../components/Post';
import { PostType, PostPageInter } from '../../../../types/type';
import { NextSeo } from 'next-seo';
import metadata from '../../../../data/metadata';
import PageLink from '../../../../components/PagiNation';

const POST_LENGTH = 6;

export default function Category({
    posts,
    page,
    pageState,
    currentCategory: category,
    allPost,
}: {
    currentCategory: string;
    posts: Array<PostType>;
    page: number;
    pageState: PostPageInter;
    allPost: number;
}) {
    return (
        <Container>
            <NextSeo
                title={category}
                description={`${category}와 관련된 게시물`}
                canonical={`${metadata.cononical}/category/${category}`}
                openGraph={{ url: `${metadata.openGraph.url}/category/${category}` }}
            />
            <Post title={category} length={allPost} data={posts} />
            <PageLink category={category} page={page} pageState={pageState} />
        </Container>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { category, id } = params as { category: string; id: string };
    const currentCategory = category;
    const page = parseInt(id);

    const allData = getAllPostData().filter((el) => {
        return el.category.includes(category);
    });

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
            currentCategory,
            pageState,
            page,
            allPost,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allData = getAllPostData();
    const categoryData = getCategoryData(allData);

    const paths = categoryData
        .map((tag) => {
            const postSize = allData.filter(({ category }) => category.includes(tag)).length;
            const pageSize = Math.ceil(postSize / POST_LENGTH);

            return Array.from({ length: pageSize }, (_, i) => i).map((i) => {
                return { params: { category: tag, id: `${i + 1}` } };
            });
        })
        .flat();
    //카테고리에 해당하는 포스트 수

    return {
        paths,
        fallback: false,
    };
};
