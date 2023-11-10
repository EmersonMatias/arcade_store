import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { IProduct } from "../components/Product/Product"

export default function useProductQuery(id: string | undefined){
    return useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response: AxiosResponse<IProduct> = (await axios.get(`http://localhost:4000/products/${id}`))
            return response.data
        }
    })
}

