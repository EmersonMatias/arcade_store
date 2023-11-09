import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    font-size: 1.6rem;
    margin: 0 0.8rem;
    display: flex;
    color: #FFFFFF;
    font-weight: 400;
    border: none;
    flex-direction: column;
    position: relative;

   .iconLogin{
        margin-left: 1.6rem;
        margin-right: 0.8rem;
   }

   .conta{
        display: flex;
   }

`

export const StyledNavLink = styled(NavLink)`
    color: #FFFFFF;
    text-decoration: none;
  
    

    &:hover{
        color: #baa6e5;
    }
`

export const PoppoverContainer = styled.div`
    font-weight: 100;
    padding: 1.6rem;
    width: 18rem;
    top: 150%;
    right: 0;
    z-index: 3;
    border-radius: 0.8rem;
    background-color: #000000;
    position: absolute;
    display: flex;
    flex-direction: column;

    .poppoverParagraph{
        margin-bottom: 1.6rem;
    }
`