import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavWrapper, LinkItem, ActiveLinkItem, NavBlock, NavBox } from './Nav.style';
import navdata from '../data/navdata';

export default function Nav() {
    const navPath = useRouter().pathname;

    return (
        <NavWrapper>
            <NavBlock />
            <NavBox>
                {navdata.map(({ href, title }) => (
                    <Link href={href} passHref legacyBehavior key={href}>
                        {navPath.includes(title.toLocaleLowerCase()) ? (
                            <ActiveLinkItem>{title}</ActiveLinkItem>
                        ) : (
                            <LinkItem>{title}</LinkItem>
                        )}
                    </Link>
                ))}
            </NavBox>
        </NavWrapper>
    );
}
