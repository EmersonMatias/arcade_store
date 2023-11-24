import styled from "styled-components";
import Background from "../../../assets/background.svg"

export const Container = styled.div`
    width: 100%;
    height: 100dvh;
    color: #FFFFFF;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    margin-bottom: clamp(7rem, 8.33vw, 10rem);
`
//12.5rem
export const HeroSectionContent = styled.div`
    text-align: center;
    padding: 0 clamp(0rem, 12vw, 10rem);
    margin-top: clamp(6rem, 15vw, 18rem);
    margin-bottom: 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`
