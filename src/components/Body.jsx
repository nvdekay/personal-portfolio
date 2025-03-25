import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/avatars/deekayProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            delay,
        }
    }

})

const Body = () => {
    return (
        <div className="my-20 ml-80 mt-72 mb-96 pb-6 lg:mb-40">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl font-thin tracking-tight 
                        lg:text-3xl pb-6">
                            Hello, I am
                        </motion.h1>
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 to-purple-500
                        via-slate-500 bg-clip-text lg:text-5xl tracking-tight text-transparent pb-6 font-bold">
                            Nguyen Vu Dang Khanh
                        </motion.h1>
                        <motion.span
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 to-purple-500
                        via-slate-500 bg-clip-text lg:text-3xl tracking-tight text-transparent pb-6">
                            I'm a <span>Software Engineer</span>
                        </motion.span>
                        <motion.p
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <img className="w-100" src={profilePic} alt="deekay" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;