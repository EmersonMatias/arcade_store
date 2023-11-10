import GeneralPageProducts from "../../components/GeneralPageProducts/GeneralPageProducts";
import useProductsQuery from "../../hooks/useProductsQuery";

export default function Consoles_Page() {
  const { data: products } = useProductsQuery("category=console")

  console.log(products)

  return (
    <GeneralPageProducts title="CONSOLES" products={products} />
  )
}