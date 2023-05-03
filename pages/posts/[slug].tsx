import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostData, getSinglePost } from '../../util/post';
import Container from '../../components/Container';
import React from 'react';
import { MDXType } from '../../types/type';
import { NextSeo } from 'next-seo';
import metadata from '../../data/metadata';
import MdxLayout from '../../components/MdxLayout';
import MdxPost from '../../components/Components';

export default function Post({ postData }: { postData: MDXType }) {
    const { frontmatter } = postData;

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
            <MdxLayout postData={postData}>
                <MdxPost postData={postData} />
            </MdxLayout>
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
