import logo from "../assets/images/avatars/deekayLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return <nav className="flex mb-20 items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-80" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaFacebook/>
            <FaInstagram/>
        </div>

    </nav>
};

export default Navbar;