import Container from '../components/Container'
import ProjectContent from '../components/ProjectContent'
import Title from '../components/Title'
import { NextSeo } from 'next-seo'
import metadata from '../data/metadata'

export default function Projects() {
    return (
        <Container>
            <NextSeo
                title="projects"
                description="완성한 프로젝트들을 소개합니다."
                canonical={`${metadata.cononical}/projects`}
                openGraph={{ url: `${metadata.openGraph.url}/projects` }}
            />
            <Title name={'Projects'} />
            <ProjectContent />
        </Container>
    )
}
