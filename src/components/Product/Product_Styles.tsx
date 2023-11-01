import styled from "styled-components";
import BackgoundProduct from "../../assets/background.jpg"
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .productName, .productPrice{
        font-size: 2.4rem;
        margin-top: 1.6rem;
        font-weight: bold;
        text-align: center;
        color: #FFFFFF;
    }
`
 

export const ProductImage = styled.div`
    width: 30rem;
    height: 32rem;
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
        height: 20rem;
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
    margin-bottom: 2.4rem;
`