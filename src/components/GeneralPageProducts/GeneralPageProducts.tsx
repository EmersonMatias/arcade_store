import { AxiosResponse } from "axios";
import Product, { IProduct } from "../Product/Product";
import { Container, ProductsContainer } from "./GeneralPageProducts_Styles";
import Sidebar from "./Sidebar/Sidebar";


export default function GeneralPageProducts({products, title}: IGeneralPageProducts) {
    return (
        <Container>
            <h2 className="title">{title}</h2>
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


type IGeneralPageProducts = {
    title: string,
    products: AxiosResponse<IProduct[]> | undefined
}
