import GeneralPageProducts from "../../components/GeneralPageProducts/GeneralPageProducts";
import useProductsQuery from "../../hooks/useProductsQuery";

export default function Games_Page(){
    const {data: products} = useProductsQuery("category=game")

    console.log(products)

    return(
        <GeneralPageProducts title="GAMES" products={products}/>
    )
}