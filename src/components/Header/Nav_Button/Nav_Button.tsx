import { Container, PoppoverContainer, StyledNavLink } from "./Nav_Button.Styles";
import { IconType } from "react-icons"
import { ReactElement, useState } from "react";

export default function Nav_Button({ title, path, icon }: INav_Button) {
    const [poppoverVisibility, setPoppoverVisibility] = useState(false)

    let timer: number

    function handleMouseOver() {
        setPoppoverVisibility(true)
        clearTimeout(timer)
    }

    function handleMouseLeave() {
        timer = setTimeout(() => {
            setPoppoverVisibility(false)
        }, 200)
    }

    function handleMouseOverPoppover() {
        setPoppoverVisibility(true)
        clearTimeout(timer)
    }

    function handleMouseLeavePoppoer() {
        timer = setTimeout(() => {
            setPoppoverVisibility(false)
        }, 200)
    }

    return (
        <Container>
            <StyledNavLink to={path}>
                <div className="conta" onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseLeave()}>
                    {icon}
                    <p>{title}</p>
                </div>
            </StyledNavLink>


            {poppoverVisibility && title === "Produtos" &&
                <PoppoverContainer className="poppover" onMouseOver={() => { handleMouseOverPoppover() }} onMouseLeave={() => handleMouseLeavePoppoer()}>
                    <StyledNavLink to="maisvendidos" className="poppoverParagraph">Mais vendidos</StyledNavLink>
                    <StyledNavLink to="games" className="poppoverParagraph">Games</StyledNavLink>
                    <StyledNavLink to="consoles" className="poppoverParagraph">Consoles</StyledNavLink>
                    <StyledNavLink to="perifericos" className="poppoverParagraph">Periféricos</StyledNavLink>
                </PoppoverContainer>
            }

        </Container>
    )
}


type INav_Button = {
    title: string,
    path: string,
    icon?: ReactElement<IconType>
}