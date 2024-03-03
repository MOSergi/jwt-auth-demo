import { useState } from "react";
import axios from "axios";
import { AppConfig } from "../config/app.config";
import { useNavigate } from "react-router-dom";

export const LoginForm = ()=>{
    
    const [formValues, setFormValues] = useState({
        email : "",
        password : ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const onSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            //make login request
            const result = await axios.post(`${AppConfig.Api_Base_Url}/auth`, { 
                email : formValues.email,
                password : formValues.password
            }, { withCredentials : true });

            if (result.status === 200){
                navigate("/app/profile");
            }

        } catch(e){
            if (e.response){
                const response = e.response;
                if (response.data.message){
                    setError(response.data.message);
                }
            }
        }
    }

    const onChangeValues = (e)=>{
        const inputValue = e.target.value;
        const inputName = e.target.name;

        setFormValues({
            ...formValues,
            [inputName] : inputValue
        });
    }

    return(
        <form className="flex flex-col items-center" onSubmit={onSubmit}>
            <input 
                value={formValues.email} 
                name="email" 
                className="mt-5 p-2 text-center w-[275px]" 
                type="email" 
                placeholder="Email"
                onChange={onChangeValues}
                required
            />
            <input 
                value={formValues.password} 
                name="password" 
                className="mt-5 p-2 text-center w-[275px]" 
                type="password" 
                placeholder="Password"
                onChange={onChangeValues}
                required
            />
            <button className="p-2 w-[250px] mt-4 bg-green-400 rounded font-bold mb-4 hover:bg-green-300">
                Login
            </button>
            <h3 className="text-center text-red-500 font-bold">{error}</h3>
        </form>
    );
}