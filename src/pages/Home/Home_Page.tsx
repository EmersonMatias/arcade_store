
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import BestSellersSection from "./BestSellersSection/BestSellersSection";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";
import Container, { Banner } from "./Home_Styles";
import PromotionSection from "./PromotionSection/PromotionSection";

export default function Home_Page() {
  return (
    <Container>
      <HeroSection />

      <BestSellersSection />

      <CategorySection />

      <PromotionSection />

      <Banner>
        <img className="bannerImg" src="https://olhardigital.com.br/wp-content/uploads/2023/05/Games-Brasil-e1686075484409.jpg" />
        <div className="gradient"></div>
        <div className="bannerContent">
          <h3 className="bannerContentTitle">GASTE E GANHE</h3>
          <p className="bannerContentText">Economize 20% ao gastar mais de R$ 500,00</p>
          <WhiteButton name="Comprar agora" />
        </div>
      </Banner>
    </Container>
  )
}