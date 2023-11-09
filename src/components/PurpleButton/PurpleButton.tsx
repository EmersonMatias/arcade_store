import { Container } from "./PurpleButton_Styles";

export default function PurpleButton({name, onClick, className}: IPurpleButton){
    return(
        <Container className={className} onClick={onClick}>
            {name}
        </Container>
    )
}


type IPurpleButton = {
    name: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    className?: string
}