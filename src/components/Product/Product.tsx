import { ScrollToTop } from "../../utils/functions";
import PurpleButton from "../PurpleButton/PurpleButton";
import { Container, NavLinkStyled, ProductImageBackground } from "./Product_Styles";
import { Link } from "react-router-dom";

export default function Product({id, name, price, productImage, size}: IProduct) {
    const pricea = price.replace(".", ",")

    return (
        <Container size={size}>
            <Link to={id.toString()} onClick={ScrollToTop}>
                <ProductImageBackground size={size}>
                    <img src={productImage} />
                </ProductImageBackground>
            </Link>

            <NavLinkStyled to={id.toString()} onClick={ScrollToTop}>
                <p className="productName">{name}</p>
                <p className="productPrice">R$ {pricea}</p>
            </NavLinkStyled>
            
            <PurpleButton className="aaa" name="Adicionar"/>

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
    size: "small" | "normal"
}