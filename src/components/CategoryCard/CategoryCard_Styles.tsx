import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
    width: 21.875rem;
    height:  31.25rem;
    border-radius: 0.25rem;
    transition: 0.8s ;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-decoration: none;

    .categoryCardImg{
        width: 21.875rem;
        height:  31.25;
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
            height:  43.75rem;

            transition: 0.8s ;
        }

        .gradient{
            transition: 0.8s;
            width: 21.875;
            height: 31.25rem;
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