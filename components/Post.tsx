import { PostStyle } from './Post.style'
import Link from 'next/link'
import Date from './Date'
import { PostType } from '../types/type'

export const Post = ({ title, subtitle, date, category, slug }: PostType) => {
    return (
        <PostStyle>
            <li>
                <Link href={`/posts/${slug}`}>
                    <a>
                        <h1>{title}</h1>
                        <h2>{subtitle}</h2>
                        <span>{category}</span>
                        <div>
                            <Date dateString={date} />
                        </div>
                    </a>
                </Link>
            </li>
        </PostStyle>
    )
}
