import { Container } from "./CategoryCard_Styles";

export default function CategoryCard({ urlImage, name, path}: ICategoryCard) {
    return (
        <Container to={path} onClick={() => window.scrollTo(0,0)}>
                <img className="categoryCardImg" src={urlImage} />
                <div className="gradient"></div>
                <p className="categoryCardText">{name}</p>
        </Container>
    )
}


type ICategoryCard = {
    urlImage: string,
    name: string,
    path: string
}