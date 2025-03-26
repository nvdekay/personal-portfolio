import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/avatars/deekayProfile.png";
import { motion } from "framer-motion";
import styled from 'styled-components';

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

const StyledContact = styled.div`

.button {
    line-height: 1;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.35em;
    padding: .75em 1em;
    color: #fff;
    border: 0px solid transparent;
    font-weight: 600;
    border-radius: 2em;
    font-size: 1rem;
    box-shadow: 0 0.7em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
    background: linear-gradient(
      90deg,
      rgba(77, 54, 208, 1) 0%,
      rgba(132, 116, 254, 1) 100%
    );
}

  button:hover {
    filter: brightness(110%);
  }

  button:hover .front {
    transition: transform
        250ms
        cubic-bezier(.3, .7, .4, 1.5);
  }

  button:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }`;

const StyledDownload = styled.div`
  .button {
    line-height: 1;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.35em;
    padding: .75em 1em;
    padding-right: 1.25em;
    color: #fff;
    border: 0px solid transparent;
    font-weight: 600;
    border-radius: 2em;
    font-size: 1rem;
    box-shadow: 0 0.7em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
    background: linear-gradient(
      90deg,
      rgba(77, 54, 208, 1) 0%,
      rgba(132, 116, 254, 1) 100%
    );
  }

  .button__icon {
    width: 1em;
    height: 1em;
  }

  .button:hover {
    filter: brightness(110%);
  }

  .button:active {
    transform: scale(0.98);
    box-shadow: 0 0.5em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
  }
    .button:active .button__text {
      transform: translateY(-2px);
      transition: transform 34ms;
  }`;


const Body = () => {
    return (
        <div className="ml-80 my-52 mb-96 pb-6 lg:mb-40">
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
                            variants={container(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 to-purple-500
                        via-slate-500 bg-clip-text lg:text-5xl tracking-tight text-transparent pb-6 font-bold">
                            Nguyen Vu Dang Khanh
                        </motion.h1>
                        <motion.span
                            variants={container(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 to-purple-500
                        via-slate-500 bg-clip-text lg:text-3xl tracking-tight text-transparent pb-6">
                            I'm a <span>Software Engineer</span>
                        </motion.span>
                        <motion.p
                            variants={container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl font-light tracking-tighter pb-6">
                            {HERO_CONTENT}
                        </motion.p>

                        <div className="flex flex-wrap">
                            <StyledContact>
                                <motion.button
                                    initial={{ y: 150, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 1.2 }}
                                    className="button">
                                    <span className="front text"> Contact me </span>
                                </motion.button>
                            </StyledContact>
                            <StyledDownload className="ml-6">
                                <motion.button
                                initial={{ y: 150, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1.8 }}
                                className="button">
                                    <svg strokeLinejoin="round" strokeLinecap="round" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" height={40} width={40} className="button__icon" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z" stroke="none" />
                                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                        <path d="M7 11l5 5l5 -5" />
                                        <path d="M12 4l0 12" />
                                    </svg>
                                    <span className="button__text">Resume</span>
                                </motion.button>
                            </StyledDownload>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="w-100"
                            src={profilePic}
                            alt="deekay" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;