import { Container, Logo, NavBar } from "./Header_Styles";
import { GiAbstract039 } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import Nav_Button from "./Nav_Button/Nav_Button";
import { useLocation } from "react-router-dom";

export default function Header() {
    const { pathname } = useLocation()
    console.log(pathname)

    return (
        <Container pathname={pathname}>
            <Logo to={"/"}>
                <GiAbstract039 className="iconLogo" />
                <p className="phraseLogo">ARCADE</p>
            </Logo>

            <NavBar>
                <Nav_Button title="Produtos" path="/produtos" />
                <Nav_Button title="Promoções" path="/promocoes" />
                <Nav_Button title="Contato" path="/contatos" />
                <Nav_Button title="Login" path="/" icon={<FaUserCircle className="iconLogin" />} />

                <AiOutlineShoppingCart className="iconCart" />
            </NavBar>

        </Container>
    )
}