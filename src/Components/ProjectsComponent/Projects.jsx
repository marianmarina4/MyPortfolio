import './ProjectsStyle.css';
import { ProjectCard } from './ProjectCard/ProjectCard';

export function Projects(props) {

    const {
        projectCard
    } = props;

    return (
        <div className='project-main'>
            <h2 id='Projects' className='project-title'>
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                </svg>
                Proyectos
            </h2>
            <div className='project-section'>
                {projectCard.map((projectData, index) => (
                    <ProjectCard
                        key={index}
                        projectName={projectData.projectName}
                        description={projectData.description}
                        projectImage={projectData.projectImage}
                        altImage={projectData.altImage}
                    />
                )
                )}
            </div>
        </div>
    );
}
