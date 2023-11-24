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
import {Heading3 } from "../Headings/Headings.components";

export default function GeneralSection({ name, products, path }: IGeneralSection) {
    //mobile slidesperview=1

    function aaa(){
        const viewWidth = window.innerWidth
        console.log(viewWidth)
        if(viewWidth < 650){
            return 1
        }else  if(viewWidth < 1100){
            return 2
        }else  if(viewWidth < 1400){
            return 3
        }else{
            return 4
        }


    }

    return (
        <Container>
            <GeneralSectionHeader>
                <Heading3>{name}</Heading3>
                <WhiteButtonNavLink className="marginMobile" to={path} onClick={ScrollToTop}>Ver tudo</WhiteButtonNavLink>
            </GeneralSectionHeader>

            
            <Swiper
                modules={[Navigation, Pagination]}
                loop={true} cssMode={true}
                slidesPerView={aaa()}
                navigation={{ enabled: true }}
                style={{display: "flex"}}
            >
                {products?.data.map(({ id, category, name, price, productImage, promotion }) => (
                    <SwiperSlide key={id} style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}
                    >
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