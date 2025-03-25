
import aboutImg from "../assets/images/avatars/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="my-20 ml-80 mt-72 mb-96">

            <motion.h1
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">
                About me
            </motion.h1>

            <div className="flex flex-wrap">

                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 lg:p-8"
                >
                    <div className="flex items-center justify-center">
                        <img src={aboutImg} alt="about" className="w-80" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;