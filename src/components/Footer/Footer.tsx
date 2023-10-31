import { GiAbstract039 } from "react-icons/gi";
import { Container, TopFooter } from "./Footer_Styles";
import ColumnTexts from "./ColumnTexts/ColumnTexts";

export default function Footer() {
    const columns = [
        { title: "Produtos", texts: ["Games", "Consoles", "Controles", "Acessórios"] },
        { title: "Loja", texts: ["Rua Prates, 194 - Bom Retiro São Paulo - SP, 01121-000", "Seg. a Sex.: 9:00 às 21:00", "info@meusite.com", "(11) 3456-7890"] },
        { title: "Políticas", texts: ["Termos e Condições", "Política de Envio", "Política de Reembolso", "Política de Privacidade", "Política de Cookies", "FAQ"] }
    ]


    return (
        <Container>
            <TopFooter>
                <div className="logoContainer">
                    <GiAbstract039 className="iconLogo" />
                    <h5 className="iconTitle">Arcade</h5>
                </div>
                {columns.map(({ title, texts }) => (
                    <ColumnTexts title={title} texts={texts} />
                ))}
            </TopFooter>
        </Container>
    )
}