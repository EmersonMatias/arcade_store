import { Container } from "./Nav_Button.Styles";
import { IconType } from "react-icons"
import { ReactElement } from "react";

export default function Nav_Button({ title, path, icon }: INav_Button) {
    return (
        <Container to={path}>
            {icon}
            <p>{title}</p>
        </Container>
    )
}


type INav_Button = {
    title: string,
    path: string,
    icon?: ReactElement<IconType>
}