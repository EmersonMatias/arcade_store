import Product, { IProduct } from "../Product/Product";
import { Container } from "./GeneralSection_Styles";
import { AxiosResponse } from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import { H2Section } from "../Generic_Styles";
import "./navigationStyle.css"
import { ScrollToTop } from "../../utils/functions";
import { WhiteButtonNavLink } from "../Buttons/Buttons.components";

export default function GeneralSection({ name, products, path }: IGeneralSection) {

    return (
        <Container>
            <div className="bestSellerTop">
                <H2Section>{name}</H2Section>
                <WhiteButtonNavLink to={path} onClick={ScrollToTop}>Ver tudo</WhiteButtonNavLink>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                loop={true} cssMode={true}
                slidesPerView={4}
                navigation={{ enabled: true }}
                spaceBetween={-40}
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