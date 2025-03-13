import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl text-white-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiMsqlServer className="text-7xl text-red-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiNodejs className="text-7xl text-green-400" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;