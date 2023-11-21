import GeneralPageProducts from "../../components/GeneralPageProducts/GeneralPageProducts";
import useProductsQuery from "../../hooks/useProductsQuery";

export default function Games_Page(){
    const {data: products} = useProductsQuery("category=game")

    function largura() {
        const larguraTela = window.innerWidth;
        const alturadaTela = window.innerHeight;
        //923
        console.log("A largura da sua tela é: " + larguraTela + " pixels");
        console.log("A largura da sua tela é: " + alturadaTela + " pixels");
      }
      largura()
    console.log(products)

    return(
        <GeneralPageProducts title="GAMES" products={products}/>
    )
}