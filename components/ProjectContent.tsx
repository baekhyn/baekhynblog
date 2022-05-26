import { ProjectBox, ProjectContainer } from './ProjectContent.style'
import Image from 'next/image'
import projectdata from '../data/projectdata'

export default function ProjectContent() {
    return (
        <ProjectContainer>
            {projectdata.map((project) => (
                <ProjectBox>
                    <a href={project.href} key={project.title}>
                        <Image src={project.src} alt={project.alt} width={400} height={300} />
                        <h1>{project.title}</h1>
                    </a>
                </ProjectBox>
            ))}
        </ProjectContainer>
    )
}
