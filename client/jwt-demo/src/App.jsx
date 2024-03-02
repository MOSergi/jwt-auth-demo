import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import { useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";
import { AppConfig } from "./config/app.config";

function App() {

  const [logedIn, setLogedIn] = useState(false);

  useEffect(()=>{
    const checkSession = async ()=>{
      try {
        const result = await axios.get(`${AppConfig.Api_Base_Url}/auth/validSession`);
        
        if (result.status === 200){
          setLogedIn(true);
        }

      } catch(e){
        if (e.response.status === 401){
          setLogedIn(false);
        }
      }
    }

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ logedIn }}>
      <Router>
        <Routes>
          <Route path="/" element={<p>Home</p>}/>
          <Route path="*" element={<p>Not found</p>}/>
          <Route path="/register" element={<p>Register</p>}/>
          <Route path="/login" element={<p>login</p>}/>
          <Route path="/app/*" element={<AuthRoutes />}/>
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
