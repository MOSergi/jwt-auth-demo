import { Link } from "react-router-dom";
import jwtLogo from "../assets/jwt-logo.svg";

export const  NavbarAuth = ()=>{
    return(
        <nav className="flex justify-evenly items-center p-3 mb-10">
            <img src={jwtLogo} alt="jwt-logo" />
            <ul>
                <Link to="/app/profile" className="font-bold border text-white p-2 rounded hover:bg-amber-400 hover:text-black">Profile</Link>
                <Link to="/app/logout" className="ml-4 font-bold border text-white p-2 rounded hover:bg-amber-400 hover:text-black">Logout</Link>
            </ul>
        </nav>
    );
}