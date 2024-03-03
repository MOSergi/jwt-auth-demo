import axios from "axios";
import { FaPowerOff } from "react-icons/fa";
import { AppConfig } from "../config/app.config";
import { useNavigate } from "react-router-dom";

export default function LogoutPage(){

    const navigate = useNavigate();

    const onClick = async ()=>{
        await axios.get(`${AppConfig.Api_Base_Url}/users/logout`, { withCredentials : true });
        navigate("/login");
    }

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl">Logout</h1>
            <FaPowerOff size={200} className="text-red-600 cursor-pointer mt-5" onClick={onClick} />
        </div>
    );
}