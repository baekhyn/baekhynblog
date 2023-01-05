import { FooterContainer } from './Footer.style';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <FooterContainer>
            <small>© {year}.baekhyn.All rights reserved.</small>
            <p>
                <a href="https://github.com/baekhyn/hynblog">Next.js Blog</a>
            </p>
        </FooterContainer>
    );
}
