import { } from 'react';
import { skillsList } from '../data/SkillsList';

const Skills = () => {
    return (
        <div className='sm:w-full flex flex-col items-center pt-10 sm:mx-[10px] mx-6 sm:mb-1 mb-20'>
            <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
            <div className="projects-page grid sm:grid-cols-4 grid-cols-2 sm:gap-20 gap-10">
                {skillsList.map((skill, index) => {
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col items-center transition duration-300 ease-in-out transform sm:grayscale hover:grayscale-0"
                        >
                            <img 
                                src={skill.image}
                                alt={`${skill.title} icon`}
                                className="object-contain sm:w-32 sm:h-32 w-16 h-16" 
                            />
                            <h3 className="text-xl text-white font-semibold mt-2">{skill.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Skills;
