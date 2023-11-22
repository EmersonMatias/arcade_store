import Product, { IProduct } from "../Product/Product";
import { Container, GeneralSectionHeader } from "./GeneralSection_Styles";
import { AxiosResponse } from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import "./navigationStyle.css"
import { ScrollToTop } from "../../utils/functions";
import { WhiteButtonNavLink } from "../Buttons/Buttons.components";
import { Heading2 } from "../Headings/Headings.components";

export default function GeneralSection({ name, products, path }: IGeneralSection) {

    return (
        <Container>
            <GeneralSectionHeader>
                <Heading2>{name}</Heading2>
                <WhiteButtonNavLink to={path} onClick={ScrollToTop}>Ver tudo</WhiteButtonNavLink>
            </GeneralSectionHeader>

            <Swiper
                modules={[Navigation, Pagination]}
                loop={true} cssMode={true}
                slidesPerView={4}
                centeredSlides={true}
                navigation={{ enabled: true }}
            >
                {products?.data.map(({ id, category, name, price, productImage, promotion }) => (
                    <SwiperSlide key={id}>
                        <Product
                            id={id}
                            category={category}
                            name={name}
                            price={price.toString()}
                            productImage={productImage}
                            promotion={promotion}
                            size="small"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </Container>
    )
}

type IGeneralSection = {
    name: string,
    products: AxiosResponse<IProduct[]> | undefined,
    path: string
}