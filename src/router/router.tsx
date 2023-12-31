import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home_Page from "../pages/Home/Home_Page";
import Home_Layout from "./layouts/Home_Layout";
import Products_Page from "../pages/Products/Products_Page";
import Promotions_Page from "../pages/Promotions/Promotions_Page";
import Games_Page from "../pages/Games/Games_Page";
import Consoles_Page from "../pages/Consoles/Consoles_Page";
import Peripherals_Page from "../pages/Peripherals/Peripherals_Page";
import BestSellers_Page from "../pages/BestSellers/BestSellers_Page";
import Contact_Page from "../pages/Contact/Contact_Page";
import TermsAndConditionsPage from "../pages/TermsAndConditions/TermsAndConditions_Page";
import ShippingPolicie_Page from "../pages/ShippingPolicie/ShippingPolicie_Page";
import RefundPolicie_Page from "../pages/RefundPolicie/RefundPolicie_Page";
import PrivaciPolicie_Page from "../pages/PrivacyPolicie/PrivacyPolicie_Page";
import Product_Page from "../pages/Product/Product_Page";
import CookiePolicie_Page from "../pages/CookiePolicie/CookiePolicie_Page";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home_Layout />}>


            <Route index element={<Home_Page />} />
            <Route path=":id" element={<Product_Page />}/>



            <Route path="produtos" element={<Products_Page />} />
            <Route path="produtos/:id" element={<Product_Page />}/>


            <Route path="promocoes" element={<Promotions_Page />} />
            <Route path="promocoes/:id" element={<Product_Page />}/>


            <Route path="games" element={<Games_Page />} />
            <Route path="games/:id" element={<Product_Page />}/>


            <Route path="consoles" element={<Consoles_Page />} />
            <Route path="consoles/:id" element={<Product_Page />}/>


            <Route path="perifericos" element={<Peripherals_Page />} />
            <Route path="perifericos/:id" element={<Product_Page />}/>


            <Route path="maisvendidos" element={<BestSellers_Page />} />
            <Route path="maisvendidos/:id" element={<Product_Page />}/>

            
            <Route path="contatos" element={<Contact_Page />} />
            <Route path="termosecondicoes" element={<TermsAndConditionsPage />} />
            <Route path="politicadeenvio" element={<ShippingPolicie_Page />} />
            <Route path="politicadereembolso" element={<RefundPolicie_Page />} />
            <Route path="politicadeprivacidade" element={<PrivaciPolicie_Page />} />
            <Route path="politicadecookie" element={<CookiePolicie_Page />} />




        </Route>
    )
)

