import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/avatars/deekayProfile.png";
const Body = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16
                        lg:text-4xl">Nguyen Vu Dang Khanh</h1>
                        <span className="bg-gradient-to-r from-pink-300 to-purple-500
                        via-slate-500 bg-clip-text text-2xl tracking-tight text-transparent">
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