import axios, { AxiosResponse } from "axios";
import Product, { IProduct } from "../../components/Product/Product";
import { Container, ProductsContainer } from "./Products_Styles";
import Sidebar from "./Sidebar/Sidebar";
import { useQuery } from "@tanstack/react-query";


export default function Products_Page() {
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response: AxiosResponse<IProduct[]> = (await axios.get("http://localhost:4000/products"))
            return response
        }
    })

    return (
        <Container>
            <h2 className="title">LOJA</h2>
            <main className="mainContainer">
                <Sidebar />
                <ProductsContainer>
                    {products?.data.map(({ id, category, name, price, productImage, promotion }) => (

                        <Product
                            id={id}
                            category={category}
                            name={name}
                            price={price.toString()}
                            productImage={productImage}
                            promotion={promotion}
                        />

                    ))}
                </ProductsContainer>


            </main>


        </Container >
    )
}