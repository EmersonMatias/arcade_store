import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home_Page from "../pages/Home/Home_Page";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Home_Page />} />
        </Route>
    )
)

