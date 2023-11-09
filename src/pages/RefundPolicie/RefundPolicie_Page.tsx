import GeneriPoliciesPage from "../../components/GenericPoliciesPage/GenericPoliciesPage"
import { Container } from "./RefundPolicie_Style"

export default function RefundPolicie_Page(){
    return(
        <Container>
            <GeneriPoliciesPage title="POLÍTICA DE REEMBOLSO" texts_1={text_1}/>
        </Container>
    )
}

const text_1 = [
    "As empresas que vendem produtos online são obrigadas a apresentar uma Política de Devolução de Produtos e uma Política de Reembolso.",
    "Isso é importante para cumprir as normas de proteção ao consumidor e evitar reclamações de clientes insatisfeitos com os produtos que compraram.",
    "Observe que muitos sites que lidam com a venda de produtos físicos estabelecem uma política de reembolso em um documento separado. Normalmente, isso inclui mais instruções e informações sobre os procedimentos de devolução e reembolso."

]