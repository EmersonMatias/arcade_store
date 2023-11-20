import { Container, PoppoverContainer} from "./Nav_Button.Styles";
import { IconType } from "react-icons"
import { ReactElement, useState } from "react";
import { ButtonNavLink} from "../../Buttons/Buttons.components";
import { Heading6, Heading6Unbold } from "../../Headings/Headings.components";

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
            <ButtonNavLink to={path} onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseLeave()}>
              {icon && <span className="navButtonIcon">{icon}</span>}
               {title &&  <Heading6>{title}</Heading6>}
            </ButtonNavLink>


            {poppoverVisibility && title === "Produtos" &&
                <PoppoverContainer className="poppover" onMouseOver={() => { handleMouseOverPoppover() }} onMouseLeave={() => handleMouseLeavePoppoer()}>
                    <ButtonNavLink to="maisvendidos" style={{fontWeight: "normal"}}><Heading6Unbold>Mais vendidos</Heading6Unbold></ButtonNavLink>
                    <ButtonNavLink to="games" style={{fontWeight: "normal"}}><Heading6Unbold>Games</Heading6Unbold></ButtonNavLink>
                    <ButtonNavLink to="consoles" style={{fontWeight: "normal"}}><Heading6Unbold>Consoles</Heading6Unbold></ButtonNavLink>
                    <ButtonNavLink to="perifericos" style={{fontWeight: "normal"}}><Heading6Unbold>Periféricos</Heading6Unbold></ButtonNavLink>
                </PoppoverContainer>
            }

        </Container>
    )
}


type INav_Button = {
    title?: string,
    path: string,
    icon?: ReactElement<IconType>
}