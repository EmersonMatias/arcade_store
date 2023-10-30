import BestSellers from "./BestSellers/BestSellers";
import HeroSection from "./HeroSection/HeroSection";
import Container from "./Home_Styles";

export default function Home_Page(){
    return(
        <Container>
          <HeroSection/>

          <BestSellers/>
        </Container>
    )
}