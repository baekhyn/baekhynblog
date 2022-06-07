import { PostStyle, NoPost } from './Post.style'
import Link from 'next/link'
import Date from './Date'
import { PostType } from '../types/type'

export const Post = ({ data }: { data: Array<PostType> }) => {
    if (data.length === 0) {
        return <NoPost>No Posts Yet.</NoPost>
    }

    return (
        <PostStyle>
            {data.map((data) => (
                <li key={data.subtitle}>
                    <Link href={`/posts/${data.slug}`}>
                        <a>
                            <h1>{data.title}</h1>
                            <h2>{data.subtitle}</h2>
                            <span>{data.category}</span>
                            <div>
                                <Date dateString={data.date} />
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </PostStyle>
    )
}
