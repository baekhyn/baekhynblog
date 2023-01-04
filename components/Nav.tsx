import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavWrapper, LinkItem, ActiveLinkItem, NavBlock, NavBox } from './Nav.style';
import navdata from '../data/navdata';

export default function Nav() {
    const navPath = useRouter().pathname;
    const navString = navPath.split('/');

    return (
        <NavWrapper>
            <NavBlock />
            <NavBox>
                {navdata.map((item) => (
                    <Link href={item.href} passHref legacyBehavior key={item.href}>
                        {`/${navString[1]}`.includes(item.title.toLocaleLowerCase()) ? (
                            <ActiveLinkItem>{item.title}</ActiveLinkItem>
                        ) : (
                            <LinkItem>{item.title}</LinkItem>
                        )}
                    </Link>
                ))}
            </NavBox>
        </NavWrapper>
    );
}
