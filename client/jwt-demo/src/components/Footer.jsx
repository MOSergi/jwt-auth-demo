import { FaGithub } from "react-icons/fa";

export const Footer = ()=>{
    return(
        <footer className="w-full flex flex-row justify-evenly items-center mt-[12vh] mb-5">
            <h3 className="text-white">App developed by MOSergi</h3>
            <a href="https://github.com/MOSergi" target="_blank" className="text-white text-lg hover:text-amber-400"><FaGithub /></a>
        </footer>
    );
}