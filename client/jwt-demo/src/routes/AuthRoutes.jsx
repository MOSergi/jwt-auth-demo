import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function AuthRoutes(){

    const { logedIn } = useContext(AuthContext);

    if (!logedIn){
        return <Navigate to="/login" />
    } else {
        return(
            <Routes>
                <Route path="/*" element={<p>Not Found</p>}/>
                <Route path="/profile" element={<p>Profile</p>}/>
            </Routes>
        );
    }
}