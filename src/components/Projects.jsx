import { } from 'react';
import { projectsList } from '../data/ProjectsList';

const Projects = () => {
    return (
        <div className='sm:w-full flex justify-center sm:pt-32 pt-10 sm:mx-[10px] mx-6'>
            <div className="projects-page grid sm:grid-cols-3 grid-cols-1 sm:gap-20 gap-10">
                {projectsList.map((project, index) => {
                    return (
                        <div key={index} className="bg-gray-300 p-6 sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] hover:shadow-xl">
                            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                            <p className="text-gray-700">{project.image}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;
