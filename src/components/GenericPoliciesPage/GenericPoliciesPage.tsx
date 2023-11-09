import { Divider } from "@mui/material";
import { PageTitle } from "../Generic_Styles";
import { Container } from "./GenericPoliciesPage_Styles";

export default function GeneriPoliciesPage() {
    const texts_1 = [
        "Os Termos e Condições (“Termos”) são um conjunto de termos jurídicos definidos pelo proprietário de um site. Eles estabelecem os termos e condições que regulam as atividades dos visitantes e o relacionamento entre os visitantes e o proprietário do site.",
        "Os termos devem ser estabelecidos de acordo com as necessidades específicas e a natureza de cada site. Por exemplo, um site que oferece produtos a clientes envolvendo transações de comércio eletrônico precisa ter termos que sejam diferentes dos termos de um site que oferece somente informações.",
        "Os termos dão ao proprietário do site a capacidade de se proteger em caso de uma possível exposição jurídica."
    ]

    const texts_2 = [
        "Em geral, o que é preciso abordar nos Termos e Condições?",
        "1. Quem pode usar o site; quais são os requisitos para criar uma conta (se for relevante)",
        "2. Termos comerciais importantes oferecidos aos clientes",
        "3. Métodos de pagamento (Cartões de crédito/débito, PayPal, Boleto bancário, etc.)",
        "4. Salvaguarda do direito de modificar a oferta",
        "5. Garantias e responsabilidade por serviços e produtos",
        "6. Titularidade de propriedade intelectual, direitos autorais e logos",
        "7. Direito de suspender ou cancelar contas de membros",
        "8. Indenização",
        "9. Limitação de responsabilidade",
        "10. Direito de alterar e modificar os Termos",
        "11. Direito aplicável e resolução de demandas",
        "12. Informações de contato"

]


    return (
        <Container>
            <PageTitle className="rose">Termos e Condições</PageTitle>

            <div className="content_Container">

                <div className="content_1">
                    {texts_1.map((text) => (
                        <p className="content_text">
                            {text}
                        </p>
                    ))}
                </div>

                <div className="content_2">
                    {texts_2.map((text) => (
                        <p className="content_text">
                            {text}
                        </p>
                    ))}
                </div>


            </div>

            <Divider sx={{ backgroundColor: "#ffffffb0", marginTop: "4rem", marginBottom: "4rem" }} />

            <div className="warningText">
                As explicações e informações fornecidas aqui são apenas exemplos gerais.
                Não confie neste artigo como orientação jurídica ou como recomendações
                sobre o que você realmente deve fazer. Recomendamos que você busque orientação
                jurídica se precisar de ajuda para entender e criar seus Termos.
            </div>


        </Container>
    )
}