import styled from "styled-components";
import Background from "../../../assets/background.svg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 5rem;
    color: #FFFFFF;
    background-image: url(${Background});
    background-size: cover;
`

export const HeroSectionContent = styled.div`
    text-align: center;
    padding: 0 12.5rem;
    margin-top: 12.5rem;
    margin-bottom: 7.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`
