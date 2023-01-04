import { ProjectBox, ProjectContainer, NoProject } from './ProjectContent.style';
import Image from 'next/image';
import projectdata from '../data/projectdata';

export default function ProjectContent() {
    if (projectdata.length === 0) {
        return <NoProject>No Project Yet.</NoProject>;
    }

    return (
        <ProjectContainer>
            {projectdata.map((project) => (
                <ProjectBox key={project.title}>
                    <p>{project.title}</p>
                    <a href={project.href} key={project.title}>
                        <Image
                            src={project.src}
                            alt={project.alt}
                            width={300}
                            height={300}
                            sizes="
                        100vw"
                            className="image"
                        />
                    </a>
                </ProjectBox>
            ))}
        </ProjectContainer>
    );
}
