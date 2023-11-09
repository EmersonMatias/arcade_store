import GeneriPoliciesPage from "../../components/GenericPoliciesPage/GenericPoliciesPage"
import { Container } from "./TermsAndConditions_Styles"

export default function TermsAndConditionsPage(){
    return(
        <Container>
            <GeneriPoliciesPage texts_1={texts_1} texts_2={texts_2}/>
        </Container>
    )
}

//TEXTOS ESTÁTICOS DA PÁGINA

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

