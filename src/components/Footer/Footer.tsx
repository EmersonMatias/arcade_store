import { GiAbstract039 } from "react-icons/gi";
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube, BiLogoTiktok } from "react-icons/bi"
import { BottomFooter, Container, TopFooter } from "./Footer_Styles";
import ColumnTexts from "./ColumnTexts/ColumnTexts";
import {FaCcVisa,FaCcMastercard, FaPaypal} from "react-icons/fa"
import {SiMercadopago, SiAmericanexpress, SiPagseguro} from "react-icons/si"

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

            <BottomFooter>
                <div className="bottomFooterLeft">
                    <p className="title">Participe da comunidade</p>
                    <div className="socialMidiasContainer">
                        <BiLogoFacebook/>
                        <BiLogoInstagram/>
                        <BiLogoYoutube/>
                        <BiLogoTiktok/>
                    </div>
                    <p className="text">© 2035 por ARCADE</p>
                    <p className="text">Orgulhosamente criado por Emerson Matias</p>
                </div>

                <div className="bottomFooterMiddle">
                    <p>ARCADE - CPF/CNPJ: 12.345.678/0000-01 - Av. Bernardino de Campos, 98  São Paulo, SP 12345-678 - info@meusite.com</p>
                    <p>Telefone: (11) 3456-7890</p>
                    <p>Estimativa de entrega 2 - 5 dias úteis</p>
                </div>

                <div className="bottomFooterRight">
                    <p className="title">Métodos de pagamento</p>
                    <FaCcMastercard className="iconPayment"/>
                    <FaCcVisa className="iconPayment"/>
                    <FaPaypal className="iconPayment"/>
                    <SiMercadopago className="iconPayment"/>
                    <SiAmericanexpress className="iconPayment"/>
                    <SiPagseguro className="iconPayment"/>
                </div>
            </BottomFooter>
        </Container>
    )
}