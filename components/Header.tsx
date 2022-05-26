import { BlogLogo, HeaderBar } from './Header.style'
import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
    return (
        <HeaderBar>
            <Link href="/" passHref>
                <BlogLogo>
                    Hyn's
                    <br />
                    Blog
                </BlogLogo>
            </Link>
            <Nav />
        </HeaderBar>
    )
}
