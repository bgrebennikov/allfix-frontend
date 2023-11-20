import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ComputersPage from "./pages/categories/ComputersPage";
import NotFoundPage from "./pages/NotFoundPage";
import WashingsPage from "./pages/WashingsPage";
import Dashboard from "./pages/manage/dashboard/Dashboard";
import AdminLogin from "./pages/manage/AdminLogin";
import {AuthProvider} from "./api/auth/AuthContext";
import BlogMain from "./pages/blog/BlogMain";
import {LandingRoute} from "./pages/LandingRoute";
import {BlogRoute} from "./pages/BlogRoute";
import BlogManage from "./pages/manage/dashboard/BlogManage";
import SmmManage from "./pages/manage/dashboard/SmmManage";
import PrivateRoute from "./hooks/PrivateRoute";
import ThanksPage from "./pages/ThanksPage";
import SectionContacts from "./pages/sections/SectionContacts";
import {Reviews} from "@mui/icons-material";
import ReviewsPage from "./pages/ReviewsPage";
import {YMInitializer} from "react-yandex-metrika";

function App() {

    if (window.location.host.split(".")[0] === "manage") {
        import('./Manage.css')

        return (
                <AuthProvider>
                    <Routes>
                        <Route path={"/"}
                               >
                            <Route element={
                                <PrivateRoute children={<Dashboard/>}/>}
                                   path={"/"}>



                                <Route element={
                                    <PrivateRoute>
                                        <BlogManage/>
                                    </PrivateRoute>} path={"/blog/"}/>

                                <Route element={
                                    <PrivateRoute children={<SmmManage/>}/>} path={"/smm"}>
                                </Route>

                            </Route>


                        </Route>

                        <Route element={
                            <Dashboard/>
                        } path={"/qq"}/>

                        <Route element={
                            <AdminLogin/>
                        } path={"/login"}/>

                        <Route path="*" element={<>Not Found</>} />

                    </Routes>
                </AuthProvider>
        )
    }

    return (
        <>
            <Routes>
                <Route path={"/"}>

                    <Route path={"/"} element={<LandingRoute/>}>

                        <Route element={<HomePage/>} path={"/"}/>
                        {/*<Route element={<HomePage/>} path={"/:brand"}/>*/}
                        <Route element={<ComputersPage/>} path={"/pc"}/>

                        <Route element={<ComputersPage title={"системных блоков"}/>} path={"/pc/sys_block"}/>
                        <Route element={<ComputersPage title={"ноутбуков"}/>} path={"/pc/laptop"}/>
                        <Route element={<ComputersPage title={"нетбуков"}/>} path={"/pc/notebook"}/>
                        <Route element={<ComputersPage title={"моноблоков"}/>} path={"/pc/monoblock"}/>


                        <Route element={<ComputersPage/>} path={"/pc/:brand"}/>

                        <Route element={<WashingsPage/>} path={"/washing"}/>
                        <Route element={<WashingsPage/>} path={"/washing/:brand"}/>

                        <Route element={<SectionContacts/>} path={"/contacts"}/>
                        <Route element={<ThanksPage/>} path={"/thanks"}/>
                        <Route element={<ReviewsPage/>} path={"/reviews"} />

                        <Route path={"/public/*"}/>
                        <Route element={<NotFoundPage/>} path={"*"}/>

                    </Route>

                    <Route path={"/blog"} element={<BlogRoute/>}>
                        <Route path={"/blog/"} element={<BlogMain/>}/>
                    </Route>

                </Route>

            </Routes>

            <YMInitializer accounts={[95469611]} options={{webvisor: true}}/>

        </>
    );
}

export default App;
