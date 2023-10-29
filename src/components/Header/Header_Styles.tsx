import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 8rem;
    padding: 0 8rem;
    display: flex;
    justify-content: space-between;
    background: rgb(89,15,98);
    background: linear-gradient(180deg, rgba(89,15,98,1) 0%, rgba(38,17,73,1) 100%);
    color: #FFFFFF;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    .iconLogo{
        font-size: 5rem;
    }

    .phraseLogo{
        font-size: 3.2rem;
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
