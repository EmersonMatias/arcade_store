import GeneriPoliciesPage from "../../components/GenericPoliciesPage/GenericPoliciesPage";
import { Container } from "./ShippingPolicie_Style";

export default function ShippingPolicie_Page(){
    return(
        <Container>
            <GeneriPoliciesPage title="POLÍTICA DE ENVIO" texts_1={text_1}/>
        </Container>
    )
}

const text_1 = [
    "Uma Política de Envio traz uma série de benefícios para você e seus clientes. Um dos benefícios será que as pessoas ficarão mais propensas a comprar se você tiver uma Política de Envio clara, uma vez que não haverá dúvidas sobre os prazos ou processos de envio.",
    "Em geral, o que é preciso abordar na Política de Envio?",
    "1. Prazos de processamento de pedido",
    "2. Custos de envio",
    "3. Opções de frete doméstico e internacional",
    "4. Possíveis interrupções de serviço"
]