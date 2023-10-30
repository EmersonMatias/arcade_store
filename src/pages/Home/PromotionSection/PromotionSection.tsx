import { useQuery } from "@tanstack/react-query";
import GeneralSection from "../../../components/GeneralSection/GeneralSection";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import { Container, PromotionContainer, PromotionImgContainer } from "./PromotionSection_Styles";
import { IProduct } from "../../../components/Product/Product";
import axios, { AxiosResponse } from "axios";

export default function PromotionSection() {
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response: AxiosResponse<IProduct[]> = (await axios.get("http://localhost:4000/products"))
            return response
        }
    })
    
    const promotions = [
        {
            top: 16, right: 8, url: "https://store-images.s-microsoft.com/image/apps.57449.14311721322459352.08838dcd-1049-42ef-a004-b13ad1d41946.4eeb1f6f-f279-4d5b-83b0-8fb4cc7f9aea"
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
            <PromotionContainer>
                {promotions.map(({top,right,url}) => (
                    <PromotionImgContainer top={top} right={right}>
                        <img className="promotionImg" src={url}/>
                    </PromotionImgContainer>
                ))}

                <div className="promotionCard">
                    <p className="commomPhrase">A BOA DA SEMANA</p>
                    <p className="gameTitle"><span className="gameTitle1">10%</span><br /> off em games</p>
                    <WhiteButton name="Comprar agora" />
                </div>
            </PromotionContainer>

            <GeneralSection name="DÊ UM UPGRADE NO SEU SETUP" products={products}/>
        </Container>
    )
}