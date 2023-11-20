import { Container } from "./HeroSection_Styles";
import GameCover from "../../../assets/gameCover.png"
import { ScrollToTop } from "../../../utils/functions";
import { Heading1, Heading4Unbold } from "../../../components/Headings/Headings.components";
import { WhiteButtonNavLink } from "../../../components/Buttons/Buttons.components";

export default function HeroSection() {
    return (
        <Container>
            <div className="promotionCard">
                <p className="commomPhrase">Mais poder ao seu gaming</p>
                <Heading1>CYBER KID INFINITE</Heading1>
                <Heading4Unbold>Disponivel para PC e Console</Heading4Unbold>
                <WhiteButtonNavLink to="games" onClick={ScrollToTop}>Comprar Agora</WhiteButtonNavLink>
           
            </div>

            <div className="gameCover">
                <img src={GameCover} />
            </div>

        </Container>
    )
}