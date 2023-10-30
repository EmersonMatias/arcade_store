import { Container } from "./PurpleButton_Styles";

export default function PurpleButton({name, onClick}: IPurpleButton){
    return(
        <Container onClick={onClick}>
            {name}
        </Container>
    )
}


type IPurpleButton = {
    name: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}