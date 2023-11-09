import styled from "styled-components";
import Background from "../../../assets/background.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 8rem;
    color: #FFFFFF;
    background-image: url(${Background});
    background-size: cover;

    .promotionCard{
        width: 70rem;
        border-radius: 2.4rem;
        top: 20rem;
        left: 16rem;
        padding: 4.8rem 4.8rem;
        position: absolute;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 20px;
        border:1px solid rgba(255, 255, 255, 0.18);
        box-shadow: rgb(16, 1, 14) 0px 20px 30px;

        .commomPhrase{
            font-size: 4rem;
            margin-bottom: 3.2rem;
        }

        .gameTitle{
            font-size: 8rem;
            margin-bottom: 1.6rem;
            font-weight: bold;
        }

        .streamings{
            font-size: 3.2rem;
            margin-bottom: 3.2rem;
        }
    }

    .gameCover{
        position: absolute;
        right: 16rem;
        top: 20rem;
        
        img{
            border-radius: 4rem;
            width: 68rem;
            height: 82rem;
        }
    }
`