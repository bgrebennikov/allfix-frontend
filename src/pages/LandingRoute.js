import HeaderMain from "./HeaderMain";
import Footer from "./Footer";
import {Outlet} from "react-router-dom";

export const LandingRoute = () => {
    return (
        <>
            <HeaderMain/>
            <Outlet/>
            <Footer/>
        </>
    )
}
