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

const StyledWrapper = styled.div`
  button {
   position: relative;
   border: none;
   background: transparent;
   padding: 0;
   cursor: pointer;
   outline-offset: 4px;
   transition: filter 250ms;
   user-select: none;
   touch-action: manipulation;
  }

  .shadow {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border-radius: 12px;
   background: hsl(0deg 0% 0% / 0.25);
   will-change: transform;
   transform: translateY(2px);
   transition: transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  .edge {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border-radius: 12px;
   background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
  }

  .front {
   display: block;
   position: relative;
   padding: 12px 27px;
   border-radius: 12px;
   font-size: 1.1rem;
   color: white;
   background: hsl(345deg 100% 47%);
   will-change: transform;
   transform: translateY(-4px);
   transition: transform
      600ms
      cubic-bezier(.3, .7, .4, 1);
  }

  button:hover {
   filter: brightness(110%);
  }

  button:hover .front {
   transform: translateY(-6px);
   transition: transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }

  button:active .front {
   transform: translateY(-2px);
   transition: transform 34ms;
  }

  button:hover .shadow {
   transform: translateY(4px);
   transition: transform
      250ms
      cubic-bezier(.3, .7, .4, 1.5);
  }

  button:active .shadow {
   transform: translateY(1px);
   transition: transform 34ms;
  }

  button:focus:not(:focus-visible) {
   outline: none;
  }`;


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
                            className="my-2 max-w-xl font-light tracking-tighter pb-6">
                            {HERO_CONTENT}
                        </motion.p>

                        <StyledWrapper>
                            <button onclick="window.location.href='contact.jsx'">
                                <span className="shadow" />
                                <span className="edge" />
                                <span className="front text"> Contact me
                                </span>
                            </button>
                        </StyledWrapper>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }}
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