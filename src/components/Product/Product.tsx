import { ScrollToTop } from "../../utils/functions";
import PurpleButton from "../PurpleButton/PurpleButton";
import { Container, NavLinkStyled, ProductImage } from "./Product_Styles";
import { Link } from "react-router-dom";

export default function Product({id, name, price, productImage}: IProduct) {
    const pricea = price.replace(".", ",")

    return (
        <Container>
            <Link to={id.toString()} onClick={ScrollToTop}>
                <ProductImage>
                    <img src={productImage} />
                </ProductImage>
            </Link>

            <NavLinkStyled to={id.toString()} onClick={ScrollToTop}>
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