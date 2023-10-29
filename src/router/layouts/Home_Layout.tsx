import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home_Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}