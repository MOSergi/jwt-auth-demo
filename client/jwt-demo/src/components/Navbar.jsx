import { Link } from "react-router-dom";
import jwtLogo from "../assets/jwt-logo.svg";

export const Navbar = ()=>{
    return(
        <nav className="flex justify-evenly items-center p-3 mb-10">
            <Link to="/"><img src={jwtLogo} alt="jwt-logo" className="size-10"/></Link>
            <ul className="mr-5 text-white">
                <Link className="font-bold border p-2 rounded hover:bg-amber-400 hover:text-black" to="/register">Register</Link>
                <Link className="ml-5 mr-5 font-bold border p-2 rounded hover:bg-amber-400 hover:text-black" to="/login">Login</Link>
            </ul>
        </nav>
    );
}