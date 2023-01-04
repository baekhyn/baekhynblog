import Link from 'next/link';
import { PostPageInter } from '../types/type';
import { PageNavContainer, PageButton, SingleButton, PageState } from './PagiNation.style';

export default function PageLink(_props) {
    const { page, category, pageState } = _props as {
        page: number;
        category: string;
        pageState?: PostPageInter;
    };

    return (
        <PageNavContainer>
            {!pageState && (
                <Link href={'/posts/page/1'} passHref legacyBehavior>
                    <SingleButton>{'다른 게시글 보러가기' + ' →'}</SingleButton>
                </Link>
            )}
            {pageState && (
                <PageButton>
                    <Link
                        href={`/${category ? `category/${category}` : 'posts'}/page/${page - 1}`}
                        passHref
                        legacyBehavior
                    >
                        <PageState active={!pageState.Prev}>Prev</PageState>
                    </Link>
                    <Link
                        href={`/${category ? `category/${category}` : 'posts'}/page/${page + 1}`}
                        passHref
                        legacyBehavior
                    >
                        <PageState active={!pageState.Next}>Next</PageState>
                    </Link>
                </PageButton>
            )}
        </PageNavContainer>
    );
}
