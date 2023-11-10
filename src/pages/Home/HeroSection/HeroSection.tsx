import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import { Container } from "./HeroSection_Styles";
import GameCover from "../../../assets/gameCover.png"
import { ScrollToTop } from "../../../utils/functions";

export default function HeroSection() {
    return (
        <Container>
            <div className="promotionCard">
                <p className="commomPhrase">Mais poder ao seu gaming</p>
                <h3 className="gameTitle">CYBER KID INFINITE</h3>
                <p className="streamings">Disponivel para PC e Console</p>
                <WhiteButton name="Comprar agora" path="games" onClick={ScrollToTop}/>
            </div>

            <div className="gameCover">
                <img src={GameCover}/>
            </div>

        </Container>
    )
}