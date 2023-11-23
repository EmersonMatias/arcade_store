import GeneralSection from "../../../components/GeneralSection/GeneralSection";
import { Container, PromotionImagesContainer, PromotionImage } from "./PromotionSection_Styles";
import { ScrollToTop } from "../../../utils/functions";
import useProductsQuery from "../../../hooks/useProductsQuery";
import { WhiteButtonNavLink } from "../../../components/Buttons/Buttons.components";
import { Heading1, Heading2, Heading3, Heading3Unbold, Heading4Unbold } from "../../../components/Headings/Headings.components";

export default function PromotionSection() {
    const { data: periferico } = useProductsQuery("category=periferico")

    const promotions = [
        {
            top: 0, right: 8, url: "https://store-images.s-microsoft.com/image/apps.57449.14311721322459352.08838dcd-1049-42ef-a004-b13ad1d41946.4eeb1f6f-f279-4d5b-83b0-8fb4cc7f9aea"
        },
        {
            top: 24, right: 32, url: "https://store-images.s-microsoft.com/image/apps.27843.70676690581893559.a37ccc27-65ef-4e47-856a-9fcdd0c1017f.3166464c-271b-42c6-b052-0f1aa9432426"
        },
        {
            top: 8, right: 64, url: "https://store-images.s-microsoft.com/image/apps.63682.14241982748923031.b7ab82d8-956b-4d85-b739-c1cd07cb25df.6e134b4c-c4db-4dc7-bbdd-f736c3d3fd94"
        }
    ]

    return (
        <Container>
            <PromotionImagesContainer>
                {promotions.map(({ top, right, url }) => (
                    <PromotionImage top={top} right={right} key={url} src={url} />
                ))}

                <div className="promotionCard">
                    <Heading3Unbold>A BOA DA SEMANA</Heading3Unbold>

                    <p className="bigFont">10%</p>
                    <Heading2>off em games</Heading2>
                    <WhiteButtonNavLink style={{ marginTop: "1rem" }} to="games" onClick={ScrollToTop}>Comprar agora</WhiteButtonNavLink>
                </div>
            </PromotionImagesContainer>


        </Container>
    )
}