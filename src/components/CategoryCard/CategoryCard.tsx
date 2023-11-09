import { ScrollToTop } from "../../utils/functions";
import { Container } from "./CategoryCard_Styles";

export default function CategoryCard({ urlImage, name, path}: ICategoryCard) {
    return (
        <Container to={path} onClick={ScrollToTop}>
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