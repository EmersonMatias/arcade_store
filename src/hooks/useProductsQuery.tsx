import axios, { AxiosResponse } from "axios";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../components/Product/Product";

export default function useProductsQuery(filter: string) {
    return useQuery({
        queryKey: ["products", {filter}],
        queryFn: async () => {
            const response: AxiosResponse<IProduct[]> = (await axios.get(`http://localhost:4000/products?${filter}`))
            return response
        }
    })
}