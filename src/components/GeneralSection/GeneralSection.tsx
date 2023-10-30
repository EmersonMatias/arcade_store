import Product, { IProduct } from "../Product/Product";
import WhiteButton from "../WhiteButton/WhiteButton";
import { Container } from "./GeneralSection_Styles";
import { AxiosResponse } from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle"
import {H2Section} from "../General_Styles";


export default function GeneralSection({name, products}: IGeneralSection) {
  
    return (
        <Container>
            <div className="bestSellerTop">
                <H2Section>{name}</H2Section>
                <WhiteButton name="Ver tudo" />
            </div>

            <Swiper spaceBetween={40} modules={[Navigation]} rewind={true} slidesPerView={3} navigation={{ enabled: true }} >
                {products?.data.map(({ id, category, name, price, productImage, promotion }) => (
                    <SwiperSlide>
                        <Product id={id} category={category} name={name} price={price.toString()} productImage={productImage} promotion={promotion} />
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