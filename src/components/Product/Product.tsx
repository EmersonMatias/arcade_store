import PurpleButton from "../PurpleButton/PurpleButton";
import { Container, NavLinkStyled, ProductImage } from "./Product_Styles";
import { Link } from "react-router-dom";

export default function Product({name, price, productImage}: IProduct) {
    const pricea = price.replace(".", ",")

    return (
        <Container >
            <Link to={""}>
                <ProductImage>
                    <img src={productImage} />
                </ProductImage>
            </Link>

            <NavLinkStyled to={""}>
                <p className="productName">{name}</p>
                <p className="productPrice">R$ {pricea}</p>
            </NavLinkStyled>
            <PurpleButton name="Adicionar"/>

        </Container>
    )
}


export type IProduct = {
    id: number
    name: string,
    price: string,
    productImage: string,
    category: string,
    promotion: boolean
}