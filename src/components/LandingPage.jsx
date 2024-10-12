import { } from 'react'

const LandingPage = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='flex sm:h-screen sm:w-full justify-center sm:pt-32 pt-10 sm:mx-[140px] mx-6'>
            <div className="landing page sm:space-y-10 space-y-3">
                <div>
                    <h1 className="sm:text-7xl sm:font-bold font-bold text-2xl">It&apos;s Ayush Mishra,</h1>
                </div>
                <div>
                    <p className='sm:text-2xl'>
                        I create stunning, impactful websites that solve real-world problems. As an indie hacker, I enjoy tackling complex codebases and diving deep into the tech sea (ps: deep diver). I have a passion about helping others with my software and through my open-source contributions (check out my <a className="text-blue-300" href="https://github.com/mishrayush15" target="blank">GitHub</a>!). Have a project in mind? You&apos;ve come to the right guy! Feel free to contact me via social media or by filling out the <a href='https://forms.gle/N6h5fkNSAg3QP35r5' target='blank' className="text-blue-300">form</a>.
                        Let&apos;s build together!
                    </p>
                </div>

                <div className='icons flex flex-row space-x-2 sm:justify-between'>
                    <h3 className='hidden md:block border-2 p-2 bg-transparent text-white hover:bg-white hover:text-black w-[170px] text-center transition duration-300 ease-in-out cursor-pointer'>
                        Terminal
                    </h3>



                    <img onClick={() => scrollToSection('projects')} src="images/icons/arrowdownlight.svg" alt="down-arrow" className='hidden md:block w-10 h-10 animate-bounce cursor-pointer ' />


                    <div className='flex space-x-4 ml-auto'>
                        <a href="https://github.com/mishrayush15" target='blank'><img src="images/icons/githublight.svg" alt="github" className='w-8 h-8 cursor-pointer' /></a>
                        <a href="https://www.linkedin.com/in/mishrayushh/" target='blank'><img src="images/icons/linkedinlight.svg" alt="linkedin" className='w-8 h-8 cursor-pointer' /></a>
                        <a href="mailto:ayushmishra780193@gmail.com" target='blank'><img src="images/icons/maillight.svg" alt="mail" className='w-8 h-8 cursor-pointer' /></a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LandingPage
