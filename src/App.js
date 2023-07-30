import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import HeaderMain from "./pages/HeaderMain";
import ComputersPage from "./pages/ComputersPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <>
            <HeaderMain/>

            <Routes>
                <Route element={<HomePage/>} path={"/"}/>
                <Route element={<HomePage/>} path={"/:brand"}/>
                <Route element={<ComputersPage/>} path={"/pc"}/>

                <Route path={"/public/*"}/>
                <Route element={<NotFoundPage/>} path={"*"}/>
            </Routes>
        </>
    );
}

export default App;
