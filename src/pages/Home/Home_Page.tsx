import HeroSection from "./HeroSection/HeroSection";
import Container from "./Home_Styles";

export default function Home_Page(){
    return(
        <Container>
          <HeroSection/>

          <div className="maisvendidos">
            MAIS VENDIDOS
          </div>
        </Container>
    )
}