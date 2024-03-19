import './ProjectCardStyle.css';

export function ProjectCard({ projectName, description, projectImage, altImage }) {
    return (
        <section className='projectCard-main'>
            <div className='projectCard-boxImage'>
                <img alt={altImage} src={projectImage} />
            </div>
            <div className='projectCard-header'>
                <h2 className='projectCard-title'>{projectName}</h2>
                <p className='projectCard-description'>
                    {description}
                </p>
            </div>
        </section>
    );
}
