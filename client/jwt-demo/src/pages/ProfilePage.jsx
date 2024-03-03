import axios from "axios";
import { useEffect, useState } from "react";
import { AppConfig } from "../config/app.config";

export default function ProfilePage(){
    
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        
        const fetchData = async ()=>{
            try {
                const result = await axios.get(`${AppConfig.Api_Base_Url}/users`, { withCredentials : true });
                setUserData(result.data.data);
            } catch(e){
                if (e.response){
                    const response = e.response;
                    if (response.status && response.status === 401){
                        window.location.href = "/login";
                    }
                }
            }
        }

        fetchData();

    }, [])
    
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-white font-bold text-xl">Here is your data</h1>
            <div>
                {
                    userData.map((element)=>{
                        return(
                            <div className="text-center border mt-5 p-3" key={element.name}>
                                <h2 className="text-xl font-bold text-amber-400">Username</h2>
                                <p className="text-white mb-2">{element.name}</p>
                                <hr />
                                <h2 className="text-xl font-bold text-amber-400 mt-2">Email</h2>
                                <p className="text-white">{element.email}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}