
import { useQuery } from "@tanstack/react-query";
import GeneralSection from "../../components/GeneralSection/GeneralSection";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";
import Container, { Banner, BlackShadow, Newsletter } from "./Home_Styles";
import PromotionSection from "./PromotionSection/PromotionSection";
import axios, { AxiosResponse } from "axios";
import { IProduct } from "../../components/Product/Product";
import NewsletterBackground from "../../assets/newsletterBackground.jpg"

export default function Home_Page() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response: AxiosResponse<IProduct[]> = (await axios.get("http://localhost:4000/products"))
      return response
    }
  })

  return (
    <Container>

      <HeroSection />

      <GeneralSection name="MAIS VENDIDOS" products={products} />

      <CategorySection />

      <PromotionSection />

      <Banner>
        <img className="bannerImg" src="https://olhardigital.com.br/wp-content/uploads/2023/05/Games-Brasil-e1686075484409.jpg" />
        <BlackShadow />
        <div className="bannerContent">
          <h3 className="bannerContentTitle">GASTE E GANHE</h3>
          <p className="bannerContentText">Economize 20% ao gastar mais de R$ 500,00</p>
          <WhiteButton name="Comprar agora" />
        </div>
      </Banner>

      <GeneralSection name="GAMES EM ALTA" products={products} />

      <Newsletter>
        <img className="newsletterImg" src={NewsletterBackground} />
        <BlackShadow />
        <div className="newsletterContent">
          <h3 className="newsletterContentTitle">Newsletter</h3>
          <p className="newsletterContentText">Assine e receba atualizações sobre novos produtos e ofertas especiais</p>
          <input className="newsletterInput" placeholder="Email" />
          <WhiteButton name="Enviar" />
        </div>
      </Newsletter>

    </Container>
  )
}