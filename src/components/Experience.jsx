import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <div id="experience" className="my-20 ml-80 mt-72 mb-96">
            <motion.h1
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">Work Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </motion.div>
                        <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{experience.role} - {" "}
                                <span className="text-sm text-purple-200">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            {experience.technologies.map((technology, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-xs text-purple-400">
                                    {technology}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience
