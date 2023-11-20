
import GeneralSection from "../../components/GeneralSection/GeneralSection";
import CategorySection from "./CategorySection/CategorySection";
import HeroSection from "./HeroSection/HeroSection";
import Container, { Banner, BlackShadow, Newsletter } from "./Home_Styles";
import PromotionSection from "./PromotionSection/PromotionSection";
import NewsletterBackground from "../../assets/newsletterBackground.jpg"
import { ScrollToTop } from "../../utils/functions";
import useProductsQuery from "../../hooks/useProductsQuery";
import { useSelector, useDispatch } from "react-redux"
import store from "../../redux/store";
import {WhiteButton, WhiteButtonNavLink } from "../../components/Buttons/Buttons.components";

export default function Home_Page() {
  const { data: games } = useProductsQuery("category=game")
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

      <HeroSection />


      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          dispatch({
            type: "cart/add",
            payload: "jogo 4"
          })
        }}
      >Cart
      </button>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          dispatch({
            type: "test/add",
            payload: "teste 4"
          })
        }}
      >Teste
      </button>
      <select name="select" >
        <option value="valor1">Valor 1</option>
        <option value="valor2" selected>Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>

      <GeneralSection name="MAIS VENDIDOS" products={products} path="maisvendidos" />

      <CategorySection />

      <PromotionSection />

      <Banner>
        <img className="bannerImg" src="https://olhardigital.com.br/wp-content/uploads/2023/05/Games-Brasil-e1686075484409.jpg" />
        <BlackShadow />
        <div className="bannerContent">
          <h3 className="bannerContentTitle">GASTE E GANHE</h3>
          <p className="bannerContentText">Economize 20% ao gastar mais de R$ 500,00</p>
          <WhiteButtonNavLink to="produtos" onClick={ScrollToTop}>Comprar agora</WhiteButtonNavLink>
        </div>
      </Banner>

      <GeneralSection name="GAMES EM ALTA" products={games} path="games" />

      <Newsletter>
        <img className="newsletterImg" src={NewsletterBackground} />
        <BlackShadow />
        <div className="newsletterContent">
          <h3 className="newsletterContentTitle">Newsletter</h3>
          <p className="newsletterContentText">Assine e receba atualizações sobre novos produtos e ofertas especiais</p>
          <input className="newsletterInput" placeholder="Email" />
          <WhiteButton>Enviar</WhiteButton>
        </div>
      </Newsletter>

    </Container>
  )
}