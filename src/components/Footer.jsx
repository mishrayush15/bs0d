const Footer = () => {
    return (
        <footer className="bg-white text-center py-4 relative flex justify-center items-center z-10 sm:px-4">
            <p className="text-black mr-2 text-sm sm:text-base">
                Made by and for Ayush Mishra
            </p>
            <p className='text-black text-sm sm:text-base mr-2'>
                v1.1
            </p>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="images/icons/githubdark.svg" className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer' alt="GitHub Icon" />
            </a>
        </footer>
    );
};

export default Footer;
