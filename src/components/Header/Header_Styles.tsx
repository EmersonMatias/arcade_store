import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header<IHeader>`
    width: 100%;
    top: 0;
    height: ${props => props.theme.size.px120};
    padding: 0 ${props => props.theme.size.px120};
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
    gap: ${props => props.theme.size.px16};
    
    .logoIcon{
        font-size: ${props => props.theme.size.px48}
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
