import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostData, getSinglePost } from '../../util/post';
import Container from '../../components/Container';
import MdxContainer from '../../components/MdxContainer';
import MdxTitle from '../../components/MdxTitle';
import { MDXType } from '../../types/type';
import { NextSeo } from 'next-seo';
import metadata from '../../data/metadata';

export default function Post({ postData }: { postData: MDXType }) {
    const { code, frontmatter } = postData;

    return (
        <Container>
            <NextSeo
                title={frontmatter.title}
                description={frontmatter.subtitle}
                canonical={`${metadata.cononical}/posts/${frontmatter.slug}`}
                openGraph={{
                    url: `${metadata.openGraph.url}/posts/${frontmatter.slug}`,
                    type: 'article',
                    article: {
                        publishedTime: `${frontmatter.date}`,
                        tags: [`${frontmatter.category}`],
                    },
                }}
            />
            <MdxTitle
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                date={frontmatter.date}
                category={frontmatter.category}
            />
            <MdxContainer code={code} />
        </Container>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getSinglePost(params?.slug as string);

    return {
        props: { postData },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allData = getAllPostData();
    const paths = allData.map(({ slug }) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};
