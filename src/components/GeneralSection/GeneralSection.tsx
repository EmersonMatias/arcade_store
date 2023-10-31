import Product, { IProduct } from "../Product/Product";
import WhiteButton from "../WhiteButton/WhiteButton";
import { Container } from "./GeneralSection_Styles";
import { AxiosResponse } from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import { H2Section } from "../General_Styles";
import "./navigationStyle.css"

export default function GeneralSection({ name, products }: IGeneralSection) {

    return (
        <Container>
            <div className="bestSellerTop">
                <H2Section>{name}</H2Section>
                <WhiteButton name="Ver tudo" />
            </div>

            <Swiper 
                spaceBetween={40}
                modules={[Navigation, Pagination]}
                loop={true} cssMode={true}
                slidesPerView={3}
                autoplay={{ delay: 1000 }}
                navigation={{ enabled: true }}
            >
                {products?.data.map(({ id, category, name, price, productImage, promotion }) => (
                    <SwiperSlide>
                        <Product
                            id={id}
                            category={category}
                            name={name}
                            price={price.toString()}
                            productImage={productImage}
                            promotion={promotion}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </Container>
    )
}

type IGeneralSection = {
    name: string,
    products: AxiosResponse<IProduct[]> | undefined
}