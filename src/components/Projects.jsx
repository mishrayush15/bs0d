import { projectsList } from '../data/ProjectsList';

const Projects = () => {
    return (
        <div className='sm:w-full flex flex-col items-center sm:pt-32 pt-10 sm:mx-[10px] mx-6'>
            <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>

            <div className="projects-page grid sm:grid-cols-3 grid-cols-1 sm:gap-20 gap-10">
                {projectsList.map((project, index) => {
                    return (
                        <div key={index} className="relative flex flex-col items-center">
                            
                            {project.working && (
                                <div className="absolute top-[-20px] left-0 flex items-center space-x-2">
                                    <svg className="w-4 h-4 text-green-500 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                        <circle cx="10" cy="10" r="8" />
                                    </svg>
                                    <span className="text-xs text-green-500">currently working</span>
                                </div>
                            )}
                            <div className="bg-white p-6 sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] hover:shadow-xl transition-transform duration-300 transform hover:scale-105 flex flex-col items-center cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition duration-300 ease-in-out transform sm:grayscale hover:grayscale-0"
                                />
                                <h3 className="text-xl text-black font-semibold mb-4 text-center">{project.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Projects;
