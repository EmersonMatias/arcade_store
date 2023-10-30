import { useQuery } from "@tanstack/react-query";
import GeneralSection from "../../../components/GeneralSection/GeneralSection";
import { IProduct } from "../../../components/Product/Product";
import axios, { AxiosResponse } from "axios";

export default function BestSellersSection(){
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response: AxiosResponse<IProduct[]> = (await axios.get("http://localhost:4000/products"))
            return response
        }
    })
   
    return(
        <GeneralSection name="MAIS VENDIDOS" products={products}/>
    )
}