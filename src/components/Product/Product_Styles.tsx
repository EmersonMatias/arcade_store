import styled from "styled-components";
import BackgoundProduct from "../../assets/background.jpg"
import { NavLink } from "react-router-dom";

export const Container = styled.div<TProductComponent>`
    width: ${props => props.size === "normal" ? "43rem" : "20rem"};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .productName, .productPrice{
        font-size: ${props => props.theme.fonts.h5};
        font-weight: bold;
        width: 100%;
        text-align: center;
        color: #FFFFFF;
        text-overflow: ellipsis;
    }

  

    .productName{
        max-height: 10rem;
        min-height: 10rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

  

  
`
 

export const ProductImageBackground = styled.div<TProductComponent>`
    width: ${props => props.size === "normal" ? "30rem" : "20rem"};
    height:  ${props => props.size === "normal" ? "35rem" : "25rem"};
    border-radius: 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BackgoundProduct});
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    img{
        height:  ${props => props.size === "normal" ? "25rem" : "15rem"};
        -webkit-box-reflect:below 0px linear-gradient(rgba(0, 0, 0,0), rgba(0, 0, 0,0.3));
    }

    &:hover{
        img{
            transform: scale(1.3);
        }
    }
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    text-align: center;
    margin-bottom: 2.4rem;
`

type TProductComponent = {
    size: "small" | "normal"
}