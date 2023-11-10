import GeneriPoliciesPage from "../../components/GenericPoliciesPage/GenericPoliciesPage";
import { Container } from "./CookiePolicie_Styles";

export default function CookiePolicie_Page(){
    return(
        <Container>
            <GeneriPoliciesPage title="POLÍTICA DE COOKIES" texts_1={texts_1} texts_2={texts_2}/>
        </Container>
    )
}

const texts_1 = ["Se o seu site rastreia informações pessoais usando cookies ou tecnologias similares, deixe isso claro para os visitantes. Esclareça quais ferramentas de rastreamento são usadas (como cookies, flash cookies, web beacons etc.), quais informações pessoais elas coletam e por que elas estão sendo usadas."]

const texts_2 = ["É importante observar que serviços de terceiros, como o Google Analytics ou outros aplicativos oferecidos por meio do Wix, que aplicam cookies ou usam outras tecnologias de rastreamento através dos serviços do Wix podem ter suas próprias políticas de coleta e armazenamento de informações. Como esses são serviços externos, essas práticas não são cobertas pela Política de Privacidade do Wix"]