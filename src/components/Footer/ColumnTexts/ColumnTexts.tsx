import { ScrollToTop } from "../../../utils/functions";
import { NavLinkNoStyle } from "../../Generic_Styles";
import { Container } from "../ColumnTexts/ColumnTexts_Styles";

export default function ColumnTexts({ title, texts, texts_paths }: IColumnTexts) {
    return (
        <Container>
            <h6 className="columnTextsTitle">{title}</h6>
            
            {texts && texts.map((text) => (
                <p className="columnTextsText">{text}</p>
            ))}

            {texts_paths && texts_paths.map(({ text, path }) => (
                <NavLinkNoStyle to={path} onClick={ScrollToTop}>
                    <p className="columnTextsText">{text}</p>
                </NavLinkNoStyle>
            ))}
        </Container>
    )
}


type IColumnTexts = {
    title: string,
    texts?: string[] | undefined,
    texts_paths: { text: string; path: string; }[] | undefined
}