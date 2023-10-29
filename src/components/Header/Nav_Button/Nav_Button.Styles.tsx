import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(NavLink)`
    font-size: 2.4rem;
    background-color: rgb(0,0,0,0);
    margin: 0 0.8rem;
    display: flex;
    color: #FFFFFF;
    font-weight: bold;
    border: none;
    text-decoration: none;

   .iconLogin{
        margin-left: 1.6rem;
        margin-right: 0.8rem;
   }

    &:hover{
        color: #baa6e5;
    }
        
    
`