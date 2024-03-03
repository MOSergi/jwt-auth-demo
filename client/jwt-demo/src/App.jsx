import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/app/*" element={<AuthRoutes />}/>
      </Routes>
    </Router>
  )
}

export default App
