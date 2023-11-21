import styled from "styled-components";
import Background from "../../../assets/background.svg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: ${props => props.theme.size.px80};
    color: #FFFFFF;
    background-image: url(${Background});
    background-size: cover;
`

export const HeroSectionContent = styled.div`
    text-align: center;
    padding: 0 ${props => props.theme.size.px200};
    margin-top: ${props => props.theme.size.px200};
    margin-bottom: ${props => props.theme.size.px120}; ;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.size.px16};
    align-items: center;
`
