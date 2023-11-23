import { Container, Logo, NavBar } from "./Header_Styles";
import { GiAbstract039, GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import Nav_Button from "./Nav_Button/Nav_Button";
import { useLocation } from "react-router-dom";
import { Heading4 } from "../Headings/Headings.components";

export default function Header() {
    const { pathname } = useLocation()
    console.log(pathname)

    return (
        <Container pathname={pathname}>
            <Logo to={"/"}>
                <GiAbstract039 className="logoIcon" />
                <Heading4>ARCADE</Heading4>
            </Logo>
            <NavBar>
                <Nav_Button title="Produtos" path="/produtos" />
                <Nav_Button title="Promoções" path="/promocoes" />
                <Nav_Button title="Contato" path="/contatos" />
                <Nav_Button title="Login" path="/" icon={<FaUserCircle/>} />
                <Nav_Button path="/" icon={  <AiOutlineShoppingCart/>} />
            </NavBar>

            <GiHamburgerMenu className="hamburguerIcon" />


        </Container>
    )
}