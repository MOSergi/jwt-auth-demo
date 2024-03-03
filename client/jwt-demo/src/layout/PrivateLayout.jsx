import { useEffect } from "react";
import { AppConfig } from "../config/app.config";
import axios from "axios";
import { Footer } from "../components/Footer";
import { NavbarAuth } from "../components/NavbarAuth";
import { useNavigate } from "react-router-dom";

export default function PrivateLayout({ children }){
    const navigate = useNavigate();

    useEffect(()=>{
      const checkSession = async ()=>{
        try {
          await axios.get(`${AppConfig.Api_Base_Url}/auth/validate`, { withCredentials : true });
        } catch(e){
          if (e.response.status === 401){
            navigate("/login")
          }
        }
      }
      
      checkSession();
    }, []);

    return(
        <>
            <NavbarAuth />
            {children}
            <Footer />
        </>
    );
}