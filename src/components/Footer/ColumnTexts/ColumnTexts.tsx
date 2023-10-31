import { Container } from "../ColumnTexts/ColumnTexts_Styles";

export default function ColumnTexts({title, texts}: IColumnTexts) {
    return (
        <Container>
            <h6 className="columnTextsTitle">{title}</h6>
            {texts.map((text) => (
                <p className="columnTextsText">{text}</p>
            ))}
        </Container>
    )
}


type IColumnTexts = {
    title: string,
    texts: string[]
}