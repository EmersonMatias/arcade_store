import GeneralPageProducts from "../../components/GeneralPageProducts/GeneralPageProducts";
import useProductsQuery from "../../hooks/useProductsQuery";

export default function Peripherals_Page(){
  const {data: products} = useProductsQuery("category=periferico")


    return(
        <GeneralPageProducts title="PERIFÉRICOS" products={products}/>
    )
}