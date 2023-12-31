import { useQuery } from "@tanstack/react-query";
import GeneralPageProducts from "../../components/GeneralPageProducts/GeneralPageProducts";
import { IProduct } from "../../components/Product/Product";
import axios, { AxiosResponse } from "axios";

export default function Products_Page(){
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const response: AxiosResponse<IProduct[]> = (await axios.get("http://localhost:4000/products"))
          return response
        }
      })

    return(
        <GeneralPageProducts title="LOJA" products={products}/>
    )
}