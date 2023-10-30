import BestSellers from "./BestSellersSection/BestSellersSection";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";
import Container from "./Home_Styles";

export default function Home_Page() {
  return (
    <Container>
      <HeroSection />

      <BestSellers />

      <CategorySection />
    </Container>
  )
}