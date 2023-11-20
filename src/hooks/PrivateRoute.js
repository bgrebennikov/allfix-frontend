import {Navigate} from "react-router-dom";
import {useAuth} from "../api/auth/AuthContext";


const PrivateRoute = ({ children }) => {
    const { currentUser, isAuthenticated } = useAuth();

    return isAuthenticated === true ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;