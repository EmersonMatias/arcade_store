import { Container } from "./WhiteButton_Styles";

export default function WhiteButton({name, onClick, path }: IWhiteButton){
    return(
        <Container onClick={onClick} to={path}>
            {name}
        </Container>
    )
}

type IWhiteButton = {
    name: string,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    path: string
}