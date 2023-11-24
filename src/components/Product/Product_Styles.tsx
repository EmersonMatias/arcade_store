import styled from "styled-components";
import BackgoundProduct from "../../assets/background.jpg"
import { NavLink } from "react-router-dom";



export const Container = styled.div<TProductComponent>`
    width: clamp(13.5rem, 15vw ,18rem);
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
 /*
  padding: 2rem 2.5rem;
  width:  8rem;
   transform: scale(1.15);
 */

export const ProductImageBackground = styled.div<TProductComponent>`
    padding: clamp(3rem,3.33vw,4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${BackgoundProduct});
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;

    img{
        width: clamp(9rem, 8.333vw ,10rem );
        -webkit-box-reflect:below 0px linear-gradient(rgba(0, 0, 0,0), rgba(0, 0, 0,0.3));
    }

    &:hover{
        img{
            transform: scale(1.25);
        }
    }

    @media screen and (max-width: 600px) {
        &:hover{
            img{
                transform: scale(1.12);
            }
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