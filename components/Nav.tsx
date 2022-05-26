import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveNavItem, NavBox } from './Nav.style'
import navdata from '../data/navdata'

export default function Nav() {
    const router = useRouter()
    const navPath = router.pathname
    const navString = navPath.split('/')

    return (
        <NavBox>
            {navdata.map((navItem) => (
                <span key={navItem.href}>
                    <Link href={navItem.href}>
                        {`/${navString[1]}` === navItem.href ? (
                            <ActiveNavItem>{navItem.title}</ActiveNavItem>
                        ) : (
                            <a>{navItem.title}</a>
                        )}
                    </Link>
                </span>
            ))}
        </NavBox>
    )
}
