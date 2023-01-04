import { CategoryContainer, CategoryItem } from './CategoryBar.style';
import Link from 'next/link';

export default function CategoryBar({ name }: { name: Array<string> }) {
    return (
        <CategoryContainer>
            {name.map((name) => (
                <li key={name}>
                    <Link href={`/category/${name}/page/1`} passHref legacyBehavior>
                        <CategoryItem>{name}</CategoryItem>
                    </Link>
                </li>
            ))}
        </CategoryContainer>
    );
}
