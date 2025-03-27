import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div id="projects" className="my-20 ml-80 mt-72 mb-96">
            <motion.h1
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl">
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{project.year}</p>

                            <img
                                src={project.image}
                                width={150}
                                height={150}
                                alt="project.title"
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        
                        <motion.div
                            initial={{ x: 200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            <p className="mb-4 text-neutral-400">Link github: <a href={project.github} target="_blank" className="text-purple-400">{project.github}</a></p>
                            {project.technologies.map((tech, index) => (
                                <span key={index}
                                    className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-xs text-purple-400">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects
