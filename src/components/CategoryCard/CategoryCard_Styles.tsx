import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
    width: ${props => props.theme.size.px350};
    height:  ${props => props.theme.size.px500};
    border-radius: ${props => props.theme.size.px4};
    transition: 0.8s ;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-decoration: none;

    .categoryCardImg{
        width: ${props => props.theme.size.px350};
        height:  ${props => props.theme.size.px500};
        object-fit: cover;
        position: absolute;
        transition: 0.8s ;
    }
            
    .categoryCardText{
        z-index: 2;
  
    }

    &:hover{
        transition: 0.8s ;

        .categoryCardImg{
            height:  ${props => props.theme.size.px700};

            transition: 0.8s ;
        }

        .gradient{
            transition: 0.8s;
            width: ${props => props.theme.size.px350};
            height: ${props => props.theme.size.px500};
            border-radius: ${props => props.theme.size.px4};
            background-color: #000000b7;
            position: absolute;
        }

        .categoryCardText{
            transition: 0.8s;
            font-size: ${props => props.theme.fonts.h4};
        }
                
    }    
`