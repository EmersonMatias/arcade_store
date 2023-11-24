import { NavLink } from "react-router-dom";
import styled from "styled-components";

//22.6rem 25rem
export const Container = styled(NavLink)`
    width: 27rem;
    height: 35rem;
    border-radius: 0.25rem;
    transition: 0.8s ;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    color: #FFFFFF;

    .categoryCardImg{
        width: 100%;
        height:  100%;
        object-fit: cover;
        position: absolute;
        transition: 0.8s ;
    }
            
    .categoryCardText{
        z-index: 2;
        transition: 0.8s ;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
    }

    &:hover{
        transition: 0.8s ;

        .categoryCardImg{
            height:  40rem;
            transition: 0.8s ;
        }

        .gradient{
            transition: 0.8s;
            width: 100%;
            height:  100%;
            border-radius: 0.25rem;
            background-color: #000000b7;
            position: absolute;

        }

        .categoryCardText{
            transition: 0.8s;
            font-size: ${props => props.theme.fonts.h4};
        }
                
    }  
    
    
`