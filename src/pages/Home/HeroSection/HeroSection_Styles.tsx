import styled from "styled-components";
import Background from "../../../assets/background.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: ${props => props.theme.size.px80};
    color: #FFFFFF;
    background-image: url(${Background});
    background-size: cover;
`

export const PromotionCard = styled.div`
    width: ${props => props.theme.size.px700};
    border-radius: ${props => props.theme.size.px24};
    top: ${props => props.theme.size.px200};
    left:${props => props.theme.size.px160};
    padding: ${props => props.theme.size.px48} ${props => props.theme.size.px48};
    position: absolute;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    border:1px solid rgba(255, 255, 255, 0.18);
    box-shadow: rgb(16, 1, 14) 0px 20px 30px;
`

export const GameCover = styled.div`
    position: absolute;
    right: ${props => props.theme.size.px160};
    top: ${props => props.theme.size.px200};

    img{
        border-radius:${props => props.theme.size.px40};
        width: ${props => props.theme.size.px680};
        height: ${props => props.theme.size.px820};
    }
`