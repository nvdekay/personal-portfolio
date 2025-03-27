import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Contact = () => {
    return (
        <div className="my-20 ml-80 mt-72 mb-96">
            <motion.h1
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">
                Contact
            </motion.h1>

            <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold text-white">Get in <span className="text-purple-500">touch</span></h2>
            </div>
        </div>)
};

export default Contact
