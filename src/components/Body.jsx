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
  button {
    position: relative;
    border: none;
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
  }

  .front {
    display: block;
    position: relative;
    padding: 12px 27px;
    border-radius: 12px;
    font-size: 1.1rem;
    color: white;
    background: rgb(91, 91, 240);
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

const StyledDownload = styled.div`
  .container {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    background-color: transparent;
    border: 2px solid rgb(91, 91, 240);
    display: flex;
    align-items: center;
    border-radius: 50px;
    width: 160px;
    cursor: pointer;
    transition: all 0.4s ease;
    padding: 5px;
    position: relative;
  }

  .label::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    width: 8px;
    height: 8px;
    transition: all 0.4s ease;
    border-radius: 100%;
    margin: auto;
    opacity: 0;
    visibility: hidden;
  }

  .label .input {
    display: none;
  }

  .label .title {
    font-size: 1.1rem;
    color: #fff;
    transition: all 0.4s ease;
    position: absolute;
    right: 12px;
    bottom: 14px;
    text-align: center;
  }

  .label .title:last-child {
    opacity: 0;
    visibility: hidden;
  }

  .label .circle {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: rgb(91, 91, 240);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    position: relative;
    box-shadow: 0 0 0 0 rgb(255, 255, 255);
    overflow: hidden;
  }

  .label .circle .icon {
    color: #fff;
    width: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle .square {
    aspect-ratio: 1;
    width: 15px;
    border-radius: 2px;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
  }

  .label .circle::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #3333a8;
    width: 100%;
    height: 0;
    transition: all 0.4s ease;
  }

  .label:has(.input:checked) {
    width: 57px;
    animation: installed 0.4s ease 3.5s forwards;
  }

  .label:has(.input:checked)::before {
    animation: rotate 3s ease-in-out 0.4s forwards;
  }

  .label .input:checked + .circle {
    animation:
      pulse 1s forwards,
      circleDelete 0.2s ease 3.5s forwards;
    rotate: 180deg;
  }

  .label .input:checked + .circle::before {
    animation: installing 3s ease-in-out forwards;
  }

  .label .input:checked + .circle .icon {
    opacity: 0;
    visibility: hidden;
  }

  .label .input:checked ~ .circle .square {
    opacity: 1;
    visibility: visible;
  }

  .label .input:checked ~ .title {
    opacity: 0;
    visibility: hidden;
  }

  .label .input:checked ~ .title:last-child {
    animation: showInstalledMessage 0.4s ease 3.5s forwards;
  }

  @keyframes pulse {
    0% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    70% {
      scale: 1;
      box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
    }
    100% {
      scale: 0.95;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }

  @keyframes installing {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-90deg) translate(27px) rotate(0);
      opacity: 1;
      visibility: visible;
    }
    99% {
      transform: rotate(270deg) translate(27px) rotate(270deg);
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes installed {
    100% {
      width: 150px;
      border-color: rgb(35, 174, 35);
    }
  }

  @keyframes circleDelete {
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes showInstalledMessage {
    100% {
      opacity: 1;
      visibility: visible;
      right: 56px;
    }
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

                        <div>
                            <StyledContact>
                                <motion.button
                                    initial={{ y: 100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                    onclick="window.location.href='contact.jsx'">
                                    <span className="shadow" />
                                    <span className="edge" />
                                    <span className="front text"> Contact me
                                    </span>
                                </motion.button>
                            </StyledContact>
                            <StyledDownload>
                                <div className="container">
                                    <label className="label">
                                        <input type="checkbox" className="input" />
                                        <span className="circle"><svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
                                        </svg>
                                            <div className="square" />
                                        </span>
                                        <p className="title">My Resume</p>
                                        <p className="title">Done</p>
                                    </label>
                                </div>
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