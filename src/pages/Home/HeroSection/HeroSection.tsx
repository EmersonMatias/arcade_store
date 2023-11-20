import { Container, PromotionCard, GameCover } from "./HeroSection_Styles";
import GameCoverImg from "../../../assets/gameCover.png"
import { ScrollToTop } from "../../../utils/functions";
import { Heading1, Heading4Unbold, Heading5Unbold } from "../../../components/Headings/Headings.components";
import { WhiteButtonNavLink } from "../../../components/Buttons/Buttons.components";
import { theme } from "../../../components/theme";

export default function HeroSection() {
    return (
        <Container>
            <PromotionCard>
                <Heading5Unbold>Mais poder ao seu gaming</Heading5Unbold>

                <Heading1>CYBER KID INFINITE</Heading1>

                <Heading4Unbold>Disponivel para PC e Console</Heading4Unbold>

                <WhiteButtonNavLink to="games" onClick={ScrollToTop} style={{ marginTop: theme.size.px24 }}>
                    Comprar Agora
                </WhiteButtonNavLink>
            </PromotionCard>


            <GameCover>
                <img src={GameCoverImg} />
            </GameCover>




        </Container>
    )
}