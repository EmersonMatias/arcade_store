
import GeneralSection from "../../components/GeneralSection/GeneralSection";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";
import Container, { Banner, BlackShadow, Newsletter } from "./Home_Styles";
import PromotionSection from "./PromotionSection/PromotionSection";
import NewsletterBackground from "../../assets/newsletterBackground.jpg"
import { ScrollToTop } from "../../utils/functions";
import useProductsQuery from "../../hooks/useProductsQuery";

export default function Home_Page() {
  const {data: games} = useProductsQuery("category=game")
  const {data: products} = useProductsQuery("")

  return (
    <Container>

      <HeroSection />

      <GeneralSection name="MAIS VENDIDOS" products={products} path="maisvendidos"/>

      <CategorySection />

      <PromotionSection />

      <Banner>
        <img className="bannerImg" src="https://olhardigital.com.br/wp-content/uploads/2023/05/Games-Brasil-e1686075484409.jpg" />
        <BlackShadow />
        <div className="bannerContent">
          <h3 className="bannerContentTitle">GASTE E GANHE</h3>
          <p className="bannerContentText">Economize 20% ao gastar mais de R$ 500,00</p>
          <WhiteButton name="Comprar agora" path="produtos" onClick={ScrollToTop}/>
        </div>
      </Banner>

      <GeneralSection name="GAMES EM ALTA" products={games} path="games"/>

      <Newsletter>
        <img className="newsletterImg" src={NewsletterBackground} />
        <BlackShadow />
        <div className="newsletterContent">
          <h3 className="newsletterContentTitle">Newsletter</h3>
          <p className="newsletterContentText">Assine e receba atualizações sobre novos produtos e ofertas especiais</p>
          <input className="newsletterInput" placeholder="Email" />
          <WhiteButton name="Enviar" path=""/>
        </div>
      </Newsletter>

    </Container>
  )
}