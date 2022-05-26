import { TitleBox } from './MdxTitle.style'
import Date from './Date'
import { PostType } from '../types/type'

export default function MdxTitle({ title, subtitle, date, category }: PostType) {
    return (
        <TitleBox>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <small>{category}</small>
            <div>
                <Date dateString={date} />
            </div>
        </TitleBox>
    )
}
