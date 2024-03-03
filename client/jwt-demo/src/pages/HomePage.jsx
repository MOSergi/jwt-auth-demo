import { Link } from "react-router-dom";
import jwtLogo from "../assets/jwt-logo.svg";

export default function HomePage(){    
    return(
        <div className="flex flex-col items-center mt-5">
            <h1 className="text-white text-3xl text-center">Welcome to the jwt auth demo</h1>
            <img src={jwtLogo} alt="jwt-logo" className="mt-5 size-80"/>
            <div className="mt-5 flex flex-col items-center">
                <h3 className="text-white text-center w-3/6">
                    This test application attempts to simulate a small demo of what a jwt authentication might look like. 
                    It uses httpOnly cookies to store the jwt and also has route protection on both the frontend and the backend
                </h3>
                <Link 
                    to="/register"
                    className="mt-5 bg-amber-400 rounded p-3 w-[125px] font-bold hover:text-white hover:bg-transparent hover:border hover:border-white text-center"
                >
                    Start
                </Link>
            </div>
        </div>
    )
}