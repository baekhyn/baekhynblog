import Container from '../components/Container';
import MainProfile from '../components/MainProfile';
import { NextSeo } from 'next-seo';
import metadata from '../data/metadata';
import Title from '../components/Title';

export default function About() {
    return (
        <Container>
            <NextSeo
                title="about"
                description="자기소개를 합니다."
                canonical={`${metadata.cononical}/about`}
                openGraph={{ url: `${metadata.openGraph.url}/about` }}
            />
            <Title name={'About'} />
            <MainProfile />
        </Container>
    );
}
