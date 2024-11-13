import { AiOutlineClose } from 'react-icons/ai';
import { CgNametag } from 'react-icons/cg';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from "react";

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(true);
    }

    function closeMenu() {
        setToggle(false);
    }

    return (
        <>
            <nav className="flex items-center justify-between p-5 lg:p-10 bg-gray-900 text-gray-100 shadow-md">
                {/* Logo */}
                <a href="#" className="text-2xl lg:text-3xl font-mono tracking-wider flex items-center text-teal-400 hover:text-teal-300 transition-all">
                    <CgNametag className="mr-2" /> ITSOLUTION
                </a>
                
                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-6">
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                        <a 
                            href={`#${item.toLowerCase()}`} 
                            key={item} 
                            className="text-lg text-gray-300 hover:text-teal-400 px-4 py-2 rounded-full transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>
                
                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    {toggle ? (
                        <AiOutlineClose onClick={closeMenu} size={30} className="text-teal-400 cursor-pointer transition-transform duration-300" />
                    ) : (
                        <HiMenuAlt1 onClick={openMenu} size={30} className="text-teal-400 cursor-pointer transition-transform duration-300" />
                    )}
                </div>
            </nav>
            
            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-90 transform ${toggle ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out`}>
                {toggle && (
                    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                        {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                            <a 
                                href={`#${item.toLowerCase()}`} 
                                key={item} 
                                onClick={closeMenu}
                                className="text-3xl text-gray-300 hover:text-teal-400 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Nav;
