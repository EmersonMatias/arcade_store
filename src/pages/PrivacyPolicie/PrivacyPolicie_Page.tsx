import GeneriPoliciesPage from "../../components/GenericPoliciesPage/GenericPoliciesPage";
import { Container } from "./PrivaciPolicie_Styles";

export default function PrivaciPolicie_Page(){
    return(
        <Container>
            <GeneriPoliciesPage title="POLÍTICA DE PRIVACIDADE" texts_1={texts_1} texts_2={texts_2}/>
        </Container>
    )
}

const texts_1 = [
    "Uma política de privacidade é uma declaração que comunica algumas ou todas as formas como um site coleta, usa, divulga e administra os dados de seus visitantes e clientes. Ela cumpre a exigência legal de proteção à privacidade do visitante ou cliente.",
    "Cada país tem suas próprias leis, com requisitos que variam segundo a jurisdição em relação ao uso de políticas de privacidade. Certifique-se de cumprir a legislação relevante para suas atividades e localização."
]

const texts_2 = [
    "Em geral, o que é preciso abordar na Política de Privacidade?",
    "1. Que tipo de informações são coletadas?",
    "2. Como as informações são coletadas?",
    "3. Por que você coleta as informações pessoais?",
    "4. Como você armazena, usa, compartilha e divulga informações pessoais de quem visita o seu site?",
    "5. Como (e se) você comunica isso aos visitantes do seu site?",
    "6. O seu serviço segmenta e coleta informações de menores de idade?",
    "7. Atualizações da Política de Privacidade",
    "8. Informações de contato"
]