import GeneralPageProducts from "../../components/GeneralPageProducts/GeneralPageProducts";
import useProductsQuery from "../../hooks/useProductsQuery";

export default function Promotions_Page(){
  const {data: products} = useProductsQuery("promotion=true")
    return(
        <GeneralPageProducts title="PROMOÇÕES" products={products}/>
    )
}