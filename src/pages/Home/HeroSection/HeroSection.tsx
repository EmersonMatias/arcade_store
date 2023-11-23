import { Container, HeroSectionContent } from "./HeroSection_Styles";
import { Heading1, Heading4Unbold, Heading6Unbold } from "../../../components/Headings/Headings.components";
import { WhiteButton } from "../../../components/Buttons/Buttons.components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import { IProduct } from "../../../components/Product/Product";
import { AxiosResponse } from "axios";
import "swiper/css"
import { viewWidth } from "./function";


type THeroSection = {
    products: AxiosResponse<IProduct[]> | undefined
}

export default function HeroSection({ products }: THeroSection) {
  
    return (
        <Container>
            <HeroSectionContent>
                <Heading1>ARCADE STORE</Heading1>
                <Heading4Unbold>Mais poder ao seu gaming.</Heading4Unbold>
                <Heading6Unbold>
                    Bem-vindo à Arcade, onde os gamers se encontram para desbravar universos digitais.
                
                </Heading6Unbold>
                <WhiteButton
                    style={{ marginTop: "1rem"}}
                    onClick={() => {
                        const getItem = document.getElementById("newsletter")
                        if (getItem) {
                            getItem.scrollIntoView({ behavior: "smooth" })
                        }
                        console.log(getItem)
                    }}>Começar</WhiteButton>
            </HeroSectionContent>
  
        <Swiper
                modules={[Autoplay]}
                loop={true} cssMode={true}
                slidesPerView={viewWidth()}
                style={{ pointerEvents: "none", marginTop: "clamp(2rem , 7vw, 8rem)" }}
                autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: true, stopOnLastSlide: false }}
            >
                {products?.data.map(({ id, category, productImage }) => (
                    <>
                        {category === "game" &&
                            <SwiperSlide
                                key={id}
                                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img style={{ width: "clamp(15rem , 15.65vw, 18.75rem)" }} src={productImage} />
                            </SwiperSlide>
                        }
                    </>
                ))}
            </Swiper>

        </Container>
    )
}