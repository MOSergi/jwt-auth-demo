import { Route, Routes } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import LogoutPage from "../pages/LogoutPage";

export default function AuthRoutes(){
    return(
        <PrivateLayout>
            <Routes>
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/logout" element={<LogoutPage />} />
            </Routes>
        </PrivateLayout>
    );
}