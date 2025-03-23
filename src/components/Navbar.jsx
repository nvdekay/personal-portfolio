import logo from "../assets/images/avatars/deekayLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";




const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6 mb-0">
            <div className="flex flex-shrink-0 items-center">
                <a href="/">
                    <img className="mx-2 w-80" src={logo} alt="logo" />
                </a>
            </div>

            <div className="flex items-center gap-4 text-2xl">
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
