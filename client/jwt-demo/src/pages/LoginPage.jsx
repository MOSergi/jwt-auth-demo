import { LoginForm } from "../components/LoginForm";

export default function LoginPage(){
    return(
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-3 border w-[300px]">
                <h2 className="text-white text-lg font-bold mt-2">Login</h2>
                <LoginForm />
            </div>
        </div>
    );
}