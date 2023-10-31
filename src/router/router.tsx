import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home_Page from "../pages/Home/Home_Page";
import Home_Layout from "./layouts/Home_Layout";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home_Layout/>}>
            <Route index element={<Home_Page />} />
        </Route>
    )
)

