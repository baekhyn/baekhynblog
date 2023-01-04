import { PostContainer, NoPost, HeadingWrapper, LinkWrapper } from './Post.style';
import Link from 'next/link';
import Date from './Date';
import { PostType } from '../types/type';

export const Post = ({
    data,
    title,
    length,
}: {
    data: Array<PostType>;
    title: string;
    length: number;
}) => {
    if (data.length === 0) {
        return <NoPost>No Posts Yet.</NoPost>;
    }

    return (
        <PostContainer>
            <HeadingWrapper>
                {title}
                <span>{length}</span>
            </HeadingWrapper>
            {data.map((data) => (
                <article key={data.subtitle}>
                    <h2>
                        <Link href={`/posts/${data.slug}`} passHref legacyBehavior>
                            <LinkWrapper>{data.title}</LinkWrapper>
                        </Link>
                    </h2>
                    <p>{data.subtitle}</p>
                    {data.category.map((tag) => (
                        <span key={tag}>
                            <Link href={`/category/${tag}/page/1`}>{tag}</Link>
                        </span>
                    ))}
                    <Date dateString={data.date} />
                </article>
            ))}
        </PostContainer>
    );
};

export default Post;
