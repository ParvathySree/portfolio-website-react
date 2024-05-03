import * as React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css'

const Projects = () => {
    const projectArr = [1, 34, 546, 3443];
    return (
        <>
            <div className='project-con'>
                {projectArr.map((item, index) => (
                    <ProjectCard key={item} data={item} />
                ))}
            </div>
        </>
    );
};

export default Projects;
