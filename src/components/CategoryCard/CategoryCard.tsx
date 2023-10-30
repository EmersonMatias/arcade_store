import { Container } from "./CategoryCard_Styles";

export default function CategoryCard({urlImage, name}: ICategoryCard) {
    return (
        <Container>
            <img className="categoryCardImg" src={urlImage}/>
            <div className="gradient"></div>
            <p className="categoryCardText">{name}</p>
        </Container>
    )
}


type ICategoryCard = {
    urlImage: string,
    name: string
}