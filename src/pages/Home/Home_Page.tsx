
import BestSellersSection from "./BestSellersSection/BestSellersSection";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";
import Container from "./Home_Styles";
import PromotionSection from "./PromotionSection/PromotionSection";

export default function Home_Page() {
  return (
    <Container>
      <HeroSection />

      <BestSellersSection/>

      <CategorySection />

      <PromotionSection/>
    </Container>
  )
}