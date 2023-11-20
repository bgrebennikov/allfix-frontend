import {useAuth} from "../../../api/auth/AuthContext";
import DashSidebar from "./DashSidebar";
import {Outlet} from "react-router-dom";

export default function Dashboard() {

    const {currentUser, logout} = useAuth();

    function handleLogout() {
        logout();
    }

    return (
        <div className="dashboard__wrapper">
            <DashSidebar user={currentUser} onLogout={handleLogout}/>
            <div className="dash__content">
                <Outlet/>
            </div>
        </div>
    )
}