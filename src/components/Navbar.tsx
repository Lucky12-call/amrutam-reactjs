import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="h-20 bg-[#FFF7E2] w-full fixed top-0 left-0 z-50 shadow-md">
            <div className="w-full px-6 py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="#" className="text-xl md:text-2xl font-bold tracking-widest uppercase text-[#3A643B]">amrutam</a>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-[#3A643B] text-lg font-medium">
                    <li>
                        <a href="#" className="hover:text-[#2C4E30]">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-[#2C4E30]">About</a>
                    </li>
                    <li className="relative group">
                        <button className="hover:text-[#2C4E30]">Services</button>
                        <ul className="w-full md:w-32 absolute left-0 mt-2 hidden group-hover:block bg-[#FFF7E2] shadow-md rounded-lg">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Service 1</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Service 2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-300">Service 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="hover:text-[#2C4E30]">Contact</a>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="block md:hidden text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FaBars color="#3A643B" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="bg-gray-700 w-full md:hidden">
                    <ul className="flex flex-col gap-2 py-2">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-white">About</a>
                        </li>
                        <li className="relative">
                            <button
                                className="block px-4 py-2 w-full text-left hover:bg-gray-600 text-white"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Services
                            </button>
                            {isDropdownOpen && (
                                <ul className="bg-gray-600 px-2">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-500 text-white">Service 1</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-500 text-white">Service 2</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-500 text-white">Service 3</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600 text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
