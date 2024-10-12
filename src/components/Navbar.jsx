import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='flex bg-[#111111] justify-between items-center sm:px-[140px] p-2 py-4 relative '>
            <div className='main-logo '>
                <h1 onClick={() => scrollToSection('top')} className='text-white text-4xl font-medium cursor-pointer'>bs<span className='text-blue-400'>0</span>d</h1>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
                <div className='projects' onClick={() => scrollToSection('projects')}>
                    <h1 className='text-white text-xl font-semibold cursor-pointer hover:bg-gray-700 hover:bg-opacity-20 transition-all duration-300 p-2'>
                        Projects
                    </h1>
                </div>
                <div onClick={() => scrollToSection('skills')}>
                    <h1 className='text-white text-xl font-semibold cursor-pointer hover:bg-gray-700 hover:bg-opacity-20 transition-all duration-300 p-2'>
                        Skills
                    </h1>
                </div>
                <div>
                    <a href="https://buymeacoffee.com/mishrayushh" target='_blank'>
                        <img src="images/icons/bmcbtn.svg" alt="by-me-coffee" className='w-[130px] cursor-pointer' />
                    </a>
                </div>
                <div>
                    <img src="images/icons/sunlight.svg" alt="light-mode" className='w-[25px] cursor-pointer' />
                </div>
            </div>
            {isMenuOpen ? null : <div className='md:hidden'>
                <img
                    src="images/icons/menulight.svg"
                    alt="menu"
                    className='w-[30px] cursor-pointer'
                    onClick={toggleMenu}
                />
            </div>}
            {isMenuOpen && (
                <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-70 z-50'>
                    <div className='p-8 flex flex-col items-center space-y-8 -translate-y-12'>
                        <div className='projects text-center' onClick={() => scrollToSection('projects')}>
                            <h1 className='text-white text-xl font-semibold cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 rounded-md p-2'>
                                Projects
                            </h1>
                        </div>
                        <div className='text-center' onClick={() => scrollToSection('skills')}>
                            <h1 className='text-white text-xl font-semibold cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-300 rounded-md p-2'>
                                Skills
                            </h1>
                        </div>
                        <div className='text-center'>
                            <a href="https://buymeacoffee.com/mishrayushh" target='_blank'>
                                <img src="images/icons/bmcbtn.svg" alt="by-me-coffee" className='w-[130px] cursor-pointer' />
                            </a>
                        </div>
                        <div className='text-center'>
                            <img src="images/icons/sunlight.svg" alt="light-mode" className='w-[25px] cursor-pointer' />
                        </div>
                        <div className='text-center'>
                            <img
                                src="images/icons/closelight.svg"
                                alt="close-menu"
                                className='w-[25px] cursor-pointer'
                                onClick={toggleMenu}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
