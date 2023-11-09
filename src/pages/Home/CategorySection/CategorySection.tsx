import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import { H2Section } from "../../../components/Generic_Styles";
import { Container } from "./CategorySection_Styles";

export default function CategorySection(){
 
    return(
        <Container>
            <H2Section>VEJA POR CATEGORIA</H2Section>
            
            <div className="categories">
               <CategoryCard name="Periféricos" urlImage="https://img.freepik.com/fotos-gratis/vista-gradiente-da-configuracao-da-mesa-de-jogos-de-neon-iluminada-com-teclado_23-2149529383.jpg" path="perifericos"/>
               <CategoryCard name="Games" urlImage="https://assets.xboxservices.com/assets/36/e3/36e335da-9137-41ca-b8ec-f0847a0e53a6.jpg?n=Console-NewGames-5Blades-FullBleed.jpg" path="games"/>
               <CategoryCard name="Consoles" urlImage="https://media.wired.co.uk/photos/606db76fa329c00890ec0c24/4:3/w_2112,h_1584,c_limit/slice2.jpg" path="consoles"/>
            </div>
        </Container>
    )
}