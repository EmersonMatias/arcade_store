import Product, { IProduct } from "../Product/Product";
import WhiteButton from "../WhiteButton/WhiteButton";
import { Container } from "./GeneralSection_Styles";
import { AxiosResponse } from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import { H2Section } from "../Generic_Styles";
import "./navigationStyle.css"
import { ScrollToTop } from "../../utils/functions";

export default function GeneralSection({ name, products, path }: IGeneralSection) {

    return (
        <Container>
            <div className="bestSellerTop">
                <H2Section>{name}</H2Section>
                <WhiteButton name="Ver tudo" path={path} onClick={ScrollToTop} />
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