import { useEffect } from "react";
import { AppConfig } from "../config/app.config";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function PublicLayout({ children }){

    const navigate = useNavigate();

    useEffect(()=>{
        const checkSession = async ()=>{
            try {
                const result = await axios.get(`${AppConfig.Api_Base_Url}/auth/validate`, { withCredentials : true });
            
                if (result.status === 200){
                    navigate("/app/profile");
                }
                
            } catch(e){}
        }

        checkSession();
    }, []);


    return(
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}