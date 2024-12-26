import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="h-20 bg-[#FFF7E2] w-full absolute top-0 left-0 z-50 leading-5 md:hidden">
            <div className="w-full px-4 py-5 flex justify-center items-center">

                {/* Mobile Menu Toggle */}
                <button
                    className="block md:hidden text-2xl absolute left-5"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FaBars color="#3A643B" />
                </button>

                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="#" className="text-xl font-semibold tracking-widest uppercase text-[#3A643B]">amrutam</a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="bg-gray-700 w-screen md:hidden">
                    <ul className="flex flex-col gap-2 py-2">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                                About
                            </a>
                        </li>
                        <li className="relative">
                            <button
                                className="block px-4 py-2 w-full text-left hover:bg-gray-600"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Services
                            </button>
                            {isDropdownOpen && (
                                <ul className="bg-gray-600 px-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-500"
                                        >
                                            Service 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-500"
                                        >
                                            Service 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-500"
                                        >
                                            Service 3
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
