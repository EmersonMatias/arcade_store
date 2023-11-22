import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header<IHeader>`
    width: 100%;
    top: 0;
    height: 7.5rem;
    padding: 0 7.5rem;
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    //background: linear-gradient(180deg, rgba(89,15,98,1) 0%, rgba(38,17,73,1) 100%);
    //background: ${props => props.pathname === "/" ? "linear-gradient(180deg, #250b29 0%, #3b2263 100%)" : "#060506"};
    color: #FFFFFF;
`

export const Logo = styled(NavLink)`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #FFFFFF;
    gap: 1rem;
    
    .logoIcon{
        font-size: 3rem;
    }
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;

`


type IHeader = {
    pathname: string
}
