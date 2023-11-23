
import GeneralSection from "../../components/GeneralSection/GeneralSection";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";
import Container, { Banner, BlackShadow, Newsletter } from "./Home_Styles";
import PromotionSection from "./PromotionSection/PromotionSection";
import NewsletterBackground from "../../assets/newsletterBackground.jpg"
import { ScrollToTop } from "../../utils/functions";
import useProductsQuery from "../../hooks/useProductsQuery";
import { useSelector, useDispatch } from "react-redux"
import {WhiteButton, WhiteButtonNavLink } from "../../components/Buttons/Buttons.components";
import { Heading1, Heading3Unbold, Heading4Unbold, Heading5Unbold } from "../../components/Headings/Headings.components";

export default function Home_Page() {
  const { data: games } = useProductsQuery("category=game")
  const {data: periferico} = useProductsQuery("category=periferico")
  const { data: products } = useProductsQuery("")
  const { cartList } = useSelector(rootReducer => rootReducer.cartReducer)
  const { test } = useSelector(rootReducer => rootReducer.testReducer)

  const dispatch = useDispatch()

  function largura() {
    const larguraTela = window.innerWidth;
    const alturadaTela = window.innerHeight;
    //923
    console.log("A largura da sua tela é: " + larguraTela + " pixels");
    console.log("A largura da sua tela é: " + alturadaTela + " pixels");
  }
  largura()
  console.log(cartList)
  console.log(test)

  return (
    <Container>

      <HeroSection products={products}/>


      <GeneralSection name="MAIS VENDIDOS" products={products} path="maisvendidos" />

      <CategorySection />

      <PromotionSection />

      <GeneralSection name="DÊ UM UPGRADE NO SEU SETUP" products={periferico} path="perifericos"/>

      <Banner>
        <img className="bannerImg" src="https://olhardigital.com.br/wp-content/uploads/2023/05/Games-Brasil-e1686075484409.jpg" />
        <BlackShadow />
        <div className="bannerContent">
          <Heading1>GASTE E GANHE</Heading1>
          <Heading3Unbold style={{textAlign: "center"}}>Economize 20% ao gastar mais de R$ 500,00</Heading3Unbold>
          <WhiteButtonNavLink style={{marginTop: "2rem"}} to="produtos" onClick={ScrollToTop}>Comprar agora</WhiteButtonNavLink>
        </div>
      </Banner>

      <GeneralSection name="GAMES EM ALTA" products={games} path="games" />

      <Newsletter id="newsletter">
        <img className="newsletterImg" src={NewsletterBackground} />
        <BlackShadow />
        <div className="newsletterContent">
          <Heading1 style={{marginBottom: "1rem"}}>Newsletter</Heading1>
          <Heading4Unbold style={{marginBottom: "2rem" , textAlign: "center"}}>Assine e receba atualizações sobre novos produtos e ofertas especiais</Heading4Unbold>
          <input className="newsletterInput" placeholder="Email" />
          <WhiteButton>Enviar</WhiteButton>
        </div>
      </Newsletter>

    </Container>
  )
}