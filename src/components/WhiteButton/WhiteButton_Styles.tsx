import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
    font-size: 1.6rem;
    padding: 1.6rem 2.4rem;
    border-radius: 4rem;
    font-weight: bold;
    border: 3px solid #FFFFFF;
    background-color: #FFFFFF;
    color: #8858ED;
    text-align: center;
    text-decoration: none;

    &:hover{
        background-color: #8858ED;
        color: #FFFFFF;
    }
`