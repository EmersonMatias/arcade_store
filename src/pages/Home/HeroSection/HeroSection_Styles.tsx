import styled from "styled-components";
import Background from "../../../assets/background.svg"

export const Container = styled.div`
    width: 100%;
    height: 100lvh;
    color: #FFFFFF;
    background-image: url(${Background});
    background-size: cover;
`
//12.5rem
export const HeroSectionContent = styled.div`
    text-align: center;
    padding: 0 clamp(0rem, 12vw, 10rem);
    margin-top: clamp(7rem, 10vw, 12.5rem);
    margin-bottom: 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`
