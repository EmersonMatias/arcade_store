import { Container, NavLinkStyled, ProductImage } from "./Product_Styles";
import { Link } from "react-router-dom";

export default function Product({ name, price, productImage}: IProduct) {
    return (
        <Container >
            <Link to={""}>
                <ProductImage>
                    <img src={productImage} />
                </ProductImage>
            </Link>

            <NavLinkStyled to={""}>
                <p className="productName">{name}</p>
                <p className="productPrice">R$ {price}</p>
            </NavLinkStyled>



        </Container>
    )
}


export type IProduct = {
    id?: number
    name: string,
    price: string,
    productImage: string,
    category?: string,
    promotion?: boolean
}