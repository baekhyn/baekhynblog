import { CategoryStyle, CategoryText } from './CategoryBar.style'
import Link from 'next/link'

export default function CategoryBar({ name }: { name: Array<string> }) {
    return (
        <CategoryStyle>
            {(
                <CategoryText>
                    <Link href={`/category/${name}`}>
                        <a>
                            <h1>setArr</h1>
                        </a>
                    </Link>
                </CategoryText>
            ) &&
                name.map((name) => (
                    <CategoryText>
                        <Link href={`/category/${name}`}>
                            <a>
                                <h1>{name}</h1>
                            </a>
                        </Link>
                    </CategoryText>
                ))}
        </CategoryStyle>
    )
}
