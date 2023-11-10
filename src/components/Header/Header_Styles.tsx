import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header<IHeader>`
    width: 100%;
    height: 12rem;
    padding: 0 12rem;
    display: flex;
    position: absolute;
    top: 0;
    justify-content: space-between;
    //background: linear-gradient(180deg, rgba(89,15,98,1) 0%, rgba(38,17,73,1) 100%);
    background: ${props => props.pathname === "/" ? "linear-gradient(180deg, #3d1d42 0%, #3b2263 100%)" : "#060506"};

    color: #FFFFFF;
`

export const Logo = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #FFFFFF;


    .iconLogo{
        font-size: 4.8rem;
    }

    .phraseLogo{
        font-size: 2.2rem;
        font-weight: bold;
        margin-left: 1.6rem;
    }
`

export const NavBar = styled.div`
    display: flex;
    align-items: center;

    .iconCart{
        cursor: pointer;
        font-size: 4rem;
        margin-left: 2.4rem;
    }
`


type IHeader = {
    pathname: string
}
