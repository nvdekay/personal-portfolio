import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/avatars/deekayProfile.png";
const Body = () => {
    return (
        <div className="my-20 ml-80 mt-72 mb-96 pb-4 lg:mb-40">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="text-4xl font-thin tracking-tight 
                        lg:text-3xl">Hello, I am</h1>
                        <h1 className="text-indigo-400 pb-8 text-4xl font-bold tracking-tight lg:mt-4
                        lg:text-5xl">Nguyen Vu Dang Khanh</h1>
                        <span className="bg-gradient-to-r from-pink-300 to-purple-500
                        via-slate-500 bg-clip-text lg:text-3xl tracking-tight text-transparent">
                            I'm a <span>Software Engineer</span>
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
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