import { HeaderContainer, LogoWrapper } from './Header.style';
import Link from 'next/link';

export default function Header() {
    return (
        <HeaderContainer>
            <Link href="/" passHref legacyBehavior>
                <LogoWrapper>baekhyn Blog</LogoWrapper>
            </Link>
        </HeaderContainer>
    );
}
