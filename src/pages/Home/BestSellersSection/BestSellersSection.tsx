import { useQuery } from "@tanstack/react-query";
import Product, { IProduct } from "../../../components/Product/Product";
import WhiteButton from "../../../components/WhiteButton/WhiteButton";
import { Container } from "./BestSellers_Styles";
import axios from "axios";
import { AxiosResponse } from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle"
import {H2Section} from "../../../components/General_Styles";


export default function BestSellers() {
    const { data: products } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response: AxiosResponse<IProduct[]> = (await axios.get("http://localhost:4000/products"))
            return response
        }
    })

    console.log(products)
    return (
        <Container>
            <div className="bestSellerTop">
                <H2Section>MAIS VENDIDOS</H2Section>
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