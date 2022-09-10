import Link from 'next/link';
import { useRouter } from 'next/router';
import { ActiveNavItem, NavBox } from './Nav.style';
import navdata from '../data/navdata';

function Nav() {
    const navPath = useRouter().pathname;

    return (
        <NavBox>
            {navdata.map((Item) => (
                <span key={Item.href}>
                    <Link href={Item.href}>
                        {navPath.includes(Item.href) ? (
                            <ActiveNavItem>{Item.title}</ActiveNavItem>
                        ) : (
                            <a>{Item.title}</a>
                        )}
                    </Link>
                </span>
            ))}
        </NavBox>
    );
}

export default Nav;
