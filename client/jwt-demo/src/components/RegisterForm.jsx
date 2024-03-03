import { useState } from "react";
import axios from "axios";
import { AppConfig } from "../config/app.config";
import { useNavigate } from "react-router-dom";

export const RegisterForm = ()=>{
    
    const [formValues, setFormValues] = useState({
        username : "",
        email : "",
        password : "",
        repassword: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const onSubmit = async (e)=>{
        e.preventDefault();
        
        if (formValues.password !== formValues.repassword){
            setError("Passwords not match");
        } else {
            //make request
            try {

                const result = await axios.post(`${AppConfig.Api_Base_Url}/users`, {
                    name : formValues.username,
                    email : formValues.email,
                    password : formValues.password
                });

                if (result.status === 200 || result.status === 201){
                    navigate("/login");
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
                value={formValues.username} 
                name="username" 
                className="mt-5 p-2 text-center w-[275px]" 
                type="text" 
                placeholder="Username"
                onChange={onChangeValues}
                required
            />
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
            <input 
                value={formValues.repassword} 
                name="repassword" 
                className="mt-5 p-2 text-center w-[275px]" 
                type="password" 
                placeholder="Repeat password"
                onChange={onChangeValues}
                required
            />
            <button className="p-2 w-[250px] mt-4 bg-green-400 rounded font-bold mb-4 hover:bg-green-300">
                Submit
            </button>
            <h3 className="text-center text-red-500 font-bold">{error}</h3>
        </form>
    );
}