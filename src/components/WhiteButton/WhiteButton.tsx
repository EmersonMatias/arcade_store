import { Container } from "./WhiteButton_Styles";

export default function WhiteButton({name , onClick}: IWhiteButton){
    return(
        <Container onClick={onClick}>
            {name}
        </Container>
    )
}

type IWhiteButton = {
    name: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}