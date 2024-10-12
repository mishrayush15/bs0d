import{ useState } from 'react';

const Navbar = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex justify-between items-center sm:px-[140px] p-2 py-4 relative '>

            <div className='main-logo '>
                <h1 className='text-white text-4xl font-medium cursor-pointer'>bs0d</h1>
            </div>

            
            <div className='hidden md:flex items-center space-x-8'>
                <div className='projects'>
                    <h1 className='text-white text-xl font-semibold cursor-pointer'>Projects</h1>
                </div>
                <div>
                    <h1 className='text-white text-xl font-semibold cursor-pointer'>Skills</h1>
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

            
            {isMenuOpen?null:<div className='md:hidden'>
                <img
                    src="images/icons/menulight.svg"
                    alt="menu"
                    className='w-[30px] cursor-pointer'
                    onClick={toggleMenu} 
                />
            </div>}
            

            
            {isMenuOpen && (
                <div className='fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50'>
                <div className='p-8 flex flex-col items-center space-y-8 -translate-y-12'> 
                    <div className='projects text-center'> 
                        <h1 className='text-white text-xl font-semibold cursor-pointer'>Projects</h1>
                    </div>
                    <div className='text-center'> 
                        <h1 className='text-white text-xl font-semibold cursor-pointer'>Skills</h1>
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
