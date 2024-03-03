import { RegisterForm } from "../components/RegisterForm";

export default function RegisterPage(){
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-3 border w-[300px]">
                <h2 className="text-white text-lg font-bold mt-2">Register</h2>
                <RegisterForm />
            </div>
        </div>
    );
}