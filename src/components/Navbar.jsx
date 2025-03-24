import logo from "../assets/images/avatars/deekayLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";




const Navbar = () => {
    return (
        <nav className="fixed left-0 top-0 h-full w-[250px] shadow-md border-r border-purple-300 flex flex-col justify-between py-6 z-50">
            {/* Logo */}
            <div className="flex flex-col items-center">
                <a href="/">
                    <img className="w-48 ml-10" src={logo} alt="logo" />
                </a>

            </div>
            <div className="flex flex-col items-center">
                {/* Navigation Links */}
                <ul className="flex flex-col gap-6 text-lg font-semibold">
                    <li>
                        <a href="" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800">
                            <FaHome className="text-xl" />
                            <span className="uppercase tracking-widest">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800">
                            <FaUser className="text-xl" />
                            <span className="uppercase tracking-widest">About</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800">
                            <FaBriefcase className="text-xl" />
                            <span className="uppercase tracking-widest">My Works</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-800">
                            <FaEnvelope className="text-xl" />
                            <span className="uppercase tracking-widest">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 text-2xl pb-4">
                <a href="https://www.linkedin.com/in/nvdeekay07" target="_blank" rel="noreferrer"
                    className="hover:text-white hover:bg-blue-300 p-2 rounded-lg transition-colors duration-200">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/nvdekay" target="_blank" rel="noreferrer"
                    className="hover:text-white hover:bg-blue-300 p-2 rounded-lg transition-colors duration-200">
                    <FaGithub />
                </a>
                <a href="https://www.facebook.com/nvdeekay.07" target="_blank" rel="noreferrer"
                    className="hover:text-white hover:bg-blue-300 p-2 rounded-lg transition-colors duration-200">
                    <FaFacebook />
                </a>
                <a href="mailto:khanhnvd.work@gmail.com" target="_blank" rel="noreferrer"
                    className="hover:text-white hover:bg-blue-300 p-2 rounded-lg transition-colors duration-200">
                    <CgMail />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

