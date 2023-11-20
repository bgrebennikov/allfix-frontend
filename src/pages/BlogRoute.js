import {Outlet} from "react-router-dom";
import BlogHeaderMain from "./blog/BlogHeaderMain";
import '../Blog.css'

export const BlogRoute = () => {
    return (
        <>
            <BlogHeaderMain/>
            <Outlet/>
        </>
    )
}