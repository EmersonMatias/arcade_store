import { ScrollToTop } from "../../utils/functions";
import { Heading5 } from "../Headings/Headings.components";
import { Container } from "./CategoryCard_Styles";

export default function CategoryCard({ urlImage, name, path}: ICategoryCard) {
    return (
        <Container to={path} onClick={ScrollToTop}>
                <img className="categoryCardImg" src={urlImage} />
                <div className="gradient"></div>
                <Heading5 className="categoryCardText">{name}</Heading5>
        </Container>
    )
}


type ICategoryCard = {
    urlImage: string,
    name: string,
    path: string
}