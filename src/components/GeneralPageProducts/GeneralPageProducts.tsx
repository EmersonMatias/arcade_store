import { AxiosResponse } from "axios";
import Product, { IProduct } from "../Product/Product";
import { Container, ProductsContainer } from "./GeneralPageProducts_Styles";
import Sidebar from "./Sidebar/Sidebar";
import { PageTitle } from "../Generic_Styles";


export default function GeneralPageProducts({products, title}: IGeneralPageProducts) {
    return (
        <Container>
            <PageTitle>{title}</PageTitle>
            
            <main className="mainContainer">
                <Sidebar />
                <ProductsContainer>
                    {products?.data.map(({ id, category, name, price, productImage, promotion }) => (
                        <Product
                            key={id}
                            id={id}
                            category={category}
                            name={name}
                            price={price.toString()}
                            productImage={productImage}
                            promotion={promotion}
                            size="normal"
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
