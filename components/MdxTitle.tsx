import { PostTag, TitleBox } from './MdxTitle.style';
import Date from './Date';
import { PostType } from '../types/type';
import Link from 'next/link';

export default function MdxTitle({ title, subtitle, date, category }: PostType) {
    return (
        <TitleBox>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            {category.map((category) => (
                <Link key={category} href={`/category/${category}/page/1`} passHref legacyBehavior>
                    <PostTag>{category}</PostTag>
                </Link>
            ))}
            <Date dateString={date} />
        </TitleBox>
    );
}
