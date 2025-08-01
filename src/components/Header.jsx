import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header id="home" className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-lg border-b border-white/10 transition-all duration-300">
            < div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20" >
                {/* Logo/Name */}
                < motion.div
                    initial={{ opacity: 0, x: -100 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="flex items-center"
                >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
                        A
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        Afiya Zannuba Jaleel
                    </span>
                </motion.div >

                {/* Desktop Navigation */}
                < nav className="lg:flex hidden space-x-8" >
                    {
                        ["Home", "About", "Projects"].map((item, index) => (
                            <motion.a
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    delay: 0.7 + index * 0.2,
                                }}
                                className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))
                    }
                </nav >

                {/* Social icons & Resume Button - Desktop */}
                < div className="md:flex hidden items-center space-x-4" >
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        href="https://github.com/Afiyazannuba"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        href="https://www.linkedin.com/in/afiya-zannuba-jaleel/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                        href="mailto:afiya.zannubaa@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiMail className="w-5 h-5" />
                    </motion.a>

                    {/* Resume Download Button */}
                    <motion.a
                        href="/resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.6,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
                        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
                    >
                        Resume
                    </motion.a>
                </div >

                {/* Mobile Menu Button */}
                < div className="md:hidden flex items-center" >
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        onClick={toggleMenu}
                        className="text-gray-300"
                    >
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </motion.button>
                </div >
            </div >

            {/* Mobile Menu */}
            < motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.5 }}
                className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
            >
                <nav className="flex flex-col space-y-3">
                    {["Home", "About", "Projects"].map((item) => (
                        <a
                            onClick={toggleMenu}
                            className="text-gray-300 font-medium py-2"
                            key={item}
                            href={`#${item.toLowerCase()}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-5">
                        <a href="https://github.com/Afiyazannuba" target="_blank" rel="noopener noreferrer">
                            <FiGithub className="h-5 w-5 text-gray-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/afiya-zannuba-jaleel/" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin className="h-5 w-5 text-gray-300" />
                        </a>
                    </div>

                    {/* Resume Button - Mobile */}
                    <a
                        href="/resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleMenu}
                        className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white text-center"
                    >
                        Download Resume
                    </a>
                </div>
            </motion.div >
        </header >
    );
};

export default Header;
